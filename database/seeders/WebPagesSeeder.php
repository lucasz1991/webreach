<?php

namespace Database\Seeders;

use App\Models\PagebuilderProject;
use App\Models\WebPage;
use Illuminate\Database\Seeder;

class WebPagesSeeder extends Seeder
{
    public function run(): void
    {
        $fixedPages = [
            ['title' => 'Startseite', 'slug' => 'start'],
        ];

        foreach ($fixedPages as $pageData) {
            $page = WebPage::firstOrCreate(
                ['slug' => $pageData['slug']],
                [
                    'title' => $pageData['title'],
                    'meta_title' => $pageData['title'],
                    'is_fixed' => true,
                    'is_active' => true,
                ]
            );

            if ($page->pagebuilder_project) {
                continue;
            }

            $project = PagebuilderProject::create([
                'name' => $page->title . ' Content',
                'data' => PagebuilderProject::getDefaultProjectData(),
                'cleaned_html' => '<section class="container mx-auto px-5 py-12"><h2 class="text-2xl font-semibold">' . e($page->title) . '</h2><p class="mt-3 text-gray-700">Dieser Inhalt kann im CMS gepflegt werden.</p></section>',
                'status' => 3,
                'page' => [$page->slug],
                'position' => ['page'],
                'order_id' => (PagebuilderProject::max('order_id') ?? 0) + 1,
                'type' => 'page',
            ]);

            $page->pagebuilder_project = $project->id;
            $page->saveQuietly();
        }
    }
}