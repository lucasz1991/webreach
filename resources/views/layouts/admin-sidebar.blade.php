<div class="h-full overflow-y-auto pb-10 pt-2.5">
    <div class="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
        Hauptmenü
    </div>
    <ul class="space-y-1 px-3 text-sm">
        <li>
            <a href="{{ route('admin.dashboard') }}"
               class="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium {{ request()->routeIs('admin.dashboard') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5 12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 15 19.5v-4.125a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V19.5A1.5 1.5 0 0 1 7.5 21h-3A1.5 1.5 0 0 1 3 19.5v-9Z"/>
                </svg>
                <span>Dashboard</span>
            </a>
        </li>
    </ul>

    <div class="px-5 py-3 mt-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
        System Administration
    </div>
    <ul class="space-y-1 px-3 text-sm">
        <li>
            <a href="{{ route('admin.config') }}"
               class="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium {{ request()->routeIs('admin.config') || request()->routeIs('admin.settings.users') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317a1.724 1.724 0 0 1 3.35 0 1.724 1.724 0 0 0 2.573 1.066 1.724 1.724 0 0 1 2.29 2.29 1.724 1.724 0 0 0 1.065 2.573 1.724 1.724 0 0 1 0 3.35 1.724 1.724 0 0 0-1.066 2.573 1.724 1.724 0 0 1-2.29 2.29 1.724 1.724 0 0 0-2.573 1.065 1.724 1.724 0 0 1-3.35 0 1.724 1.724 0 0 0-2.573-1.066 1.724 1.724 0 0 1-2.29-2.29 1.724 1.724 0 0 0-1.065-2.573 1.724 1.724 0 0 1 0-3.35 1.724 1.724 0 0 0 1.066-2.573 1.724 1.724 0 0 1 2.29-2.29 1.724 1.724 0 0 0 2.573-1.065Z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75A3.75 3.75 0 1 0 12 8.25a3.75 3.75 0 0 0 0 7.5Z"/>
                </svg>
                <span>Einstellungen</span>
            </a>
        </li>

        <li>
            <a href="{{ route('admin.employees') }}"
               class="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium {{ request()->routeIs('admin.employees') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 21a6 6 0 0 0-12 0"/>
                    <circle cx="12" cy="7" r="4"/>
                </svg>
                <span>Mitarbeiter</span>
            </a>
        </li>

        <li>
            <a href="{{ route('admin.webcontentmanager') }}"
               class="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium {{ request()->routeIs('admin.webcontentmanager') || request()->routeIs('admin.cms') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <rect x="3" y="3" width="8" height="8" rx="1"/>
                    <rect x="13" y="3" width="8" height="8" rx="1"/>
                    <rect x="3" y="13" width="8" height="8" rx="1"/>
                    <rect x="13" y="13" width="8" height="8" rx="1"/>
                </svg>
                <span>Web Inhalte</span>
            </a>
        </li>

        <li>
            <a href="{{ route('admin.activities') }}"
               class="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium {{ request()->routeIs('admin.activities') || request()->routeIs('admin.inactivities') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m3 12 4.5 4.5L12 6l4.5 10.5L21 12"/>
                </svg>
                <span>Aktivitäten</span>
            </a>
        </li>
    </ul>

    <div class="px-5 py-3 mt-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
        Management
    </div>
    <ul class="space-y-1 px-3 text-sm">
        <li>
            <a href="{{ route('admin.users') }}"
               class="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium {{ request()->routeIs('admin.users') ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600' }}">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span>Benutzer</span>
            </a>
        </li>
    </ul>
</div>
