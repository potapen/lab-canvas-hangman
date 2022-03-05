class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    // ... your code goes here
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, 800, 1200)
  }

  drawLines() {
    // ... your code goes here
    const length = hangman.secretWord.length
    for(let i=0 ; i<length ; i++){
      this.context.beginPath();
      this.context.moveTo(100 + 50*i, 60);
      this.context.lineTo(100+30 + 50*i, 60);
      this.context.stroke()
    }

  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = '48px serif'
    console.log('hangman.secretWord :', hangman.secretWord)
    const letter = hangman.secretWord[index]
    this.context.fillText(hangman.secretWord[index],100 + index*50, 50)
  
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '48px serif'
    this.context.fillText(letter,500, 50+50*errorsLeft)
    this.drawHangman(errorsLeft)
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
    switch(errorsLeft){
      case 10:
      case 9:
      case 8:
      case 7:
      case 6:
      case 5:
      case 4:
      case 3:
      case 2:
      case 1:
      case 0:
        this.context.beginPath();
        this.context.moveTo(100 + 50*errorsLeft, 60);
        this.context.lineTo(100 + 50*errorsLeft, 120);
        this.context.stroke()
      }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
