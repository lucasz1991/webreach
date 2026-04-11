<?php

namespace App\Jobs;

use App\Models\PagebuilderProject;
use App\Services\PagebuilderProjectPreviewService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\Middleware\WithoutOverlapping;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class GeneratePagebuilderProjectPreviews implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $projectId;
    public ?string $baseUrl;
    public int $timeout = 300;
    public int $tries = 2;

    public function __construct(int $projectId, ?string $baseUrl = null)
    {
        $this->projectId = $projectId;
        $this->baseUrl = $baseUrl;
    }

    public function middleware(): array
    {
        return [
            (new WithoutOverlapping('pagebuilder-preview:' . $this->projectId))
                ->releaseAfter(10)
                ->expireAfter(300),
        ];
    }

    public function handle(PagebuilderProjectPreviewService $previewService): void
    {
        $project = PagebuilderProject::find($this->projectId);

        if (!$project) {
            return;
        }

        $previewService->generate($project, $this->baseUrl);
    }

    public function failed(\Throwable $exception): void
    {
        Log::warning('Preview-Erzeugung im Queue-Job fehlgeschlagen', [
            'project_id' => $this->projectId,
            'message' => $exception->getMessage(),
        ]);
    }
}
