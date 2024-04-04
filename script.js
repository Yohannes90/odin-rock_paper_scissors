const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
const resultPara = document.querySelector(".result");
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");


function getComputerChoice() {
    let idx = Math.floor((Math.random() * 3));
    let choices = ["Rock", "Paper", "Scissors"];

    if (idx == 0) {
        document.querySelector(".computerSign").textContent = "✊";
    } else if (idx == 1) {
        document.querySelector(".computerSign").textContent = "✋";
    } else {
        document.querySelector(".computerSign").textContent = "✌";
    }

    return choices[idx];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps == "rock") {
        if (cs == "rock") {
            return "It's a draw";
        }
        if (cs == "paper") {
            return "You lose, Paper beats Rock";
        }
        if (cs == "scissors") {
            return "You win, Rock beats Scissors";
        }
    } else if (ps == "paper") {
        if (cs == "rock") {
            return "You win, Paper beats Rock";
        }
        if (cs == "paper") {
            return "It's a draw";
        }
        if (cs == "scissors") {
            return "You lose, Scissors beats Paper";
        }
    } else if (ps == "scissors") {
        if (cs == "rock") {
            return "You lose, Rock beats Scissors";
        }
        if (cs == "paper") {
            return "You win, Scissors beats Paper";
        }
        if (cs == "scissors") {
            return "It's a draw";
        }
    } else {
        return "Incorrect input, please try again with rock, paper, scissor";
    }
}


function playerSelection() {
    rockBtn.addEventListener("click", function(){
        document.querySelector(".playerSign").textContent = "✊";
        return "Rock"; });
    paperBtn.addEventListener("click", function(){
        document.querySelector(".playerSign").textContent = "✋";
        return "Paper"; });
    scissorBtn.addEventListener("click", function(){
        document.querySelector(".playerSign").textContent = "✌";
        return "Scissor"; });
}

function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let playerSelection;
    let computerSelection;
    let result;

    playerScore.textContent = playerWinCount;
    computerScore.textContent = computerWinCount;

    while (playerWinCount < 5 && computerWinCount < 5) {
        playerSelection = playerSelection();
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection)
        if (result.includes("You win")) {
            playerWinCount++;
        } else if (result.includes("You lose")) {
            computerWinCount++;
        }
        document.querySelector(".playerSign").textContent = "❔";
        document.querySelector(".computerSign").textContent = "❔";
        resultPara.textContent = result;
    }
    if (playerWinCount == 5) {
        document.querySelector(".gameOver").textContent = "You Won game to 5";
    } else {
        document.querySelector(".gameOver").textContent = "You lost game to 5";
    }
    document.querySelector(".playAgain").textContent = "Reload to play again!!";
}

game();
