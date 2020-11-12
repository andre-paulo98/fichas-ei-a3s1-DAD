@extends('master')

@section('title', 'Vue.js App')

@section('content')

    <router-link to="/departments">Departments</router-link>
    <router-link to="/users">Users</router-link>
    <router-view></router-view>


@endsection
@section('pagescript')
<script src="js/app.js"></script>
@stop
