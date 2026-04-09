<?php

namespace App\Livewire\Admin;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class Inactivities extends Component
{
    use WithPagination;

    public string $search = '';
    public string $roleFilter = 'all';
    public string $statusFilter = 'inactive';

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

        if ($user->id === auth()->id() && ! $active) {
            session()->flash('error', 'Du kannst deinen eigenen Account nicht deaktivieren.');

            return;
        }

        $user->status = $active;
        $user->save();

        session()->flash('success', $active ? 'Benutzer wurde aktiviert.' : 'Benutzer wurde deaktiviert.');
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
            ->orderBy('status')
            ->orderBy('name')
            ->paginate(15);

        return view('livewire.admin.inactivities', [
            'users' => $users,
        ])->layout('layouts.admin');
    }
}
