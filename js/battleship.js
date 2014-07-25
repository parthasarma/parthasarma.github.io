//this object updates the view of the app 
var view = {
	//displays a message (Hit, miss or sink)
	displayMessage: function (msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	//set the class of a td elememnt to "hit"  
	displayHit: function (location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function (location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};

var model ={
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [{locations: ["06", "16", "26"], hits: ["", "", ""]},
			{locations: ["24", "34", "44"], hits: ["", "", ""]},
			{locations: ["10", "11", "12"], hits: ["", "", ""]}],

	fire: function (guess) {
		
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			//var locations = ship.locations;

			var index = ship.locations.indexOf(guess);

			if (index >= 0) {
				ship.hits[index] = "hit";

				view.displayHit(guess);
				view.displayMessage("HIT!!");

				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship");
					this.shipsSunk++;
				}

				return true;
			}
		}

		view.displayMiss(guess);
		view.displayMessage("You Missesd!!");
		return false;
	},	

	isSunk: function (ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	}	
};

var controller = {
	guesses: 0,

	processGuess: function (guess) {
		var location = parseGuess(guess);

		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses.");
			}
		}
	}

};


function parseGuess (guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F"];

	if (guess === null || guess.length !== 2) {
		alert("Oops, please enter a letter and a number on the board.");
	}else{
		var firstChar = guess.charAt(0).toUpperCase();

		var row = alphabet.indexOf(firstChar);
		var column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert("Oops, that isn't on the board.");
		}else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
			alert("Oops, that's off the board!");
		}else{
			return row + column;
		}
	}

	return null;
}

function init () {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;
}

function handleFireButton () {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);

	guessInput.value = "";
}

function handleKeyPress (e) {
	var fireButton = document.getElementById("fireButton");

	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;
	
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

window.onload = init;