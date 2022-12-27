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

// Function to determine who wins

function playRound(playerSelection, computerSelection){

    //standardise case from playerSelection
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    // Stores who will win
    let outcome;

    //Logic for the game
    if (playerChoice === "Rock" && computerSelection === "Paper"
        || playerChoice === "Paper" && computerSelection === "Scissors"
        || playerChoice === "Scissors" && computerSelection === "Rock" )
        {
        outcome = "You Lose! " + computerSelection + " beats " + playerChoice;
    }
    else if (playerChoice === computerSelection){
        outcome = "You Draw! The Player's choice (" + playerChoice + ") and Computer's choice (" + computerSelection + ") are the same!";
    }
    else {
        outcome = "You Win! " + playerChoice + " beats " + computerSelection;
    }
    //Return outcome of game
    return outcome;
}

let computerRPS = getComputerChoice();

console.log(playRound("rOck", "Scissors"));
