/**
* Makes the main menu cards fly down to locations and flips in sequence
*/
function placeMenuCards() {
    getId('menuMain0FrontText').innerHTML = "Play";
    getId('menuMain1FrontText').innerHTML = "Practice";
    getId('menuMain2FrontText').innerHTML = "High Scores";
    getId('menuMain3FrontText').innerHTML = "Login";
    setTimeout(function () {
        throwAndFlip('menuMain0', '2.25%', '0%', 400, 475);
    }, 100);
    setTimeout(function () {
        throwAndFlip('menuMain1', '26.75%', '0%', 400, 475);
    }, 300);
    setTimeout(function () {
        throwAndFlip('menuMain2', '51.25%', '0%', 400, 475);
    }, 500);
    setTimeout(function () {
        throwAndFlip('menuMain3', '75.75%', '0%', 400, 475);
    }, 700);
}