<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <base href="{{ rtrim(url('/'), '/') }}/">
    <title>{{ $project->name ?: 'Pagebuilder Preview' }}</title>
    <link rel="stylesheet" href="{{ asset('adminresources/css/tailwind.min.css') }}">
    <link rel="stylesheet" href="{{ asset('adminresources/css/swiper-bundle.min.css') }}">
    <style>
        html, body {
            margin: 0;
            padding: 0;
            background: #ffffff;
        }

        body {
            min-height: 100vh;
        }

        img {
            max-width: 100%;
        }
    </style>
    @if(!empty($project->css))
        <style>{!! $project->css !!}</style>
    @endif
</head>
<body data-preview-device="{{ $device }}">
    {!! $projectMarkup !!}

    <script src="{{ asset('adminresources/js/swiper-bundle.min.js') }}"></script>
    @if(!empty($project->js))
        <script>{!! $project->js !!}</script>
    @endif
</body>
</html>
