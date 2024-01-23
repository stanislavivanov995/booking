<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EstatesController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index']);

Route::get('/results', [HomeController::class, 'results'])->name('results');

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/estates', [EstatesController::class, 'index'])->name('estates.index');
    Route::get('/estates/create', [EstatesController::class, 'create'])->name('estates.create');
    Route::post('/estates/store', [EstatesController::class, 'store'])->name('estates.store');
    Route::get('/estates/export', [EstatesController::class, 'export'])->name('estates.export');
    Route::get('/estates/edit/{estate}', [EstatesController::class, 'edit'])->name('estate.edit')
        ->missing(function (Request $request) {
            return Redirect::route('estates.index');
        });
    Route::get('/estates/show/{estate}', [EstatesController::class, 'show'])->name('estate.show')
        ->missing(function (Request $request) {
            return Redirect::route('estates.index');
        });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
