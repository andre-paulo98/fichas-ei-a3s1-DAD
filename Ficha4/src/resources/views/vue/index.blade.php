@extends('master')

@section('title', 'Vue.js App')

@section('content')

<div class="jumbotron">
    <h1></h1>
</div>
<table class="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Department</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody v-if="users">
        <tr v-for="user of users">
            <td>@{{ user.name }}</td>
            <td>@{{ user.email }}</td>
            <td>@{{ user.age }}</td>
            <td>@{{ user.department }}</td>
            <td>
                <button class="btn btn-primary" v-on:click.prevent="editUser(user)">Edit</button>
                <button class="btn btn-danger" @click="deleteUser(user)">Delete</button>
            </td>
        </tr>
    </tbody>
</table>

<div class="alert" :class="{'alert-success': successMessage.length>0, 'alert-danger': failMessage.length>0}">
    <button type="button" class="close-btn" @click="successMessage = failMessage = ''">&times;</button>
    <strong>@{{ failMessage || successMessage }}</strong>
</div>

<div class="jumbotron" v-if="editingUser">
    <h2>Edit User</h2>
    <form>
        <div class="form-group">
            <label for="">Nome</label>
            <input type="text" class="form-control" v-model="currentUser.name">
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input type="text" class="form-control" v-model="currentUser.email">
        </div>
        <div class="form-group">
            <label for="">Age</label>
            <input type="text" class="form-control" v-model="currentUser.age">
        </div>
        <div class="form-group">
            <label for="">Department</label>
            <select name="" id="" v-model="currentUser.department_id">
                <option v-for="department of departments" :value="department.id">@{{ department.name }}</option>
            </select>
        </div>
        <div class="form-group">
            <button class="btn btn-secondary" @click.prevent="cancelEdit()">Cancel</button>
            <button class="btn btn-primary" @click.prevent="saveUser()">Save</button>
        </div>
    </form>
</div>


@endsection
@section('pagescript')
<script src="js/app.js"></script>
@stop
