/* Place the practice cards */
var pracStacked = 1;

function placePracCards() {
    if (pracStacked == 1) {
        for (i = 0; i < 3; i++) {
            $("#menuMain" + i).flip(false);
        }
        getId('menuMain1BackText').innerHTML = "Main Menu";
        throwAndFlip('#aniPrac0', 'menuPrac0', '+', '-3%', '22.5vh', 0);
        throwAndFlip('#aniPrac1', 'menuPrac1', '-', '24%', '22.5vh', 0);
        throwAndFlip('#aniPrac2', 'menuPrac2', '*', '51%', '22.5vh', 0);
        throwAndFlip('#aniPrac3', 'menuPrac3', '/', '78%', '22.5vh', 0);
    }
}

function restackPracCards() {
    if (pracStacked == 0) {
        for (i = 0; i < 3; i++) {
            $("#menuMain" + i).flip(true);
        }
        flipAndStack('#aniPrac0', 'menuPrac0', '37.5%', '0vh', 0);
        flipAndStack('#aniPrac1', 'menuPrac1', '37.5%', '0vh', 0);
        flipAndStack('#aniPrac2', 'menuPrac2', '37.5%', '0vh', 0);
        flipAndStack('#aniPrac3', 'menuPrac3', '37.5%', '0vh', 0);
    }
}