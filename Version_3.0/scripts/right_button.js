/**
 * Manipulates the functionality of the #buttonRight dependant on its contents
 */
$(document).ready(function () {
    $("#buttonRight").click(function () {
        switch (getId('buttonRightText').innerHTML) {
            case 'No': // Quit Confirm Overlay
                if (document.title === 'Play' && lives === 0) { // If lives are 0, brings up the playAgain overlay
                    playAgain();
                } else { // If lives are remaining, show the current levelOverlay
                    showLevelOverlay();
                }
                break;
            case 'Back': // Main Menu Overlay
                pauseGame(); // Returns to the pauseGame overlay
                break;
            case 'Resume': // Pause Game Overlay
                if (document.title === 'Play') {
                    multTimer = setInterval(multiplierTimer, 1000); // Resumes the timer functionality
                }
                hideOverlay();
                hideOverlayContainer();
                break;
            case 'Yes': // Play Again Overlay
                if (document.title === 'Play' && lives === 0) { // If lives are 0, resets the game conditions to when the game initially starts
                    resetLoss();
                    hexColour();
                } else {
                    showLevelOverlay();
                }
                break;
            case 'Submit': // High Score Prompt
                if (document.title === 'Play') {
                    var nameInput = getId('nameBox').value; // Stores the value of input to a variable
                    var scoreInput = totalScore; // Stores the current totalScore to a variable
                    if (nameInput == "" || scoreInput == 0 || scoreInput < tenthScore) { // Validates the user input
                        incorrectInput();
                    } else { // Uses AJAX to submit the JS variables to be read via PHP
                        $.post("playmode.php", {
                            newNameInput: nameInput,
                            newTotalScore: scoreInput
                        });
                        achieve1();
                        achieve2();
                        achieve3();
                        achieveHide();
                        window.location.href = './leaderboard.php'; // Links to the leaderboard.php page;
                    }                                               // query is processed slower than page refreshes
                }
                break;
            default: // Current Level Overlay
                hideOverlay();
                hideOverlayContainer();
                resetLevel();
                hexColour();
                if (document.title === 'Play' && totalScore > tenthScore) { // Checks current totalScore versus the 10th score from the database
                    displayCrown();            // and displays a crown while converting the points color to gold
                    getId('pointsText').style.color = "#c5b358";
                }
                if (document.title === 'Play') {
                    achieve1();
                    achieve2();
                    achieve3();
                    achieveHide();
                }
                setTimeout(dealCards, 500);
        }
    });
});