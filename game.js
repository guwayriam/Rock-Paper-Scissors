let userScore = 0;
let compScore = 0;
const userScore_Span = document.getElementById("userscore");
const compScore_Span = document.getElementById("computerScore");
const scoreBoard_Div = document.querySelector(".scoreboard");
const result = document.querySelector(".result");
const rock_Div = document.getElementById("r");
const paper_Div = document.getElementById("p");
const scissor_Div = document.getElementById("s");
const message = document.getElementById("message");

function compChoice(){
    let choice =['r','p','s'];
    let rand = Math.floor(Math.random()* 3)
   // console.log(choice[rand]);
   // console.log(rand)
    return choice[rand];
}

function game(userChoice){
    let compChoice = compChoice();
    result.innerHTML = userChoice +' '+ compChoice;
}

function main(){
    rock_Div.addEventListener("click", function(){
        //game("r")
        console.log(compChoice() + " compchoice");
       // compChoice()
    })
}

main();
