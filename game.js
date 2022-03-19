function playRound(playerSelection, computerSelection){
    // logic to compare the winner of the 
    //rock paper scissor game
    let round = null;
    console.log(round);
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSOR'
            || playerSelection === 'PAPER' && computerSelection === 'ROCK'
            || playerSelection === 'SCISSOR' && computerSelection === 'ROCK'){

        round ++;

    }else if (playerSelection === 'SCISSOR' && computerSelection === 'ROCK'
            || playerSelection === 'ROCK' && computerSelection === 'PAPER'
            || playerSelection === 'PAPER' && computerSelection === 'SCISSOR'){

        round --;
    }else{
        round = null;
    }
    console.log(round);
    return round;
    
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


let round = 0;
let game = 0



while( Math.abs(round) < 3  && game < 5){

    let choice = prompt('Choose ROCK, PAPER, or SCISSOR');
    let num = Math.random() *3;
    let random = Math.floor(num);

    if(choice != null){
        let play = computerPlay(random);
        let win = playRound(choice.toUpperCase(), play);
        if(win > 0){
            console.log('Player won')
        }else if(win < 0){
            console.log('Computer won')
        }else (
            console.log('Tie Tie')
        )
        round + win
        game ++;

    }else{
        console.log('Wrong entery. Try again');
    }

    
}

//





//console.log(num);
//console.log(random);
//console.log(play);