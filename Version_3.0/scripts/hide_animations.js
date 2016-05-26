/**
 * Hide all animation divisions
 */
function hideAnimations() {
	for (var i = 1; i <= 11; i++) {
		$("#animationCard" + i).css("visibility", "hidden");	
	}	
	setDifficulty();
	timer = setInterval(myTimer, 1000); // Begin the in-game card reveals. Execute Every 1000 milliseconds 
}