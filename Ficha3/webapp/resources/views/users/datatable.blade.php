@extends('master')

@section('title', 'List users')

@section('metatags')
<meta name="csrf-token" content="@crsf">
<link href="https://unpkg.com/vanilla-datatables@latest/dist/vanilla-dataTables.min.css" rel="stylesheet" type="text/css">
@endsection

@section('content')

<div><a class="btn btn-primary" href="{{ route('users.create')}}">Add user</a></div>

    <table class="table table-striped" id="data_table">
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

    <nav>
        <ul class="pagination">

        </ul>
    </nav>

@endsection
@section('pagescript')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js" integrity="sha512-quHCp3WbBNkwLfYUMd+KwBAgpVukJu5MncuQaWXgCrfgcxCJAq/fo+oqrRKOj+UKEmyMCG3tb8RB63W+EmrOBg==" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/vanilla-datatables@latest/dist/vanilla-dataTables.min.js" type="text/javascript"></script>
    <script src="/js/users_datatable.js"></script>

@endsection
