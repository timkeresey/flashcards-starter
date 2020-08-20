const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the guess', function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);

    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return a card', function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);

    expect(turn.returnCard()).to.equal(card);
  })

  it('should indicate if guess matches correct answer on card', function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);

    expect(turn.evaluateGuess()).to.equal(false);
  })

  it('should return a message based on whether guess is correct or incorrect', function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);

    expect(turn.giveFeedback()).to.equal('incorrect!')
  })
});


// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
// For example:
