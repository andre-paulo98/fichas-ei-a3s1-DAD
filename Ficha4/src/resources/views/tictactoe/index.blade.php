@extends('master')

@section('title', 'Tic Tac Toe')

@section('content')

<div>
    <h3 class="text-center">TITULO</h3>
    <br>
    <h2>Current Player: @{{ playerName }}</h2>
    <br>
</div>
<div class="game-zone-content">
    <div class="alert alert-success" v-show="showSuccess">
        <button type="button" class="close-btn" >&times;</button>
        <strong>@{{ successMessage }} &nbsp;&nbsp;&nbsp;&nbsp;<a @click="restart()">Restart</a></strong>
    </div>

    <div class="board">
        <div v-for="(b, index) of board">
            <img v-bind:src="'img/'+b+'.png'" @click="play(index)">
        </div>
    </div>
    <hr>
</div>


@endsection
@section('pagescript')
    <script src="js/tictactoe.js"></script>
@stop
