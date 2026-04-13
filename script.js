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

// CREATE function that DISPLAY rock, paper and scissor as input choices and store it.

function getHumanChoice() {
    // SET input that GET User input
    return prompt(`5 ROUNDS \n Choose from Rock, Paper and Scissor: `).toLowerCase()

}

// 1. Create two new variables named humanScore and computerScore in the global scope.
// 2.Create two new variables named humanScore and computerScore in the global scope.

// CREATE a variable for humanScore
let humanScore = 0
let computerScore = 0

// Your game will be played round by round. You will write a function that takes the human and computer player choices as
//  arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// CREATE a function that display winning or lossing message.
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "paper") {
        alert("You lose! Paper beats Rock.")
        ++computerScore;
    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        alert("You Win! rock beats scissor.")
        ++humanScore;
    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        alert("You lose! scissor beats Paper.")
        ++computerScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        alert("You Win! Paper beats Rock.")
        ++humanScore;
    } else if (humanChoice == "scissor" && computerChoice == "paper") {
        alert("You Win! Scissor beats Paper.")
        ++humanScore;
    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        alert("You Lose! Rock beats Scissor.")
        ++computerScore;
    } else if (humanChoice == computerChoice) {
        alert("It's a draw!")
    } else {alert("Invalid input!")}
    
}

// CREATE a function that CALLS playRound 5 times and display the winner.

function playGame() {

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    // IF humanchoice win INCREMENT humanScore and display it ELSE IF computerChoice wins INCREMENT compuerScore
    if (humanScore > computerScore) {
        alert(`CONGRATULATIONS! You Won the Game! \n Your Score: ${humanScore} \n Computer Score: ${computerScore} \n Winner: You! with score of ${humanScore}`)
    } else {
        alert(`You Lose the Game! \n Your Score: ${humanScore} \n Computer Score: ${computerScore} \n Winner: Computer! with score of ${humanScore}`)
    }

}

playGame()
