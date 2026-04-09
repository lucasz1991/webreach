<div class="space-y-5">
    <div>
        <h1 class="text-2xl font-semibold text-slate-900">Benutzer</h1>
        <p class="mt-1 text-sm text-slate-600">Benutzerkonten und Status verwalten.</p>
    </div>

    <div class="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-3">
        <div>
            <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Suche</label>
            <input type="text" wire:model.live.debounce.300ms="search" class="w-full rounded border-slate-300 text-sm" placeholder="Name oder E-Mail">
        </div>
        <div>
            <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Rolle</label>
            <select wire:model.live="roleFilter" class="w-full rounded border-slate-300 text-sm">
                <option value="all">Alle</option>
                <option value="guest">Guest</option>
                <option value="tutor">Tutor</option>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
            </select>
        </div>
        <div>
            <label class="mb-1 block text-xs font-medium uppercase tracking-wide text-slate-500">Status</label>
            <select wire:model.live="statusFilter" class="w-full rounded border-slate-300 text-sm">
                <option value="all">Alle</option>
                <option value="active">Nur aktiv</option>
                <option value="inactive">Nur inaktiv</option>
            </select>
        </div>
    </div>

    <div class="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
            <thead class="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                    <th class="px-4 py-3">Name</th>
                    <th class="px-4 py-3">E-Mail</th>
                    <th class="px-4 py-3">Rolle</th>
                    <th class="px-4 py-3">Status</th>
                    <th class="px-4 py-3 text-right">Aktion</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
                @forelse ($users as $user)
                    <tr>
                        <td class="px-4 py-3 font-medium text-slate-800">{{ $user->name }}</td>
                        <td class="px-4 py-3 text-slate-600">{{ $user->email }}</td>
                        <td class="px-4 py-3">{{ $user->role }}</td>
                        <td class="px-4 py-3">
                            @if($user->status)
                                <span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">aktiv</span>
                            @else
                                <span class="rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700">inaktiv</span>
                            @endif
                        </td>
                        <td class="px-4 py-3 text-right">
                            <a href="{{ route('admin.user-profile', ['userId' => $user->id]) }}"
                               class="mr-2 rounded border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
                                Profil
                            </a>
                            @if($user->status)
                                <button wire:click="setStatus({{ $user->id }}, false)"
                                        class="rounded bg-rose-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-rose-500">
                                    Deaktivieren
                                </button>
                            @else
                                <button wire:click="setStatus({{ $user->id }}, true)"
                                        class="rounded bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500">
                                    Aktivieren
                                </button>
                            @endif
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="5" class="px-4 py-6 text-center text-slate-500">Keine Benutzer gefunden.</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>

    <div>
        {{ $users->links() }}
    </div>
</div>
