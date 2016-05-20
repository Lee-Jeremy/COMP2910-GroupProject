/**
 * Global variable for identifying the status of the practice menu cards. 1 for stacked status.
 */
var pracStacked = 1;

/** 
 * Makes the practice menu cards fly down to locations and flips to show their fronts
 * if they are stacked behind the practice menu. Makes the practice menu cards flips
 * to show their backs and fly up to the practice menu if they are not stacked.
 */
function placePracCards() {
    if (pracStacked == 1) {
        for (i = 0; i < 3; i++) {
            $("#menuMain" + i).flip(false);
        }
        // Puts "Main Menu" title on the back of the practice menu's back
        getId('menuMain1BackText').innerHTML = "Main Menu";
        // Puts operator images on the front of the practice menu cards and places them on proper locations
        throwAndFlip('#aniPrac0', 'menuPrac0', '<img src="./images/addition.png">', '-3%', '22.5vh', 0);
        throwAndFlip('#aniPrac1', 'menuPrac1', '<img src="./images/subtraction.png">', '24%', '22.5vh', 0);
        throwAndFlip('#aniPrac2', 'menuPrac2', '<img src="./images/multiplication.png">', '51%', '22.5vh', 0);
        throwAndFlip('#aniPrac3', 'menuPrac3', '<img src="./images/division.png">', '78%', '22.5vh', 0);
        // Changes the status of the practice cards to non-stacked after all cards are placed properly
        setTimeout(function () {
            pracStacked = 0
        }, 1000
        );
    }
}

function restackPracCards() {
    if (pracStacked == 0) {
        for (i = 0; i < 3; i++) {
            $("#menuMain" + i).flip(true);
        }
        // Places practice menu cards behind the practice menu
        flipAndStack('#aniPrac0', 'menuPrac0', '37.5%', '0vh', 0);
        flipAndStack('#aniPrac1', 'menuPrac1', '37.5%', '0vh', 0);
        flipAndStack('#aniPrac2', 'menuPrac2', '37.5%', '0vh', 0);
        flipAndStack('#aniPrac3', 'menuPrac3', '37.5%', '0vh', 0);
        // Changes the status of the practice cards to stacked after all cards are stacked properly
        setTimeout(function () {
            pracStacked = 1
        }, 1000
        );
    }
}