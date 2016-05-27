/**
 * Hides all overlay containers using the fadeOut jQuery effect
 */
function hideOverlayContainer() {
    $("#overlayContainer").fadeOut();
}
 
/**
 * Shows the quitOverlay container and its buttons by changing their display to "block"
 */
function showOverlay() {
    getId('overlayContainer').style.display = "block";
    getId('quitOverlay').style.display = "block";
    getId('buttonLeft').style.display = "block";
    getId('buttonRight').style.display = "block";
}
 
/**
 * Fades in the quitOverlay container and its buttons by changing their display to "block"
 */
function fadeOverlay() {
    $("#overlayContainer").fadeIn();
	$("#quitOverlay").fadeIn();
	$("#buttonLeft").fadeIn();
	$("#buttonRight").fadeIn();
}
 
/**
 * Hides all overlay containers by changing their display to "none"
 */
function hideOverlay() {
    getId('levelOverlay').style.display = "none";
    getId('quitOverlay').style.display = "none";
    getId('buttonLeft').style.display = "none";
    getId('buttonRight').style.display = "none";
    getId('playAgain').style.display = "none";
}
 
/**
 * Shows the current level overlay; changes the contents depending on if its the first level
 */
function showLevelOverlay() {
    hideOverlay();
	if (level != 1) { // If level is not 1, display appropriate level overlay
		getId('tutorial').style.display = "none";
		getId('passOrFail').style.display = "block";
		getId('hexagonTextOverlay').innerHTML = level - 1;
	} 
	getId('overlayContainer').style.display = "block";
	getId('levelOverlay').style.display = "block";
	getId('buttonLeft').style.display = "block";
	getId('buttonRight').style.display = "block";
	if (document.title === "Play") {
	    getId('scoreMultiplied').style.display = "block";
	    getId('normalScore').style.display = "block";
        getId('scoreMultipliedText').innerHTML = points + " pts x " + multiplier;
	    getId('normalScoreText').innerHTML = pointsPerLevel + " pts";
	    getId('totalPointsText').innerHTML = "Total " + totalScore + " pts";
	}
	getId('buttonLeftText').innerHTML = "Quit";
	getId('buttonRightText').innerHTML = "Play";  
}
 
/**
 * Fades in the level overlay using the jQuery effect
 */
function fadeLevelOverlay() {
    hideOverlay();
	$("#overlayContainer").fadeIn();
	$("#levelOverlay").fadeIn();
	$("#buttonLeft").fadeIn();
	$("#buttonRight").fadeIn();
    getId('scoreMultiplied').style.display = "block";
    getId('normalScore').style.display = "block";
    getId('buttonLeftText').innerHTML = "Quit";
    getId('buttonRightText').innerHTML = "Play";  
	getId('scoreMultipliedText').innerHTML = points + " pts x " + multiplier;
	getId('normalScoreText').innerHTML = pointsPerLevel + " pts";
	getId('totalPointsText').innerHTML = "Total " + totalScore + " pts";
    if (level != 1) {
        getId('tutorial').style.display = "none";
        getId('passOrFail').style.display = "block";
        getId('hexagonTextOverlay').innerHTML = level - 1;
	}
	if (lives == 0) {
		getId('scoreMultipliedText').innerHTML = points + " pts x 0";
	}
}
 
/**
 * Updates the levelOverlay by displaying appropriate content for when the user loses
 */
function playAgain() {
    showLevelOverlay();
    getId('tutorial').style.display = "none";
    getId('passOrFail').style.display = "block";
    getId('hexagonTextOverlay').innerHTML = level;
    getId('passOrFailText').innerHTML = "Failed!";
    getId('buttonLeftText').innerHTML = "No";
    getId('buttonRightText').innerHTML = "Yes";
    getId('playAgain').style.display = "block";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
}
 
/**
 * Updates and fades in the levelOverlay and displays content appropriate for when the user loses
 */
function fadePlayAgain() {
    fadeLevelOverlay();
    getId('tutorial').style.display = "none";
    getId('passOrFail').style.color = "#C4273C";
    getId('passOrFail').style.display = "block";
    getId('hexagonTextOverlay').innerHTML = level;
    getId('passOrFailText').innerHTML = "Failed!";
    getId('buttonLeftText').innerHTML = "No";
    getId('buttonRightText').innerHTML = "Yes";
    getId('playAgain').style.display = "block";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
}
 
/**
 * Updates and displays the levelOverlay with content appropriate for when the user reaches a high score
 */
function highScore() {
    hideOverlay();
    showLevelOverlay();
    getId('currentLevel').style.display = "none";
    getId('passOrFail').style.display = "none";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
    getId('pointsDivider').style.display = "none";
    getId('tutorialOrHearts').style.display = "none";
    getId('congrats').style.display = "block";
    getId('highScore').style.display = "block";
    getId('enterName').style.display = "block";
    getId('nameBoxContainer').style.display = "block";
    getId('buttonLeftText').innerHTML = "Reset";
    getId('buttonRightText').innerHTML = "Submit";
}

/**
 * Updates and fades in the levelOverlay with content appropaite for when the user reaches a high score
 */
function fadeHighScore() {
    hideOverlay();
    fadeLevelOverlay();
    getId('currentLevel').style.display = "none";
    getId('passOrFail').style.display = "none";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
    getId('pointsDivider').style.display = "none";
    getId('tutorialOrHearts').style.display = "none";
    getId('congrats').style.display = "block";
    getId('highScore').style.display = "block";
    getId('enterName').style.display = "block";
    getId('nameBoxContainer').style.display = "block";
    getId('buttonLeftText').innerHTML = "Reset";
    getId('buttonRightText').innerHTML = "Submit";
}

/**
 * Displays the overlay for quit confirmation
 */
function quitConfirm() {
	showOverlay();
	getId('quitText').innerHTML = "Are you sure you<br>want to QUIT?";
	getId('buttonLeftText').innerHTML = "Yes";
	getId('buttonRightText').innerHTML = "No";
}

/**
 * Fades in an overlay for when the user pauses the game; 
 * prevents pausing after second card is selected &
 * before all introductory reveals are finised
 */
function fadePauseGame() {
    if (seconds == 0 && count <= 1) { // Determines the boundaries pausing (reveals and card selection respectively)
        hideOverlay();
        fadeOverlay();
	    getId('quitText').innerHTML = "Game is<br>PAUSED";
	    getId('buttonLeftText').innerHTML = "End";
	    getId('buttonRightText').innerHTML = "Resume";
    }
}
 
/**
 * Displays an overlay for when the user pauses the game; 
 * prevents pausing after second card is selected &
 * before all introductory reveals are finised
 */
function pauseGame() {
    if (seconds == 0 && count <= 1) { // Determines the boundaries pausing (reveals and card selection respectively)
        hideOverlay();
        showOverlay();
	    getId('quitText').innerHTML = "Game is<br>PAUSED";
	    getId('buttonLeftText').innerHTML = "End";
	    getId('buttonRightText').innerHTML = "Resume";
    }
}
 
/**
 * Shows the overlay to go to the Main Menu
 */
function mainMenu() {
    hideOverlay();
    showOverlay();
    getId('quitText').innerHTML = "Go to the<br>MAIN MENU?";
	getId('buttonLeftText').innerHTML = "Yes";
	getId('buttonRightText').innerHTML = "Back";
}

/**
 * Updates the highScore contents to warn the user of incorrect input
 */
function incorrectInput() {
    showLevelOverlay();
    getId('currentLevel').style.display = "none";
    getId('passOrFail').style.display = "none";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
    getId('pointsDivider').style.display = "none";
    getId('tutorialOrHearts').style.display = "none";
    getId('congrats').style.display = "block";
    getId('congratsText').style.color = "#C4273C";
    getId('congratsText').innerHTML = "Please enter";
    getId('highScore').style.display = "block";
    getId('highScoreText').style.color = "#C4273C";
    getId('highScoreText').innerHTML = "YOUR NAME!";
    getId('enterName').style.display = "block";
    getId('nameBoxContainer').style.display = "block";
    getId('buttonLeftText').innerHTML = "Reset";
    getId('buttonRightText').innerHTML = "Submit";
}