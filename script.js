'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '👍Correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 30;
// //to get value
// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 35;
// console.log(document, querySelector('.guess').value);
//addEventListener(typeofevent, eventHandler)
//trunc-eliminate decimal, 20 - to make the number between 0 - 19
//1 - to make it between 1 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
  } 
    //for correct guess
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('message').textContent = '📈Too high';
      score--;
      document.querySelector('message').textContent = score;
    } else {
      document.querySelector('message').textContent = 'You lost the game';
      document.querySelector('message').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('message').textContent = '📈Too low';
      score--;
      document.querySelector('message').textContent = score;
    } else {
      document.querySelector('message').textContent = 'You lost the game';
      document.querySelector('message').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.bacgroundColor = '#222';
  document.querySelector('.number').style.width = '5rem';
  // document.querySelector('.highscore').textContent = '';
});
