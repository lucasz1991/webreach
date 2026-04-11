<?php

namespace App\Http\Controllers;

use App\Models\WebPage;
use Illuminate\Support\Carbon;

class PageController extends Controller
{
    public function home()
    {
        return $this->show('start');
    }

    public function show(string $slug)
    {
        $now = Carbon::now();

        $exists = WebPage::query()
            ->where('slug', $slug)
            ->where('is_active', true)
            ->where(function ($query) use ($now) {
                $query->whereNull('published_from')->orWhere('published_from', '<=', $now);
            })
            ->where(function ($query) use ($now) {
                $query->whereNull('published_until')->orWhere('published_until', '>=', $now);
            })
            ->exists();

        abort_unless($exists, 404);

        // Layout + Components (Meta, Header, Modules) arbeiten über CurrentPageService mit dem Request-Slug.
        return view('layouts.app', ['slot' => '']);
    }
}

