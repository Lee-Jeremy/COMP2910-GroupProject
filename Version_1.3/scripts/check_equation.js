/**
 * Check Equation
 */
function checkEquation(){
	var Symbol;
	var first = userSelection[0]; // The user's 1st selected card value from the matrix
	var second = userSelection[1]; // The user's 2nd selected card value from the matrix	
	if (operator === "addition") {
		if ((first + second) == answer) {
			levelComplete();
            success.play();
		} else {
			levelFailed();
            wrong.play();
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			levelComplete();
            success.play();
		} else {
			levelFailed();
            wrong.play();
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			levelComplete();
            success.play();
		} else {
			levelFailed();
            wrong.play();
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			levelComplete();
            success.play();
		} else {
			levelFailed();
            wrong.play();
		}
	} else {
		alert('Unable to identify operator during checkEquation');	
	}
}

/**
 * Successfully Completed the Equation
 */
function levelComplete() {
	pointsPerLevel = (points * multiplier);
	totalScore += pointsPerLevel; 
    level++; // Increases the level count after each play
    getId('passOrFailText').innerHTML = "Complete!";
    if ((level % 10) === 1 && lives != 3) { // Adds a life every 10 levels
		lives++;
        setTimeout(gainingLife, 500);
        getId('gainedHeartText').style.display = "block";
    } else {
        getId('gainedHeartText').style.display = "none";
    }
	getId('eqCard4Front').style.backgroundColor = "#29a329"; // Green
	revealAnswer();
    setTimeout(fadeLevelOverlay, 1000); // Delays showing the overlay after 1 seconds
}

/**
 *  Failed to Successfully Complete the Equation
 */
function levelFailed() {
	lives--;
    setTimeout(losingLife, 1500);
	getId('eqCard4Front').style.backgroundColor = "#000000"; // Change the answer card's frontside to black
	revealAnswer();
	setTimeout(revealAnswerCards, 500); // Delay revealing the answer cards in the matrix by 0.5 seconds
    if (lives === 0) { // Checks to see if the lives are 0 causing game over
        setTimeout(fadePlayAgain, 2000)
    } else { // If lives are not 0, reshuffle and redeal
        setTimeout(resetLevel, 2500);
        setTimeout(dealCards, 3500);
    }
}