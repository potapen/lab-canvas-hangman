let hangmanCanvas
class Hangman {
  constructor(words) {
    this.words = words //array
    // ... your code goes here
    this.secretWord = '' // a word
    this.letters = [] //an array
    this.guessedLetters = '' // a string with several letters
    this.errorsLeft = 10
  }

  pickWord() {
    // ... your code goes here
    const randomIndex = Math.floor(Math.random()*this.words.length)
    const randomWord = this.words[randomIndex]
    console.log(`randomWord is ${randomWord} with type ${typeof randomWord}`)
    this.secretWord = randomWord
    console.log(`this.secretWord is ${this.secretWord} with type ${typeof this.secretWord}`)
    console.log('this.words.includes(this.secretWord) :', this.words.includes(this.secretWord))
    return this.secretWord
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    console.log(keyCode)
    return (keyCode>=65 && keyCode <=90) ? true : false //65 = a, 90 = z

  }

  checkClickedLetters(letter) {
    // ... your code goes here
    //check that letter is in the this.letters array
    const clickedLetter = this.letters.includes(letter)
    return clickedLetter
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    console.log('addCorrectLetter function')
    const letterAlreadyTried = this.checkClickedLetters(letter)
    console.log('letterAlreadyTried :', letterAlreadyTried)
    console.log('secretword :', this.secretWord)
    const letterIsCorrect = this.secretWord.includes(letter)
    console.log('letterIsCorrect :', letterIsCorrect)
    if (!letterAlreadyTried && letterIsCorrect) {
      this.letters.push(letter)
      console.log('letters :', this.letters)
      this.guessedLetters = this.guessedLetters.concat(letter)
      console.log('guessedLetters: ', this.guessedLetters)
      const index = this.secretWord.indexOf(letter)
      hangmanCanvas.writeCorrectLetter(index)
    }

    const hasWon =  (this.guessedLetters.length === this.secretWord.length)
    console.log('has won: ', hasWon)
  }

  addWrongLetter(letter) {
    // ... your code goes here
    console.log('addWrongLetter function')
    const letterAlreadyTried = this.checkClickedLetters(letter)
    console.log('letterAlreadyTried :', letterAlreadyTried)
    console.log('secretword :', this.secretWord)
    const letterIsCorrect = this.secretWord.includes(letter)
    console.log('letterIsCorrect :', letterIsCorrect)
    if (!letterAlreadyTried && !letterIsCorrect) {
      this.letters.push(letter)
      console.log('letters :', this.letters)
      this.errorsLeft --
      console.log('this.errorsLeft: ', this.errorsLeft)
      hangmanCanvas.writeWrongLetter(letter, this.errorsLeft)

    }

    const hasWon =  (this.guessedLetters.length === this.secretWord.length)
    console.log('has won: ', hasWon)
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft>0 ? false : true

  }

  checkWinner() {
    // ... your code goes here
    return (this.guessedLetters.length === this.secretWord.length) ? true : false
  }
}

let hangman;

//for debug


const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord()
    console.log('hangman.words.includes(hangman.secretWord) :', hangman.words.includes(hangman.secretWord))
    hangmanCanvas = new HangmanCanvas(hangman.secretWord)
    hangmanCanvas.drawLines()
    // hangmanCanvas.writeCorrectLetter(0)
    // hangmanCanvas.writeCorrectLetter(1)
    // hangmanCanvas.writeCorrectLetter(2)
    // hangmanCanvas.writeCorrectLetter(3)
    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event)
  const kc = event.keyCode

  const isLetter = hangman.checkIfLetter(kc)
  console.log(`event is: ${event}, it is a letter? ${isLetter}`)
  const clickedLetter = hangman.checkClickedLetters(event.key)
  console.log('this letter has already been tried ?', event.key, clickedLetter)
  hangman.addCorrectLetter(event.key)
  hangman.addWrongLetter(event.key)
});
