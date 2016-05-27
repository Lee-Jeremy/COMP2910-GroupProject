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

    if (level % 20 === 1 && level > 20) {
        secondRevealWave++;
        thirdRevealWave++; 
    }
}