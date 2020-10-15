<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function get()
    {
        $departments = Department::all();
        //return DepartmentResource::collection($departments);
        return $departments;
    }
}
