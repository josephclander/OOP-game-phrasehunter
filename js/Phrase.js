/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const display = document.querySelector('#phrase ul');
    let text = '';
    for (let character of this.phrase) {
      if (character === ' ') {
        text += `<li class="space"> </li>`;
      } else {
        text += `<li class="hide letter ${character}">${character}</li>`;
      }
    }
    display.innerHTML = text;
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    for (let character of this.phrase) {
      if (letter === character) return true;
    }
    return false;
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    const matches = document.querySelectorAll(`.${letter}`);
    matches.forEach((match) => {
      match.classList.remove('hide');
      match.classList.add('show');
    });
  }
}
