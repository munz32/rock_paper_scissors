let x;
let y;

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    x = Math.ceil(Math.random()*3);
    if (x===1){
        return("Rock");
    }  else if (x===2){
        return("Paper")
    }  else{
        return("Scissors")
    }
}


function getHumanChoice(){
    y = prompt("What is your RPS selection?")
}

function playRound(){
    
}


console.log(getComputerChoice())
getHumanChoice()