<?php

namespace App\Livewire\Admin\Cms;

use App\Models\PagebuilderProject;
use App\Models\WebContent;
use App\Models\WebPage;
use Illuminate\Validation\Rule;
use Livewire\Component;
use Illuminate\Support\Str;

class Manager extends Component
{
    public ?int $editingPageId = null;
    public string $pageTitle = '';
    public string $pageSlug = '';
    public string $metaTitle = '';
    public string $metaDescription = '';
    public bool $pageIsActive = true;
    public $pagebuilderProject = null;

    public ?int $editingFaqId = null;
    public string $faqQuestion = '';
    public string $faqAnswer = '';

    public function savePage(): void
    {
        $this->validate([
            'pageTitle' => ['required', 'string', 'max:255', Rule::unique('web_pages', 'title')->ignore($this->editingPageId)],
            'pageSlug' => ['nullable', 'string', 'max:255', Rule::unique('web_pages', 'slug')->ignore($this->editingPageId)],
            'metaTitle' => ['nullable', 'string', 'max:255'],
            'metaDescription' => ['nullable', 'string'],
            'pagebuilderProject' => ['nullable', 'integer', 'exists:pagebuilder_projects,id'],
        ]);

        $slug = $this->pageSlug !== '' ? Str::slug($this->pageSlug) : Str::slug($this->pageTitle);

        $payload = [
            'title' => $this->pageTitle,
            'slug' => $slug,
            'meta_title' => $this->metaTitle !== '' ? $this->metaTitle : $this->pageTitle,
            'meta_description' => $this->metaDescription !== '' ? $this->metaDescription : null,
            'is_active' => $this->pageIsActive,
            'pagebuilder_project' => $this->pagebuilderProject ?: null,
        ];

        if ($this->editingPageId) {
            WebPage::whereKey($this->editingPageId)->update($payload);
            session()->flash('success', 'Seite wurde aktualisiert.');
        } else {
            WebPage::create($payload);
            session()->flash('success', 'Seite wurde erstellt.');
        }

        $this->resetPageForm();
    }

    public function editPage(int $pageId): void
    {
        $page = WebPage::findOrFail($pageId);

        $this->editingPageId = $page->id;
        $this->pageTitle = (string) $page->title;
        $this->pageSlug = (string) $page->slug;
        $this->metaTitle = (string) ($page->meta_title ?? '');
        $this->metaDescription = (string) ($page->meta_description ?? '');
        $this->pageIsActive = (bool) $page->is_active;
        $this->pagebuilderProject = $page->pagebuilder_project;
    }

    public function deletePage(int $pageId): void
    {
        $page = WebPage::findOrFail($pageId);

        if ($page->is_fixed) {
            session()->flash('error', 'Fixe Seiten koennen nicht geloescht werden.');

            return;
        }

        $page->delete();
        session()->flash('success', 'Seite wurde geloescht.');
    }

    public function resetPageForm(): void
    {
        $this->editingPageId = null;
        $this->pageTitle = '';
        $this->pageSlug = '';
        $this->metaTitle = '';
        $this->metaDescription = '';
        $this->pageIsActive = true;
        $this->pagebuilderProject = null;
    }

    public function saveFaq(): void
    {
        $this->validate([
            'faqQuestion' => ['required', 'string', 'max:255', Rule::unique('web_contents', 'key')->ignore($this->editingFaqId)],
            'faqAnswer' => ['required', 'string'],
        ]);

        $payload = [
            'key' => $this->faqQuestion,
            'value' => $this->faqAnswer,
            'type' => 'faq',
        ];

        if ($this->editingFaqId) {
            WebContent::whereKey($this->editingFaqId)->update($payload);
            session()->flash('success', 'FAQ wurde aktualisiert.');
        } else {
            WebContent::create($payload);
            session()->flash('success', 'FAQ wurde erstellt.');
        }

        $this->resetFaqForm();
    }

    public function editFaq(int $faqId): void
    {
        $faq = WebContent::where('type', 'faq')->findOrFail($faqId);

        $this->editingFaqId = $faq->id;
        $this->faqQuestion = (string) $faq->key;
        $this->faqAnswer = (string) $faq->value;
    }

    public function deleteFaq(int $faqId): void
    {
        WebContent::where('type', 'faq')->whereKey($faqId)->delete();
        session()->flash('success', 'FAQ wurde geloescht.');
    }

    public function resetFaqForm(): void
    {
        $this->editingFaqId = null;
        $this->faqQuestion = '';
        $this->faqAnswer = '';
    }

    public function render()
    {
        return view('livewire.admin.cms.manager', [
            'pages' => WebPage::query()->orderByDesc('is_fixed')->orderBy('title')->get(),
            'faqs' => WebContent::query()->where('type', 'faq')->orderBy('key')->get(),
            'projects' => PagebuilderProject::query()->orderBy('name')->get(['id', 'name']),
        ])->layout('layouts.admin');
    }
}
