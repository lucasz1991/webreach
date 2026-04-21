<?php

namespace App\Livewire\Admin\Cms\Tools;

use App\Models\PagebuilderProject;
use Livewire\Component;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Livewire\Attributes\Session;
use App\Models\Setting;
use App\Models\WebPage;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;


class AiAssistantChatbot extends Component
{
    #[Session] 
    public $chatHistory;
    #[Session] 
    public $lastResponse;
    #[Session(key: 'showChat')] 
    public $showChat;
    
    public $message = '';
    public $isLoading = false;
    public $isFunctionCall = false;
    public $projectId = null;

    public $status, $assistantName, $v1, $v2, $aiModel, $modelTitle, $refererUrl, $trainContent;

    protected $listeners = ['sendMessage' => 'sendMessage'];

    public function mount($projectId = null)
    {
        $this->projectId = $projectId;

        // Falls die Session leer ist (z. B. beim ersten Besuch)
        if (!is_array($this->chatHistory)) {
            $this->chatHistory = [];
        }
        $this->status = Setting::getValue('ai_assistant', 'status');
        $this->assistantName = $this->settingToString(Setting::getValue('ai_assistant', 'assistant_name')) ?: 'Webreach Assistent';
        $this->v1 = Crypt::encryptString($this->settingToString(Setting::getValue('ai_assistant', 'api_url')));
        $this->v2 = Crypt::encryptString($this->settingToString(Setting::getValue('ai_assistant', 'api_key')));
        $this->aiModel = Crypt::encryptString($this->settingToString(Setting::getValue('ai_assistant', 'ai_model')));
        $this->modelTitle = Crypt::encryptString($this->settingToString(Setting::getValue('ai_assistant', 'model_title')));
        $this->refererUrl = Crypt::encryptString($this->settingToString(Setting::getValue('ai_assistant', 'referer_url')));
        $this->trainContent = Crypt::encryptString($this->settingToString(Setting::getValue('ai_assistant', 'train_content')));
    }

    public function sendMessage()
    {
        if (trim($this->message) === '') {
            return;
        }

        // Benutzerfrage zur Historie hinzufügen
        //$this->chatHistory[] = ['role' => 'user', 'content' => $this->message];
        Log::info($this->message);

        $this->isLoading = true;
        $userMessage = $this->message;
        $this->message = '';

        // API-Call vorbereiten
        $maxRetries = 3;
        for ($attempt = 0; $attempt < $maxRetries; $attempt++) {
            try {
                $response = Http::withHeaders([
                    'Authorization' => 'Bearer '.Crypt::decryptString($this->v2),
                    'HTTP-Referer' => Crypt::decryptString($this->refererUrl),
                    'X-Title' => Crypt::decryptString($this->modelTitle),
                    'Content-Type'  => 'application/json',
                ])->post(Crypt::decryptString($this->v1), [
                    'model'    => Crypt::decryptString($this->aiModel),
                    'messages' => $this->buildMessages($userMessage),
                    'response_format' => [
                        'type' => 'json_schema',
                        'json_schema' => [
                            'name' => 'AnswerData',
                            'strict' => true,
                            'schema' => [
                                'type' => 'object',
                                'properties' => [
                                    'answer' => [
                                        'type' => 'string',
                                        'description' => 'Die natürliche, vom Assistenten generierte Antwort in Klartext für den Nutzer.'
                                    ],
                                    'function_name' => [
                                        'type' => 'string',
                                        'enum' => ['none', 'navigate'],
                                        'description' => 'Name einer auszuführenden Funktion in der Benutzeroberfläche, z. B. "navigate". Oder "none", falls keine Funktion vorgesehen ist. Erst wenn der Nutzer den Vorschlag ausdrücklich bestätigt (z. B. durch Zustimmung im Chat), darfst du eine Funktion setzen.'
                                    ],
                                    'function_value' => [
                                        'type' => 'string',
                                        'enum' => ['', 'dashboard', 'config', 'content-manager', 'current-project'],
                                        'description' => 'Parameter zur Funktion, z. B. ein erlaubtes Webreach-Ziel. Muss leer sein, wenn function_name "none" ist.'
                                    ],
                                    'function_trigger' => [
                                        'type' => 'boolean',
                                        'description' => 'Gibt an, ob die Funktion direkt ausgelöst werden soll (true) oder ob es sich lediglich um einen Vorschlag handelt (false). Nur wenn der Nutzer ausdrücklich zustimmt, darf dieser Wert auf true gesetzt werden. Bei Vorschlägen muss der Wert false bleiben.'
                                    ],
                                    'sentiment' => [
                                        'type' => 'string',
                                        'description' => 'Eingestufte Tonalität der Antwort: "neutral", "positiv", "negativ", um das Framing visuell zu unterstützen.'
                                    ],
                                    'call_to_action' => [
                                        'type' => 'string',
                                        'enum' => ['none', 'collect-briefing', 'show-brand-checklist', 'show-content-plan', 'show-seo-plan'],
                                        'description' => 'Optionaler Hinweis auf eine Handlungsempfehlung im Website-Prozess, z. B. Briefing erfassen, Brand-Checkliste, Content-Plan oder SEO-Plan.'
                                    ],
                                    'tags' => [
                                        'type' => 'array',
                                        'items' => ['type' => 'string'],
                                        'description' => 'Stichwörter zur Kategorisierung des Themas (z. B. ["Branding", "Farben", "Hero", "SEO"]).'
                                    ]
                                ],
                                'required' => ['answer', 'function_name', 'function_value', 'function_trigger', 'sentiment', 'call_to_action', 'tags'],
                                'additionalProperties' => false
                            ]
                        ]
                    ]
                    
                ]);
                $content = $response->json()['choices'][0]['message']['content'] ?? null;

                $decoded = json_decode($content, true); // true = as array

                $this->lastResponse = $decoded;

                $botMessage = $decoded['answer'] ?? '';

                if (!empty($botMessage)) {
                    $botMessage = preg_replace('/[\p{Han}\p{Hiragana}\p{Katakana}\p{Thai}]/u', '', $botMessage);
                    $this->chatHistory[] = ['role' => 'assistant', 'content' => $botMessage];
                    $this->isLoading = false;
                    if (!empty($decoded['function_trigger']) && $decoded['function_trigger'] === true) {
                        $this->handleFunctionCallFromAI($decoded);
                    }
                    return;
                }else {
                    Log::error('Leere Antwort vom AI-Modell erhalten.'. $response->json());
                }


            } catch (\Exception $e) {
                Log::error('Fehler bei der API-Anfrage: ' . $e->getMessage());
                // Kurze Pause vor dem nächsten Versuch
                sleep(1);
            }
        }

        // Falls nach 5 Versuchen keine Antwort kommt
        $this->chatHistory[] = ['role' => 'assistant', 'content' => "Ich habe dazu leider keine Antwort. ( Es ist ein Fehler aufgetreten. )"];
        $this->isLoading = false;
    }

    protected function handleFunctionCallFromAI(array $data): void
    {
        // Nur wenn Funktion vorhanden und nicht "none"
        if (!isset($data['function_name']) || $data['function_name'] === 'none') {
            return;
        }
        $function = $data['function_name'];
        $value = $data['function_value'] ?? null;
        // Erlaubte Funktionen + Zielwerte
        $allowedFunctions = [
            'navigate' => ['dashboard', 'config', 'content-manager', 'current-project']
        ];

        if (!array_key_exists($function, $allowedFunctions)) {
            return; // Unbekannte Funktion
        }

        if (is_array($allowedFunctions[$function]) && !in_array($value, $allowedFunctions[$function])) {
            return; // Ungültiger Zielwert
        }
        
        if ($data['function_name'] === 'navigate') {
            $this->handleFunctionCallNavigate($data);
        }

    }
    
    protected function handleFunctionCallNavigate(array $data): void
    {
            $target = $data['function_value'];
            // Nur erlaubte Ziele verarbeiten
            $allowedRoutes = ['dashboard', 'config', 'content-manager', 'current-project'];
            if (in_array($target, $allowedRoutes)) {
                // sleep(1);
                
                // Timeout für die Navigation setzen (z.B. 2 Sekunden)

                $routes = [
                    'dashboard' => route('admin.dashboard'),
                    'config' => route('admin.config'),
                    'content-manager' => route('admin.webcontentmanager'),
                    'current-project' => $this->projectId ? route('admin.cms.edit-project', ['projectId' => $this->projectId]) : route('admin.dashboard'),
                ];

                $this->redirect($routes[$target], navigate: true);
            }
    }

    protected function buildMessages(string $userMessage): array
    {
        $history = is_array($this->chatHistory) ? $this->chatHistory : [];
        $lastMessage = end($history);

        if (
            !is_array($lastMessage)
            || ($lastMessage['role'] ?? null) !== 'user'
            || trim((string) ($lastMessage['content'] ?? '')) !== trim($userMessage)
        ) {
            $history[] = ['role' => 'user', 'content' => $userMessage];
        }

        return array_merge([
            [
                'role' => 'system',
                'content' => $this->buildSystemPrompt(),
            ],
        ], $history);
    }

    protected function buildSystemPrompt(): string
    {
        $parts = [
            $this->webreachAssistantInstructions(),
            $this->buildBrandContext(),
            $this->buildProjectContext(),
        ];

        $trainContent = trim(Crypt::decryptString($this->trainContent));

        if ($trainContent !== '') {
            $parts[] = "Zusätzliche Wissensbasis aus den Einstellungen (nur nutzen, wenn sie zur Webreach-Website-Erstellung passt; alte Versicherungs-, Bewertungs- oder Regulierungs-CHECK-Inhalte ignorieren):\n" . $trainContent;
        }

        $parts[] = 'Priorität: Die Webreach-Rolle, der aktuelle Projektkontext und die Website-Identity haben Vorrang vor älteren oder fachfremden Trainingsinhalten.';

        return trim(preg_replace('/\s+/', ' ', implode("\n\n", array_filter($parts))));
    }

    protected function webreachAssistantInstructions(): string
    {
        return <<<'PROMPT'
Du bist der Webreach Website-Assistent im internen CMS/Pagebuilder. Deine Aufgabe ist, Nutzer beim Planen, Schreiben und Verbessern einer Website zu unterstützen: Briefing, Zielgruppe, Angebot, Positionierung, Seitenstruktur, Sektionen, Microcopy, SEO, Conversion, Farben und visuelle Identity. Nutze die vorhandenen Brand- und Projektinformationen, falls sie im Kontext stehen. Erfinde keine Kundendaten, Farben, Logos, USPs oder rechtlichen Aussagen. Wenn wichtige Identity-Daten fehlen, frage kurz danach oder mache klar markierte Vorschläge. Bei Website-Erstellung arbeite praktisch: erst Ziel und Zielgruppe klären, dann Struktur vorschlagen, danach konkrete Texte/Abschnitte liefern. Ignoriere alte Regulierungs-CHECK-, Bewertungs- oder Versicherungslogik. Wenn der Nutzer konkrete Builder-Änderungen wünscht, bereite die exakten Texte, Farbrollen oder Sektionen vor; direkte Bearbeitung ist erst möglich, wenn dafür ein UI-Tool angebunden ist. Antworte auf Deutsch, kompakt und umsetzbar. Setze function_name nur dann auf "navigate", wenn der Nutzer Navigation ausdrücklich bestätigt.
PROMPT;
    }

    protected function buildBrandContext(): string
    {
        $companyName = $this->settingToString(Setting::getValueUncached('base', 'company_name'));
        $appName = $this->settingToString(Setting::getValueUncached('base', 'app_name'));
        $contactEmail = $this->settingToString(Setting::getValueUncached('base', 'contact_email'));

        $colorDefaults = [
            'primary_color' => ['Primärfarbe', '#2563EB'],
            'secondary_color' => ['Sekundärfarbe', '#64748B'],
            'accent_color' => ['Akzentfarbe', '#14B8A6'],
            'background_color' => ['Hintergrundfarbe', '#F8FAFC'],
            'surface_color' => ['Surface-Farbe', '#FFFFFF'],
            'text_color' => ['Textfarbe', '#0F172A'],
            'footer_color' => ['Footer-Farbe', '#0F172A'],
        ];

        $lines = ['Globale Webreach/Website-Identity:'];

        if ($companyName !== '') {
            $lines[] = '- Firma: ' . $companyName;
        }

        if ($appName !== '') {
            $lines[] = '- Website/App-Name: ' . $appName;
        }

        if ($contactEmail !== '') {
            $lines[] = '- Kontakt-E-Mail: ' . $contactEmail;
        }

        foreach ($colorDefaults as $key => [$label, $fallback]) {
            $value = $this->settingToString(Setting::getValueUncached('base', $key)) ?: $fallback;
            $lines[] = '- ' . $label . ': ' . strtoupper($value);
        }

        foreach (['logo_horizontal', 'logo_square', 'logo_vertical', 'favicon'] as $key) {
            $value = $this->settingToString(Setting::getValueUncached('base', $key));
            if ($value !== '') {
                $lines[] = '- Branding-Datei ' . $key . ': ' . $value;
            }
        }

        return implode("\n", $lines);
    }

    protected function buildProjectContext(): string
    {
        if (!$this->projectId) {
            return 'Aktueller Projektkontext: kein Projekt übergeben.';
        }

        $project = PagebuilderProject::find($this->projectId);

        if (!$project) {
            return 'Aktueller Projektkontext: Projekt wurde nicht gefunden.';
        }

        $page = WebPage::query()->where('pagebuilder_project', $project->id)->first();
        $lines = [
            'Aktuelles Pagebuilder-Projekt:',
            '- Projekt-ID: ' . $project->id,
            '- Projektname: ' . $project->name,
            '- Typ: ' . ($project->type ?: 'module'),
            '- Sprache: ' . ($project->lang ?: ($page?->language ?: 'nicht gesetzt')),
            '- Status: ' . $this->projectStatusLabel((int) $project->status),
        ];

        if ($page) {
            $lines[] = '- Zugeordnete Seite: ' . $page->title . ' (/' . trim((string) $page->slug, '/') . ')';

            if ($page->meta_title) {
                $lines[] = '- Meta Title: ' . $page->meta_title;
            }

            if ($page->meta_description) {
                $lines[] = '- Meta Description: ' . $page->meta_description;
            }
        }

        $colors = $this->extractColorsFromProject($project);
        if (!empty($colors)) {
            $lines[] = '- Im Projekt erkannte Farben: ' . implode(', ', $colors);
        }

        $fonts = $this->extractFontsFromProject($project);
        if (!empty($fonts)) {
            $lines[] = '- Im Projekt erkannte Fonts: ' . implode(', ', $fonts);
        }

        $textExcerpt = $this->extractProjectTextExcerpt($project);
        if ($textExcerpt !== '') {
            $lines[] = '- Textauszug aktueller Stand: ' . $textExcerpt;
        }

        return implode("\n", $lines);
    }

    protected function projectStatusLabel(int $status): string
    {
        return match ($status) {
            1 => 'veröffentlicht',
            2 => 'archiviert',
            3 => 'fixed page',
            default => 'Entwurf',
        };
    }

    protected function extractColorsFromProject(PagebuilderProject $project): array
    {
        $haystack = implode("\n", array_filter([
            $project->css,
            $project->html,
            $project->cleaned_html,
            $project->data,
        ]));

        preg_match_all('/#(?:[0-9a-fA-F]{3,8})\b|rgba?\([^)]+\)|hsla?\([^)]+\)/', $haystack, $matches);

        return array_slice(array_values(array_unique(array_map('trim', $matches[0] ?? []))), 0, 12);
    }

    protected function extractFontsFromProject(PagebuilderProject $project): array
    {
        $haystack = implode("\n", array_filter([
            $project->css,
            $project->html,
            $project->cleaned_html,
            $project->data,
        ]));

        preg_match_all('/font-family\s*:\s*([^;"\'}]+)/i', $haystack, $matches);

        $fonts = array_map(
            fn($value) => trim(str_replace(['"', "'"], '', $value)),
            $matches[1] ?? []
        );

        return array_slice(array_values(array_unique(array_filter($fonts))), 0, 8);
    }

    protected function extractProjectTextExcerpt(PagebuilderProject $project): string
    {
        $text = trim(preg_replace('/\s+/', ' ', strip_tags((string) ($project->cleaned_html ?: $project->html))));

        if ($text === '') {
            $text = $this->extractTextFromProjectData((string) $project->data);
        }

        return $text !== '' ? Str::limit($text, 900) : '';
    }

    protected function extractTextFromProjectData(string $data): string
    {
        $decoded = json_decode($data, true);

        if (!is_array($decoded)) {
            return '';
        }

        $texts = [];
        $walker = function ($value) use (&$walker, &$texts) {
            if (!is_array($value)) {
                return;
            }

            if (isset($value['content']) && is_string($value['content'])) {
                $content = trim($value['content']);
                if ($content !== '') {
                    $texts[] = $content;
                }
            }

            foreach ($value as $child) {
                $walker($child);
            }
        };

        $walker($decoded);

        return trim(preg_replace('/\s+/', ' ', implode(' ', array_slice($texts, 0, 80))));
    }

    protected function settingToString($value): string
    {
        if (is_array($value)) {
            return trim(json_encode($value, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) ?: '');
        }

        return trim((string) $value);
    }

    public function clearChat()
    {
        $this->chatHistory = [];
    }

    public function render()
    {
        return view('livewire.admin.cms.tools.ai-assistant-chatbot');
    }
}
