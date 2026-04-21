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
                    <div class="grid gap-[3%] xl:grid-cols-[minmax(0,1.28fr)_minmax(0,0.92fr)]">
                        <div class="max-w-full space-y-[2.5%]">

                            <div class="relative w-full max-w-full overflow-hidden rounded-[4%] border border-slate-200 bg-slate-50 p-[2%] shadow-[0_28px_70px_-30px_rgba(15,23,42,0.35)]">
                                <div class="absolute inset-0 opacity-80" :style="{ background: 'radial-gradient(circle at top right, ' + hexToRgba(accentColor, 0.18) + ', transparent 30%), radial-gradient(circle at left bottom, ' + hexToRgba(primaryColor, 0.14) + ', transparent 34%)' }"></div>
                                <div class="relative max-w-full overflow-hidden rounded-[3.5%] border border-white/70 transition-all duration-200 ease-out" style="aspect-ratio: 16 / 9;"
                                    :style="mergeStyles(spotStyle('backgroundColor', backgroundColor, 'rgba(255,255,255,0.72)', '0 18px 46px -24px rgba(15,23,42,0.45)'), { backgroundColor: previewColor(backgroundColor, '#f8fafc') })"
                                    @mouseenter="setActive('backgroundColor')" @mouseleave="clearActive('backgroundColor')" @click="openColorPicker('backgroundColor')" role="button" tabindex="0">
                                    <div class="flex h-full flex-col">
                                        <div class="flex items-center justify-between gap-[2%] px-[3%] py-[1.6%] transition-all duration-200 ease-out"
                                            :style="mergeStyles(spotStyle('primaryColor', primaryColor, 'rgba(255,255,255,0.16)', '0 12px 30px -20px rgba(15,23,42,0.2)'), { backgroundColor: previewColor(primaryColor, '#2563eb') })"
                                            @mouseenter.stop="setActive('primaryColor')" @mouseleave.stop="clearActive('primaryColor')" @click.stop="openColorPicker('primaryColor')" role="button" tabindex="0">
                                            <div class="flex w-[35%] min-w-0 items-center gap-[5%]">
                                                <div class="aspect-square w-[18%] rounded-[28%] border border-slate-200 bg-slate-100"></div>
                                                <div class="w-[68%] space-y-[8%]"><div class="w-[62%] aspect-[8/1] rounded-full bg-white/85"></div><div class="w-[46%] aspect-[7/1] rounded-full bg-white/50"></div></div>
                                            </div>
                                            <div class="hidden w-[46%] min-w-0 items-center justify-end gap-[3%] sm:flex">
                                                <span class="w-[20%] aspect-[10/1] rounded-full border border-white/20 bg-white/35"></span>
                                                <span class="w-[20%] aspect-[10/1] rounded-full border border-white/20 bg-white/55"></span>
                                                <span class="w-[20%] aspect-[10/1] rounded-full border border-white/20 bg-white/40"></span>
                                                <span class="w-[20%] aspect-[10/1] rounded-full border border-white/20 bg-white/30"></span>
                                            </div>
                                        </div>

                                        <div class="grid min-w-0 flex-1 gap-[3%] p-[3%] lg:grid-cols-[minmax(0,1fr)_30%]">
                                            <div class="min-w-0 space-y-[3%]">
                                                <div class="flex flex-wrap gap-[3%]">
                                                    <div class="inline-flex w-[26%] aspect-[32/9] items-center rounded-full border transition-all duration-200 ease-out"
                                                        :style="mergeStyles(spotStyle('secondaryColor', secondaryColor, hexToRgba(secondaryColor, 0.14), '0 10px 20px -18px rgba(15,23,42,0.2)'), { backgroundColor: previewColor(secondaryColor, '#64748b') })"
                                                        @mouseenter="setActive('secondaryColor')" @mouseleave="clearActive('secondaryColor')" @click.stop="openColorPicker('secondaryColor')" role="button" tabindex="0"><span class="mx-auto w-[50%] aspect-[7/1] rounded-full bg-white/75"></span></div>
                                                    <div class="inline-flex w-[22%] aspect-[10/3] items-center rounded-full border transition-all duration-200 ease-out"
                                                        :style="mergeStyles(spotStyle('accentColor', accentColor, hexToRgba(accentColor, 0.14), '0 10px 20px -18px rgba(15,23,42,0.18)'), { backgroundColor: previewColor(accentColor, '#14b8a6') })"
                                                        @mouseenter="setActive('accentColor')" @mouseleave="clearActive('accentColor')" @click.stop="openColorPicker('accentColor')" role="button" tabindex="0"><span class="mx-auto w-[50%] aspect-[6/1] rounded-full bg-white/75"></span></div>
                                                </div>

                                                <div class="space-y-[3%] rounded-[7%] border p-[4%] transition-all duration-200 ease-out"
                                                    :style="mergeStyles(spotStyle('surfaceColor', surfaceColor, 'rgba(255,255,255,0.68)', '0 16px 34px -26px rgba(15,23,42,0.16)'), { backgroundColor: previewColor(surfaceColor, '#ffffff'), borderColor: hexToRgba(secondaryColor, 0.16) })"
                                                    @mouseenter="setActive('surfaceColor')" @mouseleave="clearActive('surfaceColor')" @click.stop="openColorPicker('surfaceColor')" role="button" tabindex="0">
                                                    <div class="space-y-[3%] rounded-[7%] border border-transparent p-[2%] transition-all duration-200 ease-out"
                                                        :style="spotStyle('textColor', textColor, 'transparent', 'none')"
                                                        @mouseenter.stop="setActive('textColor')" @mouseleave.stop="clearActive('textColor')" @click.stop="openColorPicker('textColor')" role="button" tabindex="0">
                                                        <div class="w-[24%] aspect-[24/3] rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.16) }"></div>
                                                        <div class="w-full aspect-[14/1] rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.92) }"></div>
                                                        <div class="w-[80%] aspect-[14/1] rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.7) }"></div>
                                                    </div>
                                                    <div class="flex flex-wrap gap-[3%]">
                                                        <button type="button" class="inline-flex w-[34%] aspect-[14/3] items-center justify-center rounded-[16%] border transition-all duration-200 ease-out"
                                                            :style="mergeStyles(spotStyle('accentColor', accentColor, hexToRgba(accentColor, 0.16), '0 14px 28px -24px rgba(15,23,42,0.18)'), { backgroundColor: previewColor(accentColor, '#14b8a6') })"
                                                            @mouseenter="setActive('accentColor')" @mouseleave="clearActive('accentColor')" @click.stop="openColorPicker('accentColor')"><span class="w-[50%] aspect-[8/1] rounded-full bg-white/75"></span></button>
                                                        <div class="inline-flex w-[22%] aspect-[10/3] items-center justify-center rounded-[16%] border transition-all duration-200 ease-out"
                                                            :style="mergeStyles(spotStyle('footerColor', footerColor, hexToRgba(footerColor, 0.14), '0 10px 20px -18px rgba(15,23,42,0.16)'), { backgroundColor: hexToRgba(footerColor, 0.1), borderColor: hexToRgba(footerColor, 0.22) })"
                                                            @mouseenter="setActive('footerColor')" @mouseleave="clearActive('footerColor')" @click.stop="openColorPicker('footerColor')" role="button" tabindex="0"><span class="w-[50%] aspect-[28/5] rounded-full" :style="{ backgroundColor: previewColor(footerColor, '#0f172a') }"></span></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="min-w-0 space-y-[3%]">
                                                <div class="rounded-[7%] border p-[4%] transition-all duration-200 ease-out"
                                                    :style="mergeStyles(spotStyle('surfaceColor', surfaceColor, 'rgba(255,255,255,0.7)', '0 16px 34px -26px rgba(15,23,42,0.16)'), { backgroundColor: previewColor(surfaceColor, '#ffffff'), borderColor: hexToRgba(secondaryColor, 0.16) })"
                                                    @mouseenter="setActive('surfaceColor')" @mouseleave="clearActive('surfaceColor')" @click.stop="openColorPicker('surfaceColor')" role="button" tabindex="0">
                                                    <div class="flex items-center justify-between">
                                                        <div class="space-y-[6%]"><div class="w-[24%] aspect-[24/5] rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.34) }"></div><div class="w-[32%] aspect-[10/3] rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.84) }"></div></div>
                                                        <div class="w-[20%] aspect-square rounded-[18%] transition-all duration-200 ease-out"
                                                            :style="mergeStyles(spotStyle('accentColor', accentColor, hexToRgba(accentColor, 0.16), '0 10px 22px -18px rgba(15,23,42,0.18)'), { backgroundColor: previewColor(accentColor, '#14b8a6') })"
                                                            @mouseenter.stop="setActive('accentColor')" @mouseleave.stop="clearActive('accentColor')" @click.stop="openColorPicker('accentColor')"></div>
                                                    </div>
                                                    <div class="mt-[4%] w-full aspect-[58/1] overflow-hidden rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.18) }"><div class="h-full rounded-full transition-all duration-200 ease-out" :style="{ width: '68%', backgroundColor: previewColor(accentColor, '#14b8a6') }"></div></div>
                                                    <div class="mt-[4%] grid grid-cols-3 gap-[3%]"><div class="w-full aspect-[12/5] rounded-[16%]" :style="{ backgroundColor: hexToRgba(textColor, 0.08) }"></div><div class="w-full aspect-[12/5] rounded-[16%]" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.14) }"></div><div class="w-full aspect-[12/5] rounded-[16%]" :style="{ backgroundColor: hexToRgba(accentColor, 0.14) }"></div></div>
                                                </div>

                                                <div class="rounded-[7%] border p-[4%] transition-all duration-200 ease-out"
                                                    :style="mergeStyles(spotStyle('secondaryColor', secondaryColor, hexToRgba(secondaryColor, 0.16), '0 14px 30px -24px rgba(15,23,42,0.18)'), { backgroundColor: hexToRgba(secondaryColor, 0.08) })"
                                                    @mouseenter="setActive('secondaryColor')" @mouseleave="clearActive('secondaryColor')" @click.stop="openColorPicker('secondaryColor')" role="button" tabindex="0">
                                                    <div class="space-y-[3%]"><div class="w-[34%] aspect-[32/5] rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.42) }"></div><div class="w-[58%] aspect-[28/3] rounded-full" :style="{ backgroundColor: hexToRgba(textColor, 0.16) }"></div></div>
                                                    <div class="mt-[5%] rounded-[7%] border p-[4%]" :style="{ backgroundColor: previewColor(surfaceColor, '#ffffff'), borderColor: hexToRgba(secondaryColor, 0.16) }"><div class="w-full aspect-[15/1] rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.18) }"></div><div class="mt-[4%] w-[80%] aspect-[15/1] rounded-full" :style="{ backgroundColor: hexToRgba(secondaryColor, 0.14) }"></div></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="px-[5%] pb-[4.5%]">
                                            <div class="flex items-center justify-between rounded-[7%] border px-[4%] py-[3%] transition-all duration-200 ease-out"
                                                :style="mergeStyles(spotStyle('footerColor', footerColor, 'rgba(255,255,255,0.14)', '0 12px 24px -20px rgba(15,23,42,0.22)'), { backgroundColor: previewColor(footerColor, '#0f172a') })"
                                                @mouseenter="setActive('footerColor')" @mouseleave="clearActive('footerColor')" @click.stop="openColorPicker('footerColor')" role="button" tabindex="0">
                                                <div class="mx-auto flex w-[46%] items-center justify-center">
                                                    <span class="w-[54%] h-[2%] rounded-full bg-white/70"></span>
                                                </div>
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
                    <x-ui.filepool.image-upload-field
                        label="Favicon"
                        :model="'favicon'"
                        :temporary-url="$favicon ? $favicon->temporaryUrl() : null"
                        :preview-url="$faviconPreview"
                        preview-class="h-12 w-12 object-contain"
                        :max-filesize="1"
                        drop-label="Favicon hier ablegen oder klicken."
                        delete-action="removeBrandingImage('favicon')"
                    />

                    <x-ui.filepool.image-upload-field
                        label="Logo (Quadratisch)"
                        :model="'logoSquare'"
                        :temporary-url="$logoSquare ? $logoSquare->temporaryUrl() : null"
                        :preview-url="$logoSquarePreview"
                        preview-class="h-16 w-16 object-contain"
                        :max-filesize="2"
                        drop-label="Quadratisches Logo hier ablegen oder klicken."
                        delete-action="removeBrandingImage('logoSquare')"
                    />

                    <x-ui.filepool.image-upload-field
                        label="Logo (Horizontal)"
                        :model="'logoHorizontal'"
                        :temporary-url="$logoHorizontal ? $logoHorizontal->temporaryUrl() : null"
                        :preview-url="$logoHorizontalPreview"
                        preview-class="max-h-16 w-full object-contain"
                        :max-filesize="2"
                        drop-label="Horizontales Logo hier ablegen oder klicken."
                        delete-action="removeBrandingImage('logoHorizontal')"
                    />

                    <x-ui.filepool.image-upload-field
                        label="Logo (Vertikal)"
                        :model="'logoVertical'"
                        :temporary-url="$logoVertical ? $logoVertical->temporaryUrl() : null"
                        :preview-url="$logoVerticalPreview"
                        preview-class="max-h-20 w-full object-contain"
                        :max-filesize="2"
                        drop-label="Vertikales Logo hier ablegen oder klicken."
                        delete-action="removeBrandingImage('logoVertical')"
                    />
                </div>
            </x-slot>
        </x-settings-collapse>

        <div class="text-right"><x-button wire:click="saveSettings">Speichern</x-button></div>
    </div>
</div>
