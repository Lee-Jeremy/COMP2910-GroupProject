/**
 * Back button on the screen overlay's
 */
$(document).ready(function(){ 
	$("#back").click(function() {
		clearInterval(multTimer);
        fadePauseGame();
	});
});