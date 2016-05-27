
var firstIsPlaying = false;
var secondIsPlaying = false;
var thirdIsPlaying = false;
var fourthIsPlaying = false;
var fifthIsPlaying = false;

// Choose a random audio file to start each game or menu screen
function cueMusic() {
    fifthIsPlaying = false;
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
    firstIsPlaying = true;
    gamePlayMusic[0].addEventListener("ended", playSecond);
}

// Play the second sound file
function playSecond() {
    firstIsPlaying = false;
    gamePlayMusic[1].play();
    secondIsPlaying = true;
    gamePlayMusic[1].addEventListener("ended", playThird);
}

// Play the third sound file
function playThird() {
    secondIsPlaying = false;
    gamePlayMusic[2].play();
    thirdIsPlaying = true;
    gamePlayMusic[2].addEventListener("ended", playFourth);
}

// Play the fourth sound file
function playFourth() {
    thirdIsPlaying = false;
    gamePlayMusic[3].play();
    fourthIsPlaying = true;
    gamePlayMusic[3].addEventListener("ended", playFifth);
}

// Play the fifth sound file
function playFifth() {
    fourthIsPlaying = false;
    gamePlayMusic[4].play();
    fifthIsPlaying = true;
    gamePlayMusic[4].addEventListener("ended", cueMusic);
}

var firstIsPaused = false;
var secondIsPaused = false;
var thirdIsPaused = false;
var fourthIsPaused = false;
var fifthIsPaused = false;

function pauseMusic() {
    if (firstIsPlaying) {
        gamePlayMusic[0].pause();
        firstIsPlaying = false;
        firstIsPaused = true;
    }
    if (secondIsPlaying) {
        gamePlayMusic[1].pause();
        secondIsPlaying = false;
        secondIsPaused = true;
    }
    if (thirdIsPlaying) {
        gamePlayMusic[2].pause();
        thirdIsPlaying = false;
        thirdIsPaused = true;
    }
    if (fourthIsPlaying) {
        gamePlayMusic[3].pause();
        fourthIsPlaying = false;
        fourthIsPaused = true;
    }
    if (fifthIsPlaying) {
        gamePlayMusic[4].pause();
        fifthIsPlaying = false;
        fifthIsPaused = true;
    }
}

function resumeMusic() {
    if (firstIsPaused) {
        gamePlayMusic[0].play();
        firstIsPlaying = true;
        firstIsPaused = false;
    }
    if (secondIsPaused) {
        gamePlayMusic[1].play();
        secondIsPlaying = true;
        secondIsPaused = false;
    }
    if (thirdIsPaused) {
        gamePlayMusic[2].play();
        thirdIsPlaying = true;
        thirdIsPaused = false;
    }
    if (fourthIsPaused) {
        gamePlayMusic[3].play();
        fourthIsPlaying = true;
        fourthIsPaused = false;
    }
    if (fifthIsPaused) {
        gamePlayMusic[4].play();
        fifthIsPlaying = true;
        fifthIsPaused = false;
    }
}