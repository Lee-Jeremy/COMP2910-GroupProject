var loginBackOn = 0; // variable for identify if the back of the login card is empty or filled. 0 for empty.

/**
* Makes the login card fly down, expand, flip, and show the login page format
*/
function placeLoginCard() {
    // Phase 1: Loads the login.php on the back of login card, put main menu text, and changes z-index
    // of the login main menu card so that it would not be hidden behind other cards. Then, moves the
    // other main menu cards to behind of the login main menu card
    getId('menuMain3BackText').innerHTML = "Main Menu";
    getId('menuMain3').style.zIndex = "3";
    for (i = 0; i <= 3; i++) {
        $(".mainCard").animate({
            left: '75.75%',
            top: '0%'
        }, 100);
    }
    // Phase 2: Makes the login menu visible and make it fly down to the specified position
    setTimeout(function () {
        $("#menuLogin0").css("visibility", "visible");
        throwAndFlip('menuLogin0', '2.25%', '115%', 100, 460);
    }, 110);
    // Phase 3: Expands the login menu to the specified size
    setTimeout(function () {
        $("#menuLogin0").animate({
            height: '220%',
            width: '95.25%'
        }, 250);
    }, 210);
    // Phase 4: Flips the login menu
    setTimeout(function () {
        $("#menuMain3").flip(false);
    }, 560);
}

function fillLoginFront(URL) {
    $("#menuLogin0FrontText").load(URL);
}

/**
* Makes the login card flip, shrink, fly up to its original position
*/
function restackLoginCard() {
    // Phase 1: Empty the back of the login menu if there is anything on it. Then, makes the
    // login menu shrink to the original size, fly to behind of the login main menu card.
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
    // Phase 2: Moves the other main menu cards back to their original positions
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
    // Phase 3: Flips the login main menu card, makes the login menu invisible, and changes
    // z-index of the login main menu card back to 2
    setTimeout(function () {
        $("#menuMain3").flip(true);
        $("#menuLogin0").css("visibility", "hidden");
    }, 950);
    setTimeout(function () {
        getId('menuMain3').style.zIndex = "2";
    }, 925);
}

/**
* Switches the content of the back of the login menu accordingly. Flips the login menu
* when specific buttons are clicked.
*
* @param button
*                  clicked element ID (event)
*/
function switchMenu(button) {
    switch (button) {
        // Flips the login menu and shows the register page when Register button is clicked    
        case "btnRegisterPage":
            $("#menuLogin0").flip(false);
            $("#menuLogin0BackText").load("./register.php #register");
            loginBackOn = 1;
            break;
        // Flips the login menu and shows the login page when Login button is clicked    
        case "btnLoginPage":
            $("#menuLogin0").flip(true);
            break;
        // Flips the login menu and shows the lost-password page when Forgot-Password button is clicked   
        case "btnPasswordPage":
            $("#menuLogin0").flip(false);
            $("#menuLogin0BackText").load("./password.php #password");
            loginBackOn = 1;
            break;

        // TEST PAGE TRANSITION: DELETE AFTER TESTS ARE COMPLETED 
        case "btnTEST1":
            $("#menuLogin0").flip(false);
            $("#menuLogin0BackText").load("./account.php #account");
            loginBackOn = 1;
            break;
        case "btnTEST2":
            $("#menuLogin0").flip(false);
            $("#menuLogin0BackText").load("./fail.php #fail");
            loginBackOn = 1;
            break;
    }
}