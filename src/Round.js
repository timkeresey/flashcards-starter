const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.turn = [];
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[this.turns];
  }
  takeTurn(guess) {
    let currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    this.turn.push(currentTurn);
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentTurn.card.id);
      return 'incorrect!';
    } else {
      return 'correct!';
    }
  }
  calculatePercentCorrect() {
    let percentIncorrect = (this.incorrectGuesses.length /
    this.turn.length) * 100;
    return 100 - percentIncorrect;
  }

  endRound() {
    return `** Round over! ** You answered
    ${this.calculatePercentCorrect()}%
    of the questions correctly!`;
  }
}


module.exports = Round;
