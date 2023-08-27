//Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function getComputerChoice() {

//1) Create an array with the three options
const arrayOptions = ["rock", "paper", "scissors"];

//2) Create a random index from 0 - 2
let randomIndex = Math.floor(Math.random() * 3);

//3) Use the random index above to select one of the options in the array 
let computerChoice = arrayOptions[randomIndex];

//4) Return that option 
return computerChoice;
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
    // your code here!
   
let userInput = playerSelection.toLowerCase();      
 
if (userInput === "rock") {
        if (computerSelection === "rock") {
        return "It's a draw"
    }   else if (computerSelection === "paper") {
        return "You Lose!  Paper beats Rock"
    }   else if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
} 
}   else if (userInput === "paper") {
            if (computerSelection === "paper") {
            return "It's a draw"
        }   else if (computerSelection === "scissors") {
            return "You Lose!  Scissors beats Paper"
        }   else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock"
}  
}   else if (userInput === "scissors") {
            if (computerSelection === "scissors") {
            return "It's a draw"
        }   else if (computerSelection === "rock") {
            return "You Lose!  Rock beats Scissors"
        }   else if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper"
        }
} 
}


// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.

function game() {
//1) Set the player Score 
    let playerScore = 0;

//2) Set the computer score
    let computerScore = 0;

//3) Set the game to the first round 
    let roundNumber = 1

//4) Create a nested function to play a round
    function nestedPlayRound() {

//5) Set the stopping criteria to return the Result. If criteria not met, move on to playing another round
    if (roundNumber > 5) {
        if (playerScore > computerScore) {
            console.log(`Gamer over: Congratulations, you win with a score of ${playerScore} / 5 `);
        } else if (computerScore >  playerScore) {
            console.log(`Game over: Sorry, you lost with a score of ${playerScore} / 5`)
        } else if (computerScore === playerScore) {
            console.log(`Game over: It's a draw`);
        }

        return;
    }

//6) Play a round by getting player and computer input and calling playround function
        const playerSelection = prompt("Enter one of the following: rock, paper, scissors");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

//7) Console log the Result, increment round and scores, call play another round 
        console.log(result);

        if (result === "You Win! Rock beats Scissors" || result === "You Win! Paper beats Rock" || result === "You Win! Scissors beats Paper") {
            playerScore++;
        } else if (result === "You Lose!  Paper beats Rock" || result === "You Lose!  Scissors beats Paper" || result === "You Lose!  Rock beats Scissors") {
            computerScore++;
        }

        roundNumber++;

        nestedPlayRound()
}

    nestedPlayRound();
}

game();