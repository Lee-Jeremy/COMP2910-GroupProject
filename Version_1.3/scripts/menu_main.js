/**
* Makes the main menu cards fly down to locations and flips in sequence
*/
function placeMenuCards() {
    setTimeout(function () {
        throwAndFlip('menuMain0', 'Play', '2.25%', '0%', 400, 475);
    }, 100);
    setTimeout(function () {
        throwAndFlip('menuMain1', 'Practice', '26.75%', '0%', 400, 475);
    }, 300);
    setTimeout(function () {
        throwAndFlip('menuMain2', 'High Scores', '51.25%', '0%', 400, 475);
    }, 500);
    setTimeout(function () {
        throwAndFlip('menuMain3', 'Login', '75.75%', '0%', 400, 475);
    }, 700);
}