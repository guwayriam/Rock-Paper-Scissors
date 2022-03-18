function playRound(playerSelection, computerSelection){
    // logic to compare the winner of the 
    //rock paper scissor game
    

    console.log(playerSelection.toUpperCase(), computerSelection);

}

function computerPlay(randomNumber){
    // randomly generate a number that will coraspind to 
    // rock paper scissor
    computerSelection = null;
    if(randomNumber == 0){
        computerSelection = 'ROCK';

    } else if(randomNumber == 1){
        computerSelection = 'PAPER';

    }else if(randomNumber == 2){
        computerSelection = 'SCISSOR'
    }

    return computerSelection;
}

let choice = prompt('Choose ROCK, PAPER, or SCISSOR');

let num = Math.random() *3;
let random = Math.floor(num);

let play = computerPlay(random);

playRound(choice, play);

console.log(num);
console.log(random);
console.log(play);