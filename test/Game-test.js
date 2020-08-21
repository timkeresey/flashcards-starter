const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {

  it('should instatiate cards', function() {
    let game = new Game();

    expect(game.start()[0]).to.be.an.instanceof(Card)
  });

  // it('should create a deck with instantiated cards', function() {
  //   let game = new Game();
  //   game.start();
  //
  //   expect(this.currentRound.deck.cards).to.equal(1);
  // });

  // it('should create a round with the instantiated deck', function() {
  //   let game = new Game();
  //
  // })
});
