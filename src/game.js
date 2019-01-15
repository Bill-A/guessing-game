'use strict';

let secretWord;
let secretWordSplit;
let secretWordHidden;
let maxGuesses;
let guessesRemaining;


module.exports = {
    isGuessOK: (letter) => {
        let position = this.secretWordSplit.indexOf(letter);
        this.secretWordHidden[position] = letter;
        this.guessesRemaining--;
        return (position >= 0);
    },

    setMaskOnSecretWord: () => {
        this.secretWordHidden = new Array(this.secretWord.length).fill('.');
        return this.secretWord;
    },

    getGuessesDisplay: () => {
        return this.secretWordHidden;
    },

    getGuessesRemaining: () => {
        return this.guessesRemaining;
    },

    setSecretWord: (word) => {
        this.secretWord = word;
        this.secretWordSplit = Array.from(this.secretWord);
    },

    setMaxGuesses: (numMaxGuesses) => {
        this.maxGuesses = numMaxGuesses;
        this.guessesRemaining = numMaxGuesses;
    },
};
