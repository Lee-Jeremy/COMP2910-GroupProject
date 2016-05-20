/**
 * Makes the main menu cards fly down to locations and flips in sequence
 */
function placeMenuCards() {
    throwAndFlip('#aniMain0', 'menuMain0', 'Play', '4.5vw', '0vh', 0);
    throwAndFlip('#aniMain1', 'menuMain1', 'Practice', '34vw', '0vh', 400);
    throwAndFlip('#aniMain2', 'menuMain2', 'High Scores', '63vw', '0vh', 800);
}