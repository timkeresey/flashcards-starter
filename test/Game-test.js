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

  it('should create a deck', function() {
    let game = new Game();

    
  });


});
