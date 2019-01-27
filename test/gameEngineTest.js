'use strict';
let expect = require('chai').expect;
let GameEngine = require('../src/gameEngine.js');




let game = new GameEngine();

describe('Guessing letters for secret word: "test"', () => {
    before('Set up the game before starting tests', () => {
        game.setSecretWord("test");
        game.setMaskOnSecretWord();
    });

    it('should display "____" if no quesses', () => {
        expect(game.getGuessesDisplay()).to.eql([ '_', '_', '_', '_']);
    });

    it('should be true if guess is "t"', () => {
        expect(game.isGuessOK("t")).to.be.true;
    });

    it('should display "t__t"', () => {
        expect(game.getGuessesDisplay()).to.eql([ 't', '_', '_', 't']);
    });

    it('should be false if guess is "j"', () => {
        expect(game.isGuessOK("j")).to.be.false;
    });

    it('should be true if guess is "e"', () => {
        expect(game.isGuessOK("e")).to.be.true;
    });

    it('should be true if guess is "s"', () => {
        expect(game.isGuessOK("s")).to.be.true;
    });

    it('should be true if guess is "t"', () => {
        expect(game.isGuessOK("t")).to.be.true;
    });

    it('should display "tes_"', () => {
        expect(game.getGuessesDisplay()).to.eql([ 't', 'e', 's', 't']);
    });
});


describe('Display guessed letters for secret word: "driven"', () => {
    before(() => {
        game.setSecretWord("driver");
        game.setMaskOnSecretWord();
    });

    it('should display "______" if no quesses', () => {
        expect(game.getGuessesDisplay()).to.eql([ '_', '_', '_', '_', '_', '_' ]);
    });

    it('should be true if guess is "d"', () => {
        expect(game.isGuessOK("d")).to.be.true;
    });
    it('should display "d_____"', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'd', '_', '_', '_' , '_', '_']);
    });

    it('should be false if guess is "x"', () => {
        expect(game.isGuessOK("x")).to.be.false;
    });

    it('should display "d_____"', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'd', '_', '_', '_' , '_', '_']);
    });

    it('should be true if guess is "v"', () => {
        expect(game.isGuessOK("v")).to.be.true;
    });

    it('should display "d__v__"', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'd', '_', '_', 'v' , '_', '_']);
    });
});

describe('Display guessed letters for secret word: "guesses"', () => {
    before(() => {
        game.setSecretWord("guesses");
        game.setMaskOnSecretWord();
        game.setMaxGuesses(10);
    });

    it('should display "_______" if no quesses', () => {
        expect(game.getGuessesDisplay()).to.eql([ '_', '_', '_', '_', '_', '_', '_' ]);
    });

    it('should be true if guess is "g"', () => {
        expect(game.isGuessOK("g")).to.be.true;
    });

    it('should be true if guess is "u"', () => {
        expect(game.isGuessOK("u")).to.be.true;
    });

    it('should be true if guess is "z"', () => {
        expect(game.isGuessOK("z")).to.be.false;
    });

    it('should display "gu_____"', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'g', 'u', '_', '_' , '_', '_', '_']);
    });

    it('should have 9 guesses remaining', () => {
        expect(game.getGuessesRemaining()).to.be.equal(7);
    });
});

describe('Display letters guessed for secret word: "letters"', () => {
    before(() => {
        game.setSecretWord("letters");
        game.setMaskOnSecretWord();
        game.setMaxGuesses(10);
        game.setLettersGuessed();
    });

    it('should display "_______" the first time called', () => {
        expect(game.getGuessesDisplay()).to.eql([ '_', '_', '_', '_', '_', '_', '_' ]);
    });

    it('should be true if guess is "s"', () => {
        expect(game.isGuessOK("s")).to.be.true;
    });

    it('should be true if guess is "z"', () => {
        expect(game.isGuessOK("z")).to.be.false;
    });

    it('should be false if guess is "a"', () => {
        expect(game.isGuessOK("a")).to.be.false;
    });

    it('should display "______s"', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ '_', '_', '_', '_' , '_', '_', 's']);
    });

    it('should have 7 guesses remaining', () => {
        expect(game.getGuessesRemaining()).to.be.equal(7);
    });

    it('should display "s,z,a"', () => {
        expect(game.getLettersGuessed()).to.be.eql([ 's', 'z', 'a']);
    });
});
