/**
 * Hide all animation divisions
 */
function hideAnimations() {
	for (var i = 1; i <= 11; i++) {
		$("#animationCard" + i).css("visibility", "hidden");	
	}	//disabled for tutorial mode
	if (getId("tutorialBox").checked == false){
	setDifficulty();
	timer = setInterval(myTimer, 1000); // Begin the in-game card reveals. Execute Every 1000 milliseconds 
} 
}