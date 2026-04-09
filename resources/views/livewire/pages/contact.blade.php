<div class="container mx-auto px-5 py-12">
    <h1 class="text-3xl font-semibold text-gray-900">Kontakt</h1>
    <p class="mt-3 text-gray-700">Sende uns eine Nachricht ueber das Formular.</p>

    @if (session()->has('success'))
        <div class="mt-6 rounded border border-green-200 bg-green-50 px-4 py-3 text-green-800">
            {{ session('success') }}
        </div>
    @endif

    @if (session()->has('error'))
        <div class="mt-6 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-800">
            {{ session('error') }}
        </div>
    @endif

    <div class="mt-8 grid gap-4">
        <div>
            <x-label for="subject" value="Betreff" />
            <x-input id="subject" wire:model.defer="subject" type="text" class="mt-1 block w-full" />
            @error('subject') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <x-label for="message" value="Nachricht" />
            <textarea id="message" wire:model.defer="message" rows="7" class="mt-1 block w-full rounded-md border-gray-300"></textarea>
            @error('message') <p class="mt-1 text-sm text-red-600">{{ $message }}</p> @enderror
        </div>

        <div>
            <button wire:click="send" class="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">
                Nachricht senden
            </button>
        </div>
    </div>
</div>
