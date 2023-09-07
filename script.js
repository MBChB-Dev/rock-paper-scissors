//Function for creating and getting the computer choice

function getComputerChoice() {

    const arrayOptions = ["rock", "paper", "scissors"];

    let randomIndex = Math.floor(Math.random() * 3);

    let computerChoice = arrayOptions[randomIndex];

    return computerChoice;
}


//Function for playing a single round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection) {
      
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


//Function for playing a full 5-round game of Rock, Paper, Scissors

function game() {

    let playerScore = 0;

    let computerScore = 0;

    let roundNumber = 1

    function nestedPlayRound() {

        if (roundNumber > 5) {
            if (playerScore > computerScore) {
            console.log(`Gamer over: Congratulations, you win with a score of ${playerScore} / 5 `);
        }   else if (computerScore >  playerScore) {
            console.log(`Game over: Sorry, you lost with a score of ${playerScore} / 5`)
        }   else if (computerScore === playerScore) {
            console.log(`Game over: It's a draw`);
        }

            return;
        }

        const playerSelection = prompt("Enter one of the following: rock, paper, scissors");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result === "You Win! Rock beats Scissors" || result === "You Win! Paper beats Rock" || result === "You Win! Scissors beats Paper") {
            playerScore++;
        }   else if (result === "You Lose!  Paper beats Rock" || result === "You Lose!  Scissors beats Paper" || result === "You Lose!  Rock beats Scissors") {
            computerScore++;
        }

        roundNumber++;

        nestedPlayRound()
    }

    nestedPlayRound();
}


//Start the Game
//game();

const roundNumberDiv = document.querySelector(".roundNumber");
const resultsDiv = document.querySelector(".results");
const scoreDiv = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
const winnerDiv = document.querySelector(".winner");
const buttonArray = Array.from(buttons);
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

buttonArray.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.textContent;
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        resultsDiv.textContent = result;

        roundNumber++;

        if (roundNumber > 5) {
            if (playerScore > computerScore) {
                winnerDiv.textContent = `Final result: Congratulations, you win with a score of ${playerScore} / 5`;
            } else if (computerScore >  playerScore) {
                winnerDiv.textContent = `Final result: Sorry, you lost with a score of ${playerScore} / 5`
            } else if (computerScore === playerScore) {
                winnerDiv.textContent = `Final result: It's a draw`;
        }

            return;
        }

        if (result === "You Win! Rock beats Scissors" || result === "You Win! Paper beats Rock" || result === "You Win! Scissors beats Paper") {

            playerScore++;

        } else if (result === "You Lose!  Paper beats Rock" || result === "You Lose!  Scissors beats Paper" || result === "You Lose!  Rock beats Scissors") {

            computerScore++;
        }
        roundNumberDiv.textContent = `Round number: ${roundNumber} / 5`;
        scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;


        
    })
})


