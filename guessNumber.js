'use strict';
//DOM & metodele DOM sunt parte din DOM API's, acolo accesam JS

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//handle click: something will happen with a method
//click and what to do with a function(event handler)
//function happens only when the event is happening

//secret number outside function
//as we want to be definnes once,
//only when we start the application
//math is a method , random give a number
//math.trunc cutting the decimal and we need to add +1
//because the number will be 19 without +1

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variable
//high score functionality
let highscore = 0;

//message a function instead a repetitive code
//just different message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //boolean in if else
  if (!guess) {
    //no number inputed
    displayMessage('⛔️ No number!');
    //or
    //document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    //correct number, players win
    displayMessage('🎉 Correct Number!');
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //check the highscore
    //add score tp highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //guess is too high
      //document.querySelector('.message').textContent =
      //  guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!';
      //or
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game!');
      //or
      //document.querySelector('.message').textContent = '😭 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       //guess is too high
  //       document.querySelector('.message').textContent = '⬆️ Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       //guess too low
  //       document.querySelector('.message').textContent = '⬇️ Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😭 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});
//reset the game except highscore
let reset = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
