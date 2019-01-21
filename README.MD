## Guessing Game Kata

[ ] 1. [Watch the demo](hangman-game-demo.mov).

[ ] 2.  Choose a theme for your game! You can choose any subject for your theme, though, so be creative!

[ ] 3. Use key events to listen for the letters that your players will type.

---

[ ] 4. Display the following on the page:

[ ] 5. Press any key to get started!

[ ] 6. Wins: (# of times user guessed the word correctly).

   * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

   * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

[ ] 7. Number of Guesses Remaining: (# of guesses remaining for the user).

[ ] 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

[ ] 9. After the user wins/loses the game should automatically choose another word and make the user play it.


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