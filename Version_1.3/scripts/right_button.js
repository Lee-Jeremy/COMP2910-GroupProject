/**
 * Manipulates the functionality of the #buttonRight dependant on its contents
 */
$(document).ready(function () {
    $("#buttonRight").click(function () {
        switch (getId('buttonRightText').innerHTML) {
            case 'No': // Quit Confirm Overlay
                if (lives === 0) { // If lives are 0, brings up the playAgain overlay
                    playAgain();
                } else { // If lives are remaining, show the current levelOverlay
                    showLevelOverlay();
                }
                break;
            case 'Back': // Main Menu Overlay
                pauseGame(); // Returns to the pauseGame overlay
                break;
            case 'Resume': // Pause Game Overlay
                multTimer = setInterval(multiplierTimer, 1000); // Resumes the timer functionality
                hideOverlay();
                hideOverlayContainer();
                break;
            case 'Yes': // Play Again Overlay
                if (lives === 0) { // If lives are 0, resets the game conditions to when the game initially starts
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
                var nameInput = getId('nameBox').value; // Stores the value of input to a variable
                var scoreInput = totalScore; // Stores the current totalScore to a variable

                if (nameInput == "" || scoreInput == 0 || scoreInput < tenthScore) { // Validates the user input
                    incorrectInput();
                } else { // Uses AJAX to submit the JS variables to be read via PHP
                    $.post("playmode.php",
                {
                    newNameInput: nameInput,
                    newTotalScore: scoreInput
                });
                    window.location.href = './leaderboard.php'; // Links to the leaderboard.php page;
                }                                               // query is processed slower than page refreshes

                break;
            default: // Current Level Overlay
                //var tenthScore = 0; // FOR TESTING PURPOSES IN THE HTML FILE
                hideOverlay();
                hideOverlayContainer();
                resetLevel();
                hexColour();

                if (totalScore > tenthScore) { // Checks current totalScore versus the 10th score from the database
                    displayCrown();            // and displays a crown while converting the points color to gold
                    getId('pointsText').style.color = "#c5b358";
                }

                setTimeout(dealCards, 500);
        }
    });
});