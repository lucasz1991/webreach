<?php

namespace App\Livewire\Admin;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Livewire\Component;
use Livewire\WithPagination;

class Safety extends Component
{
    use WithPagination;

    protected $paginationTheme = 'tailwind';

    public string $search = '';
    public string $roleFilter = 'all';
    public string $statusFilter = 'all';

    public function mount(): void
    {
        Gate::authorize('safety.view');
    }

    public function updatingSearch(): void
    {
        $this->resetPage();
    }

    public function updatingRoleFilter(): void
    {
        $this->resetPage();
    }

    public function updatingStatusFilter(): void
    {
        $this->resetPage();
    }

    public function setStatus(int $userId, bool $active): void
    {
        $user = User::findOrFail($userId);
        $user->status = $active;
        $user->save();
    }

    public function render()
    {
        $users = User::query()
            ->when($this->search !== '', function ($query) {
                $query->where(function ($inner) {
                    $inner->where('name', 'like', '%'.$this->search.'%')
                        ->orWhere('email', 'like', '%'.$this->search.'%');
                });
            })
            ->when($this->roleFilter !== 'all', fn ($query) => $query->where('role', $this->roleFilter))
            ->when($this->statusFilter === 'active', fn ($query) => $query->where('status', true))
            ->when($this->statusFilter === 'inactive', fn ($query) => $query->where('status', false))
            ->orderBy('name')
            ->paginate(15);

        return view('livewire.admin.safety', compact('users'))->layout('layouts.master');
    }
}
