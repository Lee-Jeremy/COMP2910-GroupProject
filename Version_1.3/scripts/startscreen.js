/** 
* Set-up menu cards for flipping and starts placing menu cards 
*/
$(document).ready(function () {
    placeMenuCards();
    $(".mainCard").flip({ // Main menu cards flipping
        axis: 'y',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    $(".pracCard").flip({ // Practice cards flipping
        axis: 'y',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    $(".loginCard").flip({ // Practice cards flipping
        axis: 'x',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    // Detects the id of the clicked division in the main menu division and executes functions accordingly
    $(".menuMainBox").click(function (event) {
        // Variable for the clicked element's id
        var target = event.target.id;
        // Places practice menu cards when Practice menu card's front or front text division is clicked
        if (target.substring(0, 14) == "menuMain1Front") {
            placePracCards();
            // Re-stacks practice menu cards when Practice menu card's back or back text division is clicked
        } else if (target.substring(0, 13) == "menuMain1Back") {
            restackPracCards();
            // Executes the switchScreen function when other menu cards' front is clicked
        } else if (target.substring(0, 14) == "menuMain3Front") {
            placeLoginCard();
            // Executes the switchScreen function when other menu cards' front is clicked
        } else if (target.substring(0, 13) == "menuMain3Back") {
            restackLoginCard();
            // Executes the switchScreen function when other menu cards' front is clicked
        } else if (target.substring(9, 14) == "Front") {
            switchScreen(target);
        }
    });
    // Detects the id of the clicked division in the practice menu division and executes functions accordingly
    $(".menuPracBox").click(function (event) {
        // Variable for the clicked element's id      
        var target = event.target.id;
        // Executes the switchScreen function when practice menu cards' front is clicked
        if (target.substring(9, 14) == "Front") {
            switchScreen(target);
        }
        if (target == "addition") {
            target = "menuPrac0Front";
            switchScreen(target);
        }
        if (target == "subtraction") {
            target = "menuPrac1Front";
            switchScreen(target);
        }
        if (target == "multiplication") {
            target = "menuPrac2Front";
            switchScreen(target);
        }
        if (target == "division") {
            target = "menuPrac3Front";
            switchScreen(target);
        }
    });
    // Detects the id of the clicked division in the login division and executes functions accordingly
    $(".menuLoginBox").click(function (event) {
        // Variable for the clicked element's id
        var target = event.target.id;
        switchMenu(target);
    });
});