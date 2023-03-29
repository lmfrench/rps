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

// Function to play 5 rounds
//function game(){

// Variable to store score
  //  let overallScore = 0;

// Play rock paper scissors 5 times
 //   for (let round = 0; round < 5; round++){
        // Computer choses
   //     let computerSelection = getComputerChoice();

     //   let playerSelection = getPlayerChoice(round);
   
        // Play the round
       // let roundOutcome = playRound(playerSelection, computerSelection);

        // Tell player the outcome of the round
       // if (roundOutcome === "Player Loses"){
        //    alert("You Lose! " + computerSelection + " beats " + playerSelection + ". Current Score: " + overallScore);
       // }
       // else if (roundOutcome === "Player Draws"){
        //    alert("You Draw! The Player's choice (" + playerSelection + ") and Computer's choice (" + computerSelection + ") are the same! Current Score: " + overallScore);
        //}
        //else {
         //   overallScore++;
           // alert("You Win! " + playerSelection + " beats " + computerSelection + ". Current Score: " + overallScore);
        //}
    //}

    //return overallScore;

//}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const container = document.querySelector('#container');
        const round = document.createElement('round');
        
        //Select Player Choice based on what button was clicked, and print outcome of round
        round.textContent = playRound(button.id, getComputerChoice());
        
        container.appendChild(round);
    
    });
});

// let score = game();

// tell player final score
//alert("Final Score: You won " + score + " rounds.");