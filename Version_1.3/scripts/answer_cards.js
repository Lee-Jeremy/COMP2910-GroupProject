/**
 * Reveal the two answer cards in the matrix
 */
function revealAnswerCards() {
	flipAnswerCard(answerCard1);
    flip.play(); // Flip sound
	flipAnswerCard(answerCard2);
    flip.play();
}

/**
 * Flip the answer card in the matrix
 */
function flipAnswerCard(cardNumber) {	
	switch (cardNumber) {
		case 0:
			getId('r1c1Front').style.backgroundColor = "#29a329"; // Change the answer card's frontside to green
			$('#r1c1').flip(true); // Flip the answer card (in the matrix) to its frontside, if not yet flipped
			break;
		case 1:
			getId('r1c2Front').style.backgroundColor = "#29a329"; // Green
			$('#r1c2').flip(true); 
			break;
		case 2:
			getId('r1c3Front').style.backgroundColor = "#29a329"; 
			$('#r1c3').flip(true); 
			break;
		case 3:
			getId('r2c1Front').style.backgroundColor = "#29a329"; 
			$('#r2c1').flip(true); 
			break;
		case 4:
			getId('r2c2Front').style.backgroundColor = "#29a329"; 
			$('#r2c2').flip(true); 
			break;
		case 5:
			getId('r2c3Front').style.backgroundColor = "#29a329"; 
			$('#r2c3').flip(true); 
			break;
		case 6:
			getId('r3c1Front').style.backgroundColor = "#29a329"; 
			$('#r3c1').flip(true); 
			break;
		case 7:
			getId('r3c2Front').style.backgroundColor = "#29a329"; 
			$('#r3c2').flip(true); 
			break;
		case 8:
			getId('r3c3Front').style.backgroundColor = "#29a329"; 
			$('#r3c3').flip(true); 
			break;
	}
}