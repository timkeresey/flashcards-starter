const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach((done) => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    done();
  });

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.deep.equal({ id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'})
  });

  it('should instantiate a new Turn', function() {
    round.takeTurn();

    expect(round.turn[0]).to.be.an.instanceof(Turn);
  });

  it('should update the turns count', function() {
    round.takeTurn('pug');

    expect(round.turns).to.equal(1);
  });

  it('should evaluate guesses', function() {
    round.takeTurn('pug');

    expect(round.turn[0].evaluateGuess()).to.equal(false);
  });

  it('should store incorrect guesses by id', function() {
    round.takeTurn('pug');

    expect(round.incorrectGuesses[0]).to.equal(1)
  });

  it('should return a message of incorrect! if guess is incorrect', function() {
    expect(round.takeTurn('pug')).to.equal('incorrect!')
  });

  it('should return a message of correct! if guess is correct', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct!')
  });
});
