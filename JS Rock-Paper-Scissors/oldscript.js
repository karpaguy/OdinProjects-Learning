function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerValue, machineValue) {
    playerValue = playerValue.toLowerCase();

    if (playerValue == "scissors" && machineValue == "paper") { 
        console.log(`You win! ${playerValue} beats ${machineValue}`);
        return 1;
    }
    else if (playerValue == "rock" && machineValue == "scissors") { 
        console.log(`You win! ${playerValue} beats ${machineValue}`);
        return 1;
    }
    else if (playerValue == "paper" && machineValue == "rock") { 
        console.log(`You win! ${playerValue} beats ${machineValue}`);
        return 1;
    }
    else if (playerValue == machineValue ) { 
        console.log(`Its a draw!`);
        return 2;
    }
    else { 
        console.log(`You Lose! ${machineValue} beats ${playerValue}`)
        return 0;
    };
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors")
        const computerSelection = getComputerChoice();
        console.log(computerSelection); 

        switch (playRound(playerSelection, computerSelection)) {
            case 0:
                machineScore += 1;
                break;
            case 1:
                playerScore += 1;
                break;
        }
    }
    console.log(playerScore);
    console.log(machineScore);
}

let playerScore = 0;
let machineScore = 0;

game();