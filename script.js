"use strict";


const searchButton = document.querySelector(".inputbox-text-button");
const inputElement = document.querySelector(".inputbox");
const resultText = document.querySelector(".result-prime");
const inputBox = document.querySelector("#number");
const buttonImg = document.querySelector("#search-button");
let ready = false;


console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--number-element-final-size')); // #336699




document.body.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (ready) {
            return;
        }
        checkHandler();
    }
});

searchButton.addEventListener('click', () => {
    if (ready) {
        return;
    }
    checkHandler();
});



function checkHandler() {
    ready = true;
    if (inputBox.value.length === 0) {
        return;
    }

    if (isPrime(parseInt(inputBox.value))) {
        resultText.innerHTML = 'Your number is prime!';
    } else {
        resultText.innerHTML = 'Your number is not prime!';
    }

    inputBox.disabled = true;
    document.documentElement.style.setProperty('--number-element-final-size', `${inputBox.value.length * 45 + 80}px`);
    searchButton.classList.add("inputbox-text-button-play");
    inputElement.classList.add("inputbox-play");
    resultText.classList.add("result-prime-play");
}

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}