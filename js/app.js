/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
document.querySelector('#btn__reset').addEventListener('click', function () {
  game.startGame();
});

document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('click', function (event) {
    const button = event.target;
    game.handleInteraction(button);
  });
});
