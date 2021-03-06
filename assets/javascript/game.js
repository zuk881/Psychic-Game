
// Creating variables to hold the number of wins, losses, and guess number. 
var wins = 0;
var losses = 0;
var guessed = 0;
var counter = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var guessesSoFarText = document.getElementById("guessesSoFar");
var guessesLeftText = document.getElementById("GuessesLeft");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var counterText = document.getElementById("guessesLeft");

// created an array of letters a-z
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// generate random letter
var letter = letters[Math.floor(Math.random() * letters.length)]

// reset guessed letters
var resetGuesses = function () {
     document.querySelector("#guessesSoFar").innerHTML = "Your guesses so far: ";
}

// function to pick new letter when if/else statements met
var getNewLetter = function () {
     var letter = letters[Math.floor(Math.random() * letters.length)];
     return letter;
}

// This function is run whenever the user presses a key.
document.onkeydown = function (event) {
     var userGuess = event.key;
     counter--;
     guessesSoFarText.textContent += " " + userGuess;
     
     // if else statements to compare user guesses to computer answer 
     if (userGuess === letter) {
          resetGuesses();
          counter = 9;
          wins++;
          letter = getNewLetter();
          alert("You're reading my mind!");
     }

     else if (counter === 0) {
          resetGuesses();
          counter = 9;
          losses++;
          letter = getNewLetter();
          alert("Your clairvoyance needs work")
     }
    
     // Display the user guess number, and wins/losses.
     winsText.textContent = "wins: " + wins;
     lossesText.textContent = "losses: " + losses;
     counterText.textContent = "Guesses Left: " + counter;
};

