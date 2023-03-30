// Create function for computer to select Rock, Paper or Scissors

function getComputerChoice(){
    //Choose random number between 0-2
    let choice = Math.floor(Math.random() * 3);
    let computerChoice;

    //Select Rock, Paper or Scissors
    if (choice === 0){
        computerChoice = "Rock";
    } else if (choice === 1){
        computerChoice = "Paper";
    }else{
        computerChoice = "Scissors";
     }
     return computerChoice;
}

// Function to play a round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection){

    // Stores who will win
    let outcome;

    //Logic for the game
    if (playerSelection === "Rock" && computerSelection === "Paper"
        || playerSelection === "Paper" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Rock" )
        {
        outcome = "Player Loses";
    }
    else if (playerSelection === computerSelection){
        outcome = "Player Draws";
    }
    else {
        outcome = "Player Wins";
    }
    //Return outcome of game
    return outcome;
}

function printResult (roundResult) {
    const round = document.querySelector('#roundResult');
    round.textContent = "Round Result: " + roundResult;
}

function printScore (cScore, pScore){
    const player = document.querySelector('#player');
    player.textContent = "Player: " + pScore;

    const computer = document.querySelector('#computer');
    computer.textContent = "Computer: " + cScore;
}

function checkWinner (cScore, pScore){
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    if (cScore >=5){
        div.textContent = "The Computer Wins!";
        container.appendChild(div);
    }
    else if (pScore >=5){
        div.textContent = "You Win!";
        container.appendChild(div);
    }
}

const buttons = document.querySelectorAll('button');
let cScore = 0;
let pScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const roundResult = playRound(button.id, getComputerChoice());
        if(roundResult === "Player Loses"){
            cScore++;
        }
        else if(roundResult === "Player Wins"){
        pScore++;
        }
        printResult(roundResult);
        printScore(cScore, pScore);
        checkWinner(cScore, pScore);    
    });
});


