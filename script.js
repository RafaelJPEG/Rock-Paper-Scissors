console.log("Hello World!")

// create function that returns random output.

function getComputerChoice() {
    return Math.floor(Math.random() * 4)

}

//ALGORITHYM : Write the code so that getHumanChoice will return one of the valid 
// choices depending on what the user inputs.

// CREATE function that GET User input

function getHumanChoice() {
    // SET input that GET User input
    let userInput = prompt(``)
    // SET Conditions that OUTPUT valid choices
    if (userInput == "1") {
        console.log("correct")
    }

}

alert(getHumanChoice())

// console.log(getComputerChoice())