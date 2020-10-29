@csrf

<div class="form-group">
    <label for="inputName">Name</label>
    <input
        type="text" class="form-control"
        name="name" id="inputName"
        placeholder="Fullname" value="{{old('name', $user->name)}}" />
</div>
<div class="form-group">
    <label for="inputEmail">Email</label>
    <input
        type="email" class="form-control"
        name="email" id="inputEmail"
        placeholder="Email address" value="{{old('email', $user->email)}}"/>
</div>
<div class="form-group">
    <label for="inputAge">Age</label>
    <input
        type="number" class="form-control"
        name="age" id="inputAge"
        placeholder="Age" value="{{old('age', $user->age)}}"/>
</div>
<div class="form-group">
    <label for="department_id">Department:</label>
    <select class="form-control" id="department_id" name="department_id"
            value="{{old('department_id', $user->department_id)}}">
        @foreach ($departments as $department)
            @if ($department->id == $user->department_id)
                <option value="{{$department->id}}" selected>{{$department->name}}</option>
            @else
                <option value="{{$department->id}}">{{$department->name}}</option>
            @endif
        @endforeach
    </select>
</div>
