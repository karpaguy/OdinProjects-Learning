const buttons = document.querySelectorAll(".btn");
const resultDisplay = document.querySelector(".resultDisplay");

const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const machineScoreDisplay = document.querySelector(".machineScoreDisplay");

let playerScore = 0;
let machineScore = 0;

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function resetScore() {
    playerScore = 0;
    machineScore = 0;
}

function checkWinner() {
    if (playerScore == 5) {
        resultDisplay.textContent = `You've win the game!`;
        resetScore();
    }
    else if (machineScore == 5) {
        resultDisplay.textContent = `You've lost the game!`;
        resetScore();
    }
}

function playRound() {
    machineValue = getComputerChoice();

    if (this.value == "Scissors" && machineValue == "Paper") { 
        resultDisplay.textContent = `You win! ${this.value} beats ${machineValue}`;
        playerScore += 1;
    }
    else if (this.value == "Rock" && machineValue == "Scissors") { 
        resultDisplay.textContent = `You win! ${this.value} beats ${machineValue}`;
        playerScore += 1;
    }
    else if (this.value == "Paper" && machineValue == "Rock") { 
        resultDisplay.textContent = `You win! ${this.value} beats ${machineValue}`;
        playerScore += 1;
    }
    else if (this.value == machineValue ) { 
        resultDisplay.textContent = `Its a draw!`;
    }
    else { 
        resultDisplay.textContent = `You Lose! ${machineValue} beats ${this.value}`;
        machineScore += 1;
    };

    playerScoreDisplay.textContent = `Player - ${playerScore}`;
    machineScoreDisplay.textContent = `Machine - ${machineScore}`;

    checkWinner();
}

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

// Todos os que tiverem a classe btn são selecionados.
// Os btn's recebem um eventListener de playRound.
// playRound é uma função que conta um nível do jogo, informa a opção do botão pelo value ou id, e aleatoriza a jogada da máquina.
// A cada aperto, é verificado o vencedor.
// O resultado é demonstrado na div de resultado.
