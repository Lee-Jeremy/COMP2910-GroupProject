/**
 * Increments the easter egg counter
 */
function easterEggTrigger() {
    easterEggCounter++;
}

/**
 * Puts easter eggs on card backs randomly in specified conditions
 */
function easterEgg() {
    if (easterEggCounter >= 26) {
        showEasterEgg();
        easterEggCounter = 0; // Resets the easter egg counter
    } else if (easterEggCounter == 0) {
        hideEasterEgg();
    }
}

/**
 * Shows easter eggs on the card backs
 */
function showEasterEgg() {
    for (var i = 1; i <= 3; i++) {
		for (var k = 1; k <=3; k++) {
            getId('r' + i + 'c' + k + 'Img').src = "images/egg" + (Math.floor(Math.random() * 5) + 1) + ".jpg";
            getId('r' + i + 'c' + k + 'Img').setAttribute("Width", "100%");
	    }
    }
}

/**
 * Hides easter eggs from the card backs
 */
function hideEasterEgg() {
    for (var i = 1; i <= 3; i++) {
		for (var k = 1; k <=3; k++) {
            getId('r' + i + 'c' + k + 'Img').src = "images/egg_empty.png";
        }
    }
}