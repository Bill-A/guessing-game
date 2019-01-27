'use strict';
let inquirer = require('inquirer');
let GameEngine = require('../src/gameEngine.js');
const secretWordsList = require('../src/secretWords.js');

let questions = [
    {
        type: 'input',
        name: 'letter',
        message: "Guess a letter of the secret word?",
        validate: function(value) {
            var pass = value.match(
                /[a-zA-Z]+/g
            );
            if (pass) {
                return true;
            }
            return 'Please enter a valid letter (a-z, A-Z)';
        }
    }
];


let game = new GameEngine();
game.setSecretWord(secretWordsList[Math.floor(Math.random() * secretWordsList.length)]);
game.setMaskOnSecretWord();
game.setMaxGuesses(game.getGuessesDisplay().join('').length);
game.setLettersGuessed();

console.log("==============================================");
console.log("");
console.log("Welcome to the Secret Word Guessing Game!");
console.log("");
console.log("==============================================");
console.log("\n ", `${game.getGuessesDisplay().join(' ')}`);
ask();


function ask() {
    inquirer
        .prompt(questions)
        .then(answers => {
            game.isGuessOK(answers.letter);
            console.log("\n ", game.getGuessesDisplay().join(' '));
            console.log(
                " Guesses Remaining:", `${game.getGuessesRemaining()}`, '\n',
                "Letters Guessed:", game.getLettersGuessed().join(' ')
            );
            new Promise(function (resolve) {

                if ((game.getGuessesRemaining() > 0) && (game.secretWordHidden.toString() != game.secretWordSplit.toString())) {
                    resolve( ask() );
                } else {
                    console.log("==============================================");
                    console.log("");
                    console.log("          Game Over");
                    console.log("");
                    console.log("==============================================");
                }
            });
        });
}