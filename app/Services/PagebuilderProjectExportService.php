<?php

namespace App\Services;

use App\Models\PagebuilderProject;
use App\Models\WebPage;
use App\Services\WebPages\CurrentPageService;
use DOMDocument;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use RuntimeException;
use ZipArchive;

class PagebuilderProjectExportService
{
    private const PAGE_LAYOUT_POSITIONS = [
        'top_banner',
        'banner',
        'bottom_banner',
        'page',
        'above_content',
        'content',
        'footer',
    ];

    public function export(PagebuilderProject $project, array $options = []): array
    {
        if (!class_exists(ZipArchive::class)) {
            throw new RuntimeException('Die PHP-Erweiterung ZipArchive ist nicht verfuegbar.');
        }

        $page = WebPage::query()->where('pagebuilder_project', $project->id)->first();
        $options = $this->normalizeOptions($project, $page, $options);

        $workspace = storage_path('app/pagebuilder-exports/build-' . Str::uuid());
        $bundleRoot = $workspace . DIRECTORY_SEPARATOR . $options['bundle_slug'];
        $zipPath = storage_path('app/pagebuilder-exports/' . $options['download_name']);

        File::ensureDirectoryExists($bundleRoot);
        File::ensureDirectoryExists(dirname($zipPath));

        if (File::exists($zipPath)) {
            File::delete($zipPath);
        }

        $assetState = [
            'site_root' => $bundleRoot,
            'copied' => [],
        ];

        $this->ensureCoreAssets($bundleRoot);

        $document = $this->buildDocument($project, $page, $options, $assetState);

        $this->writeFile($bundleRoot . DIRECTORY_SEPARATOR . 'index.php', $document['index_php']);
        $this->writeFile($bundleRoot . DIRECTORY_SEPARATOR . 'assets/css/site.css', $document['site_css']);
        $this->writeFile($bundleRoot . DIRECTORY_SEPARATOR . 'assets/js/site.js', $document['site_js']);

        if ($options['include_htaccess']) {
            $this->writeFile($bundleRoot . DIRECTORY_SEPARATOR . '.htaccess', $this->renderRootHtaccess());
        }

        if ($document['favicon_svg'] !== null) {
            $this->writeFile($bundleRoot . DIRECTORY_SEPARATOR . 'assets/favicon.svg', $document['favicon_svg']);
        }

        if ($options['include_project_json']) {
            $this->writeFile($bundleRoot . DIRECTORY_SEPARATOR . 'project.json', $this->renderProjectJson($project));
        }

        if ($options['include_readme']) {
            $this->writeFile(
                $bundleRoot . DIRECTORY_SEPARATOR . 'README.txt',
                $this->renderReadme($project, $page, $options)
            );
        }

        if ($options['include_api_bridge']) {
            $this->writeFile(
                $bundleRoot . DIRECTORY_SEPARATOR . 'assets/js/webreach-api.js',
                $this->renderApiBridgeJs($options)
            );

            if ($options['include_api_proxy']) {
                $this->writeFile(
                    $bundleRoot . DIRECTORY_SEPARATOR . 'config/webreach.php',
                    $this->renderApiConfig($options)
                );
                $this->writeFile(
                    $bundleRoot . DIRECTORY_SEPARATOR . 'api/index.php',
                    $this->renderApiProxyPhp()
                );
                $this->writeFile(
                    $bundleRoot . DIRECTORY_SEPARATOR . 'api/.htaccess',
                    $this->renderApiHtaccess()
                );
            }
        }

        $this->zipDirectory($bundleRoot, $zipPath, $options['bundle_slug']);
        File::deleteDirectory($workspace);

        return [
            'zip_path' => $zipPath,
            'download_name' => $options['download_name'],
        ];
    }

    public function exportWebsite(array $options = []): array
    {
        if (!class_exists(ZipArchive::class)) {
            throw new RuntimeException('Die PHP-Erweiterung ZipArchive ist nicht verfuegbar.');
        }

        $pages = $this->resolveWebsitePages((bool) ($options['published_only'] ?? true));
        if ($pages->isEmpty()) {
            throw new RuntimeException('Es sind keine exportierbaren Seiten vorhanden.');
        }

        $options = $this->normalizeWebsiteOptions($pages, $options);
        $workspace = storage_path('app/pagebuilder-exports/build-' . Str::uuid());
        $bundleRoot = $workspace . DIRECTORY_SEPARATOR . $options['bundle_slug'];
        $zipPath = storage_path('app/pagebuilder-exports/' . $options['download_name']);

        File::ensureDirectoryExists($bundleRoot);
        File::ensureDirectoryExists(dirname($zipPath));

        if (File::exists($zipPath)) {
            File::delete($zipPath);
        }

        $assetState = [
            'site_root' => $bundleRoot,
            'copied' => [],
        ];

        $this->ensureCoreAssets($bundleRoot);

        if ($options['include_api_bridge']) {
            $this->writeFile(
                $bundleRoot . DIRECTORY_SEPARATOR . 'assets/js/webreach-api.js',
                $this->renderApiBridgeJs($options)
            );

            if ($options['include_api_proxy']) {
                $this->writeFile(
                    $bundleRoot . DIRECTORY_SEPARATOR . 'config/webreach.php',
                    $this->renderApiConfig($options)
                );
                $this->writeFile(
                    $bundleRoot . DIRECTORY_SEPARATOR . 'api/index.php',
                    $this->renderApiProxyPhp()
                );
                $this->writeFile(
                    $bundleRoot . DIRECTORY_SEPARATOR . 'api/.htaccess',
                    $this->renderApiHtaccess()
                );
            }
        }

        $homePage = $this->resolveWebsiteHomePage($pages);
        $pageManifest = [];

        foreach ($pages as $page) {
            $entry = $this->buildWebsitePageEntry($page, $page->is($homePage), $options, $assetState);
            $pageManifest[$entry['slug']] = $entry['manifest'];
        }

        $this->writeFile(
            $bundleRoot . DIRECTORY_SEPARATOR . 'config/site.php',
            $this->renderWebsiteConfig($pageManifest, $homePage->slug, $options)
        );
        $this->writeFile(
            $bundleRoot . DIRECTORY_SEPARATOR . 'index.php',
            $this->renderWebsiteIndexPhp($options)
        );

        if ($options['include_htaccess']) {
            $this->writeFile($bundleRoot . DIRECTORY_SEPARATOR . '.htaccess', $this->renderRootHtaccess());
        }

        if ($options['include_readme']) {
            $this->writeFile(
                $bundleRoot . DIRECTORY_SEPARATOR . 'README.txt',
                $this->renderWebsiteReadme($pages, $homePage, $options)
            );
        }

        $this->zipDirectory($bundleRoot, $zipPath, $options['bundle_slug']);
        File::deleteDirectory($workspace);

        return [
            'zip_path' => $zipPath,
            'download_name' => $options['download_name'],
        ];
    }

    private function normalizeOptions(PagebuilderProject $project, ?WebPage $page, array $options): array
    {
        $bundleName = trim((string) ($options['bundle_name'] ?? ($page?->slug ?: $project->name ?: 'webreach-export')));
        $bundleSlug = Str::slug($bundleName !== '' ? $bundleName : ($project->name ?: 'webreach-export'));

        if ($bundleSlug === '') {
            $bundleSlug = 'webreach-export';
        }

        $apiBaseUrl = rtrim((string) ($options['api_base_url'] ?? config('app.url')), '/');
        $includeApiBridge = (bool) ($options['include_api_bridge'] ?? false);
        $includeApiProxy = $includeApiBridge && (bool) ($options['include_api_proxy'] ?? false);
        $siteTitle = trim((string) ($options['site_title'] ?? ($page?->meta_title ?: $page?->title ?: $project->name)));
        $siteDescription = trim((string) ($options['site_description'] ?? ($page?->meta_description ?: '')));

        return [
            'bundle_name' => $bundleName !== '' ? $bundleName : $bundleSlug,
            'bundle_slug' => $bundleSlug,
            'download_name' => $bundleSlug . '-' . now()->format('Ymd-His') . '.zip',
            'site_title' => $siteTitle !== '' ? $siteTitle : ($project->name ?: 'WebReach Export'),
            'site_description' => $siteDescription,
            'include_htaccess' => (bool) ($options['include_htaccess'] ?? true),
            'include_readme' => (bool) ($options['include_readme'] ?? true),
            'include_project_json' => (bool) ($options['include_project_json'] ?? true),
            'include_api_bridge' => $includeApiBridge,
            'include_api_proxy' => $includeApiProxy,
            'api_base_url' => $apiBaseUrl,
        ];
    }

    private function normalizeWebsiteOptions(Collection $pages, array $options): array
    {
        $bundleName = trim((string) ($options['bundle_name'] ?? config('app.name', 'webreach-website')));
        $bundleSlug = Str::slug($bundleName !== '' ? $bundleName : 'webreach-website');

        if ($bundleSlug === '') {
            $bundleSlug = 'webreach-website';
        }

        $apiBaseUrl = rtrim((string) ($options['api_base_url'] ?? config('app.url')), '/');
        $includeApiBridge = (bool) ($options['include_api_bridge'] ?? false);
        $includeApiProxy = $includeApiBridge && (bool) ($options['include_api_proxy'] ?? false);
        $siteTitle = trim((string) ($options['site_title'] ?? config('app.name', 'WebReach')));
        $siteDescription = trim((string) ($options['site_description'] ?? ''));

        return [
            'bundle_name' => $bundleName !== '' ? $bundleName : $bundleSlug,
            'bundle_slug' => $bundleSlug,
            'download_name' => $bundleSlug . '-' . now()->format('Ymd-His') . '.zip',
            'site_title' => $siteTitle !== '' ? $siteTitle : 'WebReach Export',
            'site_description' => $siteDescription,
            'include_htaccess' => (bool) ($options['include_htaccess'] ?? true),
            'include_readme' => (bool) ($options['include_readme'] ?? true),
            'include_api_bridge' => $includeApiBridge,
            'include_api_proxy' => $includeApiProxy,
            'api_base_url' => $apiBaseUrl,
            'published_only' => (bool) ($options['published_only'] ?? true),
            'page_count' => $pages->count(),
        ];
    }

    private function buildDocument(
        PagebuilderProject $project,
        ?WebPage $page,
        array $options,
        array &$assetState
    ): array {
        $cssBlocks = [];
        $jsBlocks = [];

        $mainProject = $this->prepareProjectFragment($project, $assetState);
        $this->pushBlock($cssBlocks, $mainProject['css']);
        $this->pushBlock($jsBlocks, $mainProject['js']);

        if ($page) {
            $groups = [];
            $modulesByPosition = $this->resolvePageModules($page, $project->id);

            foreach (self::PAGE_LAYOUT_POSITIONS as $position) {
                $groups[$position] = $this->renderModuleGroup(
                    $position,
                    $modulesByPosition->get($position, collect()),
                    $assetState,
                    $cssBlocks,
                    $jsBlocks
                );
            }

            $bodyHtml = implode("\n", [
                $groups['top_banner'],
                $groups['banner'],
                $groups['bottom_banner'],
                '<main>',
                $groups['page'],
                $groups['above_content'],
                $this->renderProjectWrapper($project->id, $mainProject['html']),
                $groups['content'],
                '</main>',
                $groups['footer'],
            ]);

            $this->pushBlock($cssBlocks, $this->rewriteCssUrls((string) $page->custom_css, 'css', $assetState));
            $this->pushBlock($jsBlocks, $this->rewriteJsUrls((string) $page->custom_js, $assetState));
        } else {
            $bodyHtml = '<main>' . PHP_EOL
                . $this->renderProjectWrapper($project->id, $mainProject['html']) . PHP_EOL
                . '</main>';
        }

        $combinedCss = $this->combineBlocks($cssBlocks);
        $combinedJs = $this->combineBlocks($jsBlocks);
        $usesSwiper = $this->usesSwiper($bodyHtml, $combinedCss, $combinedJs);
        $faviconSvg = $page?->icon && Str::contains($page->icon, '<svg') ? trim((string) $page->icon) : null;

        if ($usesSwiper) {
            $this->copyPublicAsset(
                '/adminresources/css/swiper-bundle.min.css',
                'assets/css/swiper-bundle.min.css',
                $assetState
            );
            $this->copyPublicAsset(
                '/adminresources/js/swiper-bundle.min.js',
                'assets/js/swiper-bundle.min.js',
                $assetState
            );
        }

        return [
            'favicon_svg' => $faviconSvg,
            'site_css' => trim($combinedCss) !== '' ? trim($combinedCss) . PHP_EOL : "/* WebReach export */\n",
            'site_js' => trim($combinedJs) !== '' ? trim($combinedJs) . PHP_EOL : "/* WebReach export */\n",
            'index_php' => $this->renderIndexPhp($project, $page, $options, $bodyHtml, $usesSwiper, $faviconSvg !== null, $assetState),
        ];
    }

    private function prepareProjectFragment(PagebuilderProject $project, array &$assetState): array
    {
        $fragment = $this->normalizeProjectFragment($project);

        return [
            'html' => $this->rewriteHtmlAssets($fragment['html'], $assetState),
            'css' => $this->rewriteCssUrls($fragment['css'], 'css', $assetState),
            'js' => $this->rewriteJsUrls($fragment['js'], $assetState),
        ];
    }

    private function normalizeProjectFragment(PagebuilderProject $project): array
    {
        $rawHtml = trim((string) ($project->cleaned_html ?: $project->html ?: ''));
        $cssBlocks = [];
        $jsBlocks = [];

        if ($rawHtml === '' && (trim((string) $project->css) !== '' || trim((string) $project->js) !== '')) {
            return [
                'html' => '',
                'css' => trim((string) $project->css),
                'js' => trim((string) $project->js),
            ];
        }

        if ($project->cleaned_html) {
            [$htmlWithoutStyles, $styleBlocks] = $this->extractTagContents($project->cleaned_html, 'style');
            $rawHtml = $this->extractBodyHtml($htmlWithoutStyles);
            foreach ($styleBlocks as $styleBlock) {
                $this->pushBlock($cssBlocks, $styleBlock);
            }
            $this->pushBlock($jsBlocks, (string) $project->js);
        } else {
            [$htmlWithoutScripts, $scriptBlocks] = $this->extractTagContents((string) $project->html, 'script');
            [$htmlWithoutStyles, $styleBlocks] = $this->extractTagContents($htmlWithoutScripts, 'style');
            $rawHtml = $this->extractBodyHtml($htmlWithoutStyles);

            foreach ($styleBlocks as $styleBlock) {
                $this->pushBlock($cssBlocks, $styleBlock);
            }
            foreach ($scriptBlocks as $scriptBlock) {
                $this->pushBlock($jsBlocks, $scriptBlock);
            }

            $this->pushBlock($jsBlocks, (string) $project->js);
        }

        $this->pushBlock($cssBlocks, (string) $project->css);

        return [
            'html' => trim($rawHtml),
            'css' => $this->combineBlocks($cssBlocks),
            'js' => $this->combineBlocks($jsBlocks),
        ];
    }

    private function extractTagContents(string $html, string $tagName): array
    {
        $contents = [];
        $pattern = sprintf('/<%1$s\b[^>]*>(.*?)<\/%1$s>/is', preg_quote($tagName, '/'));

        $cleaned = preg_replace_callback($pattern, function (array $matches) use (&$contents) {
            $contents[] = trim((string) ($matches[1] ?? ''));
            return '';
        }, $html);

        return [$cleaned ?? $html, array_values(array_filter($contents, fn ($block) => trim($block) !== ''))];
    }

    private function extractBodyHtml(string $html): string
    {
        if ($html === '' || !Str::contains($html, '<body')) {
            return $html;
        }

        if (preg_match('/<body[^>]*>(.*?)<\/body>/is', $html, $matches)) {
            return trim((string) ($matches[1] ?? ''));
        }

        return $html;
    }

    private function resolvePageModules(WebPage $page, int $excludeProjectId): Collection
    {
        $now = now();
        $locale = (string) ($page->language ?: app()->getLocale());
        $candidates = app(CurrentPageService::class)->candidates(null, $page->slug);

        $modules = PagebuilderProject::query()
            ->where('id', '!=', $excludeProjectId)
            ->where(function ($query) {
                $query->where('type', 'module')
                    ->orWhereNull('type')
                    ->orWhere('type', '');
            })
            ->whereIn('status', [1, 3])
            ->where(function ($query) use ($now) {
                $query->whereNull('published_from')->orWhere('published_from', '<=', $now);
            })
            ->where(function ($query) use ($now) {
                $query->whereNull('published_until')->orWhere('published_until', '>=', $now);
            })
            ->where(function ($query) use ($locale) {
                $query->where('lang', $locale)
                    ->orWhereNull('lang')
                    ->orWhere('lang', '');
            })
            ->where(function ($query) use ($candidates) {
                $query->whereJsonContains('page', 'all');
                foreach ($candidates as $candidate) {
                    $query->orWhereJsonContains('page', $candidate);
                }
            })
            ->orderBy('order_id')
            ->get();

        return collect(self::PAGE_LAYOUT_POSITIONS)
            ->mapWithKeys(function (string $position) use ($modules) {
                $positionModules = $modules->filter(function (PagebuilderProject $module) use ($position) {
                    $positions = is_array($module->position) ? $module->position : [];
                    return in_array($position, $positions, true);
                })->values();

                return [$position => $positionModules];
            });
    }

    private function resolveWebsitePages(bool $publishedOnly): Collection
    {
        $query = WebPage::query()
            ->orderByDesc('is_fixed');

        if (Schema::hasColumn('web_pages', 'order_id')) {
            $query->orderBy('order_id');
        }

        $query->orderBy('id');

        if ($publishedOnly) {
            $now = now();
            $query
                ->where('is_active', true)
                ->where(function ($builder) use ($now) {
                    $builder->whereNull('published_from')->orWhere('published_from', '<=', $now);
                })
                ->where(function ($builder) use ($now) {
                    $builder->whereNull('published_until')->orWhere('published_until', '>=', $now);
                });
        }

        return $query->get();
    }

    private function resolveWebsiteHomePage(Collection $pages): WebPage
    {
        $preferredSlugs = ['start', 'home', 'index'];

        foreach ($preferredSlugs as $slug) {
            $page = $pages->first(fn (WebPage $item) => trim((string) $item->slug, '/') === $slug);
            if ($page) {
                return $page;
            }
        }

        return $pages->first();
    }

    private function buildWebsitePageEntry(
        WebPage $page,
        bool $isHomePage,
        array $options,
        array &$assetState
    ): array {
        $project = $page->project;
        $cssBlocks = [];
        $jsBlocks = [];

        $mainProject = $project
            ? $this->prepareProjectFragment($project, $assetState)
            : ['html' => '', 'css' => '', 'js' => ''];

        $this->pushBlock($cssBlocks, $mainProject['css']);
        $this->pushBlock($jsBlocks, $mainProject['js']);

        $modulesByPosition = $this->resolvePageModules($page, $project?->id ?? 0);
        $groups = [];

        foreach (self::PAGE_LAYOUT_POSITIONS as $position) {
            $groups[$position] = $this->renderModuleGroup(
                $position,
                $modulesByPosition->get($position, collect()),
                $assetState,
                $cssBlocks,
                $jsBlocks
            );
        }

        $mainContent = $project
            ? $this->renderProjectWrapper($project->id, $mainProject['html'])
            : '<div class="module-empty"></div>';

        $bodyHtml = implode("\n", [
            $groups['top_banner'],
            $groups['banner'],
            $groups['bottom_banner'],
            '<main>',
            $groups['page'],
            $groups['above_content'],
            $mainContent,
            $groups['content'],
            '</main>',
            $groups['footer'],
        ]);

        $this->pushBlock($cssBlocks, $this->rewriteCssUrls((string) $page->custom_css, 'css', $assetState));
        $this->pushBlock($jsBlocks, $this->rewriteJsUrls((string) $page->custom_js, $assetState));

        $combinedCss = $this->combineBlocks($cssBlocks);
        $combinedJs = $this->combineBlocks($jsBlocks);
        $usesSwiper = $this->usesSwiper($bodyHtml, $combinedCss, $combinedJs);

        if ($usesSwiper) {
            $this->copyPublicAsset(
                '/adminresources/css/swiper-bundle.min.css',
                'assets/css/swiper-bundle.min.css',
                $assetState
            );
            $this->copyPublicAsset(
                '/adminresources/js/swiper-bundle.min.js',
                'assets/js/swiper-bundle.min.js',
                $assetState
            );
        }

        $pageKey = $this->websitePageKey($page->slug, $isHomePage);
        $bodyFile = 'pages/' . $pageKey . '.html';
        $cssFile = 'assets/css/page-' . $pageKey . '.css';
        $jsFile = 'assets/js/page-' . $pageKey . '.js';
        $faviconFile = null;

        $this->writeFile(
            $assetState['site_root'] . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $bodyFile),
            trim($bodyHtml) . PHP_EOL
        );
        $this->writeFile(
            $assetState['site_root'] . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $cssFile),
            (trim($combinedCss) !== '' ? trim($combinedCss) : '/* page css */') . PHP_EOL
        );
        $this->writeFile(
            $assetState['site_root'] . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $jsFile),
            (trim($combinedJs) !== '' ? trim($combinedJs) : '/* page js */') . PHP_EOL
        );

        if ($page->icon && Str::contains($page->icon, '<svg')) {
            $faviconFile = 'assets/favicons/' . $pageKey . '.svg';
            $this->writeFile(
                $assetState['site_root'] . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $faviconFile),
                trim((string) $page->icon) . PHP_EOL
            );
        }

        $ogImage = null;
        if ($page->og_image) {
            $ogImage = $this->rewriteAssetReference($page->og_image, 'html', $assetState);
        }

        return [
            'slug' => trim((string) $page->slug, '/'),
            'manifest' => [
                'slug' => trim((string) $page->slug, '/'),
                'title' => (string) ($page->title ?: $options['site_title']),
                'meta_title' => (string) ($page->meta_title ?: $page->title ?: $options['site_title']),
                'meta_description' => (string) ($page->meta_description ?: ''),
                'meta_keywords' => (string) ($page->meta_keywords ?: ''),
                'canonical_url' => (string) ($page->canonical_url ?: ''),
                'robots_meta' => (string) ($page->robots_meta ?: 'index,follow'),
                'og_title' => (string) ($page->og_title ?: $page->meta_title ?: $page->title ?: $options['site_title']),
                'og_description' => (string) ($page->og_description ?: $page->meta_description ?: ''),
                'og_image' => (string) ($ogImage ?: ''),
                'language' => (string) ($page->language ?: app()->getLocale()),
                'body_file' => $bodyFile,
                'css_file' => $cssFile,
                'js_file' => $jsFile,
                'favicon_file' => $faviconFile,
                'uses_swiper' => $usesSwiper,
                'custom_meta' => array_values(array_filter((array) ($page->custom_meta ?? []), 'is_array')),
            ],
        ];
    }

    private function websitePageKey(?string $slug, bool $isHomePage): string
    {
        $slug = trim((string) $slug, '/');
        if ($isHomePage || $slug === '') {
            return 'home';
        }

        $normalized = str_replace('/', '--', $slug);
        $normalized = Str::slug($normalized);

        return $normalized !== '' ? $normalized : 'page';
    }

    private function renderModuleGroup(
        string $position,
        Collection $projects,
        array &$assetState,
        array &$cssBlocks,
        array &$jsBlocks
    ): string {
        $items = [];

        foreach ($projects as $project) {
            $prepared = $this->prepareProjectFragment($project, $assetState);
            $items[] = $this->renderProjectWrapper($project->id, $prepared['html']);
            $this->pushBlock($cssBlocks, $prepared['css']);
            $this->pushBlock($jsBlocks, $prepared['js']);
        }

        return '<div class="' . $this->escapeAttribute($position) . '">'
            . ($items !== [] ? PHP_EOL . implode(PHP_EOL, $items) . PHP_EOL : '')
            . '</div>';
    }

    private function renderProjectWrapper(int $projectId, string $html): string
    {
        return '<div id="module-' . $projectId . '" class="module-' . $projectId . '">' . PHP_EOL
            . trim($html) . PHP_EOL
            . '</div>';
    }

    private function rewriteHtmlAssets(string $html, array &$assetState): string
    {
        if (trim($html) === '') {
            return '';
        }

        $previous = libxml_use_internal_errors(true);
        $document = new DOMDocument('1.0', 'UTF-8');
        $wrappedHtml = '<!DOCTYPE html><html><body><div id="webreach-export-root">' . $html . '</div></body></html>';
        $document->loadHTML('<?xml encoding="UTF-8">' . $wrappedHtml, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);
        $root = $document->getElementById('webreach-export-root');

        if (!$root) {
            libxml_clear_errors();
            libxml_use_internal_errors($previous);
            return $html;
        }

        foreach ($root->getElementsByTagName('*') as $element) {
            foreach (['src', 'href', 'poster', 'data-src'] as $attributeName) {
                if ($element->hasAttribute($attributeName)) {
                    $element->setAttribute(
                        $attributeName,
                        $this->rewriteAssetReference($element->getAttribute($attributeName), 'html', $assetState)
                    );
                }
            }

            if ($element->hasAttribute('srcset')) {
                $element->setAttribute(
                    'srcset',
                    $this->rewriteSrcSet($element->getAttribute('srcset'), $assetState)
                );
            }

            if ($element->hasAttribute('style')) {
                $element->setAttribute(
                    'style',
                    $this->rewriteCssUrls($element->getAttribute('style'), 'html', $assetState)
                );
            }
        }

        $output = '';
        foreach ($root->childNodes as $childNode) {
            $output .= $document->saveHTML($childNode);
        }

        libxml_clear_errors();
        libxml_use_internal_errors($previous);

        return trim($output);
    }

    private function rewriteSrcSet(string $srcSet, array &$assetState): string
    {
        $parts = array_map('trim', explode(',', $srcSet));
        $rewritten = [];

        foreach ($parts as $part) {
            if ($part === '') {
                continue;
            }

            $segments = preg_split('/\s+/', $part, 2);
            $url = $segments[0] ?? '';
            $descriptor = $segments[1] ?? '';
            $newUrl = $this->rewriteAssetReference($url, 'html', $assetState);
            $rewritten[] = trim($newUrl . ' ' . $descriptor);
        }

        return implode(', ', $rewritten);
    }

    private function rewriteCssUrls(string $css, string $context, array &$assetState): string
    {
        if (trim($css) === '') {
            return '';
        }

        $css = preg_replace_callback('/url\((["\']?)(.*?)\1\)/i', function (array $matches) use ($context, &$assetState) {
            $quote = $matches[1] ?? '';
            $url = trim((string) ($matches[2] ?? ''));
            $rewritten = $this->rewriteAssetReference($url, $context, $assetState);
            return 'url(' . $quote . $rewritten . $quote . ')';
        }, $css) ?? $css;

        return preg_replace_callback(
            '/@import\s+(?:url\()?["\']?([^"\')]+)["\']?\)?/i',
            function (array $matches) use ($context, &$assetState) {
                $rewritten = $this->rewriteAssetReference((string) ($matches[1] ?? ''), $context, $assetState);
                return '@import url("' . $rewritten . '")';
            },
            $css
        ) ?? $css;
    }

    private function rewriteJsUrls(string $js, array &$assetState): string
    {
        if (trim($js) === '') {
            return '';
        }

        return preg_replace_callback(
            '/(?<quote>["\'])(?<url>(?:https?:\/\/[^"\']+|\/[^"\']+|(?:adminresources|adminressources|storage|build)\/[^"\']+))\k<quote>/i',
            function (array $matches) use (&$assetState) {
                $quote = $matches['quote'] ?? '"';
                $url = $matches['url'] ?? '';
                $rewritten = $this->rewriteAssetReference($url, 'js', $assetState);
                return $quote . $rewritten . $quote;
            },
            $js
        ) ?? $js;
    }

    private function rewriteAssetReference(string $reference, string $context, array &$assetState): string
    {
        $reference = trim($reference);
        if ($reference === '' || $reference === '#' || Str::startsWith($reference, ['data:', 'mailto:', 'tel:', 'javascript:'])) {
            return $reference;
        }

        $vendorPath = $this->matchBundledVendor($reference);
        if ($vendorPath !== null) {
            return $this->relativeAssetPath($vendorPath, $context);
        }

        $resolved = $this->resolveLocalAssetReference($reference);
        if ($resolved === null) {
            return $reference;
        }

        $targetRelativePath = $resolved['target'];
        $sourcePath = $resolved['source'];

        if (!isset($assetState['copied'][$sourcePath])) {
            $destination = $assetState['site_root'] . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $targetRelativePath);
            File::ensureDirectoryExists(dirname($destination));
            File::copy($sourcePath, $destination);
            $assetState['copied'][$sourcePath] = $targetRelativePath;
        }

        return $this->relativeAssetPath($targetRelativePath, $context);
    }

    private function resolveLocalAssetReference(string $reference): ?array
    {
        $appUrl = rtrim((string) config('app.url'), '/');
        $candidate = $reference;

        if (preg_match('/^https?:\/\//i', $candidate)) {
            if ($appUrl === '' || !Str::startsWith($candidate, $appUrl)) {
                return null;
            }

            $candidate = (string) parse_url($candidate, PHP_URL_PATH);
        }

        $path = (string) parse_url($candidate, PHP_URL_PATH);
        if ($path === '') {
            $path = ltrim($candidate, '/');
        }

        if ($path === '') {
            return null;
        }

        $path = '/' . ltrim($path, '/');

        if (Str::startsWith($path, '/storage/')) {
            $relativeStoragePath = ltrim(Str::after($path, '/storage/'), '/');
            $sourcePath = storage_path('app/public/' . str_replace('/', DIRECTORY_SEPARATOR, $relativeStoragePath));

            if (!File::exists($sourcePath)) {
                return null;
            }

            return [
                'source' => $sourcePath,
                'target' => 'assets/linked/storage/' . $relativeStoragePath,
            ];
        }

        $publicCandidate = public_path(ltrim($path, '/'));
        if (!File::exists($publicCandidate)) {
            return null;
        }

        return [
            'source' => $publicCandidate,
            'target' => 'assets/linked/public/' . ltrim($path, '/'),
        ];
    }

    private function matchBundledVendor(string $reference): ?string
    {
        $path = (string) parse_url($reference, PHP_URL_PATH);
        $path = '/' . ltrim($path, '/');

        return match ($path) {
            '/adminresources/css/tailwind.min.css' => 'assets/css/tailwind.min.css',
            '/adminresources/css/swiper-bundle.min.css' => 'assets/css/swiper-bundle.min.css',
            '/adminresources/js/swiper-bundle.min.js' => 'assets/js/swiper-bundle.min.js',
            default => null,
        };
    }

    private function relativeAssetPath(string $targetRelativePath, string $context): string
    {
        return match ($context) {
            'css' => $this->relativePathFromDirectory('assets/css', $targetRelativePath),
            default => $targetRelativePath,
        };
    }

    private function relativePathFromDirectory(string $fromDirectory, string $toPath): string
    {
        $from = explode('/', trim($fromDirectory, '/'));
        $to = explode('/', trim($toPath, '/'));

        while ($from !== [] && $to !== [] && $from[0] === $to[0]) {
            array_shift($from);
            array_shift($to);
        }

        return str_repeat('../', count($from)) . implode('/', $to);
    }

    private function ensureCoreAssets(string $bundleRoot): void
    {
        $tailwindSource = public_path('adminresources/css/tailwind.min.css');
        if (!File::exists($tailwindSource)) {
            throw new RuntimeException('Die Export-Basisdatei tailwind.min.css wurde nicht gefunden.');
        }

        $destination = $bundleRoot . DIRECTORY_SEPARATOR . 'assets/css/tailwind.min.css';
        File::ensureDirectoryExists(dirname($destination));
        File::copy($tailwindSource, $destination);
    }

    private function copyPublicAsset(string $publicPath, string $targetRelativePath, array &$assetState): void
    {
        $source = public_path(ltrim($publicPath, '/'));
        if (!File::exists($source)) {
            return;
        }

        $destination = $assetState['site_root'] . DIRECTORY_SEPARATOR . str_replace('/', DIRECTORY_SEPARATOR, $targetRelativePath);
        if (File::exists($destination)) {
            return;
        }

        File::ensureDirectoryExists(dirname($destination));
        File::copy($source, $destination);
    }

    private function renderIndexPhp(
        PagebuilderProject $project,
        ?WebPage $page,
        array $options,
        string $bodyHtml,
        bool $usesSwiper,
        bool $hasFavicon,
        array &$assetState
    ): string {
        $title = $this->escapeAttribute($options['site_title']);
        $description = $this->escapeAttribute($options['site_description']);
        $canonical = $page?->canonical_url ? $this->escapeAttribute($page->canonical_url) : null;
        $robots = $page?->robots_meta ? $this->escapeAttribute($page->robots_meta) : 'index,follow';
        $ogTitle = $this->escapeAttribute($page?->og_title ?: $options['site_title']);
        $ogDescription = $this->escapeAttribute($page?->og_description ?: $options['site_description']);

        $head = [
            '<meta charset="utf-8">',
            '<meta name="viewport" content="width=device-width, initial-scale=1">',
            '<meta name="generator" content="WebReach Export Bundle">',
            '<meta name="robots" content="' . $robots . '">',
            '<title>' . $title . '</title>',
            '<link rel="stylesheet" href="assets/css/tailwind.min.css">',
            '<link rel="stylesheet" href="assets/css/site.css">',
        ];

        if ($description !== '') {
            $head[] = '<meta name="description" content="' . $description . '">';
        }

        if ($page?->meta_keywords) {
            $head[] = '<meta name="keywords" content="' . $this->escapeAttribute($page->meta_keywords) . '">';
        }

        if ($canonical) {
            $head[] = '<link rel="canonical" href="' . $canonical . '">';
        }

        if ($hasFavicon) {
            $head[] = '<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">';
        }

        $head[] = '<meta property="og:type" content="website">';
        $head[] = '<meta property="og:title" content="' . $ogTitle . '">';
        if ($ogDescription !== '') {
            $head[] = '<meta property="og:description" content="' . $ogDescription . '">';
        }
        if ($canonical) {
            $head[] = '<meta property="og:url" content="' . $canonical . '">';
        }
        if ($page?->og_image) {
            $head[] = '<meta property="og:image" content="' . $this->escapeAttribute(
                $this->rewriteAssetReference($page->og_image, 'html', $assetState)
            ) . '">';
        }

        foreach ((array) ($page?->custom_meta ?? []) as $metaTag) {
            if (!is_array($metaTag)) {
                continue;
            }

            $name = trim((string) ($metaTag['name'] ?? ''));
            $content = trim((string) ($metaTag['content'] ?? ''));

            if ($name === '' || $content === '') {
                continue;
            }

            $head[] = '<meta name="' . $this->escapeAttribute($name) . '" content="' . $this->escapeAttribute($content) . '">';
        }

        if ($usesSwiper) {
            $head[] = '<link rel="stylesheet" href="assets/css/swiper-bundle.min.css">';
        }

        $scripts = [];
        if ($options['include_api_bridge']) {
            $scripts[] = '<script src="assets/js/webreach-api.js" defer></script>';
        }
        if ($usesSwiper) {
            $scripts[] = '<script src="assets/js/swiper-bundle.min.js" defer></script>';
        }
        $scripts[] = '<script src="assets/js/site.js" defer></script>';

        return implode(PHP_EOL, [
            '<!DOCTYPE html>',
            '<html lang="' . $this->escapeAttribute($page?->language ?: app()->getLocale()) . '">',
            '<head>',
            implode(PHP_EOL, $head),
            '</head>',
            '<body class="text-gray-900 antialiased">',
            trim($bodyHtml),
            implode(PHP_EOL, $scripts),
            '</body>',
            '</html>',
        ]) . PHP_EOL;
    }

    private function renderWebsiteConfig(array $pageManifest, string $defaultSlug, array $options): string
    {
        $config = [
            'site_title' => $options['site_title'],
            'site_description' => $options['site_description'],
            'default_slug' => trim($defaultSlug, '/'),
            'include_api_bridge' => $options['include_api_bridge'],
            'pages' => $pageManifest,
        ];

        return "<?php\n\nreturn " . var_export($config, true) . ";\n";
    }

    private function renderWebsiteIndexPhp(array $options): string
    {
        $apiScript = $options['include_api_bridge']
            ? "<?php if (!empty(\$site['include_api_bridge'])): ?>\n<script src=\"<?= htmlspecialchars(site_asset_url(\$assetBase, 'assets/js/webreach-api.js'), ENT_QUOTES, 'UTF-8') ?>\" defer></script>\n<?php endif; ?>\n"
            : '';

        return <<<PHP
<?php
\$site = require __DIR__ . '/config/site.php';
\$scriptName = str_replace('\\\\', '/', \$_SERVER['SCRIPT_NAME'] ?? '/index.php');
\$basePath = rtrim(str_replace('/index.php', '', \$scriptName), '/');
\$requestPath = parse_url(\$_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
\$rewriteSlug = trim((string) (\$_GET['slug'] ?? ''), '/');

if (\$rewriteSlug !== '') {
    \$slug = rawurldecode(\$rewriteSlug);
} else {
    if (\$basePath !== '' && str_starts_with(\$requestPath, \$basePath)) {
        \$requestPath = substr(\$requestPath, strlen(\$basePath));
    }

    \$slug = rawurldecode(trim(\$requestPath, '/'));
}

\$slug = preg_replace('#/+#', '/', (string) \$slug) ?: '';

if (\$slug === '') {
    \$slug = (string) (\$site['default_slug'] ?? '');
}

\$page = \$site['pages'][\$slug] ?? null;

if (!\$page) {
    http_response_code(404);
    \$defaultSlug = (string) (\$site['default_slug'] ?? '');
    \$page = \$site['pages'][\$defaultSlug] ?? reset(\$site['pages']);
}

if (!is_array(\$page)) {
    http_response_code(500);
    echo 'Site configuration is invalid.';
    exit;
}

\$assetBase = (\$basePath !== '' ? \$basePath : '') . '/';
\$assetBase = rtrim(\$assetBase, '/') . '/';
\$bodyHtml = '';
\$bodyPath = __DIR__ . '/' . ltrim((string) (\$page['body_file'] ?? ''), '/');

if (is_file(\$bodyPath)) {
    \$bodyHtml = (string) file_get_contents(\$bodyPath);
}

function site_asset_url(string \$base, string \$path): string
{
    return rtrim(\$base, '/') . '/' . ltrim(\$path, '/');
}

\$metaTitle = trim((string) (\$page['meta_title'] ?? ''));
\$siteTitle = trim((string) (\$site['site_title'] ?? ''));
\$fullTitle = \$metaTitle !== ''
    ? (\$siteTitle !== '' && \$metaTitle !== \$siteTitle ? \$metaTitle . ' | ' . \$siteTitle : \$metaTitle)
    : \$siteTitle;
?>
<!DOCTYPE html>
<html lang="<?= htmlspecialchars((string) (\$page['language'] ?? 'de'), ENT_QUOTES, 'UTF-8') ?>">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="generator" content="WebReach Website Export">
<base href="<?= htmlspecialchars(\$assetBase, ENT_QUOTES, 'UTF-8') ?>">
<title><?= htmlspecialchars(\$fullTitle, ENT_QUOTES, 'UTF-8') ?></title>
<meta name="robots" content="<?= htmlspecialchars((string) (\$page['robots_meta'] ?? 'index,follow'), ENT_QUOTES, 'UTF-8') ?>">
<?php if (!empty(\$page['meta_description'])): ?>
<meta name="description" content="<?= htmlspecialchars((string) \$page['meta_description'], ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<?php if (!empty(\$page['meta_keywords'])): ?>
<meta name="keywords" content="<?= htmlspecialchars((string) \$page['meta_keywords'], ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<?php if (!empty(\$page['canonical_url'])): ?>
<link rel="canonical" href="<?= htmlspecialchars((string) \$page['canonical_url'], ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<meta property="og:type" content="website">
<?php if (!empty(\$page['og_title'])): ?>
<meta property="og:title" content="<?= htmlspecialchars((string) \$page['og_title'], ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<?php if (!empty(\$page['og_description'])): ?>
<meta property="og:description" content="<?= htmlspecialchars((string) \$page['og_description'], ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<?php if (!empty(\$page['canonical_url'])): ?>
<meta property="og:url" content="<?= htmlspecialchars((string) \$page['canonical_url'], ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<?php if (!empty(\$page['og_image'])): ?>
<meta property="og:image" content="<?= htmlspecialchars((string) \$page['og_image'], ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<?php foreach ((array) (\$page['custom_meta'] ?? []) as \$metaTag): ?>
<?php if (!is_array(\$metaTag) || empty(\$metaTag['name']) || empty(\$metaTag['content'])) continue; ?>
<meta name="<?= htmlspecialchars((string) \$metaTag['name'], ENT_QUOTES, 'UTF-8') ?>" content="<?= htmlspecialchars((string) \$metaTag['content'], ENT_QUOTES, 'UTF-8') ?>">
<?php endforeach; ?>
<?php if (!empty(\$page['favicon_file'])): ?>
<link rel="icon" type="image/svg+xml" href="<?= htmlspecialchars(site_asset_url(\$assetBase, (string) \$page['favicon_file']), ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
<link rel="stylesheet" href="<?= htmlspecialchars(site_asset_url(\$assetBase, 'assets/css/tailwind.min.css'), ENT_QUOTES, 'UTF-8') ?>">
<link rel="stylesheet" href="<?= htmlspecialchars(site_asset_url(\$assetBase, (string) (\$page['css_file'] ?? 'assets/css/site.css')), ENT_QUOTES, 'UTF-8') ?>">
<?php if (!empty(\$page['uses_swiper'])): ?>
<link rel="stylesheet" href="<?= htmlspecialchars(site_asset_url(\$assetBase, 'assets/css/swiper-bundle.min.css'), ENT_QUOTES, 'UTF-8') ?>">
<?php endif; ?>
</head>
<body class="text-gray-900 antialiased">
<?= \$bodyHtml ?>
{$apiScript}<?php if (!empty(\$page['uses_swiper'])): ?>
<script src="<?= htmlspecialchars(site_asset_url(\$assetBase, 'assets/js/swiper-bundle.min.js'), ENT_QUOTES, 'UTF-8') ?>" defer></script>
<?php endif; ?>
<script src="<?= htmlspecialchars(site_asset_url(\$assetBase, (string) (\$page['js_file'] ?? 'assets/js/site.js')), ENT_QUOTES, 'UTF-8') ?>" defer></script>
</body>
</html>
PHP;
    }

    private function renderWebsiteReadme(Collection $pages, WebPage $homePage, array $options): string
    {
        $lines = [
            'WebReach Website Export',
            '=======================',
            '',
            'Seiten im Bundle: ' . $pages->count(),
            'Startseite: ' . $homePage->slug,
            'Exportiert am: ' . now()->format('Y-m-d H:i:s'),
            '',
            'Installation',
            '------------',
            '1. ZIP-Datei entpacken.',
            '2. Den kompletten Ordnerinhalt in das Zielverzeichnis des Hostings hochladen.',
            '3. PHP und .htaccess muessen auf dem Zielsystem aktiviert sein.',
            '4. Die Website wird ueber die zentrale index.php und die .htaccess ausgeliefert.',
            '',
            'Hinweise',
            '--------',
            '- Dieses Bundle enthaelt nur exportierte Frontend-Inhalte ohne CMS-Logik.',
            '- Relative Routen werden ueber die zentrale index.php aufgeloest.',
            '- Der Export verwendet standardmaessig nur aktuell aktive/veroeffentlichte Seiten.',
        ];

        if ($options['include_api_bridge']) {
            $lines[] = '- Die WebReach API-Bridge wurde eingebunden.';
        }

        $lines[] = '';
        $lines[] = 'Seiten';
        $lines[] = '------';

        foreach ($pages as $page) {
            $lines[] = '- ' . $page->slug . ' (' . ($page->title ?: 'Ohne Titel') . ')';
        }

        return implode(PHP_EOL, $lines) . PHP_EOL;
    }

    private function renderRootHtaccess(): string
    {
        return <<<HTACCESS
DirectoryIndex index.php
Options -Indexes -MultiViews

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^$ index.php [QSA,L]
RewriteRule ^(.+)$ index.php?slug=$1 [QSA,L]
</IfModule>

<IfModule mod_headers.c>
    <FilesMatch "\.(css|js|svg|png|jpe?g|gif|webp|woff2?|ttf|ico)$">
        Header set Cache-Control "public, max-age=604800"
    </FilesMatch>
</IfModule>
HTACCESS;
    }

    private function renderApiHtaccess(): string
    {
        return <<<HTACCESS
Options -Indexes

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /api/
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
RewriteRule ^(.*)$ index.php?path=$1 [QSA,L]
</IfModule>
HTACCESS;
    }

    private function renderApiConfig(array $options): string
    {
        return <<<PHP
<?php

return [
    'api_base_url' => '{$this->escapePhpString($options['api_base_url'])}',
];
PHP;
    }

    private function renderApiBridgeJs(array $options): string
    {
        $apiBaseUrl = $this->escapeJsString($options['api_base_url']);
        $mode = $options['include_api_proxy'] ? 'proxy' : 'direct';

        return <<<JS
(function (window) {
    const config = {
        baseUrl: '{$apiBaseUrl}',
        mode: '{$mode}',
        proxyBase: 'api',
    };

    function normalizePath(path) {
        if (!path) {
            return '';
        }

        return String(path).replace(/^\\/+/, '');
    }

    async function request(path, options) {
        const normalizedPath = normalizePath(path);
        const targetUrl = config.mode === 'proxy'
            ? config.proxyBase.replace(/\\/+$/, '') + '/' + normalizedPath
            : config.baseUrl.replace(/\\/+$/, '') + (normalizedPath ? '/' + normalizedPath : '');

        const response = await fetch(targetUrl, options || {});
        const contentType = response.headers.get('content-type') || '';

        if (!response.ok) {
            throw new Error('WebReach API request failed with status ' + response.status);
        }

        if (contentType.includes('application/json')) {
            return response.json();
        }

        return response.text();
    }

    window.WebReach = window.WebReach || {};
    window.WebReach.config = config;
    window.WebReach.request = request;
})(window);
JS;
    }

    private function renderProjectJson(PagebuilderProject $project): string
    {
        $decoded = json_decode((string) $project->data, true);

        if (is_array($decoded) || is_object($decoded)) {
            return json_encode(
                $decoded,
                JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
            ) . PHP_EOL;
        }

        return (string) $project->data;
    }

    private function renderReadme(PagebuilderProject $project, ?WebPage $page, array $options): string
    {
        $lines = [
            'WebReach Export Bundle',
            '======================',
            '',
            'Projekt: ' . $project->name,
            'Typ: ' . ($page ? 'Seite' : 'Modul'),
            'Exportiert am: ' . now()->format('Y-m-d H:i:s'),
            '',
            'Installation',
            '------------',
            '1. ZIP-Datei lokal entpacken.',
            '2. Den entpackten Ordnerinhalt in das Webroot des Hostings hochladen.',
            '3. Darauf achten, dass PHP und .htaccess auf dem Zielserver aktiviert sind.',
            '4. Die Website ueber die Domain oder das Zielverzeichnis aufrufen.',
            '',
            'Hinweise',
            '--------',
            '- Das Bundle enthaelt nur statischen Output aus dem Pagebuilder und keine CMS-Logik.',
            '- Der Export basiert auf dem zuletzt gespeicherten Stand des Projekts.',
            '- Lokale Bilder und Frontend-Assets werden in den Export uebernommen.',
            '- Externe Fremdquellen bleiben externe Referenzen, wenn sie nicht lokal vorlagen.',
        ];

        if ($options['include_api_bridge']) {
            $lines[] = '- Eine WebReach API-Bridge wurde eingebunden.';
            $lines[] = '- API Basis-URL: ' . ($options['api_base_url'] !== '' ? $options['api_base_url'] : '[leer]');
        }

        if ($options['include_api_proxy']) {
            $lines[] = '- Die lokale PHP-Proxy-API liegt unter /api und leitet an WebReach weiter.';
            $lines[] = '- Fuer den Proxy wird ausgehendes HTTPS vom Hosting benoetigt.';
        }

        return implode(PHP_EOL, $lines) . PHP_EOL;
    }

    private function usesSwiper(string ...$contents): bool
    {
        $haystack = Str::lower(implode("\n", $contents));

        return Str::contains($haystack, [
            'swiper',
            'swiper-wrapper',
            'swiper-slide',
            'new swiper',
        ]);
    }

    private function renderApiProxyPhp(): string
    {
        return <<<'PHP'
<?php

$config = require __DIR__ . '/../config/webreach.php';
$apiBaseUrl = rtrim((string) ($config['api_base_url'] ?? ''), '/');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($apiBaseUrl === '') {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'API base URL fehlt.']);
    exit;
}

$path = trim((string) ($_GET['path'] ?? ''), '/');
$queryParams = $_GET;
unset($queryParams['path']);

$targetUrl = $apiBaseUrl . ($path !== '' ? '/' . $path : '');
if (!empty($queryParams)) {
    $targetUrl .= (str_contains($targetUrl, '?') ? '&' : '?') . http_build_query($queryParams);
}

$incomingHeaders = function_exists('getallheaders') ? getallheaders() : [];
$forwardHeaders = [];

foreach ($incomingHeaders as $name => $value) {
    $lower = strtolower((string) $name);
    if (in_array($lower, ['host', 'content-length', 'accept-encoding'], true)) {
        continue;
    }

    $forwardHeaders[] = $name . ': ' . $value;
}

$body = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if (function_exists('curl_init')) {
    $ch = curl_init($targetUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $forwardHeaders);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    if ($body !== false && $body !== '' && !in_array($method, ['GET', 'HEAD'], true)) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
    }

    $response = curl_exec($ch);

    if ($response === false) {
        http_response_code(502);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['error' => 'Proxy-Fehler', 'message' => curl_error($ch)]);
        curl_close($ch);
        exit;
    }

    $headerSize = curl_getinfo($ch, CURLINFO_HEADER_SIZE) ?: 0;
    $statusCode = curl_getinfo($ch, CURLINFO_RESPONSE_CODE) ?: 200;
    $headerText = substr($response, 0, $headerSize);
    $responseBody = substr($response, $headerSize);
    curl_close($ch);

    http_response_code($statusCode);

    foreach (explode("\r\n", (string) $headerText) as $headerLine) {
        if (!str_contains($headerLine, ':')) {
            continue;
        }

        [$headerName, $headerValue] = explode(':', $headerLine, 2);
        $headerName = trim($headerName);
        $headerValue = trim($headerValue);

        if ($headerName === '' || in_array(strtolower($headerName), ['transfer-encoding', 'content-length', 'content-encoding'], true)) {
            continue;
        }

        header($headerName . ': ' . $headerValue, true);
    }

    echo $responseBody;
    exit;
}

$contextOptions = [
    'http' => [
        'method' => $method,
        'header' => implode("\r\n", $forwardHeaders),
        'content' => $body !== false ? $body : '',
        'ignore_errors' => true,
    ],
];

$context = stream_context_create($contextOptions);
$responseBody = @file_get_contents($targetUrl, false, $context);
$responseHeaders = $http_response_header ?? [];

foreach ($responseHeaders as $headerLine) {
    if (!str_contains($headerLine, ':')) {
        if (preg_match('#HTTP/\S+\s+(\d{3})#', $headerLine, $matches)) {
            http_response_code((int) $matches[1]);
        }
        continue;
    }

    [$headerName, $headerValue] = explode(':', $headerLine, 2);
    $headerName = trim($headerName);
    $headerValue = trim($headerValue);

    if ($headerName === '' || in_array(strtolower($headerName), ['transfer-encoding', 'content-length', 'content-encoding'], true)) {
        continue;
    }

    header($headerName . ': ' . $headerValue, true);
}

echo $responseBody === false ? '' : $responseBody;
PHP;
    }

    private function zipDirectory(string $sourceDirectory, string $zipPath, string $rootFolderName): void
    {
        $zip = new ZipArchive();
        $basePath = realpath($sourceDirectory) ?: $sourceDirectory;
        $basePath = rtrim($basePath, DIRECTORY_SEPARATOR);

        if ($zip->open($zipPath, ZipArchive::CREATE | ZipArchive::OVERWRITE) !== true) {
            throw new RuntimeException('Die Export-ZIP konnte nicht erstellt werden.');
        }

        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($sourceDirectory, \FilesystemIterator::SKIP_DOTS),
            \RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $item) {
            $itemPath = $item->getRealPath();
            if ($itemPath === false) {
                continue;
            }

            $relativeLocalPath = ltrim(substr($itemPath, strlen($basePath)), DIRECTORY_SEPARATOR);
            $relativePath = $rootFolderName
                . ($relativeLocalPath !== '' ? '/' . str_replace(DIRECTORY_SEPARATOR, '/', $relativeLocalPath) : '');

            if ($item->isDir()) {
                $zip->addEmptyDir($relativePath);
                continue;
            }

            $zip->addFile($itemPath, $relativePath);
        }

        $zip->close();
    }

    private function writeFile(string $path, string $content): void
    {
        File::ensureDirectoryExists(dirname($path));
        File::put($path, $content);
    }

    private function combineBlocks(array $blocks): string
    {
        $normalized = [];

        foreach ($blocks as $block) {
            $trimmed = trim((string) $block);
            if ($trimmed === '' || in_array($trimmed, $normalized, true)) {
                continue;
            }

            $normalized[] = $trimmed;
        }

        return implode(PHP_EOL . PHP_EOL, $normalized);
    }

    private function pushBlock(array &$blocks, string $value): void
    {
        $trimmed = trim($value);
        if ($trimmed !== '') {
            $blocks[] = $trimmed;
        }
    }

    private function escapeAttribute(?string $value): string
    {
        return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
    }

    private function escapeJsString(string $value): string
    {
        return str_replace(
            ['\\', "'"],
            ['\\\\', "\\'"],
            $value
        );
    }

    private function escapePhpString(string $value): string
    {
        return str_replace(
            ['\\', "'"],
            ['\\\\', "\\'"],
            $value
        );
    }
}
