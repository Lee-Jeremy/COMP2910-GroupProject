 /**
 * Reveal Operator
 */
function revealOperator() {
	switch (operator) {
		case "addition":
			getId('eqCard2FrontText').innerHTML = "+"; // Frontside of operator card
			break;
		case "subtraction":
			getId('eqCard2FrontText').innerHTML = "-";
			break;
		case "multiplication":
			getId('eqCard2FrontText').innerHTML = "x";
			break;
		case "division":
			getId('eqCard2FrontText').innerHTML = "/";
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