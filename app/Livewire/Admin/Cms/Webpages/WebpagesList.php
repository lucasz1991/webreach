<?php

namespace App\Livewire\Admin\Cms\Webpages;

use App\Models\WebPage;
use App\Models\PagebuilderProject;
use App\Support\PivotSorter;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Livewire\Component;

class WebpagesList extends Component
{
    protected $listeners = [
        'orderWebPage' => 'handleOrderWebPage',
    ];

    public $title, $slug, $meta_title, $meta_description, $meta_keywords, $canonical_url, $robots_meta;
    public $og_title, $og_description, $og_image;
    public $custom_css, $custom_js, $custom_meta;
    public $icon, $is_active, $published_from, $published_until, $language;
    public $editingId = null;
    public $modalOpen = false;
    public $page = null;

    public function create()
    {
        $this->resetForm();
        $this->modalOpen = true;
    }

    public function edit($id)
    {
        $this->page = WebPage::findOrFail($id);
        $this->editingId = $this->page->id;

        $this->fill($this->page->toArray());
        $this->custom_meta = !empty($this->page->custom_meta)
            ? json_encode($this->page->custom_meta, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)
            : '';

        $this->modalOpen = true;
    }

    public function save()
    {
        $this->validate([
            'title' => 'required|string|max:255|unique:web_pages,title,' . $this->editingId,
            'slug' => 'required|string|max:255|unique:web_pages,slug,' . $this->editingId,
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
            'custom_meta' => 'nullable|string',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string|max:500',
            'custom_css' => 'nullable|string',
            'custom_js' => 'nullable|string',
        ]);

        if (!$this->slug) {
            $this->slug = Str::slug($this->title);
        }

        $customMetaArr = [];
        if (!empty($this->custom_meta)) {
            try {
                $decoded = json_decode($this->custom_meta, true, 512, JSON_THROW_ON_ERROR);
                if (!is_array($decoded)) {
                    throw new \RuntimeException('JSON muss ein Array sein.');
                }
                $customMetaArr = $this->normalizeCustomMetaArray($decoded);
            } catch (\Throwable $e) {
                $this->addError('custom_meta', 'Ungültiges JSON: ' . $e->getMessage());
                return;
            }
        }

        if (!$this->og_title && $this->meta_title) {
            $this->og_title = $this->meta_title;
        }

        if (!$this->og_description && $this->meta_description) {
            $this->og_description = $this->meta_description;
        }

        if (!$this->robots_meta) {
            $this->robots_meta = 'index,follow';
        }

        $data = [
            'title' => $this->title,
            'slug' => $this->slug,
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'meta_keywords' => $this->meta_keywords,
            'canonical_url' => $this->canonical_url,
            'robots_meta' => $this->robots_meta,
            'og_title' => $this->og_title,
            'og_description' => $this->og_description,
            'og_image' => $this->og_image,
            'custom_css' => $this->custom_css,
            'custom_js' => $this->custom_js,
            'custom_meta' => $customMetaArr,
            'icon' => $this->icon,
            'is_active' => $this->is_active,
            'published_from' => $this->published_from,
            'published_until' => $this->published_until,
            'language' => $this->language ?: app()->getLocale(),
        ];

        if ($this->editingId) {
            WebPage::find($this->editingId)?->update($data);
        } else {
            if ($this->supportsWebPageOrdering()) {
                $data['order_id'] = (WebPage::where('is_fixed', false)->max('order_id') ?? -1) + 1;
            }
            $pageBuilderProject = PagebuilderProject::create([
                'name' => $this->title . ' Content',
                'data' => PagebuilderProject::getDefaultProjectData(),
                'position' => ['page'],
                'order_id' => (PagebuilderProject::max('order_id') ?? 0) + 1,
                'type' => 'page',
            ]);
            $data['pagebuilder_project'] = $pageBuilderProject->id;
            WebPage::create($data);

        }

        $this->modalOpen = false;
        $this->resetForm();
    }

    public function delete($id)
    {
        $page = WebPage::findOrFail($id);
        if (!$page->is_fixed) {
            $page->delete();

            if ($this->supportsWebPageOrdering()) {
                PivotSorter::reindexOrderColumn(
                    WebPage::class,
                    'order_id',
                    fn ($query) => $query->where('is_fixed', false)
                );
            }
        }
    }

    public function handleOrderWebPage($item, $position)
    {
        if (!isset($item, $position) || !$this->supportsWebPageOrdering()) {
            return;
        }

        PivotSorter::reorderByOrderColumn(
            WebPage::class,
            $item,
            (int) $position,
            'order_id',
            fn ($query) => $query->where('is_fixed', false)
        );
    }

    private function supportsWebPageOrdering(): bool
    {
        return Schema::hasColumn('web_pages', 'order_id');
    }

    private function normalizeCustomMetaArray(array $items): array
    {
        $normalized = [];

        foreach ($items as $item) {
            if (!is_array($item)) {
                continue;
            }

            $name = trim((string) ($item['name'] ?? ''));
            $content = trim((string) ($item['content'] ?? ''));

            if ($name === '' || $content === '') {
                continue;
            }

            $normalized[] = [
                'name' => $name,
                'content' => $content,
            ];
        }

        return $normalized;
    }

    private function resetForm()
    {
        $this->editingId = null;
        $this->title = $this->slug = $this->meta_title = $this->meta_description = $this->meta_keywords = '';
        $this->canonical_url = $this->robots_meta = $this->og_title = $this->og_description = '';
        $this->custom_css = $this->custom_js = '';
        $this->custom_meta = '';
        $this->icon = null;
        $this->is_active = true;
        $this->published_from = $this->published_until = null;
        $this->language = app()->getLocale();
        $this->page = null;
    }

    public function render()
    {
        $customPagesQuery = WebPage::where('is_fixed', false);

        if ($this->supportsWebPageOrdering()) {
            $customPagesQuery->orderBy('order_id')->orderBy('id');
        } else {
            $customPagesQuery->orderBy('id');
        }

        return view('livewire.admin.cms.webpages.webpages-list', [
            'fixedPages' => WebPage::where('is_fixed', true)->orderBy('id')->get(),
            'customPages' => $customPagesQuery->get(),
        ]);
    }
}
