let btn = document.querySelector(".btn")
let rock = document.querySelector("#rock");
let paper= document.querySelector("#paper");
let scissors= document.querySelector("#scissors");
let playerChoices = document.querySelectorAll(".playerhands li");
let computerChoices = document.querySelectorAll(".computerhands li");
let CrandomNum = Math.floor(Math.random()*3);
let winnerp = document.querySelector(".winnerp");
let winnerc = document.querySelector(".winnerc");
let draw = document.querySelector(".draw");
let computerHand;
let playerHand;
let prandomNum;

rock.addEventListener("click", function(){
	playerHand="rock";
	prandomNum =0;
	playerChoices[prandomNum].classList.add("animep");
	console.log("rock running");

});
	
paper.addEventListener("click", function(){
	playerHand="paper";
		prandomNum =1;
		playerChoices[prandomNum].classList.add("animep");


});

scissors.addEventListener("click", function(){
	playerHand="scissors";
		prandomNum =2;
		playerChoices[prandomNum].classList.add("animep");
});	

btn.addEventListener("click", function (){
	


if(CrandomNum===0){
	computerHand= "rock";
} else if (CrandomNum ===1){
	computerHand="paper";
}else if (CrandomNum ===2){
	computerHand="scissors"
};

computerChoices[CrandomNum].classList.add("animec");



/*else if (playerHand==="paper" & computerHand==="rock"){
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
}*/

if (playerHand===computerHand){
	draw.style.opacity=1;
	return;
}

if (playerHand==="paper"){ 

	if(computerHand==="rock"){
		winnerp.style.opacity=1;
		
}else {
	winnerc.style.opacity=1;
	
}};


if( playerHand === "scissors"){
	if(computerHand==="paper"){
		winnerp.style.opacity=1;
}else{
	winnerc.style.opacity=1;
}};

if(playerHand==="rock"){
	if (computerHand==="scissors"){
		winnerp.style.opacity=1
	}else{
		winnerc.style.opacity=1
	}
};
	

	
})
