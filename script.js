'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 24;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMsg = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = document.querySelector('.guess').value;
    // When no input!
    if(!guess){
        // document.querySelector('.message').textContent = 'No Number!';
        displayMsg('No Number!');

    // When player wins!
    } else if(guess == secretNumber){

        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMsg('Correct Number');

        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When the guess is wrong!
    }
     else if(guess != secretNumber){
        if(score>1){
        // document.querySelector('.message').textContent = (guess > secretNumber) ? 'Too high!' : 'Too Low!';
        (guess > secretNumber) ? displayMsg('Too high') : displayMsg('Too low!');
        score--;
        document.querySelector('.score').textContent = score;
        } else{
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMsg('You lost the Game!');
        document.querySelector('.score').textContent = 0;
        }
        

    } 

});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMsg('Start Guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});