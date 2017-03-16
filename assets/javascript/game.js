var wins = 0,
	losses = 0,
	score = 0,
	n = 0,	// random number
	c = [0, 0, 0, 0];	// crystal values


gameStart();

// generate values for the random-number and all four crystals

function gameStart() {

	console.log("game started------------------");

	//  Remove any previously attached click events for the crystals
  	$("#crystal-1").off("click");
  	$("#crystal-2").off("click");
  	$("#crystal-3").off("click");
  	$("#crystal-4").off("click");


	// reset the user score and show on the page
	score = 0;

	$("#score").text(score);

	// Generate random number between 19 and 120
	n = Math.floor((Math.random() * 102) + 19);

	// show the random number on the page
	$("#random-num").text(n);

	
	// Generate random number between 1 and 12 for each crystal
		
	for (i=0; i < c.length; i++) {
		c[i] = Math.floor((Math.random() * 12) + 1);
	}


	//  Click events for the crystals, which will run the function that
	// adds to user's score using the random values we generate with gameStart
  	$("#crystal-1").on("click", c[0], addPoints);
  	$("#crystal-2").on("click", c[1], addPoints);
  	$("#crystal-3").on("click", c[2], addPoints);
  	$("#crystal-4").on("click", c[3], addPoints);
	
	function addPoints(event) {

		// add the selected crystal's value to the user score
		score = score + event.data;

		// update score on the page
		$("#score").text(score);

		// if they add up to equal the number they win
		// increase wins by one and start game over
		if (score === n) {
			
			wins++;
			
			$("#wins").text(wins);
			
			gameStart();
		}

		// if they go over the number they lose
		// increases losses by one and start game over
		else if (score > n) {

			losses++;
			
			$("#losses").text(losses);
			
			gameStart();
		}
	}
	
}


