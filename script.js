console.log("Hello, World!");


function getComputerChoice() {
    let idx = Math.floor((Math.random() * 3));
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[idx];
}
console.log(getComputerChoice());