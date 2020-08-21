const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Turn = require('./Turn');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = null;
  }
  start() {
    const cardList = prototypeQuestions.map(card =>
      new Card(
        card['id'],
        card['question'],
        card['answers'],
        card['correctAnswer']
    ));
    const deck = new Deck(cardList);
    console.log(deck);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
