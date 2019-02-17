'use strict';

class GameEngine {
    constructor(){
        this.secretWord = '';
        this.secretWordSplit = [];
        this.secretWordHidden = [];
        this.maxGuesses;
        this.guessesRemaining;
        this.lettersGuessed = [];
    }

    isGuessOK(guess) {
        let guessedLetter = guess.toLowerCase();
        let results = false;
        this.lettersGuessed.push(guessedLetter);

        this.secretWordSplit.forEach( (nextLetter, index) => {
            if (nextLetter == guessedLetter) {
            this.secretWordHidden[index] = guessedLetter;
            results = true;
            }
        },
        this);

        this.guessesRemaining--;
        return results;
    }

    getGuessesDisplay() {
        return this.secretWordHidden;
    }

    getGuessesRemaining() {
        return this.guessesRemaining;
    }

    getLettersGuessed() {
        return this.lettersGuessed;
    }

    getSecretWord() {
        return this.secretWord;
    }

    setSecretWord(word) {
        this.secretWord = word.toLowerCase();
        this.secretWordSplit = Array.from(this.secretWord);
    }

    setMaskOnSecretWord() {
        this.secretWordHidden = new Array(this.secretWord.length).fill('_');
    }

    setMaxGuesses(numMaxGuesses) {
        this.maxGuesses = numMaxGuesses;
        this.guessesRemaining = numMaxGuesses;
    }

    setLettersGuessed() {
        this.lettersGuessed = [];
    }
}

module.exports = GameEngine;