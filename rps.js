function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    if (ps === 'rock') {
        if (computerSelection === "Rock") {
            return "It is a Tie!";
        } else if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        }
    } else if (ps === 'paper') {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Paper") {
            return "It is a Tie!";
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats paper";
        }
    } else if (ps === 'scissors') {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "Scissors") {
            return "It is a Tie!";
        }
    } else {
        return "Wrong Choice";
    }
}

function game() {
    for(let i=0; i<5; i++){
        let choice = prompt("Rock? Paper? Scissors?");
        console.log(playRound(choice, getComputerChoice()));
    }
}

function showResult(s) {
    const results = document.querySelector("#results");
    const result = document.createElement('div');
    result.textContent = s;
    results.appendChild(result);
}

// game();
let gamesPlayed = 0;
document.querySelector("#rock").addEventListener("click", () => {
    showResult(playRound('rock', getComputerChoice()));
    gamesPlayed++;
});

document.querySelector("#paper").addEventListener("click", () => {
    showResult(playRound('paper', getComputerChoice()));
    gamesPlayed++;
});

document.querySelector("#scissors").addEventListener("click", () => {
    showResult(playRound('scissors', getComputerChoice()));
    gamesPlayed++;
});

