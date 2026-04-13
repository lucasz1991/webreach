<?php

namespace Tests\Unit;

use App\Services\PagebuilderProjectPreviewService;
use ReflectionMethod;
use Tests\TestCase;

class PagebuilderProjectPreviewServiceTest extends TestCase
{
    protected function tearDown(): void
    {
        $this->setPagebuilderNodeBinary(null);

        parent::tearDown();
    }

    public function test_resolve_node_binary_uses_configured_executable(): void
    {
        $binaryPath = $this->createFakeNodeBinary();
        $this->setPagebuilderNodeBinary($binaryPath);

        $service = new PagebuilderProjectPreviewService();
        $resolvedBinary = $this->invokePrivateMethod($service, 'resolveNodeBinary');

        $this->assertSame($binaryPath, $resolvedBinary);
    }

    public function test_build_process_environment_uses_runtime_temp_dir_and_binary_directory(): void
    {
        $binaryPath = $this->createFakeNodeBinary();
        $runtimeTempDir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'pagebuilder-preview-runtime-' . uniqid('', true);
        mkdir($runtimeTempDir, 0777, true);

        $service = new PagebuilderProjectPreviewService();
        $environment = $this->invokePrivateMethod($service, 'buildProcessEnvironment', [$runtimeTempDir, $binaryPath]);

        $this->assertSame($runtimeTempDir, $environment['TMPDIR']);
        $this->assertSame($runtimeTempDir, $environment['TEMP']);
        $this->assertSame($runtimeTempDir, $environment['TMP']);
        $this->assertArrayHasKey('HOME', $environment);
        $this->assertStringContainsString(dirname($binaryPath), $environment['PATH']);
    }

    private function createFakeNodeBinary(): string
    {
        $directory = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'pagebuilder-preview-node-' . uniqid('', true);
        mkdir($directory, 0777, true);

        $binaryPath = $directory . DIRECTORY_SEPARATOR . 'node';
        file_put_contents($binaryPath, "#!/bin/sh\necho v20.0.0\n");
        chmod($binaryPath, 0755);

        return $binaryPath;
    }

    private function setPagebuilderNodeBinary(?string $value): void
    {
        if ($value === null) {
            putenv('PAGEBUILDER_NODE_BINARY');
            unset($_ENV['PAGEBUILDER_NODE_BINARY'], $_SERVER['PAGEBUILDER_NODE_BINARY']);

            return;
        }

        putenv('PAGEBUILDER_NODE_BINARY=' . $value);
        $_ENV['PAGEBUILDER_NODE_BINARY'] = $value;
        $_SERVER['PAGEBUILDER_NODE_BINARY'] = $value;
    }

    /**
     * @param  array<int, mixed>  $arguments
     */
    private function invokePrivateMethod(object $instance, string $method, array $arguments = []): mixed
    {
        $reflectionMethod = new ReflectionMethod($instance, $method);
        $reflectionMethod->setAccessible(true);

        return $reflectionMethod->invokeArgs($instance, $arguments);
    }
}
