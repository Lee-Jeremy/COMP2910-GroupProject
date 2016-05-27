/**
 * Determine whether the equation is true or false
 */
function checkEquation(){
	var first = userSelection[0]; // The user's 1st selected card value from the matrix
	var second = userSelection[1]; // The user's 2nd selected card value from the matrix	
	if (operator === "addition") {
		if ((first + second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else {
		alert('Unable to identify operator during checkEquation');	
	}
}

/**
 * Successfully Completed the Equation
 */
function levelComplete() {
    if (document.title === 'Play') {
        level++; // Increases the level count after each play
        pointsPerLevel = (points * multiplier); // Points earned in the current level
        totalScore += pointsPerLevel; // Total points earned since level 1
        getId('passOrFailText').innerHTML = "Complete!";
        if ((level % 5) === 1 && lives != 3 && level != 1) { // Adds a life every 10 levels
            lives++;
            setTimeout(gainingLife, 500);
            getId('gainedHeartText').style.display = "block";
        } else {
            getId('gainedHeartText').style.display = "none";
        }
        achieveDisplay();
        setTimeout(fadeLevelOverlay, 1000); // Delays showing the overlay after 1 seconds
    }
    if (document.title !== 'Play') {
        level++;
        levelCompletions++;
        setTimeout(hexColour, 2500);
        setTimeout(resetLevel, 2500);
        setTimeout(dealCards, 3500);
    }
    getId('eqCard4Front').style.backgroundColor = "#29a329"; // Green
	revealAnswer();
    success.play();
}

/**
 *  Failed to Successfully Complete the Equation
 */
function levelFailed() {
    if (document.title === 'Play') {
        lives--;
        achieveDisplay();
        setTimeout(losingLife, 1500);
        if (lives === 0) { // Checks to see if the lives are 0 causing game over
            gameStartCounter = 0;
            playCounter = 0;
            highScoreCounter = 0;
            pauseMusic();        
            gameOver.play();
            if (totalScore > tenthScore) {
                getId('gainedHeartText').style.display = "none";
                setTimeout(fadeHighScore, 2000);
            } else {
                getId('gainedHeartText').style.display = "none";
                setTimeout(fadePlayAgain, 2000);               
            }
        } else {
            fail.play();
            setTimeout(resetLevel, 2500);
            setTimeout(dealCards, 3500);
        }
    }
    if (document.title !== 'Play') {
        level++;
        setTimeout(hexColour, 2500);
        setTimeout(resetLevel, 2500);
        setTimeout(dealCards, 3500);
        fail.play();           
    }  
    getId('eqCard4Front').style.backgroundColor = "#000000"; // Change the answer card's frontside to black
	revealAnswer();
	setTimeout(revealAnswerCards, 500); // Delay revealing the answer cards in the matrix by 0.5 seconds
}