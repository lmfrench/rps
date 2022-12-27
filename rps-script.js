// Create function for computer to select Rock, Paper or Scissors

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    let compChoice;
    if (choice === 0){
        compChoice = "Rock";
    } else if (choice === 1){
        compChoice = "Paper";
    }else{
        compChoice = "Scissors";
     }
     return compChoice;
}

let test = getComputerChoice();

console.log(test);