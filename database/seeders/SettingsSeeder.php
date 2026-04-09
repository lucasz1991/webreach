<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            ['type' => 'base', 'key' => 'company_name', 'value' => 'Webreach'],
            ['type' => 'base', 'key' => 'contact_email', 'value' => 'info@example.com'],
            ['type' => 'base', 'key' => 'app_url', 'value' => config('app.url')],
            ['type' => 'base', 'key' => 'base_api_url', 'value' => config('app.url')],
            ['type' => 'base', 'key' => 'maintenance_mode', 'value' => false],
            ['type' => 'mails', 'key' => 'admin_email', 'value' => 'admin@example.com'],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['type' => $setting['type'], 'key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}
