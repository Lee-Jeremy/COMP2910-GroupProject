/**
 * Right button on the screen overlay's
 */
$(document).ready(function(){ 
	$("#buttonRight").click(function() {
		switch (getId('buttonRightText').innerHTML) {
		    case 'No': // Quit Confirm Overlay
                if (lives === 0) {
                    playAgain();
                } else {
					showLevelOverlay();
                }
                break;
            case 'Back': // Main Menu Overlay
                pauseGame();
                break;
            case 'Resume': // Pause Game Overlay
                multTimer = setInterval(multiplierTimer, 1000);
                hideOverlay();
                hideOverlayContainer();
                break;
            case 'Yes': // Play Again Overlay
                if (lives === 0) {
                    level = 1;
                    lives = 3;
					totalScore = 0;
                    fullLives();
                    fadeLevelOverlay();
					getId('scoreMultipliedText').innerHTML = points + " pts x 0";
                    getId('hexagonTextOverlay').innerHTML = "1";
                    getId('passOrFail').style.display = "none";
                } else {
                    showLevelOverlay();
                }
                break;
            case 'Submit': // High Score Prompt
                // Insert Submit Function
                break;
            default: // Current Level Overlay
                hideOverlay();
                hideOverlayContainer();
                resetLevel();
                setTimeout(dealCards, 500);
        }
	});
});