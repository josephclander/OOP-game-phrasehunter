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
}
