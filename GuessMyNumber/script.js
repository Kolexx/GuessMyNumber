'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '⚡️ Correct Number';
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.number').textContent);
document.querySelector('.number').textContent = 15;

let scr = (document.querySelector('.score').textContent = 16);
console.log(scr);

let scr1 = document.querySelector('.guess').value;
scr1 = document.querySelector('.guess').value = 20;
console.log(scr1);*/

// an event is something thay happen on a page either a mouse click, mouse moving or a key press and so on.

let sNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
    // when player win
  } else if (guess === sNumber) {
    // document.querySelector('.message').textContent = '⚡️ Correct Number';
    displayMessage('⚡️ Correct Number');
    document.querySelector('body').style.backgroundColor = '#7FFF00';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = sNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when input is greater than number
  } else if (guess !== sNumber) {
    if (score > 1) {
      displayMessage(guess > sNumber ? '📈 Too High !' : '📉 Too Low !');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost The Game! ';
      displayMessage('You Lost The Game! ');
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > sNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost The Game! ';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // when input is lower than number
  //   } else if (guess < sNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low';
  //       score = score - 1;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You Lost The Game! ';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  sNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
