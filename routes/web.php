<?php

use App\Http\Controllers\Api\PagebuilderProjectController as ApiPagebuilderProjectController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\PagebuilderProjectController;
use App\Http\Controllers\PageController;
use App\Livewire\Admin\Employees;
use App\Livewire\Admin\Safety;
use App\Livewire\Admin\UserProfile;
use App\Livewire\Admin\Users;
use App\Livewire\AdminConfig;
use App\Livewire\AdminDashboard;

use App\Livewire\WebContentManager;
use App\Livewire\Welcome;
use App\Livewire\Admin\Cms\EditProject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', Welcome::class)->name('home');

Route::post('/locale/{locale}', [LocaleController::class, 'switch'])->name('locale.switch');

Route::middleware('guest')->group(function () {
    Route::view('/login', 'auth.login')->name('login');
    Route::view('/register', 'auth.register')->name('register');
    Route::view('/forgot-password', 'auth.forgot-password')->name('password.request');

    Route::get('/administrator/login', function (Request $request) {
        $request->session()->put('url.intended', route('admin.dashboard'));

        return view('auth.admin-login');
    })->name('admin.login');

    Route::get('/reset-password/{token}', function (Request $request, string $token) {
        return view('auth.reset-password', ['request' => $request]);
    })->name('password.reset');
});

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        if (in_array(auth()->user()->role, ['admin', 'staff'], true)) {
            return redirect()->route('admin.dashboard');
        }

        return view('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth:sanctum', 'auth.status', config('jetstream.auth_session'), 'verified', 'role:admin,staff'])
    ->prefix('administrator')
    ->name('admin.')
    ->group(function () {
        Route::get('/', AdminDashboard::class)->name('dashboard');
        Route::get('/index', AdminDashboard::class)->name('index');
        Route::get('/config', AdminConfig::class)->name('config');
        Route::get('/web-content-manager', WebContentManager::class)->name('webcontentmanager');
        Route::get('/users', Users::class)->name('users');
        Route::get('/safety', Safety::class)->name('safety');
        Route::get('/activities', Safety::class)->name('activities');
        Route::get('/employees', Employees::class)->name('employees');
        Route::get('/user/{userId}', UserProfile::class)->name('user-profile');

        Route::get('/cms/edit-project/{projectId?}', EditProject::class)->name('cms.edit-project');

        Route::post('/pagebuilder/save', [PagebuilderProjectController::class, 'save'])->name('pagebuilder.save');
        Route::get('/pagebuilder/load/{id}', [PagebuilderProjectController::class, 'load'])->name('pagebuilder.load');
        Route::post('/pagebuilder/upload', [ApiPagebuilderProjectController::class, 'uploadImage'])->name('pagebuilder.upload');
        Route::get('/pagebuilder/assets', [ApiPagebuilderProjectController::class, 'getAssets'])->name('pagebuilder.assets');
    });

Route::middleware(['auth:sanctum', 'auth.status', config('jetstream.auth_session'), 'verified', 'role:admin,staff'])->group(function () {
    Route::post('/admin/pagebuilder/save', [PagebuilderProjectController::class, 'save']);
    Route::get('/admin/pagebuilder/load/{id}', [PagebuilderProjectController::class, 'load']);
    Route::post('/admin/pagebuilder/upload', [ApiPagebuilderProjectController::class, 'uploadImage']);
    Route::get('/admin/pagebuilder/assets', [ApiPagebuilderProjectController::class, 'getAssets']);
});

// Muss am Ende stehen, damit spezifische Routen (z. B. /login, /administrator/...) Vorrang haben.
Route::get('/{slug}', [PageController::class, 'show'])->name('page');
