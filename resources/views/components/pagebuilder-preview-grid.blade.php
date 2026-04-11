@props([
    'previewUrls' => [],
    'subject' => 'dieses Projekt',
    'showEmptyHint' => false,
    'emptyHint' => 'Die Vorschauen werden nach dem manuellen Speichern im Pagebuilder im Hintergrund erzeugt.',
])

@php
    $previewLabels = [
        'desktop' => 'Desktop',
        'tablet' => 'Tablet',
        'mobile' => 'Mobile',
    ];

    $previewIcons = [
        'desktop' => [
            'viewBox' => '0 0 24 24',
            'path' => 'M3.75 5.25A2.25 2.25 0 0 1 6 3h12a2.25 2.25 0 0 1 2.25 2.25v8.5A2.25 2.25 0 0 1 18 16H6a2.25 2.25 0 0 1-2.25-2.25v-8.5ZM8.25 19.5h7.5',
        ],
        'tablet' => [
            'viewBox' => '0 0 24 24',
            'path' => 'M7.5 3.75h9A2.25 2.25 0 0 1 18.75 6v12a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 5.25 18V6A2.25 2.25 0 0 1 7.5 3.75ZM10.5 17.25h3',
        ],
        'mobile' => [
            'viewBox' => '0 0 24 24',
            'path' => 'M9 3.75h6A2.25 2.25 0 0 1 17.25 6v12A2.25 2.25 0 0 1 15 20.25H9A2.25 2.25 0 0 1 6.75 18V6A2.25 2.25 0 0 1 9 3.75ZM10.875 17.25h2.25',
        ],
    ];

    $resolvedPreviewUrls = array_merge([
        'desktop' => null,
        'tablet' => null,
        'mobile' => null,
    ], is_array($previewUrls) ? $previewUrls : []);

    $availableDevices = collect(array_keys($previewLabels))
        ->filter(fn (string $device) => filled($resolvedPreviewUrls[$device] ?? null))
        ->values()
        ->all();

    $initialDevice = $availableDevices[0] ?? 'desktop';
    $hasAnyPreview = !empty($availableDevices);
@endphp

@if (!$hasAnyPreview)
    <div class="rounded-xl border border-dashed border-slate-200 bg-slate-50/80 px-4 py-3">
        <div class="flex items-start gap-3">
            <div class="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm ring-1 ring-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 18 16.5H9.75l-3.75 3v-3H6a2.25 2.25 0 0 1-2.25-2.25v-7.5Z" />
                </svg>
            </div>

            <div class="min-w-0">
                <p class="text-sm font-medium text-slate-700">Noch keine Vorschau vorhanden</p>
                @if ($showEmptyHint)
                    <p class="mt-1 text-xs leading-5 text-slate-500">{{ $emptyHint }}</p>
                @endif
            </div>
        </div>
    </div>
@else
    <div
        x-data="{ active: @js($initialDevice), previews: @js($resolvedPreviewUrls), labels: @js($previewLabels), subject: @js($subject), available: @js($availableDevices), isAvailable(device) { return this.available.includes(device); } }"
        class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
        <div class="flex items-center justify-between gap-3 border-b border-slate-100 bg-slate-50/80 px-3 py-3 sm:px-4">
            <div class="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                @foreach ($previewLabels as $device => $label)
                    @php($icon = $previewIcons[$device])
                    <button
                        type="button"
                        @click="if (isAvailable('{{ $device }}')) active = '{{ $device }}'"
                        :disabled="!isAvailable('{{ $device }}')"
                        :class="active === '{{ $device }}'
                            ? 'bg-sky-600 text-white shadow-sm'
                            : (isAvailable('{{ $device }}')
                                ? 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
                                : 'cursor-not-allowed text-slate-300 opacity-60')"
                        class="relative inline-flex h-9 w-9 items-center justify-center rounded-full transition"
                        title="{{ $label }}"
                        aria-label="{{ $label }} anzeigen"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="{{ $icon['viewBox'] }}" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="{{ $icon['path'] }}" />
                        </svg>

                        <span
                            x-show="isAvailable('{{ $device }}') && active !== '{{ $device }}'"
                            class="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border border-white bg-emerald-400"
                        ></span>
                    </button>
                @endforeach
            </div>

            <div class="flex items-center gap-3">
                <div class="hidden text-right sm:block">
                    <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Ansicht</p>
                    <p class="text-sm font-medium text-slate-700" x-text="labels[active]"></p>
                </div>

                <a
                    x-bind:href="previews[active]"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-sky-600 transition hover:border-sky-200 hover:text-sky-700"
                >
                    Oeffnen
                </a>
            </div>
        </div>

        <div class="bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.08),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] p-3 sm:p-4">
            <div class="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-inner">
                <div class="aspect-[16/10]">
                    <img
                        x-bind:src="previews[active]"
                        x-bind:alt="labels[active] + ' Vorschau fuer ' + subject"
                        class="h-full w-full object-contain object-top p-3 sm:p-4"
                        loading="lazy"
                    >
                </div>
            </div>
        </div>
    </div>
@endif
