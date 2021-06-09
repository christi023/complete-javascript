'use strict';
// Selecting and manipulating elements
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 40;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// destructuring with functions
const displayMessage = function (message) {
  // message
  document.querySelector('.message').textContent = message;
};

// function for score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// function for number
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉');
    displayNumber(secretNumber); // the hidden number

    document.querySelector('body').style.backgroundColor = 'green'; // background color

    document.querySelector('.number').style.width = '30rem'; // width

    // getting high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score = score - 1; // equivalent to score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game! 😥');
      displayScore(0);
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

// Again _ reset or replay the game again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222'; // background color
  document.querySelector('.number').style.width = '15rem'; // width
  console.log('click me ');
});
