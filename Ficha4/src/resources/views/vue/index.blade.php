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
    <tbody>

    </tbody>
</table>

<div class=" alert alert-success">
    <button type="button" class="close-btn" >&times;</button>
    <strong></strong>
</div>

<div class="jumbotron">
    <h2>Edit User</h2>
</div>


@endsection
@section('pagescript')
<script src="js/app.js"></script>
@stop
