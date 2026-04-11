<?php

namespace App\View\Components;

use App\Models\PagebuilderProject;
use App\Models\WebPage;
use App\Services\WebPages\CurrentPageService;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\View\Component;

class PagebuilderModule extends Component
{
    public string $page;
    public string $position;
    public $modules;

    public function __construct(
        CurrentPageService $currentPage,
        ?string $page = null,
        string $position = 'page'
    ) {
        $this->position = $position;

        $candidates = $currentPage->candidates(null, $page);
        $this->page = $candidates[0] ?? 'start';

        $now = Carbon::now();
        $locale = app()->getLocale();

        $cacheKey = sprintf(
            'pagebuilder_modules_v3_%s_%s_%s_%s',
            PagebuilderProject::renderCacheVersion(),
            sha1(implode('|', $candidates)),
            $position,
            $locale
        );

        $this->modules = Cache::remember($cacheKey, 60, function () use ($candidates, $position, $now, $locale) {
            if ($position === 'page') {
                $rank = array_flip($candidates);
                $page = WebPage::query()
                    ->with('project')
                    ->whereIn('slug', $candidates)
                    ->where('is_active', true)
                    ->where(function ($query) use ($now) {
                        $query->whereNull('published_from')->orWhere('published_from', '<=', $now);
                    })
                    ->where(function ($query) use ($now) {
                        $query->whereNull('published_until')->orWhere('published_until', '>=', $now);
                    })
                    ->get()
                    ->sortBy(fn (WebPage $page) => $rank[$page->slug] ?? PHP_INT_MAX)
                    ->first();

                if ($page?->project) {
                    return collect([$page->project]);
                }

                return collect();
            }

            return PagebuilderProject::query()
                ->where(function ($query) {
                    $query->where('type', 'module')
                        ->orWhereNull('type')
                        ->orWhere('type', '');
                })
                ->whereJsonContains('position', $position)
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
                    foreach ($candidates as $slug) {
                        $query->orWhereJsonContains('page', $slug);
                    }
                })
                ->orderBy('order_id', 'asc')
                ->get();
        });
    }

    public function render()
    {
        return view('components.pagebuilder-module');
    }
}
