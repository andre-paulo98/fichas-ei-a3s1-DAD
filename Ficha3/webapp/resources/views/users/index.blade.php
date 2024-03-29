@extends('master')

@section('title', 'List users')

@section('metatags')
<meta name="csrf-token" content="@crsf">
@endsection

@section('content')

<div><a class="btn btn-primary" href="{{ route('users.create')}}">Add user</a></div>

@if (count($users))
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
    <!--@foreach ($users as $user)
        <tr>
            <td><a href="{{route('users.show',$user)}}">{{$user->name}}</a></td>
            <td>{{$user->email}}</td>
            <td>{{$user->age}}</td>
            <td>{{$user->department->name}}</td>
            <td>
                <a class="btn btn-xs btn-primary" href="{{ route('users.edit', $user )}}">Edit</a>

                <form action="{{route('users.destroy', $user)}}" method="post" class="inline">
                    @method('DELETE')
                    @csrf
                    <div class="form-group">
                        <button type="submit" class="btn btn-xs btn-danger">Delete</button>
                    </div>
                </form>
            </td>
        </tr>
    @endforeach -->
    </tbody>
    </table>
    <!--{{ $users->links() }}-->
    <nav>
        <ul class="pagination">

        </ul>
    </nav>
@else
    <h2>No users found</h2>
@endif
@endsection
@section('pagescript')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js" integrity="sha512-quHCp3WbBNkwLfYUMd+KwBAgpVukJu5MncuQaWXgCrfgcxCJAq/fo+oqrRKOj+UKEmyMCG3tb8RB63W+EmrOBg==" crossorigin="anonymous"></script>
    <script src="/js/users.js"></script>
@endsection
