//Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function getComputerChoice() {

//1) Create an array with the three options
const arrayOptions = ["Rock", "Paper", "Scissors"];

//2) Create a random index from 0 - 2
let randomIndex = Math.floor(Math.random() * 3);

//3) Use the random index above to select one of the options in the array 
let computerChoice = arrayOptions[randomIndex];

//4) Return that option 

}
