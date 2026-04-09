<div class="container mx-auto px-5 py-12">
    <h1 class="text-3xl font-semibold text-gray-900">Sitemap</h1>

    <ul class="mt-6 space-y-2">
        @foreach($pages as $page)
            <li>
                <a href="{{ $page['url'] }}" class="text-blue-700 hover:underline">
                    {{ $page['title'] }}
                </a>
            </li>
        @endforeach
    </ul>
</div>
