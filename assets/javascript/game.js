var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var winsCounter = 0;
var lossesCounter = 0;
var guesses = [];
var guessesLeft = 9;
var letterToGuess = letters[Math.floor(Math.random() * letters.length)];

reset();


document.onkeydown = function(event) {
  var guess = event.key;
  guesses.push(guess);
  if (guess === letterToGuess) {
    reset();
    winsCounter++;
    var wins = document.getElementById("wins");
    	wins.innerHTML = winsCounter;
  } else if (guessesLeft - 1 === 0) {
    reset();
    lossesCounter++;
    var losses = document.getElementById("losses");
    	losses.innerHTML = lossesCounter;
  } else {
    guessesLeft--;
    var left = document.getElementById("guessesLeft")
    	left.innerHTML = guessesLeft;
    var guessed = document.getElementById("guesses");
    	guessed.innerHTML = guesses;
  }
}

function reset() {
  guessesLeft = 9;
  guesses = [];
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + letterToGuess);
}

