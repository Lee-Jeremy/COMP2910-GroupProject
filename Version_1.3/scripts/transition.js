/**
 * Transitions
 */
$(document).ready(function () {

});

function switchScreen(menuSelected) {
    switch (menuSelected.substring(0, 9)) {
        case "menuMain0":
            $("body").load("./playmode.php");
            break;
        case "menuMain2":
            $("body").load("./leaderboard.php");
            break;
        case "menuPrac0":
            
            break;
        case "menuPrac1":
            
            break;
        case "menuPrac2":
            
            break;
        case "menuPrac3":
            
            break;
    }
}