/**
 * Right button on the screen overlay's
 */
$(document).ready(function () {
    $("#buttonRight").click(function () {
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
                    getId('passOrFail').style.color = "#006633";
                    getId('pointsText').style.color = "black";
                } else {
                    showLevelOverlay();
                }
                break;
            case 'Submit': // High Score Prompt
                var nameInput = getId('nameBox').value;
                var scoreInput = totalScore;

                if (nameInput == "" || scoreInput == 0 || scoreInput < tenthScore) {
                    incorrectInput();
                } else {
                    $.post("playmode.php",
                {
                    newNameInput: nameInput,
                    newTotalScore: scoreInput
                });
                    window.location.href = './leaderboard.php';
                }

                break;
            default: // Current Level Overlay
                //var tenthScore = 0; // FOR TESTING PURPOSES IN THE HTML FILE
                hideOverlay();
                hideOverlayContainer();
                resetLevel();
                hexColour();

                if (totalScore > tenthScore) {
                    displayCrown();
                    getId('pointsText').style.color = "#c5b358";
                }

                setTimeout(dealCards, 500);
        }
    });
});