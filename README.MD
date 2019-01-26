## Guessing Game

#### IMPORTANT

  *Solve this problem Test-First* -- use TDD to design the functionality of the app, in small manageable functions. 

### Enhancements:
```sh
 1. refactor the code to use classes instead of functions
 2. secretWord and guessed letters are lower-cased
 3. maxGuesses is set to the number of characters of the secret word
 4. only valid characters are a-z and A-Z
 5. create a program, playGame.js, that plays the word guessing game.
    - Display the following on the page:
        Welcome to the Secret Word Guessing Game!
        Display the masked word on the page.
            * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.
            * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.
        Display Number of Guesses Remaining: 
        Display Letters Already Guessed: (displayed like `m a d a`).
 6. enhance the game to obtain random words from a word generator API
 7. make the game browser based using any framework youu desire -- React, Angular, Vue. 
    Choose a creative theme for your game!
```


### Project Setup  

Create a new project using static web template.

```sh
$ file
$   new project
$   static web static web 
```

Create src and test directories.

```sh
$ file
$   new directory
$   src 

$ file
$   new directory
$   test 
```



### Package Installation

```sh
$ npm init
$ npm i mocha
$ npm i chai
```
