const userInput=document.getElementById("input");
let randomNumber1=parseInt(Math.random()*100 + 1);
const userSubmit=document.getElementById("submit");
const userPrevious=document.getElementById("previous");
const userAttempts=document.getElementById("attempts");
let prev=[];
let chanceLeft=10;
let play=true;

if(play){
    userSubmit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validate(guess);
    });
}
function validate(guess){
    if(guess<1 || guess>100){
        display("Enter a number between 1 and 100");
    }
    else{
        if(chanceLeft>0){
           chanceLeft-=1;
           prev.push(guess);
           analyze(guess);
        }
        else if(chanceLeft===0){
           display(`GAME OVER.<br> Random Number was ${randomNumber1}`);
           exitgame();
        }
    }
}
function analyze(guess){
    if(guess===randomNumber1 && chanceLeft===9){
        display(`You have won in ${chanceLeft}st attempt`);
        exitgame();
    }
    else if(guess===randomNumber1 && chanceLeft>=1){
        display(`You have won in ${10-chanceLeft} attempts`);
        exitgame();
    }
    else if(guess>randomNumber1){
        display2("Your number is greater than my number.");
        displayGuess();
    }
    else if(guess<randomNumber1){
        display2("Your number is smaller than my number.");
        displayGuess();
    }
    
}
function display(message){
    let parentElement=document.querySelector(".history");
    const childElement1=document.querySelector(".guesses");
    const childElement2=document.querySelector(".left");
    parentElement.removeChild(childElement1);
    parentElement.removeChild(childElement2);
    const h31=document.querySelector("#message1");
    h31.innerHTML=message;
}
function display2(message){
    const h31=document.querySelector("#message1");
    h31.innerText=message;
}
function displayGuess(){
    userInput.value=null;
    previous.innerText=prev;
    attempts.innerText=chanceLeft;
}