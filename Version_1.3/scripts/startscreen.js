/* Set-up menu cards for flipping and starts placing menu cards */
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
    $("#menuMain").click(function (event) {
        var target = event.target.id;
        if (target.substring(0, 14) == "menuMain1Front") {
            placePracCards();
        } else if (target.substring(9, 14) == "Front") {
            switchScreen(target);
        }
    });
    $("#menuPrac").click(function (event) {
        var target = event.target.id;
        if (target.substring(10, 14) == "Front") {
            switchScreen(target);
        }
    });
});