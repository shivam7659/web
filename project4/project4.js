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
    if(guess<1 || guess>100 || isNaN(guess)){
        display("Enter a number between 1 and 100");
    }
    else{
        if(chanceLeft>0){
           prev.push(guess);
           analyze(guess);
        }
        
    }
}
function analyze(guess){
    if(guess===randomNumber1 && chanceLeft>1){
        display(`You have won in ${11-chanceLeft} attempts`);
        chanceLeft-=1;
        displayGuess();
        exitgame();
    }
    else if(guess===randomNumber1 && chanceLeft===1){
        display(`You have won in ${10} attempts`);
        chanceLeft=0;
        displayGuess();
        exitgame();
    }
    else if(guess!==randomNumber1 && chanceLeft===1){
        display(`GAME OVER.<br> Random Number was ${randomNumber1}`);
        chanceLeft=0;
        displayGuess();
        exitgame();
    }
    else if(guess>randomNumber1){
        display2("Your number is greater than my number.");
        chanceLeft-=1;
        displayGuess();
    }
    else if(guess<randomNumber1){
        display2("Your number is smaller than my number.");
        chanceLeft-=1;
        displayGuess();
    }
    
}
function display(message){
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
function exitgame(){
      play=false;
      userInput.value="";
      userInput.setAttribute('disabled','');
      let submitButton=document.createElement("input");
      submitButton.type="submit";
      submitButton.value="Start New Game";
      submitButton.id="newgame";
      let parentElement=document.querySelector(".history");
      parentElement.appendChild(submitButton);
      newgame();
}
function newgame(){
    const newgamebutton=document.querySelector("#newgame");
    newgamebutton.addEventListener('click',function(e){
        randomNumber1=parseInt(Math.random()*100+1);
        userInput.removeAttribute('disabled');
        prev=[];
        chanceLeft=10;
        play=true;
        previous.innerText="";
        attempts.innerText="";
        const h31=document.querySelector("#message1");
        h31.innerHTML="";
        let parentElement=document.querySelector(".history");
        parentElement.removeChild(newgamebutton);
    });
    
}
