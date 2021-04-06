

let targetNumber = Math.trunc(Math.random() * 100);
let yourResult = document.getElementById("display-result");
const buttonGuess = document.querySelector("#submit-button"); 

buttonGuess.addEventListener("click", guessNumber);

function guessNumber(){
  let userNumber = Number(document.getElementById("userinput").value);
  console.log(targetNumber);
  if (userNumber === targetNumber){
    yourResult.textContent = "Congrats!!You Are Right";
  }else if (userNumber < targetNumber){
    yourResult.textContent = "Try Higher Numbers!!";
  }else if (userNumber > targetNumber){
    yourResult.textContent = "Try Lower Numbers!!";
             } 
}

const tryNumber = document.getElementById("numberOfTries");
console.log(tryNumber.textContent);
let counter = 0;
buttonGuess.addEventListener("click", tryCounter);
 function tryCounter(){
  counter += 1;
  tryNumber.textContent = counter;
 }








 








