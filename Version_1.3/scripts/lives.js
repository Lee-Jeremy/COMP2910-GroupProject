/**
 * Changes all of the heart images to display full hearts
 */
function fullLives() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartfull.png";
    getId('hearts3').src= "images/heartfull.png";
}

/**
 * Changes all of the heart images to display two full hearts and one empty
 */
function twoLives() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartfull.png";
    getId('hearts3').src= "images/heartempty.png";    
}
 
/**
 * Changes all of the heart images to display one full heart and two empty
 */
function oneLife() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartempty.png";
    getId('hearts3').src= "images/heartempty.png";
}
 
/**
 * Changes all of the heart images to display all empty hearts
 */
function noLives() {
    getId('hearts1').src= "images/heartempty.png";
    getId('hearts2').src= "images/heartempty.png";
    getId('hearts3').src= "images/heartempty.png";
}
 
/**
 * Checks the current lives when a life is lost and calls the appropriate function
 */
function losingLife() {
    switch (lives) {
        case 2:
			twoLives();
			break;
		case 1:
			oneLife();
			break;
		case 0:
			noLives();
			break;
    }
}

/**
 * Checks the current lives when a life is gained and calls the appropriate function
 */
function gainingLife() {
    switch (lives) {
        case 3:
			fullLives();
			break;
		case 2:
			twoLives();
			break;
		case 1:
			oneLife();
			break;
    }
}