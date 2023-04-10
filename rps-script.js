// Create function for computer to select Frog, Slug or Snake

function getComputerChoice(){
    //Choose random number between 0-2
    let choice = Math.floor(Math.random() * 3);
    let computerChoice;

    //Select Rock, Paper or Scissors
    if (choice === 0){
        computerChoice = "Slug";
    } else if (choice === 1){
        computerChoice = "Snake";
    }else{
        computerChoice = "Frog";
     }
     return computerChoice;
}

// Function to play a round of Frog, Slug or Snake

function playRound(playerSelection, computerSelection){

    // Stores who will win
    let outcome;

    //Logic for the game
    if (playerSelection === "Slug" && computerSelection === "Frog"
        || playerSelection === "Snake" && computerSelection === "Slug"
        || playerSelection === "Frog" && computerSelection === "Snake" )
        {
        outcome = "Player Loses";
    }
    else if (playerSelection === computerSelection){
        outcome = "Draw";
    }
    else {
        outcome = "Player Wins";
    }
    //Return outcome of game
    return outcome;
}

function printResult (roundResult) {
    const round = document.querySelector('#roundResult');
    round.textContent = roundResult;
}

function printScore (cScore, pScore){
    const player = document.querySelector('#player');
    player.textContent = pScore;

    const computer = document.querySelector('#computer');
    computer.textContent = cScore;
}

function checkWinner (cScore, pScore){
    const result = document.getElementById('results');
    const container = document.getElementById('container');
    const score = document.getElementById('result');
    const div = document.createElement('div');

    div.classList.add('overallResult');

    //If there is a winner, remove play buttons and print who won
    if (cScore >=5 || pScore >=5){
        container.style.display = 'none';
        
        
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
   
    const score = document.getElementById('results');
    const container = document.getElementById('result');
    const button = document.createElement('button');

    //Create Play Again Button
    button.classList.add('resultButton');
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
        player.textContent = "0";

        const computer = document.querySelector('#computer');
        computer.textContent = "0";

    });
            
    score.insertBefore(button,container); 

}

function printChoice(playerChoice,computerChoice){
    
    const player = document.querySelector('#resultPlayer');
    console.log(playerChoice);
    player.textContent = playerChoice;
    
    const computer = document.querySelector('#resultComputer');
    computer.textContent = computerChoice;
    
}



const buttons = document.querySelectorAll('button');

let cScore = 0;
let pScore = 0;

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        const computerChoice = getComputerChoice();
        const roundResult = playRound(button.id, computerChoice);
              

        if(roundResult === "Player Loses"){
            cScore++;
        }
        else if(roundResult === "Player Wins"){
            pScore++;
        }
        printResult(roundResult);
        printChoice(button.id, computerChoice);
        printScore(cScore, pScore);
        
        let winner = checkWinner(cScore, pScore);                
        if (winner){
            pScore = 0;
            cScore = 0;
        }
    });
   
});


