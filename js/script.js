{

    const playGame = function (argPlayerMove) {

        clearMessages();

        // FUNKCTION - WHAT IS THE MOVE?

        const getMoveName = function (argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            }

            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        // FUNCTION - WHAT IS THE RESULT?

        const displayResult = function (argComputerMove, argPlayerMove) {
            if (argComputerMove == 'kamień') {
                document.getElementById('computer-paper').classList.remove('choice');
                document.getElementById('computer-scissors').classList.remove('choice');
                
                document.getElementById('computer-rock').classList.add('choice');

            } else if (argComputerMove == 'papier') {
                document.getElementById('computer-rock').classList.remove('choice');
                document.getElementById('computer-scissors').classList.remove('choice');
                
                document.getElementById('computer-paper').classList.add('choice');
            } else if (argComputerMove == 'nożyce') {
                document.getElementById('computer-paper').classList.remove('choice');
                document.getElementById('computer-rock').classList.remove('choice');
                
                document.getElementById('computer-scissors').classList.add('choice');
            }

            printMessage('Komputer zagrał ' + argComputerMove + ', a Ty ' + argPlayerMove);
            
            if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Ty wygrywasz tę rundę!');
                playerPoints += 1;
            } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Ty wygrywasz tę rundę!');
                playerPoints += 1;
            } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Ty wygrywasz tę rundę!');
                playerPoints += 1;
            } else if(argComputerMove == argPlayerMove){
                printMessage('Remis!');
            } else if(argPlayerMove == 'nieznany ruch') {
                printMessage('Wpisałeś złą wartość!')
            } else {
                printMessage('Komputer wygrywa tę rundę!')
                computerPoints += 1;
            }
        }

        // FUNCTION WHO WON THE GAME

        const whoWon = function (argComputerPoints, argPlayerPoints){
            let winner = '';

            if (argComputerPoints == 3) {
                winner = 'Komputer wygrał grę!'
                const elements = document.getElementsByClassName('cup');

                elements[0].classList.add('cupWinner');

                printWinner(winner);

                setTimeout(function() {
                    showOverlay()
                    playAgain()
                }, 1000);

            } else if (argPlayerPoints == 3) {
                winner = 'Wygrałeś grę!'

                const elements = document.getElementsByClassName('cup');

                elements[1].classList.add('cupWinner');

                printWinner(winner);

                setTimeout(function() {
                    showOverlay()
                    playAgain()
                }, 1000);
            }
        }

        const showOverlay = function () {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'block';
        }

        const playAgain = function () {
            const playerChoice = confirm('Czy chcesz zagrać jeszcze raz?');
        
            if (playerChoice) {
                location.reload();
            } else {
                console.log('Gracz nie chce grać ponownie.');
            }
        }
        

        // COMPUTER MOVE

        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        const computerMove = getMoveName(randomNumber);

        // PLAYER MOVE

        const playerMove = getMoveName(argPlayerMove);

        // RESULT

        displayResult(computerMove, playerMove)

        // RESULT TABLE
        const resultTable = 'Komputer ' + computerPoints + ' - ' + playerPoints + ' Gracz';
        printResultTable(resultTable)

        // TELL WHO IS THE WINNER
        whoWon(computerPoints, playerPoints);
    }

    // DECLARATION VARIABLES OF POINTS

    let computerPoints = 0;
    let playerPoints = 0;

    // LISTENERS

    document.getElementById('play-rock').addEventListener('click', function()
    {
        document.getElementById('play-scissors').classList.remove('choice');
        document.getElementById('play-paper').classList.remove('choice');

        this.classList.add('choice');

        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function()
    {
        document.getElementById('play-rock').classList.remove('choice');
        document.getElementById('play-scissors').classList.remove('choice');

        this.classList.add('choice');

        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function()
    {
        document.getElementById('play-rock').classList.remove('choice');
        document.getElementById('play-paper').classList.remove('choice');
        
        this.classList.add('choice');

        playGame(3);
    })

}