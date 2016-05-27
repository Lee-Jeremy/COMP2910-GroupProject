// Choose a random audio file to start each game or menu screen
function cueMusic() {
    var random = Math.floor((Math.random() * 4) + 1); // 1 to 4 
    switch (random) {
        case 1:
            cueMusic();
            break;

        case 2:
            playSecond();
            break;

        case 3:
            playThird();
            break;

        case 4:
            playFourth();
            break;

        default:
            playFifth();
    }
}

// Cue the in-game music
function playFirst() {
    gamePlayMusic[0].play();
    gamePlayMusic[0].addEventListener("ended", playSecond);
}

// Play the second sound file
function playSecond() {
    gamePlayMusic[1].play();
    gamePlayMusic[1].addEventListener("ended", playThird);
}

// Play the third sound file
function playThird() {
    gamePlayMusic[2].play();
    gamePlayMusic[2].addEventListener("ended", playFourth);
}

// Play the fourth sound file
function playFourth() {
    gamePlayMusic[3].play();
    gamePlayMusic[3].addEventListener("ended", playFifth);
}

// Play the fifth sound file
function playFifth() {
    gamePlayMusic[4].play();
    gamePlayMusic[4].addEventListener("ended", cueMusic);
}
