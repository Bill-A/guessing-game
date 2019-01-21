'use strict';

let secretWord = '';
let secretWordSplit = [];
let secretWordHidden = [];
let maxGuesses;
let guessesRemaining;
let lettersGuessed = [];


module.exports = {
    isGuessOK: (guess) => {
        let results = false;
        lettersGuessed.push(guess);

        this.secretWordSplit.forEach( (nextLetter, index) => {
            if (nextLetter == guess) {
                this.secretWordHidden[index] = guess;
                results = true;
            }
        },
        this.secretWordHidden);

        this.guessesRemaining--;
        return results;
    },

    setMaskOnSecretWord: () => {
        this.secretWordHidden = new Array(this.secretWord.length).fill('.');
    },

    getGuessesDisplay: () => {
        return this.secretWordHidden;
    },

    getGuessesRemaining: () => {
        return this.guessesRemaining;
    },

    getLettersGuessed: () => {
        return lettersGuessed;
    },

    setSecretWord: (word) => {
        this.secretWord = word;
        this.secretWordSplit = Array.from(this.secretWord);
    },

    setMaxGuesses: (numMaxGuesses) => {
        this.maxGuesses = numMaxGuesses;
        this.guessesRemaining = numMaxGuesses;
    },

    setLettersGuessed: () => {
        lettersGuessed = [];
    },

};
