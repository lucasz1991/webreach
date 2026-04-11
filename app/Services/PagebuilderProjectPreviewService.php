<?php

namespace App\Services;

use App\Models\PagebuilderProject;
use Illuminate\Support\Facades\File as FileFacade;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Symfony\Component\Process\Process;

class PagebuilderProjectPreviewService
{
    private const VIEWPORTS = [
        // Typical CSS viewport sizes for a laptop, a modern tablet, and a current smartphone.
        'desktop' => ['width' => 1440, 'height' => 900],
        'tablet' => ['width' => 834, 'height' => 1194],
        'mobile' => ['width' => 393, 'height' => 852],
    ];

    public function generate(PagebuilderProject $project, ?string $baseUrl = null): array
    {
        $baseUrl = rtrim((string) ($baseUrl ?: config('app.url')), '/');
        if ($baseUrl === '') {
            throw new \RuntimeException('Keine Base-URL für die Preview-Erzeugung verfügbar.');
        }

        $scriptPath = base_path('scripts/pagebuilder-preview-render.mjs');
        if (!is_file($scriptPath)) {
            throw new \RuntimeException('Preview-Renderer-Skript wurde nicht gefunden.');
        }

        $runtimeTempDir = storage_path('app/tmp/puppeteer');
        FileFacade::ensureDirectoryExists($runtimeTempDir);

        $tempDir = storage_path('app/tmp/pagebuilder-previews/' . Str::uuid());
        FileFacade::ensureDirectoryExists($tempDir);

        try {
            $jobs = [];

            foreach (self::VIEWPORTS as $device => $viewport) {
                $htmlPath = $tempDir . DIRECTORY_SEPARATOR . $device . '.html';
                FileFacade::put($htmlPath, $this->buildPreviewDocumentHtml($project, $device, $baseUrl));

                $jobs[] = [
                    'device' => $device,
                    'htmlPath' => $htmlPath,
                    'width' => $viewport['width'],
                    'height' => $viewport['height'],
                    'outputPath' => $tempDir . DIRECTORY_SEPARATOR . $device . '.png',
                ];
            }

            $process = new Process(
                [$this->resolveNodeBinary(), $scriptPath, json_encode($jobs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR)],
                base_path(),
                $this->buildProcessEnvironment($runtimeTempDir),
                null,
                180
            );

            $process->mustRun();

            $result = json_decode(trim($process->getOutput()), true);
            if (!is_array($result) || !($result['ok'] ?? false)) {
                throw new \RuntimeException('Preview-Renderer hat keine gültige Antwort geliefert.');
            }

            foreach (array_keys(self::VIEWPORTS) as $device) {
                $outputPath = $tempDir . DIRECTORY_SEPARATOR . $device . '.png';

                if (!is_file($outputPath)) {
                    Log::warning('Preview-Datei fehlt nach Renderer-Lauf', [
                        'project_id' => $project->getKey(),
                        'device' => $device,
                        'output_path' => $outputPath,
                    ]);
                    continue;
                }

                $binary = file_get_contents($outputPath);
                if ($binary === false || $binary === '') {
                    Log::warning('Preview-Datei konnte nicht gelesen werden', [
                        'project_id' => $project->getKey(),
                        'device' => $device,
                        'output_path' => $outputPath,
                    ]);
                    continue;
                }

                $project->storePreviewBinary($device, $binary, 'image/png');
            }

            return $project->fresh()->preview_urls;
        } finally {
            FileFacade::deleteDirectory($tempDir);
        }
    }

    private function resolveNodeBinary(): string
    {
        $candidates = array_filter([
            env('PAGEBUILDER_NODE_BINARY'),
            'node',
            'C:\\Program Files\\nodejs\\node.exe',
            'C:\\Program Files (x86)\\nodejs\\node.exe',
        ]);

        foreach ($candidates as $candidate) {
            if ($candidate === 'node') {
                try {
                    $process = new Process([$candidate, '--version'], base_path(), null, null, 10);
                    $process->mustRun();

                    return $candidate;
                } catch (\Throwable $e) {
                    continue;
                }
            }

            if (is_file($candidate)) {
                return $candidate;
            }
        }

        throw new \RuntimeException(
            'Node.js wurde für die Preview-Erzeugung nicht gefunden. Setze PAGEBUILDER_NODE_BINARY in der .env, z. B. auf C:\\Program Files\\nodejs\\node.exe'
        );
    }

    private function buildProcessEnvironment(string $runtimeTempDir): array
    {
        $nodeBinary = $this->resolveNodeBinary();
        $nodeDir = $nodeBinary === 'node' ? null : dirname($nodeBinary);
        $windowsDir = getenv('WINDIR') ?: getenv('SystemRoot') ?: 'C:\\Windows';
        $system32Dir = $windowsDir . '\\System32';

        $existingPath = (string) (getenv('PATH') ?: ($_SERVER['PATH'] ?? $_ENV['PATH'] ?? ''));
        $pathSegments = array_filter([
            $nodeDir,
            $system32Dir,
            $windowsDir,
            $system32Dir . '\\Wbem',
            $system32Dir . '\\WindowsPowerShell\\v1.0',
            $existingPath,
        ]);

        $homeDir = getenv('USERPROFILE') ?: ($_SERVER['USERPROFILE'] ?? $_ENV['USERPROFILE'] ?? storage_path('app/tmp/puppeteer-home'));
        FileFacade::ensureDirectoryExists($homeDir);
        FileFacade::ensureDirectoryExists($runtimeTempDir);

        return array_filter([
            'PATH' => implode(PATH_SEPARATOR, $pathSegments),
            'TEMP' => $runtimeTempDir,
            'TMP' => $runtimeTempDir,
            'TMPDIR' => $runtimeTempDir,
            'HOME' => $homeDir,
            'USERPROFILE' => $homeDir,
            'LOCALAPPDATA' => getenv('LOCALAPPDATA') ?: ($_SERVER['LOCALAPPDATA'] ?? $_ENV['LOCALAPPDATA'] ?? $runtimeTempDir),
            'APPDATA' => getenv('APPDATA') ?: ($_SERVER['APPDATA'] ?? $_ENV['APPDATA'] ?? $runtimeTempDir),
            'SystemRoot' => $windowsDir,
            'WINDIR' => $windowsDir,
            'ComSpec' => getenv('ComSpec') ?: ($_SERVER['ComSpec'] ?? $_ENV['ComSpec'] ?? ($system32Dir . '\\cmd.exe')),
        ], static fn ($value) => is_string($value) && $value !== '');
    }

    private function buildPreviewDocumentHtml(PagebuilderProject $project, string $device, string $baseUrl): string
    {
        $lang = htmlspecialchars(str_replace('_', '-', app()->getLocale()), ENT_QUOTES, 'UTF-8');
        $title = htmlspecialchars((string) ($project->name ?: 'Pagebuilder Preview'), ENT_QUOTES, 'UTF-8');
        $deviceAttr = htmlspecialchars($device, ENT_QUOTES, 'UTF-8');
        $baseHref = htmlspecialchars(rtrim($baseUrl, '/') . '/', ENT_QUOTES, 'UTF-8');
        $tailwindCss = $this->loadPublicAsset('adminresources/css/tailwind.min.css');
        $swiperCss = $this->loadPublicAsset('adminresources/css/swiper-bundle.min.css');
        $swiperJs = $this->loadPublicAsset('adminresources/js/swiper-bundle.min.js');
        $projectCss = (string) ($project->css ?? '');
        $projectJs = (string) ($project->js ?? '');
        $projectMarkup = $this->resolveProjectMarkup($project, $baseUrl);

        return <<<HTML
<!DOCTYPE html>
<html lang="{$lang}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="{$baseHref}">
    <title>{$title}</title>
    <style>
        html, body {
            margin: 0;
            padding: 0;
            background: #ffffff;
        }

        body {
            min-height: 100vh;
        }

        img {
            max-width: 100%;
        }
    </style>
    <style>{$tailwindCss}</style>
    <style>{$swiperCss}</style>
    <style>{$projectCss}</style>
</head>
<body data-preview-device="{$deviceAttr}">
{$projectMarkup}
<script>{$swiperJs}</script>
<script>{$projectJs}</script>
</body>
</html>
HTML;
    }

    private function resolveProjectMarkup(PagebuilderProject $project, string $baseUrl): string
    {
        $markup = (string) ($project->cleaned_html ?: $project->html ?: '');
        $markup = preg_replace('/<style\b[^>]*>.*?<\/style>/is', '', $markup) ?: $markup;
        $markup = preg_replace_callback(
            '/\b(src|href|poster)=([\'"])(\/[^\'"]*)\2/i',
            static fn (array $matches) => $matches[1] . '=' . $matches[2] . rtrim($baseUrl, '/') . $matches[3] . $matches[2],
            $markup
        ) ?: $markup;

        return $markup;
    }

    private function loadPublicAsset(string $relativePath): string
    {
        $fullPath = public_path(str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $relativePath));

        if (!is_file($fullPath)) {
            return '';
        }

        $contents = FileFacade::get($fullPath);

        return is_string($contents) ? $contents : '';
    }
}
