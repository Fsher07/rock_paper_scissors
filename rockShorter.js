// 0th argument of elements in dict list defines the status won.
let dict = {                    
    "rock": ["scissors", "paper"],
    "paper": ["rock", "scissors"],
    "scissors": ["paper", "rock"] 
};
function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    let randArrayIndex = Math.floor(Math.random()*array.length);
    return array[randArrayIndex];
}
let playerSum = 0;
let computerSum = 0;

function playRound(playerSelection,computerSelection){
    if(computerSelection===dict[playerSelection][0]){
        console.log("Computer: " + computerSelection + ", " + "Player: " + playerSelection);
        console.log("Player win!");
        playerSum++;
    }else if(computerSelection===dict[playerSelection][1]){
        console.log("Computer: " + computerSelection + ", " + "Player: " + playerSelection);
        console.log("Computer win!");
        computerSum++;
    }else console.log("Draw !");
}       
function game() {
    for (let i=0; i<5;i++){
        let playerSelection = prompt("which one u pick?","rock").toLowerCase();
        let computerSelection = computerPlay(); 
        playRound(playerSelection,computerSelection);
    }
    console.log("Computer : "+computerSum,"Player : " +playerSum)
}game()
