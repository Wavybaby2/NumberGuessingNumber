const min = 1;
const max = 10;
let check = document.getElementById("check")
let result = document.getElementById("result");
let output = document.getElementById("output");
let track = document.getElementById("track");
let mySubmit = document.getElementById("mySubmit");
let answer = document.getElementById("answer")
let random = Math.floor(Math.random() *max + 1);
let randomNum;
let trackOutput = 0;


mySubmit.onclick = function(){
 

    randomNum = result.value;
    randomNum = Number(randomNum);
if(randomNum < min || randomNum > max){
    output.textContent = "invalid number"
}
else if(isNaN(randomNum)){
    output.textContent = "please enter a valid number"
}
else{
    trackOutput++;
    if(randomNum < random){
        output.textContent = "TOO LOW! TRY AGAIN"
    }
    else if(randomNum > random){
        output.textContent = "TOO HIGH! TRY AGAIN"
    }
    else{
    output.textContent = `CORRECT! THE ANSWER IS ${random} IT TOOK YOU ${trackOutput} ATTEMPTS`
    running = false;
    
    }
  }
    
};

check.onclick = function(){
    
    track.textContent = `You chose ${randomNum} :
    computer chose ${random}`
}








