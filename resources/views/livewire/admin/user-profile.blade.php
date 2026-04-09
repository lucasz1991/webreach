<div class="space-y-5">
    <div class="flex items-start justify-between">
        <div>
            <h1 class="text-2xl font-semibold text-slate-900">Benutzerprofil</h1>
            <p class="mt-1 text-sm text-slate-600">Profilansicht und Statussteuerung.</p>
        </div>
        <a href="{{ route('admin.users') }}" class="rounded border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
            Zurueck
        </a>
    </div>

    <div class="rounded-xl border border-slate-200 bg-white p-5">
        <dl class="grid gap-4 md:grid-cols-2">
            <div>
                <dt class="text-xs uppercase tracking-wide text-slate-500">Name</dt>
                <dd class="mt-1 text-sm text-slate-900">{{ $user->name }}</dd>
            </div>
            <div>
                <dt class="text-xs uppercase tracking-wide text-slate-500">E-Mail</dt>
                <dd class="mt-1 text-sm text-slate-900">{{ $user->email }}</dd>
            </div>
            <div>
                <dt class="text-xs uppercase tracking-wide text-slate-500">Rolle</dt>
                <dd class="mt-1 text-sm text-slate-900">{{ $user->role }}</dd>
            </div>
            <div>
                <dt class="text-xs uppercase tracking-wide text-slate-500">Status</dt>
                <dd class="mt-1 text-sm">
                    @if($user->status)
                        <span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">aktiv</span>
                    @else
                        <span class="rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700">inaktiv</span>
                    @endif
                </dd>
            </div>
        </dl>

        <div class="mt-6">
            @if($user->status)
                <button wire:click="setStatus(false)" class="rounded bg-rose-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-500">
                    Benutzer deaktivieren
                </button>
            @else
                <button wire:click="setStatus(true)" class="rounded bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500">
                    Benutzer aktivieren
                </button>
            @endif
        </div>
    </div>
</div>
