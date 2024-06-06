let x;
let y;

let humanScore = 0;
let computerScore = 0;
let counter =0;

function getComputerChoice(){
    x = Math.ceil(Math.random()*3);
    if (x===1){
        return("rock");
    }  else if (x===2){
        return("paper")
    }  else{
        return("scissors")
    }
}


function getHumanChoice(){
    y = prompt("What is your RPS selection?")
    return(y)
}

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    if (humanChoice === computerChoice){
        console.log("It's a tie")
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human wins!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human wins!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human wins!");
        humanScore++;
    }
    else {
        console.log("Computer wins");
        computerScore++;
    }    
}


function playGame(){
    while (counter <5){
        playRound();
        counter++;
    }
    console.log(`The score is human: ${humanScore}, computer ${computerScore}`)
}

playGame()