<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller {
    public function get(Request $request) {
        if($request->has('page')) {
            $users = User::paginate(10);
        } else {
            $users = User::all();
        }
        return UserResource::collection($users);

    }

    public function delete($id) {
        $user = User::find($id);
        $user->delete();
        return "User deleted successfully";
    }

    public function getOne($id) {
        $user = User::find($id);
        return new UserResource($user);
    }

    public function update(Request $request, User $updatedUser) {
        $updatedUser->fill($request->all());
        $updatedUser->save();
        return new UserResource($updatedUser);
    }
}
