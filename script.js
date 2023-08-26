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
   
//1) Convert userInput to lowercase

//2) Write logic for the case of the player selecting ROck: 

//      If the playerSelection is rock 
//          if the computerSelection is rock, return "It's a draw"

//          else if the computerSelection is paper, return "You Lose!  Paper beats Rock"

//          else if the computerSelection is scissors, return "You Win! Rock beats Scissors"

//3) Copy-paste the logic above for the other player selections of paper/scissors and replace variables accordingly


  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));