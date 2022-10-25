<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

<<<<<<< HEAD

// Route::resource('api/categories', CategoryController::class);
// Route::resource('api/products', ProductController::class);
=======
Route::resource('categories', CategoryController::class);
Route::resource('products', ProductController::class);
>>>>>>> efaa7a6cfc915dbe28ae4d93de86eb418d48f129
