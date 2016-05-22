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
    getId('menuMain1BackText').innerHTML = "Main Menu";
    getId('menuMain1').style.zIndex = "3";
    for (i = 0; i <= 3; i++) {
        $(".mainCard").animate({
            left: '26.75%',
            top: '0%'
        }, 100);
    }
    setTimeout(function () {
        $(".pracCard").css("visibility", "visible");
        throwAndFlip('menuPrac0', '<img src="./images/addition.png">', '2.25%', '115%', 100, 120),
        throwAndFlip('menuPrac1', '<img src="./images/subtraction.png">', '26.75%', '115%', 100, 120),
        throwAndFlip('menuPrac2', '<img src="./images/multiplication.png">', '51.25%', '115%', 100, 120),
        throwAndFlip('menuPrac3', '<img src="./images/division.png">', '75.75%', '115%', 100, 120);
    }, 110);
    setTimeout(function () {
        $("#menuMain1").flip(false);
    }, 220);
}

function restackPracCards() {
    for (i = 0; i <= 3; i++) {
        flipAndStack('menuPrac' + i, '26.75%', '0%', 100, 250);
    }
    setTimeout(function () {
        $("#menuMain0").animate({
            left: '2.25%',
            top: '0%'
        }, 100);
        $("#menuMain2").animate({
            left: '51.25%',
            top: '0%'
        }, 100);
        $("#menuMain3").animate({
            left: '75.75%',
            top: '0%'
        }, 100);
    }, 350);
    setTimeout(function () {
        $("#menuMain1").flip(true);
        $(".pracCard").css("visibility", "hidden");
    }, 425);
    setTimeout(function () {
        getId('menuMain1').style.zIndex = "2";
    }, 450);
}