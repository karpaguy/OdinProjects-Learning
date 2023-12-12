const buttons = document.querySelectorAll(".btn");
const resultDisplay = document.querySelector(".resultDisplay");

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound() {
    machineValue = getComputerChoice();

    if (this.value == "scissors" && machineValue == "paper") { 
        resultDisplay.textContent = `You win! ${this.value} beats ${machineValue}`;
        return 1;
    }
    else if (this.value == "rock" && machineValue == "scissors") { 
        resultDisplay.textContent = `You win! ${this.value} beats ${machineValue}`;
        return 1;
    }
    else if (this.value == "paper" && machineValue == "rock") { 
        resultDisplay.textContent = `You win! ${this.value} beats ${machineValue}`;
        return 1;
    }
    else if (this.value == machineValue ) { 
        resultDisplay.textContent = `Its a draw!`;
        return 2;
    }
    else { 
        resultDisplay.textContent = `You Lose! ${machineValue} beats ${this.value}`;
        return 0;
    };
}

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

// Todos os que tiverem a classe btn são selecionados.
// Os btn's recebem um eventListener de playRound.
// playRound é uma função que conta um nível do jogo, informa a opção do botão pelo value ou id, e aleatoriza a jogada da máquina.
// A cada aperto, é verificado o vencedor.
// O resultado é demonstrado na div de resultado.
