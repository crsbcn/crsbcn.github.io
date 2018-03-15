//1. Define what letters the computer can use as a guess
    var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//2. Set initial global variables///////////////////////////////////////////////////////////
    var wins = 0
    var losses = 0
    var guessesLeft = 10
//3. "Guesses so far" is an array that will record the User's guesses in each round.
    var guessesSoFar = [];
//4. This will be the function that will run after a user selects a key.////////////////////
    var userGuess = null;
//5. Have CPU Player pick a letter "out of a hat" to be guessed by User/////////////////////
    var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesRemaining: " + guessesRemaining
    + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
////////////////////////////////////////////
//
////////////////////////////////////////////
//This will be the section that ports the aformentioned JavaScript code into the HTML Document//

//This will be the function that effectively ends the game after the score reached 15.