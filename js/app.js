/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const startButton = document.querySelector('#btn__reset');
startButton.focus();
startButton.addEventListener('click', function () {
  game.startGame();
});

/**
 * Event listener for ONSCREEN keys
 */
document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', function (event) {
    const button = event.target;
    game.handleInteraction(button);
  });
});

/**
 * Event listener for KEYBOARD keys
 * make response match onscreen keys with simulated click
 */
document.addEventListener('keydown', function (event) {
  const keyPressed = event.key;
  const onscreenButtons = document.querySelectorAll('.key');
  onscreenButtons.forEach((button) => {
    if (button.textContent === keyPressed) button.click();
  });
});
