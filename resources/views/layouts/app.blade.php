<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <x-meta-page-header />
    <title>{{ config('app.name') }}</title>

    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @livewireStyles
</head>
<body class="text-gray-900 antialiased">
    <x-pagebuilder-module :position="'top_banner'"/>
    <x-pagebuilder-module :position="'banner'"/>
    <x-pagebuilder-module :position="'bottom_banner'"/>
    <main>
        <x-pagebuilder-module/>
        <x-pagebuilder-module :position="'above_content'"/>
        {{ $slot }}
        <x-pagebuilder-module :position="'content'"/>
    </main>
    <x-pagebuilder-module :position="'footer'"/>
    @livewireScripts
</body>
</html>
