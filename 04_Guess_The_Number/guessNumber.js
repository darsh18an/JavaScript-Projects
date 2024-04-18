let  randomNumber = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const stratOver = document.querySelector('.resultParas');

const  p = document.createElement('p');

//to store the guessed number in an array to display it the user
let prevGuess = []

//the number of turns you have to guesss which ranges from 1 to 10 so start with 1
let numOfGuesses = 1;

//common practice in every game to allow to play game to check your chances or like any lifes or coins
let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
   const guess= parseInt(userInput.value);
   console.log(guess);
   validateGuess(guess);
  })
}



function validateGuess(guess){
    // to validate number given by the user must be between 1 to 100 only

    if(isNaN(guess)){
      alert ('please enter a valid number')
    } else if (guess < 1){ 
      alert("please enter a number greater than 0");
    }
     else if (guess>100){
      alert("please enter a number less than 100");
     }
     else{
      prevGuess.push(guess);
      if(numOfGuesses >9){
        displayGuess(guess);
        displayMessage(`GAME OVER... Random Number was ${randomNumber}`);
        endGame();
      }else{
        displayGuess(guess);
        checkGuess(guess);
      }
     }

}

function checkGuess(guess){
  // similar to validate but checks for is it equal to the random number or not if equals then you won if not high or low near to the number
  if(guess === randomNumber){
    displayMessage(`you guess it right`);
    endGame();

  }else if(guess< randomNumber){
    displayMessage(`Numeber is low `);

  } else if (guess> randomNumber){
    displayMessage(`Number is hIgh`);
  }
}

function displayGuess(guess){
  //clean up method
//clean the values so that new value come in the up stack 
// update to empty string
//update your guess and remaining guess too

userInput.value ='';
guessSlot.innerHTML += `${guess}, `;
numOfGuesses++;
remaining.innerHTML =`${10-numOfGuesses+1}`;


}

function displayMessage(message){
// here dom manuplation takes place to display result

lowOrHi.innerHTML =`<h2>${message}</h2>`;

}



function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id="newgame">Start new Game</h2>`;
  stratOver.appendChild(p);
  playGame= false;
  newGame();
}
function newGame() {

  const newGameButton=  document.querySelector('#newgame');
  newGameButton.addEventListener('click', function(e){
    randomNumber= parseInt(Math.random()*100+1);
    prevGuess=[];
    numOfGuesses =1;
     guessSlot.innerHTML='';
     remaining.innerHTML=`${11-numOfGuesses}`;
     userInput.removeAttribute('disabled');
     stratOver.removeChild(p);
     playGame= true;
  })
}






