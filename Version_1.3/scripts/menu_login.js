var loginBackOn = 0;

function placeLoginCard() {
    $("#menuLogin0FrontText").load("./login.php #login");
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
        throwAndFlip('menuLogin0', '2.25%', '115%', 100, 460);
    }, 110);
    setTimeout(function () {
        $("#menuLogin0").animate({
            height: '175%',
            width: '95.25%'
        }, 250);
    }, 210);
    setTimeout(function () {
        $("#menuMain3").flip(false);
    }, 560);
}

function restackLoginCard() {
    if (loginBackOn == 1) {
        getId("menuLogin0BackText").innerHTML = '';
    }
    flipAndStack('menuLogin0', '75.75%', '0%', 100, 750);
    setTimeout(function () {
        $("#menuLogin0").animate({
            height: '100%',
            width: '22%'
        }, 250);
    }, 500);
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
    }, 850);
    setTimeout(function () {
        $("#menuMain3").flip(true);
        $("#menuLogin0").css("visibility", "hidden");
    }, 950);
    setTimeout(function () {
        getId('menuMain3').style.zIndex = "2";
    }, 925);
}

function switchMenu(button) {
    switch (button) {
        case "btnRegisterPage":
            $("#menuLogin0").flip(false);
            $("#menuLogin0BackText").load("./register.php #register");
            loginBackOn = 1;
            break;
        case "btnLoginPage":
            $("#menuLogin0").flip(true);
            break;
        case "btnPasswordPage":
            $("#menuLogin0").flip(false);
            $("#menuLogin0BackText").load("./password.php #password");
            loginBackOn = 1;
            break;
    }
}