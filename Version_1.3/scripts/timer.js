/**
 * Timer - Set the reveal times
 */
function myTimer() {	
	seconds++;	
	if (seconds == firstRevealWave) {
		generateOperator(); // Generate a random operator
		fillMatrix(); // Fill the matrix with randomly generated numbers
		generateAnswer(); // Generate an answer from two randomly picked cells within the matrix
		revealOperator(); // Flip the operator card
		revealAnswer(); // Flip the answer card
	} else if (seconds == secondRevealWave) {
		// hideAnswer(); // Flip back the answer card
		revealMatrix(); // Flip all matrix cards
	} else if (seconds == thirdRevealWave) {
		hideMatrix(); // Flip back all matrix cards
		seconds = 0; // Reset the seconds to 0 
		clearInterval(timer); // Stop the timer		
		multTimer = setInterval(multiplierTimer, 1000);
	} 
}