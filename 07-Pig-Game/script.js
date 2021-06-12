'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// initialize
let scores, currentScore, activePlayer, playing;

const init = function () {
  // Starting conditions
  scores = [0, 0]; // Total scores that will keep accumulating
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden'); // hiding the dice by adding this hidden class on the dice
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init(); // running the function

// next player / switch player function
const nextPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // reassigning the active player};
  player0El.classList.toggle('player--active'); // removes or add class - switching active player by color
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceEl.classList.remove('hidden'); // to display dice we need to remove the hidden
    diceEl.src = `dice-${dice}.png`; // rolls and display any random dice image

    // 3. Check for a roll 1 , if true switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice; // display score on current player
      document.getElementById(`current--${activePlayer}`).textContent = currentScore; // set score dynamically based on who is the active player now
    } else {
      // Switch to next player
      nextPlayer();
    }
  }
});

// Button hold
btnHold.addEventListener('click', function () {
  // Add current score to the score of the active player score
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // Check score is already at least 100
    if (scores[activePlayer] >= 20) {
      // Finish game if 1 player wins and set playing to false
      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      // if not switch to next player
      nextPlayer();
    }
  }
});

// Reset the game
btnNew.addEventListener('click', init);
