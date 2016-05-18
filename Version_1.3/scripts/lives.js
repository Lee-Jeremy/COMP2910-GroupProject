/**
 * Full Lives
 */
function fullLives() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartfull.png";
    getId('hearts3').src= "images/heartfull.png";
}

/**
 * Two Lives
 */
function twoLives() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartfull.png";
    getId('hearts3').src= "images/heartempty.png";    
}
 
/**
 * One Life
 */
function oneLife() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartempty.png";
    getId('hearts3').src= "images/heartempty.png";
}
 
/**
 * No lives
 */
function noLives() {
    getId('hearts1').src= "images/heartempty.png";
    getId('hearts2').src= "images/heartempty.png";
    getId('hearts3').src= "images/heartempty.png";
}
 
/**
 * Losing Life
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
 * Gaining Life
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