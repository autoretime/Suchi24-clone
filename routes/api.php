<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware'=>'auth:sanctum'], function(){
    Route::post('/logout', [LoginController::class, 'logout']);
});

Route::get('/home', [HomeController::class, 'index'] );
Route::get('/category/{category}', [HomeController::class, 'category'] );
Route::get('/product/{product}', [HomeController::class, 'product'] );

Route::post('/order', [OrderController::class, 'index'] );

Route::post('login', [LoginController::class, 'authentificate']);
Route::post('registration', [LoginController::class, 'registration']);

Route::resource('products', ProductController::class);
Route::resource('categories', CategoryController::class);
Route::resource('orders', OrderController::class);
Route::get('order-details/{id}', [OrderController::class, 'orderDetails']);
Route::post('order-products-update', [OrderController::class, 'updateOrderProducts']);

Route::post('products/{id}', [ProductController::class, 'update']);

//search
Route::get('search', [HomeController::class, 'search']);



