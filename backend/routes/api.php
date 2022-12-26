<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('clients', ClientController::class);
Route::apiResource('products', ProductController::class);
