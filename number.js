var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;


const guess_form = document.querySelector('.guess_form');
const guess_input = guess_form.querySelector("input");

function init() {
    console.log(randomNumber);

    if (guessCount == 1) {
        guesses.innerText = 'Previous guesses: ';
    }

    guess_form.addEventListener("submit", (event) => {
        event.preventDefault();
        const currentValue = guess_input.value;

        guesses.textContent = guesses.textContent + `${currentValue} `;
        if (currentValue == randomNumber) {
            lastResult.textContent = `축하합니다 ${currentValue}가 정답입니다.`
            guesses.innerText = "";
            gameOver();

        } else if (guessCount == 10) {
            lastResult.textContent = "10번동안 못맞췄다...."
            gameOver();
        } else {
            lastResult.textContent = "WRONG"
            if (currentValue < randomNumber) {
                lowOrHi.textContent = `${currentValue}보다 큰숫자다.`
            } else {
                lowOrHi.textContent = `${currentValue}보다 작은 숫자다.`
            }
        }

        guess_input.value = "";
        guessCount++;
    })

}

function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
}

init();