/** 
* Makes the practice menu cards fly down to locations and flips to show their fronts
* if they are stacked behind the practice menu. Hides the other main menu cards behind
* the practice main menu.
*/
function placePracCards() {
    getId('menuMain1BackText').innerHTML = "Main Menu";
    getId('menuPrac0FrontText').innerHTML = '<img src="./images/addition.png" id="addition">';
    getId('menuPrac1FrontText').innerHTML = '<img src="./images/subtraction.png" id="subtraction">';
    getId('menuPrac2FrontText').innerHTML = '<img src="./images/multiplication.png" id="multiplication">';
    getId('menuPrac3FrontText').innerHTML = '<img src="./images/division.png" id="division">';
    getId('menuMain1').style.zIndex = "3";
    for (i = 0; i <= 3; i++) {
        $(".mainCard").animate({
            left: '26.75%',
            top: '0%'
        }, 100);
    }
    setTimeout(function () {
        $(".pracCard").css("visibility", "visible");
        throwAndFlip('menuPrac0', '2.25%', '115%', 100, 120),
        throwAndFlip('menuPrac1', '26.75%', '115%', 100, 120),
        throwAndFlip('menuPrac2', '51.25%', '115%', 100, 120),
        throwAndFlip('menuPrac3', '75.75%', '115%', 100, 120);
    }, 110);
    setTimeout(function () {
        $("#menuMain1").flip(false);
    }, 220);
}

/**
 * Makes the practice menu cards flips to show their backs and fly up to the practice menu.
 * Takes out the other main menu cards from the back of the practice main menu.
 */
function restackPracCards() {
    for (i = 0; i <= 3; i++) {
        flipAndStack('menuPrac' + i, '26.75%', '0%', 100, 275);
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
    }, 375);
    setTimeout(function () {
        $("#menuMain1").flip(true);
        $(".pracCard").css("visibility", "hidden");
    }, 475);
    setTimeout(function () {
        getId('menuMain1').style.zIndex = "2";
    }, 500);
}