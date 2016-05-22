function placeLoginCard() {
    getId('menuMain3BackText').innerHTML = "Main Menu";
    getId('menuMain3').style.zIndex = "3";
    for (i = 0; i <= 3; i++) {
        $(".mainCard").animate({
            left: '75.75%',
            top: '0%'
        }, 100);
    }
    setTimeout(function () {
        $("#menuLogin0").css("visibility", "visible");
        throwAndFlip('menuLogin0', '', '2.25%', '115%', 100, 120)
    }, 110);
    setTimeout(function () {
        $("#menuMain3").flip(false);
    }, 220);
}

function restackLoginCard() {
    flipAndStack('menuLogin0', '75.75%', '0%', 100, 250);
    setTimeout(function () {
        $("#menuMain0").animate({
            left: '2.25%',
            top: '0%'
        }, 100);
        $("#menuMain1").animate({
            left: '26.75%',
            top: '0%'
        }, 100);
        $("#menuMain2").animate({
            left: '51.25%',
            top: '0%'
        }, 100);
    }, 350);
    setTimeout(function () {
        $("#menuMain3").flip(true);
        $("#menuLogin0").css("visibility", "hidden");
    }, 425);
    setTimeout(function () {
        getId('menuMain3').style.zIndex = "2";
    }, 450);
}