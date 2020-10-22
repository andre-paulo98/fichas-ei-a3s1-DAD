@extends('master')

@section('title', 'Edit user')

@section('content')

    @if (count($errors) > 0)
        @include('shared.errors')
    @endif

    <form action="{{route('users.update', $user)}}" method="post" class="form-group">
        <div class="form-group">
            <label for="inputName">Name</label>
            <input type="text" class="form-control" name="name" id="inputName" placeholder="Fullname" value=""/>
        </div>
        <div class="form-group">
            <label for="inputEmail">Email</label>
            <input type="email" class="form-control" name="email" id="inputEmail" placeholder="Email address" value=""/>
        </div>
        <div class="form-group">
            <label for="inputAge">Age</label>
            <input type="number" class="form-control" name="age" id="inputAge" placeholder="Age" value=""/>
        </div>
        <div class="form-group">
            <label for="department_id">Department:</label>
            <select class="form-control" id="department_id" name="department_id">
            </select>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary" name="ok">Save</button>
            <a type="submit" class="btn btn-default" href="http://localhost:8080/users">Cancel</a>
        </div>
    </form>
@endsection

@section('pagescript')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.min.js" integrity="sha512-quHCp3WbBNkwLfYUMd+KwBAgpVukJu5MncuQaWXgCrfgcxCJAq/fo+oqrRKOj+UKEmyMCG3tb8RB63W+EmrOBg==" crossorigin="anonymous"></script>
    <script src="/js/edit-users.js"></script>
@endsection
