/**
* Global variable for identifying the status of the practice menu cards. 1 for stacked status.
*/
//var pracStacked = 1;

/** 
* Makes the practice menu cards fly down to locations and flips to show their fronts
* if they are stacked behind the practice menu. Makes the practice menu cards flips
* to show their backs and fly up to the practice menu if they are not stacked.
*/
function placePracCards() {
    for (i = 0; i <= 3; i++) {
        $(".mainCard").animate({
            left: '26.75%',
            top: '0%'
        }, 400);
    }
    $("#menuMain1").flip(false);
    // Puts "Main Menu" title on the back of the practice menu's back
    getId('menuMain1BackText').innerHTML = "Main Menu";
    $(".pracCard").css("visibility", "visible");
    // Puts operator images on the front of the practice menu cards and places them on proper locations
    throwAndFlip('menuPrac0', '<img src="./images/addition.png">', '2.25%', '115%', 0);
    throwAndFlip('menuPrac1', '<img src="./images/subtraction.png">', '26.75%', '115%', 0);
    throwAndFlip('menuPrac2', '<img src="./images/multiplication.png">', '51.25%', '115%', 0);
    throwAndFlip('menuPrac3', '<img src="./images/division.png">', '75.75%', '115%', 0);
}

function restackPracCards() {
    $(".mainCard").flip(true);
    $("#menuMain0").animate({
        left: '2.25%',
        top: '0%'
    }, 400);
    $("#menuMain2").animate({
        left: '51.25%',
        top: '0%'
    }, 400);
    $("#menuMain3").animate({
        left: '75.75%',
        top: '0%'
    }, 400);
    // Places practice menu cards behind the practice menu
    for (i = 0; i <= 3; i++) {
        flipAndStack('menuPrac' + i, '26.75%', '0%', 0);
    }
}