<?php

namespace App\View\Components;

use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\View\Component;
use App\Services\WebPages\CurrentPageService;

class PageHeader extends Component
{
    public $page;
    public bool $isWebPage = false;
    public $title;
    public $icon;

    /**
     * Create a new component instance.
     */
    public function __construct()
    {
        $webPage = app(CurrentPageService::class)->findWebPage();
        $this->isWebPage = $webPage !== null;
        if ($webPage) {
            $this->title = $webPage->title;
            $this->icon = $webPage->icon;
        }
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.page-header');
    }
}
