/**
 * Manipulates the functionality of the #buttonLeft dependant on its contents
 */
$(document).ready(function () {
    $("#buttonLeft").click(function () {
        switch (getId('buttonLeftText').innerHTML) {
            case 'Yes': // Quit Confirm overlay
                if (playMode && totalScore > tenthScore) { // Checks the current totalScore versus the 10th score 
                    highScore();               // from the database
                } else {
                    window.location.href = './startscreen.php';
                }
                break;
            case 'End': // Pause Game
                mainMenu();
                break;
            case 'Reset': // High Score Prompt
                getId('nameForm').reset(); // Resets the input text box to blank
                break;
            default: // Current Level and Play Again overlay
                hideOverlay();
                quitConfirm();
        }
    });
});