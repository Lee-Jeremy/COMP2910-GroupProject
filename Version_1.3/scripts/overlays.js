/**
 * Hide Overlay Container
 */
function hideOverlayContainer() {
    $("#overlayContainer").fadeOut();
}
 
/**
 * Show Overlay
 */
function showOverlay() {
    getId('overlayContainer').style.display = "block";
    getId('quitOverlay').style.display = "block";
    getId('buttonLeft').style.display = "block";
    getId('buttonRight').style.display = "block";
}
 
/**
 * Fade Overlay
 */
function fadeOverlay() {
    $("#overlayContainer").fadeIn();
	$("#quitOverlay").fadeIn();
	$("#buttonLeft").fadeIn();
	$("#buttonRight").fadeIn();
}
 
/**
 * Hide Overlay
 */
function hideOverlay() {
    getId('levelOverlay').style.display = "none";
    getId('quitOverlay').style.display = "none";
    getId('buttonLeft').style.display = "none";
    getId('buttonRight').style.display = "none";
    getId('playAgain').style.display = "none";
}
 
/**
 * Show Current Level Overlay
 */
function showLevelOverlay() {
    hideOverlay();
	if (level != 1) {
		getId('tutorial').style.display = "none";
		getId('passOrFail').style.display = "block";
		getId('hexagonTextOverlay').innerHTML = level - 1; // Increments the level after each play
	} 
	getId('overlayContainer').style.display = "block";
	getId('levelOverlay').style.display = "block";
	getId('buttonLeft').style.display = "block";
	getId('buttonRight').style.display = "block";
    getId('scoreMultiplied').style.display = "block";
    getId('normalScore').style.display = "block";
	getId('buttonLeftText').innerHTML = "Quit";
	getId('buttonRightText').innerHTML = "Play";  
	getId('scoreMultipliedText').innerHTML = points + " pts x " + multiplier;
	getId('normalScoreText').innerHTML = pointsPerLevel + " pts";
	getId('totalPointsText').innerHTML = "Total " + totalScore + " pts";
}
 
/**
 * Fade Current Level Overlay
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
 * Play Again
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
 * Fade Play Again
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
 * High Score
 */
function highScore() {
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
 * Quit Confirm
 */
function quitConfirm() {
	showOverlay();
	getId('quitText').innerHTML = "Are you sure you want<br>to QUIT?";
	getId('buttonLeftText').innerHTML = "Yes";
	getId('buttonRightText').innerHTML = "No";
}

/**
 * Fade Pause Game
 */
function fadePauseGame() {
    if (seconds == 0 && count <= 1) {
        hideOverlay();
        fadeOverlay();
	    getId('quitText').innerHTML = "Game is PAUSED.";
	    getId('buttonLeftText').innerHTML = "End";
	    getId('buttonRightText').innerHTML = "Resume";
    }
}
 
/**
 * Pause Game
 */
function pauseGame() {
    if (seconds == 0 && count <= 1) {
        hideOverlay();
        showOverlay();
	    getId('quitText').innerHTML = "Game is PAUSED.";
	    getId('buttonLeftText').innerHTML = "End";
	    getId('buttonRightText').innerHTML = "Resume";
    }
}
 
/**
 * Main Menu
 */
function mainMenu() {
    hideOverlay();
    showOverlay();
    getId('quitText').innerHTML = "Go to the MAIN MENU?";
	getId('buttonLeftText').innerHTML = "Yes";
	getId('buttonRightText').innerHTML = "Back";
}