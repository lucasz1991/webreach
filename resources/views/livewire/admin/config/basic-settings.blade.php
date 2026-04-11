<div
    x-cloak
    class="space-y-6"
    @settings-color-active="setActive($event.detail.field)"
    @settings-color-inactive="clearActive($event.detail.field)"
    @colorpicker:changed="changed = true"
    @settings-color-input="applyColor($event.detail.field, $event.detail.value)"
    x-data="{
        changed: false,
        activeColorKey: null,
        primaryColor: $wire.entangle('primaryColor').live,
        secondaryColor: $wire.entangle('secondaryColor').live,
        accentColor: $wire.entangle('accentColor').live,
        backgroundColor: $wire.entangle('backgroundColor').live,
        surfaceColor: $wire.entangle('surfaceColor').live,
        textColor: $wire.entangle('textColor').live,
        footerColor: $wire.entangle('footerColor').live,
        previewColor(value, fallback) {
            let next = String(value || '').trim().toUpperCase();
            if (!next.startsWith('#')) {
                next = '#' + next;
            }

            if (/^#[0-9A-F]{6}([0-9A-F]{2})?$/.test(next)) {
                return next;
            }

            let safeFallback = String(fallback || '#000000').trim().toUpperCase();
            if (!safeFallback.startsWith('#')) {
                safeFallback = '#' + safeFallback;
            }

            return /^#[0-9A-F]{6}([0-9A-F]{2})?$/.test(safeFallback) ? safeFallback : '#000000';
        },
        hexToRgba(value, alpha) {
            const hex = this.previewColor(value, '#000000').replace('#', '');
            const rgbHex = hex.slice(0, 6);
            const numeric = Number.parseInt(rgbHex, 16);
            const baseAlpha = hex.length === 8 ? Number.parseInt(hex.slice(6, 8), 16) / 255 : 1;
            const finalAlpha = Math.max(0, Math.min(1, baseAlpha * alpha));

            return 'rgba(' + ((numeric >> 16) & 255) + ', ' + ((numeric >> 8) & 255) + ', ' + (numeric & 255) + ', ' + finalAlpha + ')';
        },
        setActive(field) {
            this.activeColorKey = field;
        },
        clearActive(field) {
            if (this.activeColorKey === field) {
                this.activeColorKey = null;
            }
        },
        isActive(field) {
            return this.activeColorKey === field;
        },
        spotStyle(field, value, restingBorder = 'rgba(226,232,240,0.92)', restingShadow = '0 14px 34px -26px rgba(15,23,42,0.18)') {
            const color = this.previewColor(value, '#000000');

            return {
                borderColor: this.isActive(field) ? this.hexToRgba(color, 0.44) : restingBorder,
                boxShadow: this.isActive(field)
                    ? '0 0 0 3px ' + this.hexToRgba(color, 0.14) + ', 0 28px 50px -34px ' + this.hexToRgba(color, 0.55)
                    : restingShadow,
                transform: this.isActive(field) ? 'translateY(-2px)' : 'translateY(0)'
            };
        },
        mergeStyles(base, extra) {
            return Object.assign({}, base, extra);
        },
        applyColor(field, value) {
            if (Object.prototype.hasOwnProperty.call(this, field)) {
                this[field] = this.previewColor(value, this[field] || '#000000');
                this.changed = true;
            }
        },
        openColorPicker(field) {
            this.setActive(field);
            window.dispatchEvent(new CustomEvent('colorpicker:open', { detail: { field } }));
        }
    }"
>
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <h2 class="text-2xl font-semibold">Basis-Einstellungen</h2>
        <div class="mt-2 ml-3 flex items-center space-x-3 md:mt-0">
            <label for="maintenanceMode" class="flex cursor-pointer items-center">
                <input id="maintenanceMode" name="maintenanceMode" type="checkbox" wire:model.live="maintenanceMode" @change="changed = true" class="peer sr-only" />
                <div class="relative h-5 w-9 rounded-full bg-gray-200 transition peer-checked:bg-blue-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300">
                    <span class="absolute start-[2px] top-[2px] h-4 w-4 rounded-full border border-gray-300 bg-white transition peer-checked:translate-x-full"></span>
                </div>
                <span class="ms-3 text-sm font-medium text-gray-900">Wartungsmodus</span>
            </label>
        </div>
    </div>

    @if (session()->has('success'))
        <div class="mb-4 rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700">{{ session('success') }}</div>
    @endif

    <div class="space-y-8">
        <x-settings-collapse>
            <x-slot name="trigger">Applikationsdetails</x-slot>
            <x-slot name="content">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Firma</label>
                        <input type="text" wire:model.live="companyName" @change="changed = true" class="w-full rounded border px-4 py-2">
                        @error('companyName') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" wire:model.live="appName" @change="changed = true" class="w-full rounded border px-4 py-2">
                        @error('appName') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Kontakt E-Mail</label>
                        <input type="email" wire:model.live="contactEmail" @change="changed = true" class="w-full rounded border px-4 py-2">
                        @error('contactEmail') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Zeitzone</label>
                        <select wire:model.live="timezone" @change="changed = true" class="w-full rounded border bg-white px-4 py-2">
                            <option value="Europe/Berlin">Berlin</option>
                            <option value="America/New_York">New York</option>
                            <option value="Asia/Tokyo">Tokio</option>
                        </select>
                        @error('timezone') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                </div>
            </x-slot>
        </x-settings-collapse>

        @if (Auth::user()->role == 'admin')
            @php
                $colorFields = [
                    ['field' => 'primaryColor', 'label' => 'Primärfarbe', 'description' => 'Navigation, Brand-Hervorhebung und tragende Aktionen.', 'fallback' => '#2563eb', 'usage' => ['Navbar', 'Brand'], 'swatches' => ['#1d4ed8', '#2563eb', '#3b82f6', '#0f172a']],
                    ['field' => 'secondaryColor', 'label' => 'Sekundärfarbe', 'description' => 'Badges, Seitenelemente und ruhige Flächen mit mehr Gewicht.', 'fallback' => '#64748b', 'usage' => ['Badges', 'Panels'], 'swatches' => ['#475569', '#64748b', '#94a3b8', '#334155']],
                    ['field' => 'accentColor', 'label' => 'Akzentfarbe', 'description' => 'CTA, interaktive Highlights und starke Signale.', 'fallback' => '#14b8a6', 'usage' => ['CTA', 'Highlights'], 'swatches' => ['#0f766e', '#14b8a6', '#2dd4bf', '#22c55e']],
                    ['field' => 'backgroundColor', 'label' => 'Hintergrundfarbe', 'description' => 'Gesamte Seitenfläche und der großzügige Raum im Layout.', 'fallback' => '#f8fafc', 'usage' => ['Page', 'Canvas'], 'swatches' => ['#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0']],
                    ['field' => 'surfaceColor', 'label' => 'Surface-Farbe', 'description' => 'Karten, Karten-Overlays und angehobene Container.', 'fallback' => '#ffffff', 'usage' => ['Cards', 'Overlays'], 'swatches' => ['#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0']],
                    ['field' => 'textColor', 'label' => 'Textfarbe', 'description' => 'Headline-Kontrast, Lesbarkeit und starke Linien.', 'fallback' => '#0f172a', 'usage' => ['Text', 'Lines'], 'swatches' => ['#020617', '#0f172a', '#1e293b', '#334155']],
                    ['field' => 'footerColor', 'label' => 'Footer-Farbe', 'description' => 'Abschlussbereich, Footer-Navigation und dunkle Zonen.', 'fallback' => '#0f172a', 'usage' => ['Footer', 'Dark Area'], 'swatches' => ['#020617', '#0f172a', '#111827', '#1e293b']],
                ];
            @endphp

            <x-settings-collapse>
                <x-slot name="trigger">Grundfarben</x-slot>
                <x-slot name="content">
                    <div class="grid gap-6 xl:grid-cols-[minmax(0,1.28fr)_minmax(320px,0.92fr)]">
                        <div class="space-y-4">

                            <div class="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 p-3 shadow-[0_28px_70px_-30px_rgba(15,23,42,0.35)]">
                                <div class="absolute inset-0 opacity-80" :style="{ background: 'radial-gradient(circle at top right, ' + hexToRgba(accentColor, 0.18) + ', transparent 30%), radial-gradient(circle at left bottom, ' + hexToRgba(primaryColor, 0.14) + ', transparent 34%)' }"></div>
                                <div class="relative overflow-hidden rounded-[28px] border border-white/70 transition-all duration-200 ease-out" style="aspect-ratio: 16 / 9;"
                                    :style="mergeStyles(spotStyle('backgroundColor', backgroundColor, 'rgba(255,255,255,0.72)', '0 18px 46px -24px rgba(15,23,42,0.45)'), { backgroundColor: previewColor(backgroundColor, '#f8fafc') })"
                                    @mouseenter="setActive('backgroundColor')" @mouseleave="clearActive('backgroundColor')" @click="openColorPicker('backgroundColor')" role="button" tabindex="0">
                                    <div class="flex h-full flex-col">
                                        <div class="flex items-center justify-between gap-6 px-6 py-4 transition-all duration-200 ease-out"
                                            :style="mergeStyles(spotStyle('primaryColor', primaryColor, 'rgba(255,255,255,0.16)', '0 12px 30px -20px rgba(15,23,42,0.2)'), { backgroundColor: previewColor(primaryColor, '#2563eb') })"
                                            @mouseenter.stop="setActive('primaryColor')" @mouseleave.stop="clearActive('primaryColor')" @click.stop="openColorPicker('primaryColor')" role="button" tabindex="0">
                                            <div class="flex items-center gap-3"><div class="h-10 w-10 rounded-2xl border border-white/20 bg-white/15"></div><div class="space-y-2"><div class="h-2.5 w-20 rounded-full bg-white/80"></div><div class="h-2 w-14 rounded-full bg-white/45"></div></div></div>
                                            <div class="hidden items-center gap-3 sm:flex"><span class="h-2.5 w-14 rounded-full bg-white/45"></span><span class="h-2.5 w-12 rounded-full bg-white/65"></span><span class="h-2.5 w-10 rounded-full bg-white/35"></span></div>
                                        </div>

                                        <div class="grid flex-1 gap-5 p-6 lg:grid-cols-[minmax(0,1.2fr)_250px]">
                                            <div class="space-y-5">
                                                <div class="flex flex-wrap gap-3">
                                                    <div class="inline-flex h-9 w-28 items-center rounded-full border transition-all duration-200 ease-out"
                                                        :style="mergeStyles(spotStyle('secondaryColor', secondaryColor, hexToRgba(secondaryColor, 0.14), '0 10px 20px -18px rgba(15,23,42,0.2)'), { backgroundColor: previewColor(secondaryColor, '#64748b') })"
                                                        @mouseenter="setActive('secondaryColor')" @mouseleave="clearActive('secondaryColor')" @click.stop="openColorPicker('secondaryColor')" role="button" tabindex="0"><span class="mx-auto h-2 w-14 rounded-full bg-white/75"></span></div>
                                                    <div class="inline-flex h-9 w-24 items-center rounded-full border transition-all duration-200 ease-out"
                                                        :style="mergeStyles(spotStyle('accentColor', accentColor, hexToRgba(accentColor, 0.14), '0 10px 20px -18px rgba(15,23,42,0.18)'), { backgroundColor: previewColor(accentColor, '#14b8a6') })"
                                                        @mouseenter="setActive('accentColor')" @mouseleave="clearActive('accentColor')" @click.stop="openColorPicker('accentColor')" role="button" tabindex="0"><span class="mx-auto h-2 w-12 rounded-full bg-white/75"></span></div>
                                                </div>

                                                <div class="space-y-4 rounded-[28px] border p-5 transition-all duration-200 ease-out"
                                                    :style="mergeStyles(spotStyle('surfaceColor', surfaceColor, 'rgba(255,255,255,0.68)', '0 16px 34px -26px rgba(15,23,42,0.16)'), { backgroundColor: previewColor(surfaceColor, '#ffffff'), borderColor: hexToRgba(secondaryColor, 0.16) })"
                                                    @mouseenter="setActive('surfaceColor')" @mouseleave="clearActive('surfaceColor')" @click.stop="openColorPicker('surfaceColor')" role="button" tabindex="0">
                                                    <div class="space-y-3 rounded-[24px] border border-transparent p-1 transition-all duration-200 ease-out"
                                                        :style="spotStyle('textColor', textColor, 'transparent', 'none')"
                                                        @mouseenter.stop="setActive('textColor')" @mouseleave.stop="clearActive('textColor')" @click.stop="openColorPicker('textColor')" role="button" tabindex="0">
                                                        <div class="h-3 w-20 rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.16) }"></div>
                                                        <div class="h-8 w-full max-w-[18rem] rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.92) }"></div>
                                                        <div class="h-8 w-4/5 rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.7) }"></div>
                                                    </div>
                                                    <div class="flex flex-wrap gap-3">
                                                        <button type="button" class="inline-flex h-12 w-40 items-center justify-center rounded-2xl border transition-all duration-200 ease-out"
                                                            :style="mergeStyles(spotStyle('accentColor', accentColor, hexToRgba(accentColor, 0.16), '0 14px 28px -24px rgba(15,23,42,0.18)'), { backgroundColor: previewColor(accentColor, '#14b8a6') })"
                                                            @mouseenter="setActive('accentColor')" @mouseleave="clearActive('accentColor')" @click.stop="openColorPicker('accentColor')"><span class="h-2.5 w-20 rounded-full bg-white/75"></span></button>
                                                        <div class="inline-flex h-12 w-28 items-center justify-center rounded-2xl border transition-all duration-200 ease-out"
                                                            :style="mergeStyles(spotStyle('footerColor', footerColor, hexToRgba(footerColor, 0.14), '0 10px 20px -18px rgba(15,23,42,0.16)'), { backgroundColor: hexToRgba(footerColor, 0.1), borderColor: hexToRgba(footerColor, 0.22) })"
                                                            @mouseenter="setActive('footerColor')" @mouseleave="clearActive('footerColor')" @click.stop="openColorPicker('footerColor')" role="button" tabindex="0"><span class="h-2.5 w-14 rounded-full" :style="{ backgroundColor: previewColor(footerColor, '#0f172a') }"></span></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="space-y-4">
                                                <div class="rounded-[28px] border p-4 transition-all duration-200 ease-out"
                                                    :style="mergeStyles(spotStyle('surfaceColor', surfaceColor, 'rgba(255,255,255,0.7)', '0 16px 34px -26px rgba(15,23,42,0.16)'), { backgroundColor: previewColor(surfaceColor, '#ffffff'), borderColor: hexToRgba(secondaryColor, 0.16) })"
                                                    @mouseenter="setActive('surfaceColor')" @mouseleave="clearActive('surfaceColor')" @click.stop="openColorPicker('surfaceColor')" role="button" tabindex="0">
                                                    <div class="flex items-center justify-between">
                                                        <div class="space-y-2"><div class="h-2.5 w-12 rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.34) }"></div><div class="h-6 w-16 rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.84) }"></div></div>
                                                        <div class="h-10 w-10 rounded-2xl transition-all duration-200 ease-out"
                                                            :style="mergeStyles(spotStyle('accentColor', accentColor, hexToRgba(accentColor, 0.16), '0 10px 22px -18px rgba(15,23,42,0.18)'), { backgroundColor: previewColor(accentColor, '#14b8a6') })"
                                                            @mouseenter.stop="setActive('accentColor')" @mouseleave.stop="clearActive('accentColor')" @click.stop="openColorPicker('accentColor')"></div>
                                                    </div>
                                                    <div class="mt-4 h-2 overflow-hidden rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.18) }"><div class="h-full rounded-full transition-all duration-200 ease-out" :style="{ width: '72%', backgroundColor: previewColor(accentColor, '#14b8a6') }"></div></div>
                                                    <div class="mt-4 grid grid-cols-3 gap-2"><div class="h-12 rounded-2xl" :style="{ backgroundColor: hexToRgba(textColor, 0.08) }"></div><div class="h-12 rounded-2xl" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.14) }"></div><div class="h-12 rounded-2xl" :style="{ backgroundColor: hexToRgba(accentColor, 0.14) }"></div></div>
                                                </div>

                                                <div class="rounded-[28px] border p-4 transition-all duration-200 ease-out"
                                                    :style="mergeStyles(spotStyle('secondaryColor', secondaryColor, hexToRgba(secondaryColor, 0.16), '0 14px 30px -24px rgba(15,23,42,0.18)'), { backgroundColor: hexToRgba(secondaryColor, 0.08) })"
                                                    @mouseenter="setActive('secondaryColor')" @mouseleave="clearActive('secondaryColor')" @click.stop="openColorPicker('secondaryColor')" role="button" tabindex="0">
                                                    <div class="space-y-3"><div class="h-2.5 w-16 rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.42) }"></div><div class="h-3 w-28 rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.16) }"></div></div>
                                                    <div class="mt-4 rounded-[22px] border p-4" :style="{ backgroundColor: previewColor(surfaceColor, '#ffffff'), borderColor: hexToRgba(secondaryColor, 0.16) }"><div class="h-3 w-full rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.18) }"></div><div class="mt-3 h-3 w-4/5 rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.14) }"></div></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="px-6 pb-5">
                                            <div class="flex items-center justify-between rounded-[24px] border px-5 py-4 transition-all duration-200 ease-out"
                                                :style="mergeStyles(spotStyle('footerColor', footerColor, 'rgba(255,255,255,0.14)', '0 12px 24px -20px rgba(15,23,42,0.22)'), { backgroundColor: previewColor(footerColor, '#0f172a') })"
                                                @mouseenter="setActive('footerColor')" @mouseleave="clearActive('footerColor')" @click.stop="openColorPicker('footerColor')" role="button" tabindex="0">
                                                <div class="space-y-2"><div class="h-2.5 w-16 rounded-full bg-white/70"></div><div class="h-2 w-10 rounded-full bg-white/35"></div></div>
                                                <div class="flex items-center gap-3"><span class="h-2.5 w-12 rounded-full bg-white/35"></span><span class="h-2.5 w-10 rounded-full bg-white/55"></span><span class="h-2.5 w-14 rounded-full bg-white/25"></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="space-y-2.5">

                            <div class="space-y-3">
                                @foreach ($colorFields as $color)
                                    <x-settings.colors.listitem
                                        x-model="{{ $color['field'] }}"
                                        field="{{ $color['field'] }}"
                                        label="{{ $color['label'] }}"
                                        description="{{ $color['description'] }}"
                                        fallback="{{ $color['fallback'] }}"
                                        :usage="$color['usage']"
                                        :swatches="$color['swatches']"
                                    />
                                    @error($color['field']) <span class="-mt-1 block text-xs text-red-500">{{ $message }}</span> @enderror
                                @endforeach
                            </div>
                        </div>
                    </div>
                </x-slot>
            </x-settings-collapse>
        @endif

        <x-settings-collapse>
            <x-slot name="trigger">Logos & Favicon</x-slot>
            <x-slot name="content">
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">Favicon</label>
                        <input type="file" wire:model.live="favicon" @change="changed = true" class="w-full rounded border px-4 py-2">
                        @if ($favicon)
                            <img src="{{ $favicon->temporaryUrl() }}" class="mt-2 h-12 w-12 object-contain">
                        @elseif ($faviconPreview)
                            <img src="{{ $faviconPreview }}" class="mt-2 h-12 w-12 object-contain">
                        @endif
                        @error('favicon') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">Logo (Quadratisch)</label>
                        <input type="file" wire:model.live="logoSquare" @change="changed = true" class="w-full rounded border px-4 py-2">
                        @if ($logoSquare)
                            <img src="{{ $logoSquare->temporaryUrl() }}" class="mt-2 h-16 w-16 object-contain">
                        @elseif ($logoSquarePreview)
                            <img src="{{ $logoSquarePreview }}" class="mt-2 h-16 w-16 object-contain">
                        @endif
                        @error('logoSquare') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">Logo (Horizontal)</label>
                        <input type="file" wire:model.live="logoHorizontal" @change="changed = true" class="w-full rounded border px-4 py-2">
                        @if ($logoHorizontal)
                            <img src="{{ $logoHorizontal->temporaryUrl() }}" class="mt-2 h-16 object-contain">
                        @elseif ($logoHorizontalPreview)
                            <img src="{{ $logoHorizontalPreview }}" class="mt-2 h-16 object-contain">
                        @endif
                        @error('logoHorizontal') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                    <div class="space-y-2">
                        <label class="block text-sm font-medium text-gray-700">Logo (Vertikal)</label>
                        <input type="file" wire:model.live="logoVertical" @change="changed = true" class="w-full rounded border px-4 py-2">
                        @if ($logoVertical)
                            <img src="{{ $logoVertical->temporaryUrl() }}" class="mt-2 h-16 object-contain">
                        @elseif ($logoVerticalPreview)
                            <img src="{{ $logoVerticalPreview }}" class="mt-2 h-16 object-contain">
                        @endif
                        @error('logoVertical') <span class="text-xs text-red-500">{{ $message }}</span> @enderror
                    </div>
                </div>
            </x-slot>
        </x-settings-collapse>

        <div class="text-right"><x-button wire:click="saveSettings">Speichern</x-button></div>
    </div>
</div>
