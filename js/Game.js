/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game */
  createPhrases() {
    const phrases = [
      'How are you',
      'Nice to meet you',
      'Nice weather',
      'Just my luck',
      'Leave me alone',
    ];
    const phraseObjectsArray = [];
    phrases.forEach((phrase) => phraseObjectsArray.push(new Phrase(phrase)));
    return phraseObjectsArray;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const hiddenLetters = document.querySelectorAll('#phrase ul li.hide');
    if (hiddenLetters.length === 0) return true;
    else return false;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const tries = document.querySelectorAll('.tries');
    const lifeToRemove = this.missed;
    tries[lifeToRemove].firstElementChild.src = 'images/lostheart.png';
    tries[lifeToRemove].firstElementChild.alt = 'Empty Heart Icon';
    this.missed = this.missed + 1;
    if (this.missed === 5) this.gameOver(false);
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'flex';
    const title = document.querySelector('#game-over-message');
    const win = 'You Win!';
    const lose = 'You Lose!';
    overlay.className = '';
    if (gameWon) {
      overlay.classList.add('win');
      title.textContent = win;
    } else {
      overlay.classList.add('lose');
      title.textContent = lose;
    }
    this.gameReset();
  }

  /**
   * Resets the game board and missed count
   */
  gameReset() {
    const background = document.querySelector('.main-container');
    const phrase = document.querySelector('#phrase ul');
    const keys = document.querySelectorAll('.key');
    const hearts = document.querySelectorAll('.tries img');
    const startButton = document.querySelector('#btn__reset');
    // reset background to white;
    background.style.backgroundColor = '#ffffff';
    // remove li from ul
    phrase.textContent = null;
    // reset key classes to key remove chosen, wrong and disabled
    keys.forEach((key) => {
      key.classList.remove('chosen', 'wrong');
      key.removeAttribute('disabled');
    });
    // reset all heart images to original
    hearts.forEach((heart) => {
      heart.src = 'images/liveheart.png';
      heart.alt = 'Heart Icon';
    });
    // reset missed counter
    this.missed = 0;
    startButton.focus();
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.setAttribute('disabled', true);
    const chosenLetter = button.textContent;
    const isPresent = this.activePhrase.checkLetter(chosenLetter);
    if (isPresent) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(chosenLetter);
      const isWinner = this.checkForWin();
      if (isWinner) this.gameOver(true);
    } else {
      button.classList.add('wrong');
      this.removeLife();
      const background = document.querySelector('.main-container');
      if (this.missed === 4) background.style.backgroundColor = '#fb7878';
    }
  }
}
