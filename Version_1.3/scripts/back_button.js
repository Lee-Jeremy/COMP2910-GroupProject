/**
 * Back button on the play-mode overlay's
 */
$(document).ready(function () {
    $("#backImg").click(function () {
        clearInterval(multTimer);
        fadePauseGame();
    });
    $("#toStartScreen").click(function () {
        window.location.href = './startscreen.php';
    });
});