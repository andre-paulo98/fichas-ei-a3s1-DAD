<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/departments', 'App\Http\Controllers\Api\DepartmentController@get');
Route::get('/users', 'App\Http\Controllers\Api\UserController@get');
