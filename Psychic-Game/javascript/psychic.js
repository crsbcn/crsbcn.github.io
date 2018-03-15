//Define what letters the computer can use as a guess
    var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Set initial global variables///////////////////////////////////////////////////////////
    var wins = 0
    var losses = 0
    var guessesRemaining = 10
//"Guesses so far" is an array that will record the User's guesses in each round.
    var guessesSoFar = [];
//This will be the function that will run after a user selects a key.////////////////////
    var userGuess = null;
//Have CPU Player pick a letter "out of a hat" to be guessed by User/////////////////////
    var letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " + guessesRemaining
    + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
////////////////////////////////////////////
// Listening for User Input
// start listening for events
document.onkeyup = function(event) {

	// When user presses a key, it records it and saves to userGuess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		// if it is a new letter then decrease remaining guesses by 1
		guessesRemaining--;
	}
	// if letterToBeGuessed is same as userGuess then it will record as a win, guesses resets to 10, computer picks new value
	if (letterToBeGuessed == userGuess) {
		wins++;
		alert("You won!");
		guessesRemaining = 10;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " + 
        guessesRemaining + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// if guessesRemaining gets to 0 then record it as a loss, guessesRemaining will reset to 0, and computer picks new value
	if (guessesRemaining === 0) {
		losses++;
		console.log("You lost!");
		guessesRemaining = 10;
		guessesSoFar = [];
		letterToBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " Guesses Remaining: " + guessesRemaining + 
        " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}

	// Displaying progress to HTML
    var html = "<h1>The Psychic Game</h1>" +  "<h2>Guess which letter I'm thinking of</h2>" + "<h2>Wins: 0" + wins + "</h2>" + "<h2>Losses: 0" + losses + "</h2>" + "<h2>Guesses Remaining: 10" + guessesRemaining + "</h2>" + "<p><h2>Guesses so far: " + guessesSoFar + "</h2></p>";
	// place html into the game ID
	document.querySelector("#game").innerHTML = html;}
