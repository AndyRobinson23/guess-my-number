'use strict';

// Generate random number between 1 and 20 and display it on FE
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    // When there is no input by the user
    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No number!';
        
        // When user wins 
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    // When user's guess is too high
    } else if (guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }

    // When user's guess is too low    
    } else if (guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    } 
})

// Reset game when clicking 'Again' button

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
})