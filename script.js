const counterDisplay = document.getElementById('counterDisplay');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
let counter = 0;
increaseButton.addEventListener('click', () => {
    if(counter < 10) {
        counter++;
    }
    counterDisplay.textContent = counter;
});
decreaseButton.addEventListener('click', () => {
    if(counter > -10) {
        counter--; 
    }
    counterDisplay.textContent = counter;
});