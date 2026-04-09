<?php

namespace App\Livewire\Pages;

use App\Models\Setting;
use App\Notifications\ContactFormSubmitted;
use Illuminate\Support\Facades\Notification;
use Livewire\Component;

class Contact extends Component
{
    public ?string $name = null;
    public ?string $email = null;
    public string $subject = '';
    public string $message = '';

    public function send(): void
    {
        $this->validate([
            'subject' => ['required', 'string', 'max:255'],
            'message' => ['required', 'string'],
        ]);

        $name = auth()->check() ? auth()->user()->name : ($this->name ?: 'Website Kontaktformular');
        $email = auth()->check() ? auth()->user()->email : ($this->email ?: config('mail.from.address'));

        $adminEmail = Setting::getValue('mails', 'admin_email');
        $fallbackEmail = env('SUPER_ADMIN_MAIL') ?: config('mail.from.address');

        $recipients = array_values(array_unique(array_filter([
            $adminEmail,
            $fallbackEmail,
        ], fn ($recipient) => is_string($recipient) && filter_var($recipient, FILTER_VALIDATE_EMAIL))));

        foreach ($recipients as $recipient) {
            Notification::route('mail', $recipient)->notify(
                new ContactFormSubmitted($name, $email, $this->subject, $this->message)
            );
        }

        session()->flash('success', 'Vielen Dank. Deine Nachricht wurde erfolgreich versendet.');

        $this->reset(['name', 'email', 'subject', 'message']);
    }

    public function render()
    {
        return view('livewire.pages.contact')->layout('layouts.app');
    }
}
