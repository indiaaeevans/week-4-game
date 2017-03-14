var wins = 0,
	losses = 0,
	score = 0,
	cValues = [0, 0, 0, 0],
	game = gameStart();

// generate values for the random-number and all four crystals

function gameStart() {

	console.log("game started");

	// reset the user score and show on the page
	score = 0;

	$("#score").text(score);

	// Generate random number between 19 and 120
	var n = Math.floor((Math.random() * 102) + 19);

	// show the random number on the page
	$("#random-num").text(n);

	cValues = [0, 0, 0, 0];

// Generate random number between 1 and 12 for each crystal
		
	for (i=0; i < cValues.length; i++) {
		cValues[i] = Math.floor((Math.random() * 12) + 1);
	}
	console.log("current crystal values: " + cValues);

	console.log("random number: " + n);

	//  Click events for the crystals, which will run the function that
	// adds to user's score using the random values we generate with gameStart
  	$("#crystal-1").on("click", cValues[0], addPoints);
  	$("#crystal-2").on("click", cValues[1], addPoints);
  	$("#crystal-3").on("click", cValues[2], addPoints);
  	$("#crystal-4").on("click", cValues[3], addPoints);
	
	return {n: n, cValues :cValues};
}

// when the user clicks a crystal
function addPoints(event) {

	// add the selected crystal's value to the user score
	score = score + event.data;

	// update score on the page
	$("#score").text(score);

	// if they add up to equal the number they win
	if (score === game.n) {
		wins++;
		$("#wins").text(wins);
		gameStart();
	}

	// if they go over the number they lose
	else if (score > game.n) {
		losses++;
		$("#losses").text(losses);
		gameStart();
	}
}
