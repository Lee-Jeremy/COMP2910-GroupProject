/**
 * Reset Level
 */
function resetLevel() {
	// Change all card front's and back's to original colors and flip to their back's
	for (var i = 1; i <= 3; i++) {	
		for (var k = 1; k <= 3; k++) {
			$("#r" + i + "c" + k).flip(false); // Flip all cards to their backside 
			getId('r' + i + 'c' + k + 'Front').style.backgroundColor = "#3385ff"; // Sky blue
			getId('r' + i + 'c' + k + 'Back').style.backgroundColor = "#D7DADB"; // Light Gray
			getId('r' + i + 'c' + k + 'Back').style.border = "1px dashed #000000"; // Black
		}
	}

	for (var i = 1; i <= 4; i++) {
		$("#eqCard" + i).flip(false); // Backside
		getId('eqCard' + i + 'Front').style.backgroundColor = "#3385ff"; // Sky blue
		getId('eqCard' + i + 'Back').style.backgroundColor = "#D7DADB"; // Light gray
		getId('eqCard' + i + 'Back').style.border = "1px dashed #000000"; // Black
		if (i == 2 || i == 4) {
			getId('eqCard' + i + 'Front').style.backgroundColor = "#800000"; // Red
		}
	}
	setTimeout(restack, 500); // Restack the Animation Divisions
	// Reset all counters
	count = 0;   
	operator = "";
	mSeconds = 0;
	pointsPerLevel = 0;
	numClicks = 0;
	r1c1Clicks = 0;
	r1c2Clicks = 0;
	r1c3Clicks = 0;
	r2c1Clicks = 0;
	r2c2Clicks = 0;
	r2c3Clicks = 0;
	r3c1Clicks = 0;
	r3c2Clicks = 0;
	r3c3Clicks = 0;
	seconds = 1;
	updateGameStatistics();
}
 
/**
 * Restack the Animation Cards
 */
function restack() {
    hideEasterEgg(); // Removes easter eggs from all card backs
	getId('animationCard1').style.left = "10.5%";
	getId('animationCard1').style.top = "0%";
	getId('animationCard2').style.left = "10.25%";
	getId('animationCard2').style.top = "-0.5%";
	getId('animationCard3').style.left = "10%";
	getId('animationCard3').style.top = "-0.75%";
	getId('animationCard4').style.left = "9.75%";
	getId('animationCard4').style.top = "-1%";
	getId('animationCard5').style.left = "9.5%";
	getId('animationCard5').style.top = "-1.25%";
	getId('animationCard6').style.left = "9.25%";
	getId('animationCard6').style.top = "-1.5%";
	getId('animationCard7').style.left = "9%";
	getId('animationCard7').style.top = "-1.75%";
	getId('animationCard8').style.left = "8.75%";
	getId('animationCard8').style.top = "-2%";
	getId('animationCard9').style.left = "8.5%";
	getId('animationCard9').style.top = "-2.25%";
	getId('animationCard10').style.left = "8.25%";
	getId('animationCard10').style.top = "-2.5%";
	getId('animationCard11').style.left = "8%";
	getId('animationCard11').style.top = "-2.75%";
	// Resize Animation Cards
	for (var i = 1; i <= 11; i++) {
		getId('animationCard' + i).style.width = "25%";
		getId('animationCard' + i).style.height = "32%";
	}
	// Make animation cards visible
	for (var i = 1; i <= 11; i++) {
		getId('animationCard' + i).style.visibility = "visible";
	}	
}
 
/**
 * Update Game Statistics
 */
function updateGameStatistics() {
	// Post the total score and set the multiplier for the next level's in-game screen
	getId('pointsText').innerHTML = totalScore + " pts";
	getId('hexagonText').innerHTML = level;
    getId('multiplierText').innerHTML = "x4";
}

/**
 * Resets the game statistics after losing all of your lives
 */
 function resetLoss() {
    level = 1;
    lives = 3;
    totalScore = 0;
    cardValueMin = -6;
    cardValueMax = 13
    divisionValueMin = -6;
    divisionValueMax = 13;
    secondRevealWave = 4; 
    thirdRevealWave = 6;
    points = 25;
    hexCount = 0;
    fullLives();
    showLevelOverlay();
    getId('scoreMultipliedText').innerHTML = points + " pts x 0";
    getId('hexagonTextOverlay').innerHTML = "1";
    getId('passOrFail').style.display = "none";
    getId('passOrFail').style.color = "#006633";
    getId('pointsText').style.color = "black";
 }