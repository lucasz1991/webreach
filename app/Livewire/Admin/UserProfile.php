<?php

namespace App\Livewire\Admin;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Livewire\Component;

class UserProfile extends Component
{
    public int $userId;
    public User $user;

    public function mount(int $userId): void
    {
        Gate::authorize('users.view');
        $this->userId = $userId;
        $this->user = User::findOrFail($userId);
    }

    public function setStatus(bool $active): void
    {
        $this->user->status = $active;
        $this->user->save();
    }

    public function render()
    {
        return view('livewire.admin.user-profile')->layout('layouts.master');
    }
}
