let btn = document.querySelector(".btn")
btn.addEventListener("click", function (){
let playerChoices = document.querySelectorAll(".playerhands li");
let computerChoices = document.querySelectorAll(".computerhands li");
//console.log(computerChoices);
let PrandomNum = Math.floor(Math.random()*3);
let CrandomNum = Math.floor(Math.random()*3);
let winnerp = document.querySelector(".winnerp");
let winnerc = document.querySelector(".winnerc");
let draw = document.querySelector(".draw");



//console.log(randomNum);

let computerHand;
let playerHand;

if(CrandomNum===0){
	computerHand= "rock";
	
} else if (CrandomNum ===1){
	computerHand="paper";
}else if (CrandomNum ===2){
	computerHand="scissors"
};

computerChoices[CrandomNum].classList.add("animec");

if(PrandomNum===0){
	playerHand= "rock";
} else if (PrandomNum ===1){
	playerHand="paper";
}else if (PrandomNum ===2){
	playerHand="scissors"
};

playerChoices[PrandomNum].classList.add("animep");

console.log(playerHand);
console.log(computerHand)

if (playerHand===computerHand){
	draw.style.opacity=1;
}else if (playerHand==="paper" & computerHand==="rock"){
	winnerp.style.opacity=1;
}
else if (playerHand==="paper" & computerHand==="scissors"){
	winnerc.style.opacity=1;
}
else if (playerHand==="rock" & computerHand==="scissors"){
	winnerp.style.opacity=1;
}
else if (playerHand==="rock" & computerHand==="paper"){
	winnerc.style.opacity=1;
}
else if (playerHand==="scissors" & computerHand==="paper"){
	winnerp.style.opacity=1;
}
else if (playerHand==="scissors" & computerHand==="rock"){
	winnerc.style.opacity=1;
}
else if (computerHand==="paper" & playerHand==="scissors"){
	winnerp.style.opacity=1;
}
else if (computerHand==="paper" & playerHand==="rock"){
	winnerc.style.opacity=1;
}
else if (computerHand==="rock" & playerHand==="scissors"){
	winnerc.style.opacity=1;
}
else if (computerHand==="rock" & playerHand==="paper"){
	winnerp.style.opacity=1;
}
else if (computerHand==="scissors" & playerHand==="paper"){
	winnerc.style.opacity=1;
}
else if (computerHand==="scissors" & playerHand==="rock"){
	winnerp.style.opacity=1;
}	
})
