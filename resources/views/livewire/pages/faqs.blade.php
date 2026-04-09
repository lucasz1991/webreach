<div class="container mx-auto px-5 py-12">
    <h1 class="text-3xl font-semibold text-gray-900">FAQs</h1>

    <div class="mt-6">
        <input
            type="text"
            wire:model.live.debounce.250ms="search"
            class="w-full rounded border border-gray-300 px-3 py-2"
            placeholder="Suche nach einer Frage..."
        />
    </div>

    <div class="mt-8 space-y-4">
        @forelse($faqs as $faq)
            <details class="rounded border border-gray-200 bg-white p-4">
                <summary class="cursor-pointer font-semibold text-gray-900">{{ $faq->key }}</summary>
                <p class="mt-3 text-gray-700">{{ $faq->value }}</p>
            </details>
        @empty
            <p class="text-gray-600">Keine FAQs gefunden.</p>
        @endforelse
    </div>
</div>
