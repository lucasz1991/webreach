<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class PagebuilderProject extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name', 
        'data', 
        'html', 
        'cleaned_html', 
        'js', 
        'css', 
        'last_edited_by', 
        'page', 
        'position', 
        'lang', 
        'lock', 
        'published_from', 
        'published_until', 
        'order_id', 
        'status',
        'type'
    ];

    protected $casts = [
        'page' => 'array', // Position als JSON-Array
        'position' => 'array', // Position als JSON-Array
        'lock' => 'boolean',   // Lock als Boolean speichern
    ];

    protected static function boot()
    {
        parent::boot();

        static::updated(function ($project) {
            $project->updateHtmlContent($project);
            $project->setLastEditor();
        });
    }

    public function updateProjekt()
    {
        $project = PagebuilderProject::find($this->id);
        $project->updateHtmlContent($project);
        $project->setLastEditor();
    }

    public function updateHtmlContent($project)
    {
        $project->updateHtmlFromData();
        $project->updateCssFromData();
    }

    public function setLastEditor()
    {
        if (auth()->check()) {
            $this->updateQuietly(['last_edited_by' => auth()->id()]);
        }
    }

    public function updateHtmlFromData()
    {
        $html = $this->html;
        if (!empty($html)) {
            [$cleanedJsHtml, $extractedJs] = $this->extractScripts($html);
            $cleanedBodyAndJsHtml = $this->extractBodyContent($cleanedJsHtml);
            $this->cleaned_html = $cleanedBodyAndJsHtml;
            $this->js = $this->sanitizeJs($extractedJs);
            $this->updateQuietly([
                'cleaned_html' => $this->cleaned_html,
                'js' => $this->js,
            ]);
        }
    }

    private function extractScripts($html)
    {
        $scriptTags = [];

        $cleanedHtml = preg_replace_callback('/<script\b[^>]*>(.*?)<\/script>/is', function ($matches) use (&$scriptTags) {
            $scriptTags[] = trim($matches[1]);
            return '';
        }, $html);

        $extractedJs = implode("\n", $scriptTags);

        return [$cleanedHtml, $extractedJs];
    }

    private function sanitizeJs($js)
    {
        // Ersetze Swiper-CDN durch den lokalen Pfad
        $js = preg_replace('/https?:\/\/[^"\']*swiper-bundle\.min\.js/i', '/adminresources/js/swiper-bundle.min.js', $js);
        $js = preg_replace('/https?:\/\/[^"\']*swiper-bundle\.min\.css/i', '/adminresources/css/swiper-bundle.min.css', $js);

        // Entferne alle anderen externen Skripte
        return preg_replace('/https?:\/\/(cdn\.(jsdelivr|cdnjs|unpkg)\.com|[^\s"\']+)/i', '', $js);
    }

    private function extractBodyContent($html)
    {
        if (!$html || !Str::contains($html, '<body')) {
            return $html;
        }

        if (preg_match('/<body([^>]*)>(.*?)<\/body>/si', $html, $matches)) {
            $bodyAttributes = trim($matches[1]);
            $bodyContent = trim($matches[2]);

            return '<div ' . $bodyAttributes . '>' . $bodyContent . '</div>';
        }

        return $html;
    }

    public function updateCssFromData()
    {
        $dataArray = json_decode($this->data, true);
        if (isset($dataArray['styles']) && is_array($dataArray['styles'])) {
            $cssRules = [];

            foreach ($dataArray['styles'] as $style) {
                if (!isset($style['selectors']) || !isset($style['style'])) {
                    continue;
                }

                $selectors = implode(', ', $style['selectors']);
                $rules = [];

                foreach ($style['style'] as $property => $value) {
                    $rules[] = "{$property}: {$value};";
                }

                if (!empty($rules)) {
                    $cssRules[] = "{$selectors} { " . implode(' ', $rules) . " }";
                }
            }

            $cleanedCss = implode("\n", $cssRules);
            $this->updateQuietly(['css' => $cleanedCss]);
        }
    }

    /**
     * Einheitliche Default-Projektdaten für neue Pagebuilder-Projekte.
     */
    public static function getDefaultProjectData(?string $appUrl = null): string
    {
        $projectData = <<<'JSON'
{"assets":[],"styles":[],"pages":[{"frames":[{"component":{"type":"wrapper","attributes":{"id":"itix"},"components":[{"tagName":"section","classes":["text-gray-600","body-font","relative"],"attributes":{"id":"iyduu"},"components":[{"classes":["container","px-5","py-24","mx-auto"],"attributes":{"id":"i91ng"},"components":[{"classes":["flex","flex-col","text-center","w-full","mb-12"],"attributes":{"id":"in4uu"},"components":[{"type":"heading","classes":["sm:text-3xl","text-2xl","font-medium","title-font","mb-4","text-gray-900"],"attributes":{"id":"igmy6"},"components":[{"type":"textnode","content":"Neues Pagebuilder Project"}]},{"tagName":"p","type":"text","classes":["lg:w-2/3","mx-auto","leading-relaxed","text-base"],"attributes":{"id":"i0w6e"},"components":[{"type":"textnode","content":"Hier kannst du kreativ werden und deine Träume verwirklichen!"}]}]}]}]}],"doctype":"<!DOCTYPE html>","head":{"type":"head","components":[{"tagName":"meta","void":true,"attributes":{"charset":"utf-8"}},{"tagName":"meta","void":true,"attributes":{"name":"viewport","content":"width=device-width,initial-scale=1"}},{"tagName":"meta","void":true,"attributes":{"name":"robots","content":"index,follow"}},{"tagName":"meta","void":true,"attributes":{"name":"generator","content":"LMZ Studio Project"}},{"tagName":"link","type":"link","attributes":{"href":"/adminresources/css/tailwind.min.css","rel":"stylesheet"}}]},"docEl":{"tagName":"html"}},"id":"8uKM3pEMmO8ZbWvE"}],"type":"main","id":"BGeRYNcKhJpNIMjv"}],"symbols":[],"dataSources":[],"custom":{"projectType":"web","id":""}}
JSON;

        $baseUrl = rtrim((string) ($appUrl ?? config('app.url')), '/');
        if ($baseUrl === '') {
            return $projectData;
        }

        return str_replace(
            '/adminresources/css/tailwind.min.css',
            $baseUrl . '/adminresources/css/tailwind.min.css',
            $projectData
        );
    }

    /**
     * Beziehung zum letzten Bearbeiter (User).
     */
    public function lastEditor()
    {
        return $this->belongsTo(User::class, 'last_edited_by');
    }

    /**
     * Überprüft, ob das Projekt veröffentlicht ist.
     */
    public function isPublished()
    {
        $now = Carbon::now();
        return $this->status === 1 && $this->published_from && Carbon::parse($this->published_from)->lte($now)
            && (!$this->published_until || Carbon::parse($this->published_until)->gte($now));
    }

    /**
     * Setzt das Projekt als veröffentlicht.
     */
    public function publish()
    {
        $this->update([
            'status' => 1,
            'published_from' => now(),
        ]);
    }

    /**
     * Setzt das Projekt auf Entwurf zurück.
     */
    public function unpublish()
    {
        $this->update([
            'status' => 0,
            'published_from' => null,
            'published_until' => null,
        ]);
    }

    /**
     * Gibt den HTML-Inhalt zurück.
     */
    public function getHtml()
    {
        return $this->html;
    }

    /**
     * Gibt den Css-Inhalt zurück.
     */
    public function getCss()
    {
        return $this->css;
    }

    /**
     * Gibt den Js-Inhalt zurück.
     */
    public function getJs()
    {
        return $this->js;
    }
}
