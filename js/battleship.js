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
	shipSunk: 0,

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
					view.displayMessage("You sank the ship");
					this.shipLength++;
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
			if (ship.hits[i] !== "miss") {
				return false;
			}
		}
		return true;
	}	
};

var controller = {
	guesses: 0,

	processGuess: function (guess) {
		// body...
	},

	parseGuess: function (guess) {
		var alphabet = ["A", "B", "C", "D", "E", "F"];

		if (guess === null || guess.length !== 2) {
			alert("Oops, please enter a letter and a number on the board.");
		}else{
			firstChar = guess.charAt(0);

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
};
