
function computerPlay() {
    let array = ["rock","paper","scissors"];
    let randArrayIndex = Math.floor(Math.random()*array.length);
    return array[randArrayIndex];
}


let csum =0;
let psum =0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            console.log("Draw!")
        }else if(computerSelection=="paper"){
            csum++;  
            console.log("You lose!")
        }else{ 
            psum++; 
            console.log("You win!")
  }}if(playerSelection=="paper"){
        if(computerSelection=="paper"){
            console.log("Draw!")
        }else if(computerSelection=="scissors"){
            csum++; 
            console.log("You lose!")
        }else{ 
            psum++; 
            console.log("You win!")
  }}if(playerSelection=="scissors"){
        if(computerSelection=="scissors"){
            console.log("Draw!")
        }else if(computerSelection=="rock"){
            csum++; 
            console.log("You lose!")
        }else{ 
            psum++; 
            console.log("You win!")
    }}
}
function game() {
    for (let i=0; i<5;i++){
        let playerSelection = prompt("which one u pick?","rock").toLowerCase();
        let computerSelection = computerPlay(); 
        playRound(playerSelection,computerSelection);
    }
    console.log("Computer : "+csum,"Player : " +psum)
}game()
