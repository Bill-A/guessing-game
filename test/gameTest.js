'use strict';
let expect = require('chai').expect;
let game = require('../src/game.js');


describe('Guessing letters for secret word: "test"', () => {
    before(() => {
        game.setSecretWord("test");
        game.setMaskOnSecretWord();
    });

    it('should be true if guess is "t"', () => {
        expect(game.isGuessOK("t")).to.be.true;
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

    // Does not catch the second 't'. You should fix this.
    it('should be true if guess is "t"', () => {
        expect(game.isGuessOK("t")).to.be.true;
    });
});


describe('Display guessed letters for secret word: "driven"', () => {
    before(() => {
        game.setSecretWord("driver");
        game.setMaskOnSecretWord();
    });

    it('should display "......" the first time called', () => {
        expect(game.getGuessesDisplay()).to.eql([ '.', '.', '.', '.', '.', '.' ]);
    });

    it('should be true if guess is "d"', () => {
        expect(game.isGuessOK("d")).to.be.true;
    });
    it('should display "d....."', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'd', '.', '.', '.' , '.', '.']);
    });

    it('should be false if guess is "x"', () => {
        expect(game.isGuessOK("x")).to.be.false;
    });

    it('should display "d....."', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'd', '.', '.', '.' , '.', '.']);
    });

    it('should be true if guess is "v"', () => {
        expect(game.isGuessOK("v")).to.be.true;
    });

    it('should display "d....n"', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'd', '.', '.', 'v' , '.', '.']);
    });
});

describe('Display guessed letters for secret word: "guesses"', () => {
    before(() => {
        game.setSecretWord("guesses");
        game.setMaskOnSecretWord();
        game.setMaxGuesses(10);
    });

    it('should display "......." the first time called', () => {
        expect(game.getGuessesDisplay()).to.eql([ '.', '.', '.', '.', '.', '.', '.' ]);
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

    it('should display "gu....."', () => {
        expect(game.getGuessesDisplay()).to.be.eql([ 'g', 'u', '.', '.' , '.', '.', '.']);
    });

    it('should have 9 guesses remaining', () => {
        expect(game.getGuessesRemaining()).to.be.equal(7);
    });
});

// describe('Display letters guessed for secret word: "letters"', () => {
//     before(() => {
//         game.setSecretWord("letters");
//         game.setMaskOnSecretWord();
//         game.setMaxGuesses(10);
//     });
//
//     it('should display "......." the first time called', () => {
//         expect(game.getGuessesDisplay()).to.eql([ '.', '.', '.', '.', '.', '.', '.' ]);
//     });
//
//     it('should be true if guess is "s"', () => {
//         expect(game.isGuessOK("s")).to.be.true;
//     });
//
//     it('should be true if guess is "z"', () => {
//         expect(game.isGuessOK("z")).to.be.false;
//     });
//
//     it('should display "......s"', () => {
//         expect(game.getGuessesDisplay()).to.be.eql([ '.', '.', '.', '.' , '.', '.', 's']);
//     });
//
//     it('should have 8 guesses remaining', () => {
//         expect(game.getGuessesRemaining()).to.be.equal(8);
//     });
//
//     it('should display "s,z"', () => {
//         expect(game.getLettersGuessed()).to.be.eql([ 's', 'z']);
//     });
// });