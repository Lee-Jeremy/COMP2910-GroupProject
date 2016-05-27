/**
 * Manipulates the functionality of the #buttonLeft dependant on its contents
 */
$(document).ready(function () {
    $("#buttonLeft").click(function () {
        switch (getId('buttonLeftText').innerHTML) {
            case 'Yes': // Quit Confirm overlay
                if (document.title === 'Play') {
                    if (totalScore > tenthScore) { // Checks the current totalScore versus the 10th score 
                        highScore();               // from the database
                    } else {
                        achieve1();
                        achieve2();
                        achieve3();
                    }
                }
                window.location.href = './startscreen.php';
                break;
            case 'End': // Pause Game
                mainMenu();
                break;
            case 'Reset': // High Score Prompt
                getId('nameForm').reset(); // Resets the input text box to blank
                break;
			case 'Back': //Tutorial going back option
			// if the user has clicked back on the first tutorial page it will return back to level 1 overlay
			if (tutorialCounter <= 0){
				showLevelOverlay();
				getId("tutorialBox").checked = false;
			}
			// The user is still able to cycle back and forward in the code
			else {
			tutorialCounter--;
			if (tutorialCounter ==1){
				resetLevel();
				setTimeout(tutorial,500);
			}
			else if (tutorialCounter ==3){
				hideMatrix();
				revealAnswer();
				setTimeout(tutorial2,500);
			}
			else if (tutorialCounter ==5){
				setTimeout(tutorialOperator,500);
				setTimeout(revealOperator,1000);
				modifiedReset();
				modifiedDealCards();
				setTimeout(tutorial4,500);
			}
			else{
			displayTutorial();
			tutorial1();
			tutorial2();
			tutorial3();
			}			
			}
				// Tutorial back option
				break;
            default: // Current Level and Play Again overlay
                hideOverlay();
                quitConfirm();
        }
    });
});