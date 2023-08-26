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
if (userInput === "paper") {
        if (computerSelection === "paper") {
        return "It's a draw"
    }   else if (computerSelection === "scissors") {
        return "You Lose!  Scissors beats Paper"
    }   else if (computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    }
} 
if (userInput === "scissors") {
        if (computerSelection === "scissors") {
        return "It's a draw"
    }   else if (computerSelection === "rock") {
        return "You Lose!  Rock beats Scissors"
    }   else if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    }
}
} 
} 



// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.

//1) Create game function 
//2) Set total game count to 5
//3) Create a variable for number of wins 
//4) Create a for loop (set game to 1, check if game is less than or equal to total games, increment game)
//5) if outcome of playRound function is a win, increment number of wins 
//6) when loop completes, if wins >= 3 console log the score and "you are the winner" else console log the score and "you lost"


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));