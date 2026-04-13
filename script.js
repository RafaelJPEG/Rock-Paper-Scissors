console.log("Hello World!")

//PROBLEM: task : create a rock-paper-scissor game that get your input compare it to the random value it gives and dislay or out put if your input win or no.
// ALGORITHM:
// 1.CREATE an input form to collect value
// 2.CREATE something that READ the input value
// 3.CREATE something that produce random value
// 4.CREATE something that COMPARE the user input value and the system random value
// 5.CREATE something that DISPLAY the result of comparison

// 

// CREATE function that returns either rock, paper or scissor.

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)

    if (random == 0) {
        return ("rock").toLowerCase()
    } else if (random == 1) {
        return ("paper").toLowerCase()
    } else if (random == 2) {
        return ("scissor").toLowerCase()
    }
    
}
console.log(getComputerChoice())

// CREATE function that GET User input

function getHumanChoice() {
    // SET input that GET User input
    let userInput = prompt(``)
    // SET Conditions that OUTPUT valid choices
    if (userInput == "1") {
        console.log("correct")
    }

}

// 1. Create two new variables named humanScore and computerScore in the global scope.
// 2.Create two new variables named humanScore and computerScore in the global scope.

// CREATE a variable for humanScore
let humanScore = 0
// CREATE a variable for computerScore
let computerScore = 0

// Your game will be played round by round. You will write a function that takes the human and computer player choices as
//  arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// CREATE a function that display winning or lossing message.
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats Rock.")
        ++computerScore;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats Rock.")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats Rock.")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats Rock.")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats Rock.")
    } else if (humanChoice == computerChoice) {
        alert("It's a draw!")
    } else {alert("Invalid input!")}
    
}

// CREATE a function that CALLS playRound 5 times

function playGame() {
    playRound(getHumanChoice(),getComputerChoice())
}

alert(playGame())
