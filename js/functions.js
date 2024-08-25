function printMessage(msg){
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

function printResultTable(result){
    let div = document.createElement('div');
    div.innerHTML = result;
    document.getElementById('result').appendChild(div);
}

function printResultTable(result) {
    document.getElementById('result').innerHTML = result;
}

function printWinner(winner) {
    document.getElementById('winner').innerHTML = winner;
}