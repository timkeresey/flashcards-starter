const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card;
  let turn;
beforeEach((done) => {
  card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  turn = new Turn('pug', card);
  done();
})

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return a card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should indicate if guess matches correct answer on card', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should return a message based on whether guess is correct or incorrect', function() {
    expect(turn.giveFeedback()).to.equal('incorrect!')
  });
});
