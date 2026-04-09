<div x-data="{ tab: 'pages' }" class="space-y-5">
    <div>
        <h1 class="text-2xl font-semibold text-slate-900">CMS-Verwaltung</h1>
        <p class="mt-1 text-sm text-slate-600">Seiten und FAQ-Inhalte aus einer Admin-Oberflaeche pflegen.</p>
    </div>

    @if (session('success'))
        <div class="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {{ session('success') }}
        </div>
    @endif

    @if (session('error'))
        <div class="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {{ session('error') }}
        </div>
    @endif

    @if ($errors->any())
        <div class="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
            @foreach ($errors->all() as $message)
                <p>{{ $message }}</p>
            @endforeach
        </div>
    @endif

    <div class="inline-flex rounded-lg border border-slate-200 bg-white p-1">
        <button @click="tab = 'pages'"
                :class="tab === 'pages' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'"
                class="rounded px-4 py-2 text-sm font-medium">
            Seiten
        </button>
        <button @click="tab = 'faq'"
                :class="tab === 'faq' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'"
                class="rounded px-4 py-2 text-sm font-medium">
            FAQ
        </button>
    </div>

    <section x-show="tab === 'pages'" x-cloak class="grid gap-5 lg:grid-cols-[420px_1fr]">
        <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="text-base font-semibold">
                {{ $editingPageId ? 'Seite bearbeiten' : 'Neue Seite' }}
            </h2>

            <div class="mt-4 space-y-3">
                <div>
                    <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Titel</label>
                    <input type="text" wire:model.defer="pageTitle" class="w-full rounded border-slate-300 text-sm">
                </div>
                <div>
                    <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Slug</label>
                    <input type="text" wire:model.defer="pageSlug" class="w-full rounded border-slate-300 text-sm" placeholder="optional, wird sonst automatisch erzeugt">
                </div>
                <div>
                    <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Meta Titel</label>
                    <input type="text" wire:model.defer="metaTitle" class="w-full rounded border-slate-300 text-sm">
                </div>
                <div>
                    <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Meta Beschreibung</label>
                    <textarea wire:model.defer="metaDescription" rows="3" class="w-full rounded border-slate-300 text-sm"></textarea>
                </div>
                <div>
                    <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Pagebuilder-Projekt</label>
                    <select wire:model.defer="pagebuilderProject" class="w-full rounded border-slate-300 text-sm">
                        <option value="">Kein Projekt</option>
                        @foreach($projects as $project)
                            <option value="{{ $project->id }}">{{ $project->name }}</option>
                        @endforeach
                    </select>
                </div>
                <div class="flex items-center gap-4 text-sm">
                    <label class="flex items-center gap-2">
                        <input type="checkbox" wire:model="pageIsActive">
                        <span>Aktiv</span>
                    </label>
                </div>
            </div>

            <div class="mt-4 flex gap-2">
                <button wire:click="savePage" class="rounded bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    {{ $editingPageId ? 'Aktualisieren' : 'Erstellen' }}
                </button>
                @if($editingPageId)
                    <button wire:click="resetPageForm" class="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                        Abbrechen
                    </button>
                @endif
            </div>
        </div>

        <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table class="min-w-full divide-y divide-slate-200 text-sm">
                <thead class="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                        <th class="px-4 py-3">Titel</th>
                        <th class="px-4 py-3">Slug</th>
                        <th class="px-4 py-3">Status</th>
                        <th class="px-4 py-3 text-right">Aktion</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                    @forelse($pages as $page)
                        <tr>
                            <td class="px-4 py-3">
                                <div class="font-medium text-slate-800">{{ $page->title }}</div>
                                @if($page->is_fixed)
                                    <div class="text-xs text-slate-500">Fixe Systemseite</div>
                                @endif
                            </td>
                            <td class="px-4 py-3 text-slate-600">{{ $page->slug }}</td>
                            <td class="px-4 py-3">
                                @if($page->is_active)
                                    <span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">aktiv</span>
                                @else
                                    <span class="rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700">inaktiv</span>
                                @endif
                            </td>
                            <td class="px-4 py-3 text-right">
                                <div class="flex justify-end gap-2">
                                    <button wire:click="editPage({{ $page->id }})" class="rounded border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100">
                                        Bearbeiten
                                    </button>
                                    @if(!$page->is_fixed)
                                        <button wire:click="deletePage({{ $page->id }})" class="rounded bg-rose-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-500">
                                            Loeschen
                                        </button>
                                    @endif
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="4" class="px-4 py-6 text-center text-slate-500">Keine Seiten vorhanden.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </section>

    <section x-show="tab === 'faq'" x-cloak class="grid gap-5 lg:grid-cols-[420px_1fr]">
        <div class="rounded-xl border border-slate-200 bg-white p-5">
            <h2 class="text-base font-semibold">
                {{ $editingFaqId ? 'FAQ bearbeiten' : 'Neue FAQ' }}
            </h2>

            <div class="mt-4 space-y-3">
                <div>
                    <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Frage</label>
                    <input type="text" wire:model.defer="faqQuestion" class="w-full rounded border-slate-300 text-sm">
                </div>
                <div>
                    <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Antwort</label>
                    <textarea wire:model.defer="faqAnswer" rows="6" class="w-full rounded border-slate-300 text-sm"></textarea>
                </div>
            </div>

            <div class="mt-4 flex gap-2">
                <button wire:click="saveFaq" class="rounded bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                    {{ $editingFaqId ? 'Aktualisieren' : 'Erstellen' }}
                </button>
                @if($editingFaqId)
                    <button wire:click="resetFaqForm" class="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                        Abbrechen
                    </button>
                @endif
            </div>
        </div>

        <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table class="min-w-full divide-y divide-slate-200 text-sm">
                <thead class="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                        <th class="px-4 py-3">Frage</th>
                        <th class="px-4 py-3">Antwort</th>
                        <th class="px-4 py-3 text-right">Aktion</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
                    @forelse($faqs as $faq)
                        <tr>
                            <td class="px-4 py-3 font-medium text-slate-800">{{ $faq->key }}</td>
                            <td class="px-4 py-3 text-slate-600">{{ \Illuminate\Support\Str::limit($faq->value, 110) }}</td>
                            <td class="px-4 py-3 text-right">
                                <div class="flex justify-end gap-2">
                                    <button wire:click="editFaq({{ $faq->id }})" class="rounded border border-slate-300 px-3 py-1.5 text-xs font-medium hover:bg-slate-100">
                                        Bearbeiten
                                    </button>
                                    <button wire:click="deleteFaq({{ $faq->id }})" class="rounded bg-rose-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-500">
                                        Loeschen
                                    </button>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="3" class="px-4 py-6 text-center text-slate-500">Keine FAQs vorhanden.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </section>
</div>
