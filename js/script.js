let computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';
printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let randomNumber = Math.floor(Math.random() * 9 + 11);
printMessage('Wylosowana liczba to: ' + randomNumber);