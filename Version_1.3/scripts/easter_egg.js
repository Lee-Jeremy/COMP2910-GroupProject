var easterEggCounter = 0; // Cilck counter variable for easter egg

/**
 * Increments the easter egg counter when hexagon icon on the overlay screen\
 */
$(document).ready(function () {
    $("#hexagonOverlay").click(function () {
        easterEggCounter++;
    });
});

/**
 * Puts easter egg pictures on card backs in specified conditions
 */
function easterEgg() {
    // Executes statements when easter egg counter is equal to or more than 26
    if (easterEggCounter >= 26) {
        for (var i = 1; i <= 9; i++) {
            // Randomly chooses a eater egg picture among 6 of them, put it on the back of the card, and adjusts the size of it
            getId('matrixBackText' + i).innerHTML = "<img src=\"./images/egg" + (Math.floor(Math.random() * 5) + 1) + ".jpg\">";
            $("#matrixBackText" + i + " img").css("width", "100%");
        }
    }
}