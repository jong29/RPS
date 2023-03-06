function getComputerChoice() {
    choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playerWin() {
    const points = document.getElementById("wins");
    let ipoints = parseInt(points.textContent);
    ipoints++;
    if (ipoints == 5) {
        document.getElementById("announcement").textContent = "You are the Winner!"
    }
    points.textContent = ipoints.toString();
}

function computerWin() {
    const points = document.getElementById("losses");
    let ipoints = parseInt(points.textContent);
    ipoints++;
    if (ipoints == 5) {
        document.getElementById("announcement").textContent = "The computer Wins!"
    }
    points.textContent = ipoints.toString();
}

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    if (ps === 'rock') {
        if (computerSelection === "Rock") {
            return "It is a Tie!";
        } else if (computerSelection === "Paper") {
            computerWin();
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            playerWin();
            return "You Win! Rock beats Scissors";
        }
    } else if (ps === 'paper') {
        if (computerSelection === "Rock") {
            playerWin();
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Paper") {
            return "It is a Tie!";
        } else if (computerSelection === "Scissors") {
            computerWin();
            return "You Lose! Scissors beats paper";
        }
    } else if (ps === 'scissors') {
        if (computerSelection === "Rock") {
            computerWin();
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            playerWin();
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
    const prevResult = results.firstChild;
    const nextResult = document.createElement('div');
    results.textContent = s;
    if(prevResult){
        prevResult.remove();
    }
    results.appendChild(nextResult);
}

// game();
document.querySelector("#rock").addEventListener("click", () => {
    showResult(playRound('rock', getComputerChoice()));
});

document.querySelector("#paper").addEventListener("click", () => {
    showResult(playRound('paper', getComputerChoice()));
});

document.querySelector("#scissors").addEventListener("click", () => {
    showResult(playRound('scissors', getComputerChoice()));
});

