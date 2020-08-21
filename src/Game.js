const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./Turn');
const Deck = require('./Deck');
const Round = require('./Round');
const Card = require('./Card');

class Game {
  constructor() {
    this.currentRound = null;
  }
  start(card) {
    let cards = prototypeQuestions.map(card => {
      new Card(
        card['id'],
        card['question'],
        card['answer'],
        card['correctAnswer']
      );
    });
    
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
