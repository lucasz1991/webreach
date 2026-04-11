<div x-data="{ selectedTab: $persist('webpages').using(sessionStorage) }" class="w-full">
    <div class="flex items-center justify-between gap-4">
        <ul class="flex w-max text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-200 rounded-lg shadow divide-gray-200 overflow-hidden">
            <li class="border-l border-gray-200">
                <button 
                    @click="selectedTab = 'webpages'" 
                    :class="{ 'text-blue-600 bg-white border-b-2 border-blue-600': selectedTab === 'webpages' }" 
                    class="w-full px-4 py-2 transition-all duration-200 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 focus:outline-none"
                >
                    Seiten 
                </button>
            </li>
            <li class="border-l border-gray-200">
                <button 
                    @click="selectedTab = 'module'" 
                    :class="{ 'text-blue-600 bg-white border-b-2 border-blue-600': selectedTab === 'module' }" 
                    class="w-full px-4 py-2 transition-all duration-200 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 focus:outline-none"
                >
                    Module
                </button>
            </li>
            <li class="border-l border-gray-200">
                <button 
                    @click="selectedTab = 'tools'" 
                    :class="{ 'text-blue-600 bg-white border-b-2 border-blue-600': selectedTab === 'tools' }" 
                    class="w-full px-4 py-2 transition-all duration-200 bg-gray-100 hover:bg-blue-100 hover:text-blue-600 focus:outline-none"
                >
                    Tool's
                </button>
            </li>
        </ul>

        <x-button wire:click="openWebsiteExportModal" class="btn-xs" wire:loading.attr="disabled">
            Website Export
        </x-button>
    </div>

    @if (session()->has('message'))
        <div class="bg-green-100 text-green-700 p-4 rounded my-6">
            {{ session('message') }}
        </div>
    @endif

    <div class="mt-6">
        <div x-show="selectedTab === 'webpages'" x-cloak>
            <livewire:admin.cms.webpages.webpages-list lazy />
        </div>
        <div x-show="selectedTab === 'module'" x-cloak>
            <livewire:admin.cms.projekt-list  />
        </div>
        <div x-show="selectedTab === 'tools'" x-cloak>
            <h1 class=" text-lg px-2 py-1 w-max mb-10">
                <span class="w-max">Tool's</span>
            </h1>
            <div class="space-y-5">
                <livewire:admin.cms.tools.ai-assistant-config lazy />
            </div>
        </div>
    </div>

    <x-dialog-modal wire:model="showWebsiteExportModal" wire:loading.class="pointer-events-none">
        <x-slot name="title">
            Website Export
        </x-slot>

        <x-slot name="content">
            <div
                x-data="{
                    active: false,
                    progress: 0,
                    stage: '',
                    timer: null,
                    start() {
                        this.active = true;
                        this.progress = 8;
                        this.stage = 'Inhalte werden gesammelt';
                        clearInterval(this.timer);
                        this.timer = setInterval(() => {
                            if (this.progress < 92) {
                                this.progress += this.progress < 40 ? 6 : (this.progress < 70 ? 3 : 1);
                            }

                            if (this.progress >= 25 && this.progress < 55) {
                                this.stage = 'Seiten und Module werden zusammengesetzt';
                            } else if (this.progress >= 55 && this.progress < 82) {
                                this.stage = 'Assets werden vorbereitet';
                            } else if (this.progress >= 82) {
                                this.stage = 'ZIP-Datei wird erzeugt';
                            }
                        }, 220);
                    },
                    stop() {
                        clearInterval(this.timer);
                        this.progress = 100;
                        this.stage = 'Download wird vorbereitet';
                        setTimeout(() => {
                            this.active = false;
                            this.progress = 0;
                            this.stage = '';
                        }, 900);
                    }
                }"
                x-init="
                    if (window.__webreachWebsiteExportHookRegistered) return;
                    window.__webreachWebsiteExportHookRegistered = true;
                    Livewire.hook('request', ({ succeed, fail }) => {
                        let finished = false;
                        const finish = () => {
                            if (finished) return;
                            finished = true;
                            if (active) stop();
                        };
                        succeed(finish);
                        fail(finish);
                    });
                "
                class="space-y-5"
            >
                <div class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    <div class="font-semibold text-slate-900">Gesamter Website-Export</div>
                    <div class="mt-1">{{ $pageCount }} Seiten und {{ $moduleCount }} Module werden in ein eigenstaendiges Bundle exportiert.</div>
                    <div class="mt-2 text-xs text-slate-600">
                        Der Export erzeugt eine deploybare ZIP-Datei mit zentraler <span class="font-mono">index.php</span>, <span class="font-mono">.htaccess</span>, allen benoetigten Assets und den exportierten WebReach-Inhalten.
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Bundle-Name</label>
                        <input type="text" wire:model="websiteBundleName" class="mt-1 block w-full rounded border px-4 py-2">
                        @error('websiteBundleName') <span class="text-xs text-red-600">{{ $message }}</span> @enderror
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Seitentitel</label>
                        <input type="text" wire:model="websiteTitle" class="mt-1 block w-full rounded border px-4 py-2">
                        @error('websiteTitle') <span class="text-xs text-red-600">{{ $message }}</span> @enderror
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium text-gray-700">Meta-Beschreibung</label>
                    <textarea wire:model="websiteDescription" rows="3" class="mt-1 block w-full rounded border px-4 py-2"></textarea>
                    @error('websiteDescription') <span class="text-xs text-red-600">{{ $message }}</span> @enderror
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <label class="flex items-center gap-3 rounded border px-4 py-3 text-sm">
                        <input type="checkbox" wire:model="websitePublishedOnly">
                        <span>Nur aktive/veroeffentlichte Seiten exportieren</span>
                    </label>
                    <label class="flex items-center gap-3 rounded border px-4 py-3 text-sm">
                        <input type="checkbox" wire:model="websiteIncludeHtaccess">
                        <span>.htaccess einfuegen</span>
                    </label>
                    <label class="flex items-center gap-3 rounded border px-4 py-3 text-sm">
                        <input type="checkbox" wire:model="websiteIncludeReadme">
                        <span>README beilegen</span>
                    </label>
                    <label class="flex items-center gap-3 rounded border px-4 py-3 text-sm">
                        <input type="checkbox" wire:model="websiteIncludeApiBridge">
                        <span>WebReach API-Bridge einbinden</span>
                    </label>
                </div>

                @if ($websiteIncludeApiBridge)
                    <div class="rounded-lg border border-sky-200 bg-sky-50 p-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div class="col-span-2">
                                <label class="block text-sm font-medium text-gray-700">WebReach API Basis-URL</label>
                                <input type="text" wire:model="websiteApiBaseUrl" class="mt-1 block w-full rounded border px-4 py-2">
                                @error('websiteApiBaseUrl') <span class="text-xs text-red-600">{{ $message }}</span> @enderror
                            </div>
                            <label class="flex items-center gap-3 rounded border bg-white px-4 py-3 text-sm col-span-2">
                                <input type="checkbox" wire:model="websiteIncludeApiProxy">
                                <span>Lokalen PHP-Proxy unter <span class="font-mono">/api</span> mit exportieren</span>
                            </label>
                        </div>
                    </div>
                @endif

                @error('websiteExport')
                    <div class="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {{ $message }}
                    </div>
                @enderror

                <div wire:loading.flex wire:target="exportWebsite" class="flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <div class="flex items-center justify-between text-sm text-slate-700">
                        <span x-text="stage || 'Export wird vorbereitet'"></span>
                        <span x-text="Math.min(progress, 100) + '%'"></span>
                    </div>
                    <div class="h-2 overflow-hidden rounded-full bg-slate-200">
                        <div class="h-full rounded-full bg-sky-500 transition-all duration-300" :style="'width:' + progress + '%'"></div>
                    </div>
                </div>
            </div>
        </x-slot>

        <x-slot name="footer">
            <div class="flex items-center gap-3">
                <x-button wire:click="exportWebsite" x-on:click="start()" class="btn-xs text-sm" wire:loading.attr="disabled">
                    ZIP erzeugen & herunterladen
                </x-button>
                <x-button wire:click="$set('showWebsiteExportModal', false)" class="btn-xs text-sm" wire:loading.attr="disabled">
                    Schliessen
                </x-button>
            </div>
        </x-slot>
    </x-dialog-modal>
</div>
