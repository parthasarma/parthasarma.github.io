//generate a random number
var randomLoc = Math.floor(Math.random()*5);

//To hold the location of each cell of the ship
var location1 = randomLoc, location2 = location1 + 1, location3 = location2 + 1;

//To hold the user guess
var guess;

//to hold the number of hits
var hits = 0;

//to hold the number of guesses
var guesses = 0;

//to hold the status of the ship (sunk or not)
var isSunk = false;

while(isSunk == false){
	//ask the user to enter a guess
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");

	//compare the guess with location
	if (isNaN(guess) || guess < 0 || guess > 6) {
		alert("Please enter a valid cell number");
	}else{
		guesses++;
		if (guess == location1 || guess == location2 || guess == location3) {
			hits++;
			alert("HIT!!");
			if (hits == 3) {
				isSunk = true;
				alert("you sank my ship");
			}
		}else{
			alert("MISS!!");
		}	
	}
}

var status = "You took " + guesses + " to sunk the ship which means your shooting accuracy is: " + ((3/guesses)*100) + "%.";

alert(status); 