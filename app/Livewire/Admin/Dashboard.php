<?php

namespace App\Livewire\Admin;

use App\Models\User;
use App\Models\WebContent;
use App\Models\WebPage;
use Livewire\Component;

class Dashboard extends Component
{
    public int $totalUsers = 0;
    public int $inactiveUsers = 0;
    public int $totalPages = 0;
    public int $totalFaqs = 0;

    public function mount(): void
    {
        $this->totalUsers = User::count();
        $this->inactiveUsers = User::where('status', false)->count();
        $this->totalPages = WebPage::count();
        $this->totalFaqs = WebContent::where('type', 'faq')->count();
    }

    public function render()
    {
        return view('livewire.admin.dashboard')->layout('layouts.admin');
    }
}
