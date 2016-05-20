/**
 * Flip the answer card to its frontside
 */
function revealAnswer() {
	var cell = getId('eqCard4FrontText'); // Frontside of the answer card	
	cell.innerHTML = answer; // Assign the frontside the answer value
	$("#eqCard4").flip(true); // Flip the answer card to its frontside
    flip.play();
}

/**
 * Flip the answer card to its backside 
 */
function hideAnswer() {
	$("#eqCard4").flip(false); // Flip the answer card to its backside
    flip.play();
}