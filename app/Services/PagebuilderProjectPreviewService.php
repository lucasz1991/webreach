<?php

namespace App\Services;

use App\Models\PagebuilderProject;
use Illuminate\Support\Facades\File as FileFacade;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Symfony\Component\Process\ExecutableFinder;
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

            $nodeBinary = $this->resolveNodeBinary();

            $process = new Process(
                [$nodeBinary, $scriptPath, json_encode($jobs, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR)],
                base_path(),
                $this->buildProcessEnvironment($runtimeTempDir, $nodeBinary),
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
        $configuredBinary = trim((string) env('PAGEBUILDER_NODE_BINARY', ''));
        $finder = new ExecutableFinder();

        if ($configuredBinary !== '') {
            $resolvedConfiguredBinary = $this->resolveBinaryCandidate($configuredBinary, $finder);
            if ($resolvedConfiguredBinary !== null) {
                return $resolvedConfiguredBinary;
            }

            throw new \RuntimeException(sprintf(
                'Node.js wurde für die Preview-Erzeugung nicht gefunden. Der konfigurierte Wert "%s" aus PAGEBUILDER_NODE_BINARY konnte nicht verwendet werden.',
                $configuredBinary
            ));
        }

        foreach ($this->nodeBinaryCandidates() as $candidate) {
            $resolvedBinary = $this->resolveBinaryCandidate($candidate, $finder);
            if ($resolvedBinary !== null) {
                return $resolvedBinary;
            }
        }

        throw new \RuntimeException(sprintf(
            'Node.js wurde für die Preview-Erzeugung nicht gefunden. Installiere Node.js oder setze PAGEBUILDER_NODE_BINARY in der .env, z. B. auf %s',
            $this->exampleNodeBinaryPath()
        ));
    }

    private function buildProcessEnvironment(string $runtimeTempDir, string $nodeBinary): array
    {
        $existingPath = (string) (getenv('PATH') ?: ($_SERVER['PATH'] ?? $_ENV['PATH'] ?? ''));
        $pathSegments = array_filter([
            $this->resolveBinaryDirectory($nodeBinary),
            $existingPath,
        ]);

        $homeDir = $this->resolveHomeDirectory($runtimeTempDir);
        FileFacade::ensureDirectoryExists($homeDir);
        FileFacade::ensureDirectoryExists($runtimeTempDir);

        $environment = [
            'PATH' => implode(PATH_SEPARATOR, $pathSegments),
            'TMPDIR' => $runtimeTempDir,
            'HOME' => $homeDir,
            'TEMP' => $runtimeTempDir,
            'TMP' => $runtimeTempDir,
        ];

        if ($this->runningOnWindows()) {
            $windowsDir = getenv('WINDIR') ?: getenv('SystemRoot') ?: 'C:\\Windows';
            $system32Dir = $windowsDir . '\\System32';

            $environment['PATH'] = implode(PATH_SEPARATOR, array_filter([
                $this->resolveBinaryDirectory($nodeBinary),
                $system32Dir,
                $windowsDir,
                $system32Dir . '\\Wbem',
                $system32Dir . '\\WindowsPowerShell\\v1.0',
                $existingPath,
            ]));
            $environment['USERPROFILE'] = $homeDir;
            $environment['LOCALAPPDATA'] = getenv('LOCALAPPDATA') ?: ($_SERVER['LOCALAPPDATA'] ?? $_ENV['LOCALAPPDATA'] ?? $runtimeTempDir);
            $environment['APPDATA'] = getenv('APPDATA') ?: ($_SERVER['APPDATA'] ?? $_ENV['APPDATA'] ?? $runtimeTempDir);
            $environment['SystemRoot'] = $windowsDir;
            $environment['WINDIR'] = $windowsDir;
            $environment['ComSpec'] = getenv('ComSpec') ?: ($_SERVER['ComSpec'] ?? $_ENV['ComSpec'] ?? ($system32Dir . '\\cmd.exe'));
        }

        return array_filter($environment, static fn ($value) => is_string($value) && $value !== '');
    }

    private function nodeBinaryCandidates(): array
    {
        $candidates = ['node'];

        if ($this->runningOnWindows()) {
            $candidates[] = 'C:\\Program Files\\nodejs\\node.exe';
            $candidates[] = 'C:\\Program Files (x86)\\nodejs\\node.exe';
        } else {
            $candidates[] = '/usr/bin/node';
            $candidates[] = '/usr/local/bin/node';
            $candidates[] = '/opt/homebrew/bin/node';
        }

        return array_values(array_unique(array_filter($candidates)));
    }

    private function resolveBinaryCandidate(string $candidate, ExecutableFinder $finder): ?string
    {
        $candidate = trim($candidate);
        if ($candidate === '') {
            return null;
        }

        if ($this->isBinaryUsable($candidate)) {
            return $candidate;
        }

        $resolvedCandidate = $finder->find($candidate);
        if (is_string($resolvedCandidate) && $resolvedCandidate !== '' && $this->isBinaryUsable($resolvedCandidate)) {
            return $resolvedCandidate;
        }

        return null;
    }

    private function isBinaryUsable(string $binary): bool
    {
        try {
            $process = new Process([$binary, '--version'], base_path(), null, null, 10);
            $process->mustRun();

            return true;
        } catch (\Throwable $e) {
            return false;
        }
    }

    private function resolveBinaryDirectory(string $binary): ?string
    {
        if (!str_contains($binary, '/') && !str_contains($binary, '\\')) {
            return null;
        }

        $directory = dirname($binary);

        return is_dir($directory) ? $directory : null;
    }

    private function resolveHomeDirectory(string $runtimeTempDir): string
    {
        $homeDir = getenv('HOME') ?: ($_SERVER['HOME'] ?? $_ENV['HOME'] ?? null);
        if (is_string($homeDir) && $homeDir !== '') {
            return $homeDir;
        }

        if ($this->runningOnWindows()) {
            $homeDir = getenv('USERPROFILE') ?: ($_SERVER['USERPROFILE'] ?? $_ENV['USERPROFILE'] ?? null);
            if (is_string($homeDir) && $homeDir !== '') {
                return $homeDir;
            }
        }

        return storage_path('app/tmp/puppeteer-home');
    }

    private function exampleNodeBinaryPath(): string
    {
        return $this->runningOnWindows()
            ? 'C:\\Program Files\\nodejs\\node.exe'
            : '/usr/bin/node';
    }

    private function runningOnWindows(): bool
    {
        return PHP_OS_FAMILY === 'Windows';
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
