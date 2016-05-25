/**
 * Set the difficulty for the level -- changes every 5 levels
 * Lower range decreases by 2;
 * Upper range increases by 2;
 * Points increase by 25;
 */
function setDifficulty() {
    if (level % 5 === 1 && level > 5) {
        cardValueMin = cardValueMin - 2;
        cardValueMax = cardValueMax + 4;
        divisionValueMin = cardValueMin - 2;
        divisonValueMax = cardValueMax + 4;
        points = points + 25;
    }

    if(level % 20 === 1 && level > 20) {
        secondRevealWave++;
        thirdRevealWave++; 
    }

    //if (level < 6) { // Answer reveal: 2 seconds; Matrix reveal: 2 seconds
    //    cardValueMin = -5;   // (cardValueMax + cardValueMin - 1) is the card value range 
    //    cardValueMax = 11;  //  beginning from cardValueMin; in this case, range is 3 to 12
    //    divisionCardValueMin = -5;
    //    divisionCardValueMax = 11; // 34;
    //    firstRevealWave = 2;
    //    secondRevealWave = 4;
    //    thirdRevealWave = 6;
    //} else if (level == 6) { // Answer reveal: 1 seconds; Matrix reveal: 1 seconds
    //    cardValueMin = -5;
    //    cardValueMax = 11;
    //    divisionCardValueMin = -5;
    //    divisionCardValueMax = 11; // 34;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 50;
    //} else if (level == 11) { // Answer reveal: 2 seconds; Matrix reveal: 2 seconds; Range increases
    //    cardValueMin = -10;
    //    cardValueMax = 21;
    //    divisionCardValueMin = -10;
    //    divisionCardValueMax = 21; // 34;
    //    firstRevealWave = 2;
    //    secondRevealWave = 4;
    //    thirdRevealWave = 6;
    //    points = 75;
    //} else if (level == 16) { // Answer reveal: 1 seconds; Matrix reveal: 1 seconds
    //    cardValueMin = -10;
    //    cardValueMax = 21;
    //    divisionCardValueMin = -10;
    //    divisionCardValueMax = 21; // 34;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 100;
    //} else if (level == 21) { // Answer reveal: 2 seconds; Matrix reveal: 2 seconds; Range increases
    //    cardValueMin = -15;
    //    cardValueMax = 31;
    //    divisionCardValueMin = -15;
    //    divisionCardValueMax = 31; // 66;
    //    firstRevealWave = 2;
    //    secondRevealWave = 4;
    //    thirdRevealWave = 6;
    //    points = 125;
    //} else if (level == 26) { // Answer reveal: 1 seconds; Matrix reveal: 1 seconds
    //    cardValueMin = -15;
    //    cardValueMax = 31;
    //    divisionCardValueMin = -15;
    //    divisionCardValueMax = 31; // 66;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 150;
    //} else if (level == 31) { // Answer reveal: 2 seconds; Matrix reveal: 2 seconds; Range increases
    //    cardValueMin = -20;
    //    cardValueMax = 41;
    //    divisionCardValueMin = -20;
    //    divisionCardValueMax = 41; // 66;
    //    firstRevealWave = 2;
    //    secondRevealWave = 4;
    //    thirdRevealWave = 6;
    //    points = 175;
    //} else if (level == 36) { // Answer reveal: 1 seconds; Matrix reveal: 1 seconds
    //    cardValueMin = -20;
    //    cardValueMax = 41;
    //    divisionCardValueMin = -20;
    //    divisionCardValueMax = 41; // 131;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 200;
    //} else if (level == 41) { // Answer reveal: 2 seconds; Matrix reveal: 2 seconds; Range increases
    //    cardValueMin = -25;
    //    cardValueMax = 51;
    //    divisionCardValueMin = -25;
    //    divisionCardValueMax = 26; // 131;
    //    firstRevealWave = 2;
    //    secondRevealWave = 4;
    //    thirdRevealWave = 6;
    //    points = 225;
    //} else if (level == 46) { // Answer reveal: 1 seconds; Matrix reveal: 1 seconds
    //    cardValueMin = -25;
    //    cardValueMax = 51;
    //    divisionCardValueMin = -25;
    //    divisionCardValueMax = 51; // 131;
    //    firstRevealWave = 2;
    //    secondRevealWave = 3;
    //    thirdRevealWave = 4;
    //    points = 250;
    //}
}