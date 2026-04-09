<?php

namespace App\Livewire\Admin\Cms;

use App\Models\PagebuilderProject;
use App\Support\PivotSorter;
use Livewire\Component;

class ProjektList extends Component
{
    public $projects = [];

    protected $listeners = [
        'refreshProjects' => 'loadProjects',
        'orderProject' => 'handleOrderProject',
    ];

    public function mount()
    {
        $this->loadProjects();
    }

    public function loadProjects()
    {
        $this->projects = PagebuilderProject::where('type', 'module')->orderBy('order_id')->get();
    }

    public function handleOrderProject($item, $position)
    {
        if (!isset($item, $position)) {
            return;
        }

        PivotSorter::reorderByOrderColumn(
            PagebuilderProject::class,
            $item,
            (int) $position,
            'order_id',
            fn ($query) => $query->where('type', 'module')
        );

        $this->loadProjects();
    }

    public function deleteProject($id)
    {
        PagebuilderProject::findOrFail($id)->delete();
        $this->loadProjects();
    }

    public function duplicateProject($id)
    {
        $project = PagebuilderProject::findOrFail($id);

        $newProjectName = $project->name . ' (Kopie ' . rand(1000, 9999) . ')';
        $maxOrderId = PagebuilderProject::where('type', 'module')->max('order_id') ?? 0;

        $newProject = $project->replicate();
        $newProject->name = $newProjectName;
        $newProject->status = 0;
        $newProject->order_id = $maxOrderId + 1;
        $newProject->save();

        $this->loadProjects();
    }

    public function toggleLockProject($id)
    {
        $project = PagebuilderProject::findOrFail($id);
        $project->update(['lock' => !$project->lock]);

        $this->loadProjects();
    }

    public function render()
    {
        return view('livewire.admin.cms.projekt-list');
    }
}