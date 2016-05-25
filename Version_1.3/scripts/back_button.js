/**
 * Back button on the play-mode overlay's
 */
$(document).ready(function () {
    $("#backImg").click(function () {
        clearInterval(multTimer); // Stop the multiplier timer
        fadePauseGame(); // Fade-in the paue overlay screen
    });
    $("#toStartScreen").click(function () {
        window.location.href = './startscreen.php'; // Load the startscreen page
    });
});