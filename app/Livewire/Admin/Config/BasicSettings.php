<?php

namespace App\Livewire\Admin\Config;

use App\Models\Setting;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Livewire\Component;
use Livewire\WithFileUploads;

class BasicSettings extends Component
{
    use WithFileUploads;

    public $companyName;
    public $appName;
    public $timezone;
    public $contactEmail;
    public $maintenanceMode;

    public $favicon;
    public $logoSquare;
    public $logoHorizontal;
    public $logoVertical;

    public $faviconPreview;
    public $logoSquarePreview;
    public $logoHorizontalPreview;
    public $logoVerticalPreview;

    public $primaryColor;
    public $secondaryColor;
    public $accentColor;
    public $backgroundColor;
    public $surfaceColor;
    public $textColor;
    public $footerColor;

    public function mount(): void
    {
        $this->maintenanceMode = (bool) Setting::getValueUncached('base', 'maintenance_mode');
        $this->companyName = Setting::getValueUncached('base', 'company_name');
        $this->appName = Setting::getValueUncached('base', 'app_name');
        $this->timezone = Setting::getValueUncached('base', 'timezone') ?: config('app.timezone');
        $this->contactEmail = Setting::getValueUncached('base', 'contact_email');

        foreach ($this->colorDefaults() as $property => $default) {
            $settingKey = Str::snake($property);
            $this->{$property} = $this->normalizeColor(Setting::getValueUncached('base', $settingKey), $default);
        }

        $this->faviconPreview = $this->storedImageUrl('favicon');
        $this->logoSquarePreview = $this->storedImageUrl('logo_square');
        $this->logoHorizontalPreview = $this->storedImageUrl('logo_horizontal');
        $this->logoVerticalPreview = $this->storedImageUrl('logo_vertical');
    }

    public function saveSettings(): void
    {
        $this->validate($this->rules());

        Setting::setValue('base', 'company_name', $this->companyName);
        Setting::setValue('base', 'app_name', $this->appName);
        Setting::setValue('base', 'timezone', $this->timezone);
        Setting::setValue('base', 'contact_email', $this->contactEmail);
        Setting::setValue('base', 'maintenance_mode', (bool) $this->maintenanceMode);

        foreach (array_keys($this->colorDefaults()) as $property) {
            Setting::setValue('base', Str::snake($property), $this->{$property});
        }

        $this->persistUpload('favicon', 'favicon');
        $this->persistUpload('logoSquare', 'logo_square');
        $this->persistUpload('logoHorizontal', 'logo_horizontal');
        $this->persistUpload('logoVertical', 'logo_vertical');

        $this->mount();

        session()->flash('success', 'Einstellungen erfolgreich gespeichert.');
    }

    protected function rules(): array
    {
        $rules = [
            'companyName' => 'nullable|string|max:255',
            'appName' => 'nullable|string|max:255',
            'timezone' => 'nullable|timezone',
            'contactEmail' => 'nullable|email',
            'favicon' => 'nullable|image|max:1024',
            'logoSquare' => 'nullable|image|max:2048',
            'logoHorizontal' => 'nullable|image|max:2048',
            'logoVertical' => 'nullable|image|max:2048',
        ];

        foreach (array_keys($this->colorDefaults()) as $property) {
            $rules[$property] = ['required', 'regex:/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/'];
        }

        return $rules;
    }

    protected function colorDefaults(): array
    {
        return [
            'primaryColor' => '#2563eb',
            'secondaryColor' => '#64748b',
            'accentColor' => '#14b8a6',
            'backgroundColor' => '#f8fafc',
            'surfaceColor' => '#ffffff',
            'textColor' => '#0f172a',
            'footerColor' => '#0f172a',
        ];
    }

    protected function persistUpload(string $property, string $settingKey): void
    {
        if (!$this->{$property}) {
            return;
        }

        $oldPath = Setting::getValueUncached('base', $settingKey);
        if ($oldPath && Storage::disk('public')->exists($oldPath)) {
            Storage::disk('public')->delete($oldPath);
        }

        $extension = $this->{$property}->getClientOriginalExtension() ?: $this->{$property}->extension();
        $filename = Str::uuid() . '.' . strtolower($extension);
        $path = $this->{$property}->storeAs('settings/branding', $filename, 'public');

        Setting::setValue('base', $settingKey, $path);
        $this->{$property . 'Preview'} = Storage::disk('public')->url($path);
        $this->{$property} = null;
    }

    protected function storedImageUrl(string $settingKey): ?string
    {
        $path = Setting::getValueUncached('base', $settingKey);

        return $path ? Storage::disk('public')->url($path) : null;
    }

    protected function normalizeColor($value, string $fallback): string
    {
        return preg_match('/^#[0-9A-Fa-f]{6}([0-9A-Fa-f]{2})?$/', (string) $value) ? strtoupper((string) $value) : strtoupper($fallback);
    }

    public function render()
    {
        return view('livewire.admin.config.basic-settings');
    }
}
