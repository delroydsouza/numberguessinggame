'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
let numberDisplayed = document.querySelector('.number');
let message = document.querySelector('.message');

let score = 20;
let highScore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

const displayMessage = msg => {
  message.textContent = msg;
};

checkBtn.addEventListener('click', () => {
  let guess = parseInt(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberDisplayed.textContent = guess;
    document.body.style.backgroundColor = '#60b347';
    numberDisplayed.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  numberDisplayed.style.width = '15rem';
});
