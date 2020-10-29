@extends('master')

@section('title', 'Tic Tac Toe')

@section('content')

<div>
    <h3 class="text-center">TITULO</h3>
    <br>
    <h2>Current Player : JOGADOR ATUAL</h2>
    <br>
</div>
<div class="game-zone-content">
    <div class="alert alert-success" >
        <button type="button" class="close-btn" >&times;</button>
        <strong>MENSAGEM &nbsp;&nbsp;&nbsp;&nbsp;<a>Restart</a></strong>
    </div>

    <div class="board">
        <div >
            <img src="img/1.png">
        </div>
        <div >
            <img src="img/2.png">
        </div>
        <div >
            <img src="img/0.png">
        </div>
        <div >
            <img src="img/2.png">
        </div>
        <div >
            <img src="img/1.png">
        </div>
        <div >
            <img src="img/0.png">
        </div>
        <div >
            <img src="img/2.png">
        </div>
        <div >
            <img src="img/0.png">
        </div>
        <div >
            <img src="img/1.png">
        </div>
    </div>
    <hr>
</div>


@endsection
@section('pagescript')
    <script src="js/tictactoe.js"></script>
@stop
