<?php

namespace App\Livewire;

use App\Models\PagebuilderProject;
use App\Models\WebPage;
use App\Services\PagebuilderProjectExportService;
use Livewire\Component;

class WebContentManager extends Component
{
    public bool $showWebsiteExportModal = false;
    public string $websiteBundleName = '';
    public string $websiteTitle = '';
    public string $websiteDescription = '';
    public bool $websiteIncludeHtaccess = true;
    public bool $websiteIncludeReadme = true;
    public bool $websiteIncludeApiBridge = false;
    public bool $websiteIncludeApiProxy = false;
    public bool $websitePublishedOnly = true;
    public string $websiteApiBaseUrl = '';

    public function openWebsiteExportModal(): void
    {
        $this->resetValidation();
        $this->websiteBundleName = config('app.name', 'webreach-website');
        $this->websiteTitle = config('app.name', 'WebReach');
        $this->websiteDescription = '';
        $this->websiteIncludeHtaccess = true;
        $this->websiteIncludeReadme = true;
        $this->websiteIncludeApiBridge = false;
        $this->websiteIncludeApiProxy = false;
        $this->websitePublishedOnly = true;
        $this->websiteApiBaseUrl = rtrim((string) config('app.url'), '/');
        $this->showWebsiteExportModal = true;
    }

    public function updatedWebsiteIncludeApiBridge(bool $value): void
    {
        if (!$value) {
            $this->websiteIncludeApiProxy = false;
        }
    }

    public function exportWebsite()
    {
        $validated = $this->validate([
            'websiteBundleName' => ['required', 'string', 'max:120'],
            'websiteTitle' => ['nullable', 'string', 'max:255'],
            'websiteDescription' => ['nullable', 'string', 'max:500'],
            'websiteApiBaseUrl' => ['nullable', 'string', 'max:255'],
            'websiteIncludeHtaccess' => ['boolean'],
            'websiteIncludeReadme' => ['boolean'],
            'websiteIncludeApiBridge' => ['boolean'],
            'websiteIncludeApiProxy' => ['boolean'],
            'websitePublishedOnly' => ['boolean'],
        ]);

        if ($validated['websiteIncludeApiBridge'] && trim($validated['websiteApiBaseUrl']) === '') {
            $this->addError('websiteApiBaseUrl', 'Bitte eine WebReach API Basis-URL angeben.');
            return null;
        }

        try {
            $result = app(PagebuilderProjectExportService::class)->exportWebsite([
                'bundle_name' => $validated['websiteBundleName'],
                'site_title' => $validated['websiteTitle'],
                'site_description' => $validated['websiteDescription'],
                'include_htaccess' => $validated['websiteIncludeHtaccess'],
                'include_readme' => $validated['websiteIncludeReadme'],
                'include_api_bridge' => $validated['websiteIncludeApiBridge'],
                'include_api_proxy' => $validated['websiteIncludeApiProxy'],
                'published_only' => $validated['websitePublishedOnly'],
                'api_base_url' => trim($validated['websiteApiBaseUrl']),
            ]);

            $this->showWebsiteExportModal = false;

            return response()->download($result['zip_path'], $result['download_name'])->deleteFileAfterSend(true);
        } catch (\Throwable $exception) {
            report($exception);
            $this->addError('websiteExport', 'Der Website-Export konnte nicht erstellt werden. Details stehen im Log.');
            return null;
        }
    }

    public function render()
    {
        return view('livewire.web-content-manager', [
            'pageCount' => WebPage::count(),
            'moduleCount' => PagebuilderProject::where('type', 'module')->count(),
        ])->layout('layouts.master');
    }
}
