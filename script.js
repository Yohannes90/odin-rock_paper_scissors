console.log("Hello, World!");

function getComputerChoice() {
    let idx = Math.floor((Math.random() * 3));
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[idx];
}
// test for getComputerChoice
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();
    if (ps == "rock") {
        if (cs == "rock") {
            return "It's a draw"
        }
        if (cs == "paper") {
            return "You lose, Paper beats Rock"
        }
        if (cs == "scissors") {
            return "You win, Rock beats Scissors"
        }
    } else if (ps == "paper") {
        if (cs == "rock") {
            return "You win, Paper beats Rock"
        }
        if (cs == "paper") {
            return "It's a draw"
        }
        if (cs == "scissors") {
            return "You lose, Scissors beats Paper"

        }
    } else if (ps == "scissors") {
        if (cs == "rock") {
            return "You lose, Rock beats Scissors"
        }
        if (cs == "paper") {
            return "You win, Scissors beats Paper"
        }
        if (cs == "scissors") {
            return "It's a draw"
        }
    }
}
// test for playRound
// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));