/**
 * Set the difficulty for the level
 */
function setDifficulty() {
    if (level >= 1) { // Answer reveal: 2 seconds; Matrix reveal: 3 seconds
        cardValueMin = 2;   // (cardValueMax + cardValueMin - 1) is the card value range 
        cardValueMax = 11;  //  beginning from cardValueMin; in this case, range is 3 to 12
        divisionCardValueMin = 3;
        divisionCardValueMax = 10; // 34;
        firstRevealWave = 2;
        secondRevealWave = 3;
        thirdRevealWave = 4;
    //} else if (level == 6) { // Answer reveal: 2 seconds; Matrix reveal: 2 seconds
    //    cardValueMin = 3;
    //    cardValueMax = 10;
    //    divisionCardValueMin = 3;
    //    divisionCardValueMax = 10; // 34;
    //    firstRevealWave = 2;
    //    secondRevealWave = 4;
    //    thirdRevealWave = 6;
    //    points = 50;
    //} else if (level == 11) { // Increases range: includes negative numbers
    //    cardValueMin = -3;
    //    cardValueMax = 16;
    //    divisionCardValueMin = -3;
    //    divisionCardValueMax = 16; // 34;
    //    firstRevealWave = 2;
    //    secondRevealWave = 4;
    //    thirdRevealWave = 6;
    //    points = 75;
    //} else if (level == 16) { // Answer reveal: 1 seconds; Matrix reveal: 2 seconds
    //    cardValueMin = -3;
    //    cardValueMax = 16;
    //    divisionCardValueMin = -3;
    //    divisionCardValueMax = 16; // 34;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 5;
    //    points = 100;
    //    multiplier = 5;
    //} else if (level == 21) { // Increases range
    //    cardValueMin = -5;
    //    cardValueMax = 18;
    //    divisionCardValueMin = -5;
    //    divisionCardValueMax = 18; // 66;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 5;
    //    points = 250;
    //} else if (level == 26) { // Answer reveal: 1 seconds; Matrix reveal: 1 seconds
    //    cardValueMin = -5;
    //    cardValueMax = 18;
    //    divisionCardValueMin = -5;
    //    divisionCardValueMax = 18; // 66;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 500;
    //} else if (level == 31) { // Increases multiplier to 5
    //    cardValueMin = -5;
    //    cardValueMax = 18;
    //    divisionCardValueMin = -5;
    //    divisionCardValueMax = 18; // 66;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 750;
    //    multiplier = 5;
    //} else if (level == 36) { // Increaes range
    //    cardValueMin = -10;
    //    cardValueMax = 23;
    //    divisionCardValueMin = -10;
    //    divisionCardValueMax = 23; // 131;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 1000;
    //} else if (level == 41) { // Increases multiplier to 10
    //    cardValueMin = -10;
    //    cardValueMax = 23;
    //    divisionCardValueMin = -10;
    //    divisionCardValueMax = 23; // 131;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 2000;
    //    multiplier = 10;
    }
}