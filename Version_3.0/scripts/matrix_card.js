/**
 * Fly and Flip the user selected Matrix Card 
 *
 * @param rowCol 
 *				The matrix card's ID
 * @param cardIndexNum
 *				The matrix card's index number in the matrix array
 * @param cardNum
 *				The matrix card's number (1-9)
 */
function revealMatrixCard(rowCol, cardIndexNum, cardNum) {
    // making it tutorial friendly if the tutorial counter is greater 
	if (seconds == 0 || tutorialCounter > 1) { // Prevent the user from selecting a card before all introduction reveals finish
		incrementClicks(cardNum); // Determine which matrix card th user selected
	}
	if ((seconds == 0 || tutorialCounter > 1) && numClicks == 1) { // Prevent the user from selecting a card before all introduction reveals finish
		count++; 					   	  // and from selecting the same card twice 
	}	
	if (count == 1 && numClicks == 1) { // The first card selected by the user
		userSelection[0] = matrix[cardIndexNum]; // Copy the selected matrix card value to the 1st index in the user selection array
		getId('eqCard1FrontText').innerHTML = matrix[cardIndexNum]; // Copy the selected matrix card value to the 1st equation card
		$("#" + rowCol + "Back").css("background-color", "#D7DADB"); // Change 1st matric card's backside color to grey (Hide the card)
		$("#" + rowCol + "Back").css("border-style", "dashed"); // Change 1st matrix card's backside border-style to dashed
		hideEasterEgg(cardNum);
		uncuePlay("#" + rowCol);
		$("#animationCard" + cardNum).css("visibility", "visible"); // Make the hidden animation card visible
        click.play(); // Click sound
		$("#animationCard" + cardNum).animate({ // Change size and width of animate div to match equation card dimensions
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); // Change 1st equation card backside color to Navy blue
			setTimeout(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard" + cardNum).css("visibility", "hidden"); // Hide the animate division
				$('#eqCard1').flip(true); // Flip the 1st equation card to its frontside
				flip.play();
			}
		});
	}		
    whoosh.play();
	if (count == 2 && numClicks == 1) { 
		clearInterval(multTimer); // Stop the multiplier timer function
		userSelection[1] = matrix[cardIndexNum]; 
		getId('eqCard3FrontText').innerHTML = matrix[cardIndexNum]; // Assign the 1st matrix card value to the 3rd equation card
		$("#" + rowCol + "Back").css("background-color", "#D7DADB"); 
		$("#" + rowCol + "Back").css("border-style", "dashed"); 
		hideEasterEgg(cardNum);
        uncuePlay(".matrixCards")
        $("#animationCard" + cardNum).css("visibility", "visible");
        click.play();
		$("#animationCard" + cardNum).animate({
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); // Change 3rd equation card backside color to Navy blue
			setTimeout(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard" + cardNum).css("visibility", "hidden"); 
				$('#eqCard3').flip(true); // Flip the 3rd equation card to its frontside
				flip.play();
			}
		});
		// for tutorial option 
		if (getId("tutorialBox").checked = false) {
			setTimeout(checkEquation, 1200); // Check if the equation is true
		}else {
			setTimeout(tutorialEquation, 1200);
	}
	}
}

/**
 * Get the corresponding matrix card "clicks variable" to increment
 */
function incrementClicks(cardNum) {
	switch (cardNum) {
		case "1":
			r1c1Clicks++;
			numClicks = r1c1Clicks;
			break;
		case "2":
			r1c2Clicks++;
			numClicks = r1c2Clicks;
			break;
		case "3":
			r1c3Clicks++;
			numClicks = r1c3Clicks;
			break;
		case "4":
			r2c1Clicks++;
			numClicks = r2c1Clicks;
			break;
		case "5":
			r2c2Clicks++;
			numClicks = r2c2Clicks;
			break;
		case "6":
			r2c3Clicks++;
			numClicks = r2c3Clicks;
			break;
		case "7":
			r3c1Clicks++;
			numClicks = r3c1Clicks;
			break;
		case "8":
			r3c2Clicks++;
			numClicks = r3c2Clicks;
			break;
		case "9":
			r3c3Clicks++;
			numClicks = r3c3Clicks;
			break;
	}
}