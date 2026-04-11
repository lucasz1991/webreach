@php
    $isAdmin = Auth::user()?->role === 'admin';
@endphp

<div class="metismenu pb-10 pt-2.5" id="sidebar-menu">
    <ul id="side-menu">
        <x-menu.sidebar-nav>
            <x-menu.sidebar-nav-link
                :href="route('admin.dashboard')"
                icon="home"
                :active="request()->routeIs('admin.dashboard', 'admin.index')"
            >
                Dashboard
            </x-menu.sidebar-nav-link>
        </x-menu.sidebar-nav>

        @canany(['settings.manage', 'employees.view', 'safety.view'])
            <x-menu.sidebar-nav label="System Administration">
                @can('settings.manage')
                    <x-menu.sidebar-nav-link
                        :href="route('admin.config')"
                        icon="settings"
                        :active="request()->routeIs('admin.config')"
                    >
                        Einstellungen
                    </x-menu.sidebar-nav-link>
                @endcan

                @can('employees.view')
                    <x-menu.sidebar-nav-link
                        :href="route('admin.employees')"
                        icon="users"
                        :active="request()->routeIs('admin.employees')"
                    >
                        Mitarbeiter
                    </x-menu.sidebar-nav-link>
                @endcan

                @if($isAdmin)
                    <x-menu.sidebar-nav-link
                        :href="route('admin.webcontentmanager')"
                        icon="grid"
                        :active="request()->routeIs('admin.webcontentmanager', 'admin.cms.*')"
                    >
                        Web Inhalte
                    </x-menu.sidebar-nav-link>
                @endif

                @can('safety.view')
                    <x-menu.sidebar-nav-link
                        :href="route('admin.activities')"
                        icon="activity"
                        :active="request()->routeIs('admin.activities', 'admin.safety', 'admin.inactivities')"
                    >
                        Aktivitaeten
                    </x-menu.sidebar-nav-link>
                @endcan
            </x-menu.sidebar-nav>
        @endcanany

        @can('users.view')
            <x-menu.sidebar-nav label="Management">
                <x-menu.sidebar-nav-link
                    :href="route('admin.users')"
                    icon="user-check"
                    :active="request()->routeIs('admin.users', 'admin.user-profile')"
                >
                    Benutzer
                </x-menu.sidebar-nav-link>
            </x-menu.sidebar-nav>
        @endcan
    </ul>
</div>
