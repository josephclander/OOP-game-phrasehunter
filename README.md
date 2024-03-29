# OOP Game Show App

In this project, you'll create a browser-based, word guessing game: "Phrase Hunter." You’ll use JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

## Screenshots

<img width="360" alt="screenshot_1" src="https://user-images.githubusercontent.com/19231569/213939909-2794be72-ed0b-4381-9711-6d76e0594ee9.png"> <img width="360" alt="screenshot_2" src="https://user-images.githubusercontent.com/19231569/213939914-0f3678ab-8d85-42fe-b586-665a27361806.png"> <img width="360" alt="screenshot_3" src="https://user-images.githubusercontent.com/19231569/213939921-2c6924b5-f90b-4632-8f91-970e184689be.png"> <img width="360" alt="screenshot_4" src="https://user-images.githubusercontent.com/19231569/213939928-65fd3a56-1e94-4a52-a786-12ad08743b1c.png">

## Table of Contents

[Starter Files](#starter-files)

[Installation](#installation)

[Rules of the Game](#rules-of-the-game)

[Instructions](#instructions)

[Extra Credit Instructions](#extra-credit-instructions)

[Browser Testing](#browser-testing)

[Notes from the Build](#notes-from-the-build)

## Starter Files

- An index.html file with the basic HTML markup.
- A css folder containing two CSS files with the basic CSS styles for the game.
- An images folder containing two image files that are used for the game's scoreboard.
- A js folder containing the following JavaScript files:
  - app.js to create a new instance of the Game class and add event listeners for the start button and onscreen keyboard buttons.
  - Phrase.js to create a Phrase class to handle the creation of phrases.
  - Game.js to create a Game class with methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.
- An example_phrase_html.txt text file containing an example of the HTML for displaying a phrase.

## Installation

- Open the `index.html` file in your browser. Make sure javascript is enabled.

## Rules of the Game

- The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
- The player clicks an onscreen keyboard to guess letters in the phrase.
- The letter is disabled on the onscreen keyboard and a player can't select that letter again.
- If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
- If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
- The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

## Instructions

1. Create the `Phrase class` in the `Phrase.js` file.

- The class should include a constructor that receives a phrase parameter and initializes the following properties:
  - phrase: this is the actual phrase the Phrase object is representing. This property should be set to the phrase parameter, but converted to all lower case.
- The class should also have these methods:
  - `addPhraseToDisplay()`: this adds letter placeholders to the display when the game starts. Each letter is presented by an empty box, one li element for each letter. See the `example_phrase_html.txt` file for an example of what the rendered HTML for a phrase should look like when the game starts, including any id or class attributes needed. When the player correctly guesses a letter, the empty box is replaced with the matched letter (see the `showMatchedLetter()` method below). Make sure the phrase displayed on the screen uses the letter CSS class for letters and the space CSS class for spaces.
  - `checkLetter()`: checks to see if the letter selected by the player matches a letter in the phrase.
  - `showMatchedLetter()`: reveals the letter(s) on the board that matches the player's selection. To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class name that matches the selected letter and replace each selected element's hide CSS class with the show CSS class.

2. Create the `Game class` in the `Game.js` file.

- The class should include a constructor that initializes the following properties:

  - `missed`: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
  - `phrases`: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
  - `activePhrase`: This is the Phrase object that’s currently in play. The initial value is null. Within the `startGame()` method, this property will be set to the Phrase object returned from a call to the `getRandomPhrase()` method.

- The class should also have these methods:

  - `startGame()`: hides the start screen overlay, calls the `getRandomPhrase()` method, and sets the `activePhrase` property with the chosen phrase. It also adds that phrase to the board by calling the `addPhraseToDisplay()` method on the active Phrase object.
  - `getRandomPhrase()`: this method randomly retrieves one of the phrases stored in the `phrases` array and returns it.
  - `handleInteraction()`: this method controls most of the game logic. It checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game based on a correct or incorrect guess. This method should:
    - Disable the selected letter’s onscreen keyboard button.
    - If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the `removeLife()` method.
    - If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the `showMatchedLetter()` method on the phrase, and then call the `checkForWin()` method. If the player has won the game, also call the `gameOver()` method.
  - `removeLife()`: this method removes a life from the scoreboard, by replacing one of the `liveHeart.png` images with a `lostHeart.png` image (found in the images folder) and increments the missed property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the `gameOver()` method.
  - `checkForWin()`: this method checks to see if the player has revealed all of the letters in the active phrase.
  - `gameOver()`: this method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay h1 element with a friendly win or loss message, and replaces the overlay’s start CSS class with either the win or lose CSS class.

3. Update the `app.js` file.

- Create a new instance of the `Game class` and add event listeners for the start button and onscreen keyboard buttons:
  - Add a click event listener to the "Start Game" button which creates a new `Game` object and starts the game by calling the `startGame()` method.
  - Add click event listeners to each of the onscreen keyboard buttons, so that clicking a button calls the `handleInteraction()` method on the `Game` object. Event delegation can also be used in order to avoid having to add an event listener to each individual keyboard button. Clicking the space between and around the onscreen keyboard buttons should not result in the `handleInteraction()` method being called.

4. Resetting the gameboard between games.

- After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
  - Remove all `li` elements from the Phrase `ul` element.
  - Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
  - Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the `liveHeart.png` image.

## Extra Credit Instructions

1. Add keyboard functionality

   - Let players use their physical computer keyboard to enter guesses. You'll need to use the keydown or keyup event.

2. Making the project your own
   - The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations, filters, etc.
   - Detail of your style changes should be made here in the README.md file and in your submission notes.

## Browser Testing

This app has been tested on the following browsers:

- Chrome 89
- Firefox 87
- Safari 14.03
  - the focus for the start button is being pulled away by the browser whether loading in browser or using local server.

## Notes from the Build

- Added Styles
  - When the heart images are changed, the alt tag is also updated accordingly. [`game.js removeLife()` & `gameReset()`]
  - Automatic focus has been given to the start button with custom styling to outline to bring accessibility and uniformity across browsers. You can now more readily start the game with the enter key. Focus is blurred after the game is started. [`app.js`, `game.js gameReset()` & `styles.css #btn__reset`]
  - A box shadow was added to the start button that mimics being pressed to further improve UX feedback. [`styles.css #btn__reset`]
  - The onscreen keys have the 1px transparent border change to the stored key text color on hover. [`styles.css button.key:hover`]
  - The background colour changes to red as a warning when only one life remains. The same transition of 2s ease-in-out was added. The stored root variable wasn't used to improve efficiency by targetting background color only [`Game.js gameReset()` & `handleInteraction()`, `styles.css .main-container`]
