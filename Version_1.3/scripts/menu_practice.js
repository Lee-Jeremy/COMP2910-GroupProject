/* Place the practice cards */
function placePracCards() {
    var pracStacked = 1;
    switch (pracStacked) {
    case 1:
        $("#menuMain0").flip(false);
        $("#menuMain2").flip(false);
        for (i = 0; i < 4; i++) {
            getId("aniPrac" + i).style.backgroundColor = "#800000";
            getId("aniPrac" + i).style.border = "1px solid #000000";
        }
        throwAndFlip('#aniPrac0', 'menuPrac0', '+', "#800000", '-3%', '22.5vh', 0);
        throwAndFlip('#aniPrac1', 'menuPrac1', '-', "#800000", '24%', '22.5vh', 0);
        throwAndFlip('#aniPrac2', 'menuPrac2', '*', "#800000", '51%', '22.5vh', 0);
        throwAndFlip('#aniPrac3', 'menuPrac3', '/', "#800000", '78%', '22.5vh', 0);
        pracStacked = 0;
        break;
    case 0:
        $("#menuMain0").flip(true);
        $("#menuMain2").flip(true);
        //flipAndStack('#aniPrac0', 'menuPrac0', "#D7DADB", '37.5%', '22.5vh', 0);
        //flipAndStack('#aniPrac1', 'menuPrac1', "#D7DADB", '37.5%', '22.5vh', 0);
        //flipAndStack('#aniPrac2', 'menuPrac2',"#D7DADB", '37.5%', '22.5vh', 0);
        //flipAndStack('#aniPrac3', 'menuPrac3', "#D7DADB", '37.5%', '22.5vh', 0);
        //pracStacked = 1;
        break;
    }
}