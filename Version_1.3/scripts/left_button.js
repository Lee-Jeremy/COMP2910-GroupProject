/**
 * Left button on the screen overlay's
 */
$(document).ready(function () {
    $("#buttonLeft").click(function () {
        switch (getId('buttonLeftText').innerHTML) {
            case 'Yes': // Quit Confirm overlay
                if (totalScore > tenthScore) {
                    highScore();
                } else {
                    window.location.href = './startscreen.php';
                }
                break;
            case 'End': // Pause Game
                mainMenu();
                break;
            case 'Reset': // High Score Prompt
                getId('nameForm').reset();
                break;
            default: // Current Level and Play Again overlay
                hideOverlay();
                quitConfirm();
        }
    });
});