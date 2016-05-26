/**
 * Reveal Matrix
 */
function revealMatrix() {
	$('.matrixCards').flip(true); // Flip all the matrix cards to their frontside
    flip.play();
}

/**
 * Hide Matrix
 */
function hideMatrix() {
	$('.matrixCards').flip(false); // Flip all the matrix cards to their backside	
    flip.play();
}