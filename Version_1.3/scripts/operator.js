 /**
 * Reveal Operator
 */
function revealOperator() {
	switch (operator) {
		case "addition":
			getId('eqCard2FrontImg').src = "images/addition.png"; // Frontside of operator card
			break;
		case "subtraction":
			getId('eqCard2FrontImg').src = "images/subtraction.png";
			break;
		case "multiplication":
			getId('eqCard2FrontImg').src = "images/multiplication.png";
			break;
		case "division":
			getId('eqCard2FrontImg').src = "images/division.png";
			break;
		default:
			alert("Unable to indentify an operator during revealOperator");
	}	
	$("#eqCard2").flip(true); // Flip the operator card to its frontside	
    flip.play();
}
 
/**
 * Hide Operator
 */
function hideOperator() {
	$("#eqCard2").flip(false); // Flip the operator card to its backside
	flip.play();	
}