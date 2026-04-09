<?php

namespace App\Livewire\Pages;

use Livewire\Component;

class Sitemap extends Component
{
    public function render()
    {
        $pages = [
            ['title' => 'Startseite', 'url' => route('home')],
            ['title' => 'Kontakt', 'url' => route('contact')],
            ['title' => 'FAQs', 'url' => route('faqs')],
            ['title' => 'How-To', 'url' => route('howto')],
            ['title' => 'Impressum', 'url' => route('imprint')],
            ['title' => 'Datenschutz', 'url' => route('privacypolicy')],
            ['title' => 'AGB', 'url' => route('terms')],
        ];

        return view('livewire.pages.sitemap', compact('pages'))->layout('layouts.app');
    }
}
