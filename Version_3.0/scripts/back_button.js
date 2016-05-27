/**
 * Back button on the play-mode overlay's
 */
$(document).ready(function () {
    $("#backImg").click(function () {
        if (document.title === 'Play') {
            clearInterval(multTimer); // Stop the multiplier timer
        }
        fadePauseGame(); // Fade-in the paue overlay screen
        pauseMusic();
    });
    $("#toStartScreen").click(function () {
        window.location.href = './startscreen.php'; // Load the startscreen page
    });
});