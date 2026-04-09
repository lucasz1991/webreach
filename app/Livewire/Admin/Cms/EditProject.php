<?php

namespace App\Livewire\Admin\Cms;

use App\Models\PagebuilderProject;
use App\Models\Setting;
use Livewire\Component;

class EditProject extends Component
{
    public $projectId;
    public $project;
    private $grapejsLicenseKey;

    public $editModalOpen = false;
    public $projectName;
    public $position;
    public $status;
    public $publishedFrom;
    public $publishedUntil;
    public $orderId;

    public function mount($projectId = null)
    {
        $this->grapejsLicenseKey = Setting::getValue('grapesjs', 'api_key') ?? false;

        if ($projectId) {
            $this->projectId = $projectId;
            $this->project = PagebuilderProject::findOrFail($this->projectId);
        }

        if (!$this->project) {
            $randomNumber = rand(1000, 9999);
            $projectName = "Neues Projekt {$randomNumber}";
            $projectData = PagebuilderProject::getDefaultProjectData();

            $maxOrderId = PagebuilderProject::max('order_id') ?? 0;

            $this->project = PagebuilderProject::create([
                'name' => $projectName,
                'data' => $projectData,
                'status' => 0,
                'order_id' => $maxOrderId + 1,
            ]);

            $this->projectId = $this->project->id;
        }
    }

    public function render()
    {
        return view('livewire.admin.cms.edit-project', [
            'project' => $this->project,
            'grapejsLicenseKey' => $this->grapejsLicenseKey,
        ])->layout('layouts.master');
    }
}