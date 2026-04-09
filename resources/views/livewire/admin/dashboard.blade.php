<div class="space-y-6">
    <div>
        <h1 class="text-2xl font-semibold text-slate-900">Admin-Uebersicht</h1>
        <p class="mt-1 text-sm text-slate-600">Getrennter Adminbereich fuer Verwaltung und CMS.</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div class="rounded-xl border border-slate-200 bg-white p-4">
            <p class="text-sm text-slate-500">Benutzer gesamt</p>
            <p class="mt-2 text-2xl font-semibold">{{ $totalUsers }}</p>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4">
            <p class="text-sm text-slate-500">Inaktive Benutzer</p>
            <p class="mt-2 text-2xl font-semibold">{{ $inactiveUsers }}</p>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4">
            <p class="text-sm text-slate-500">CMS-Seiten</p>
            <p class="mt-2 text-2xl font-semibold">{{ $totalPages }}</p>
        </div>
        <div class="rounded-xl border border-slate-200 bg-white p-4">
            <p class="text-sm text-slate-500">FAQs</p>
            <p class="mt-2 text-2xl font-semibold">{{ $totalFaqs }}</p>
        </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <a href="{{ route('admin.config') }}" class="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400">
            <h2 class="font-semibold">Einstellungen</h2>
            <p class="mt-1 text-sm text-slate-600">Admin- und Benutzer-Einstellungen verwalten.</p>
        </a>
        <a href="{{ route('admin.webcontentmanager') }}" class="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400">
            <h2 class="font-semibold">Web Inhalte</h2>
            <p class="mt-1 text-sm text-slate-600">Seiten und FAQs im CMS bearbeiten.</p>
        </a>
        <a href="{{ route('admin.employees') }}" class="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400">
            <h2 class="font-semibold">Mitarbeiter</h2>
            <p class="mt-1 text-sm text-slate-600">Staff- und Admin-Konten verwalten.</p>
        </a>
        <a href="{{ route('admin.activities') }}" class="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400">
            <h2 class="font-semibold">Aktivitaeten</h2>
            <p class="mt-1 text-sm text-slate-600">Benutzerstatus und Unaktivitaeten steuern.</p>
        </a>
        <a href="{{ route('admin.users') }}" class="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-400">
            <h2 class="font-semibold">Benutzer</h2>
            <p class="mt-1 text-sm text-slate-600">Gesamte Benutzerliste mit Rollen und Status.</p>
        </a>
    </div>
</div>
