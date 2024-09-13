document.addEventListener('DOMContentLoaded', () => {
    const randomNumber = generateNumber();
    document.getElementById('guessButton').addEventListener('click', () => makeGuess(randomNumber));
});

// Generate a random number
function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number generated: ${randomNumber}`);
    return randomNumber;
}

// Input for number(guess)
// Check the number with random number generated and increment the guess count
const guessInput = document.getElementById("guessInput");
const output = document.getElementById("output");
const prevGuesses = document.getElementById("prevGuesses");
const attemptCount = document.getElementById("attemptCount");

let guess = [];
let count = 0;

function makeGuess (randomNumber) {
    const pguess = parseInt(guessInput.value);

    if (isNaN(pguess) || pguess < 1 || pguess > 100) {
        output.textContent = 'Please enter a valid number between 1 to 100';
        return;
    }

    count++;
    attemptCount.textContent = count;
    guess.push(pguess);
    prevGuesses.textContent = guess;

    const feedback = checkguess(pguess, randomNumber);
    output.textContent = feedback;

    guessInput.value = '';

    if (pguess === randomNumber) {
        document.getElementById('guessButton').disabled = true;
    }
}

// Compare the closeness of the guess to the generated number and give the output in the form of closeness to the number.
function checkguess (guess, randomNumber) {
    const difference = Math.abs(randomNumber - guess);

    if (difference == 0) {
        return 'Correct, you guessed the number!';
    } else if (difference <= 5) {
        return 'Very Close';
    } else if (difference <= 10) {
        return 'Close';
    } else if (difference <= 20) {
        return 'Far';
    } else {
        return 'Very Far';
    }
}

// If match then game over if not then new guess.