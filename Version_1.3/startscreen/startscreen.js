// Set-up Matrix and Equation Cards for Flipping
$(document).ready(function () {
    $(".mainCard").flip({ // Matrix Cards
        axis: 'y',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    $(".pracCard").flip({ // Matrix Cards
        axis: 'y',
        trigger: 'manual',
        front: ".back",
        back: ".front"
    });
    dealMenuCards();
});

// Global Variables

// Abbreviated getElementByID
function getId(id) {
    var element = document.getElementById(id);
    if (element == null) {
        alert('Programmer error: ' + id + ' does not exist.');
    }
    return element;
}

// Abbreviated getElementByClassName
function getClass(className) {
    var element = document.getElementsByClassName(className);
    if (element == null) {
        alert('Programmer error: ' + id + ' does not exist.');
    }
    return element;
}

// Deal the menu cards
function dealMenuCards() {
    throwAndFlip('#aniMain0', 'menuMain0', 'Play', '4.5vw', '0vh', 0);
    throwAndFlip('#aniMain1', 'menuMain1', 'Practice', '34vw', '0vh', 400);
    throwAndFlip('#aniMain2', 'menuMain2', 'High Scores', '63vw', '0vh', 800);
}

function dealPracticeCards() {
    $("#menuMain0").flip(false);
    $("#menuMain2").flip(false);
    for (i = 0; i < 4; i++) {
        getId("aniPrac" + i).style.backgroundColor = "#263545";
        getId("aniPrac" + i).style.border = "1px solid #000000";
    }
    throwAndFlip('#aniPrac0', 'menuPrac0', '+', '-3%', '22.5vh', 0);
    throwAndFlip('#aniPrac1', 'menuPrac1', '-', '24%', '22.5vh', 0);
    throwAndFlip('#aniPrac2', 'menuPrac2', '*', '51%', '22.5vh', 0);
    throwAndFlip('#aniPrac3', 'menuPrac3', '/', '78%', '22.5vh', 0);
}

function throwAndFlip(animationCard, menuCard, text, hrPosition, vrPosition, time) {
    setTimeout(function () {
        $(animationCard).animate({
            left: hrPosition,
            top: vrPosition
        }, 450);
    }, time);
    setTimeout(function () {
        getId(menuCard + 'Back').style.backgroundColor = "#263545";
        getId(menuCard + 'Back').style.border = "1px solid #000000";
        getId(menuCard + 'Front').style.backgroundColor = "#263545";
        getId(menuCard + 'Front').style.border = "1px solid #000000";
        getId(menuCard + 'FrontText').innerHTML = text;
        //getId(menuCard + 'FrontText').style.fontSize = "x-large";
    }, time + 470);
    setTimeout(function () {
        $(animationCard).css("visibility", "hidden");
        $('#' + menuCard).flip(true);
    }, time + 970);
}