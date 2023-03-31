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
    const result = document.getElementById('results');
    const container = document.getElementById('container');
    const roundResult = document.getElementById('roundResult');
    const score = document.getElementById('Score');
    const div = document.createElement('div');

    div.classList.add('overallResult');

    //If there is a winner, remove play buttons and print who won
    if (cScore >=5 || pScore >=5){
        container.style.display = 'none';
        roundResult.style.display = 'none';
        
        if (cScore >=5){
            div.textContent = "The Computer Wins!";
        }
        else {
            div.textContent = "You Win!";
        }
        result.insertBefore(div, score);
        
        //Add Play Again option
        playAgain(div);
    return true;
    }
}

function playAgain(div) {
   
    const score = document.getElementById('Score');
    const button = document.createElement('button');

    //Create Play Again Button
    button.textContent = "Play Again";

    // Add Event Listener so when player clicks the game returns
    button.addEventListener('click', () => {
        container.style.display = 'block';
        roundResult.style.display = 'block';
        
        //Remove play again button
        button.remove();

        //Remove overall result
        div.remove();

        //Show score at 0 for new game
        const player = document.querySelector('#player');
        player.textContent = "Player: 0";

        const computer = document.querySelector('#computer');
        computer.textContent = "Computer: 0";

    });
            
    score.appendChild(button);

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
        
        let winner = checkWinner(cScore, pScore);                
        if (winner){
            pScore = 0;
            cScore = 0;
        }
    });
   
});




