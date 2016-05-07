// Set-up Matrix and Equation Cards for Flipping
$(document).ready(function(){ 
	$(".matrixCards").flip({ // Matrix Cards
		axis: 'y',
		trigger: 'manual',
		front: ".front",
		back: ".back"	
	});	
	$(".equationCards").flip({ // Equation Cards
		axis: 'y',
		trigger: 'manual',
		front: ".front",
		back: ".back"	
	});		
});

// Global Variables
var count = 0; // Total number of reveals across all matrix cells
var r1c1Reveals = 0; // Number of reveals in the 1st matrix cell
var r1c2Reveals = 0; //   						 2nd 
var r1c3Reveals = 0; //   						 3rd
var r2c1Reveals = 0; //   						 4th
var r2c2Reveals = 0; //   						 5th
var r2c3Reveals = 0; //   						 6th
var r3c1Reveals = 0; //   						 7th
var r3c2Reveals = 0; //   						 8th
var r3c3Reveals = 0; //   						 9th
var matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // The Matrix Values
var userSelection = [1, 2]; // The Two User Selected Values
var answer; // The Answer to the Equation
var answerCard1; // The first matrix value used in generating the answer
var answerCard2; // The other matrix value used in generating the answer
var operator = ""; // Mathematical operator (+, -, *, or /)
var timer; // Reveal timer
var seconds = 1; // Seconds counter within the timer
	
// Abbreviated getElementByID
function getId(id) {
	var element = document.getElementById(id); 
	if (element == null) { 
		alert ('programmer error: ' + id + ' does not exist.');
	}
	return element;			
	}

// Timer - Set the reveal times
timer = setInterval(myTimer, 1000); // Execute Every 1 Second(s) 
function myTimer() {	
	seconds++;	
	if (seconds == 2) {
		generateOperator(); // Generate a random operator
		fillMatrix(); // Fill the matrix with randomly generated numbers
		generateAnswer(); // Generate an answer from two randomly picked cells within the matrix
		revealOperator(); // Flip the operator card
		revealAnswer(); // Flip the answer card
	} else if (seconds == 3) {
		hideAnswer(); // Flip back the answer card
		revealMatrix(); // Flip all matrix cards
	} else if (seconds == 5) {
		//revealAnswer();
		//hideOperator();
		hideMatrix(); // Flip back all matrix cards
		clearInterval(timer); // Stop the timer		
		seconds = 0; // Reset the seconds to 0 
	} 
}

// Randomly select an operator
function generateOperator() {
	var num = Math.floor((Math.random() * 4) + 1); // 1 to 4
	switch(num) {
		case 1:
			operator = "addition";
			break;
		case 2:
			operator = "subtraction";
			break;
		case 3:
			operator = "multiplication";
			break;
		case 4:
			operator = "division";
			break;
	}
}

// Fill The Matrix Array
function fillMatrix() {
	var i;
	var num;
	if (operator === "division") { // Allow greater card values when the operator is division
		for (i = 0; i < matrix.length; i++) {
			num = Math.floor(Math.random() * 145); // 0 to 144
			matrix[i] = num; 
		}
	} else {
		for (i = 0; i < matrix.length; i++) { // Card values 0 to 12 in all other operators
			num = Math.floor(Math.random() * 13); // 0 to 12
			matrix[i] = num;
		}
	}
}

// Generate an answer
function generateAnswer() {
	var num1 = Math.floor(Math.random() * 9); // Select a random card from the matrix (1st card = 0, 2nd = 1,...9th = 8)
	var num2 = Math.floor(Math.random() * 9); // 0 to 8
	while (num1 == num2) { // Don't allow an answer to be generated from the same card
		num1 = Math.floor(Math.random() * 9); // Card number = matrix array index number - 1 
		num2 = Math.floor(Math.random() * 9); // e.g. card1 = matrix[0], card2 = matrix[1],...card9 = matrix[8]
	}
	if (operator === "addition") {	
		answer = (matrix[num1] + matrix[num2]);  
	} else if(operator === "subtraction") {
		answer = (matrix[num1] - matrix[num2]); 
	} else if(operator === "multiplication") {
		answer = (matrix[num1] * matrix[num2]); 
	} else if(operator === "division") {
		checkCombinations(); // Ensure the matrix holds at least one combination of cards with a 0 remainder answer
		while (matrix[num1] % matrix[num2] != 0 || num1 == num2) {
			num1 = Math.floor(Math.random() * 9); 
			num2 = Math.floor(Math.random() * 9); 	
		}		
		answer = (matrix[num1] / matrix[num2]); 
	} else {
		alert("Unable to indetify an operator during generateAnswer");
	}
	answerCard1 = num1; 
	answerCard2 = num2;
}

// Check matrix for all combinations of a 0 remainder division solution
function checkCombinations() {	
	var numCombinations = 0;
	var i;
	var k;
	for (i = 0; i < matrix.length - 1; i++) { // 1st card / 2nd card, 1st / 3rd , 1st / 4th ,... 8th / 9th
		for (k = 1; k < matrix.length; k++) {
			if (matrix[i] % matrix [k] == 0) {
				numCombinations++;
			}
		}
	}
	for (i = matrix.length - 1; i >= 1; i--) { // 9th card / 8th card, 9th / 7th, 9th / 6th,... 2nd / 1st
		for (k = matrix.length - 2; k >= 0; k--) {
			if (matrix[i] % matrix[k] == 0) {
				numCombinations++;
			}
		}
	}
	while (numCombinations == 0) { 
		fillMatrix(); // If no combinations exist, re-fill the matrix with new values
		checkCombinations(); // Check again for combinations
	}
}

// Reveal Operator
function revealOperator() {
	var cardValue = getId('operatorReveal'); // Backside of the operator card
	if (operator === "addition") {
		cardValue.innerHTML = "+";
	} else if(operator === "subtraction") {
		cardValue.innerHTML = "-";
	} else if(operator === "multiplication") {
		cardValue.innerHTML = "*";
	} else if(operator === "division") {
		cardValue.innerHTML = "/";
	} else {
		alert("Unable to indentify an operator during revealOperator");
	}	
	$("#operator").flip(true); // Flip the operator card to its backside
}

// Hide Operator
function hideOperator() {
	$("#operator").flip(false); // Flip the operator card to its frontside	
}

// Reveal Answer
function revealAnswer() {
	var cell = getId('answerReveal'); // Backside of the answer card	
	cell.innerHTML = answer; // Assign the backside the answer value
	$("#answer").flip(true); // Flip the answer card to its backside
}

// Hide Answer
function hideAnswer() {
	$("#answer").flip(false); // Flip the answer card to its frontside
}

// Reveal Matrix
// Assign 1st matrix card's backside = 1st matrix array index. 2nd card = matrix[1],...9th = matrix[8]
function revealMatrix() {
	var cell;
	var i;
	var j;
	var k = 0;
	for (i = 1; i <= 3; i++) { 
		for (j = 1; j <= 3; j++) { 
			cell = getId('r' + i + 'c' + j + 'Reveal').innerHTML = matrix[k]; 
			k++;															  
		}
	}
	$('.matrixCards').flip(true); // Flip all the matrix cards to their back
}

// Hide Matrix
function hideMatrix() {
	$('.matrixCards').flip(false); // Flip all the matrix cards to their front	
}

// Reveal R1C1 Card
function revealR1C1() {	
	if (seconds == 0 && r1c1Reveals != 1) { // Prevent the user from flipping a card before all reveals finish
		count++; 						    // and from flipping the same card twice 
	}	
	if (count == 1 && r1c1Reveals != 1) {
		userSelection[0] = matrix[0]; // Assign the 1st matrix array value to the 1st index in the user selection array
		getId('firstChoiceReveal').innerHTML = matrix[0]; // Assign the 1st equation card the value of the 1st matrix card
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; // Change color of 1st equation card's backside to orange
		getId('r1c1Reveal').style.backgroundColor = "#ff6600"; // Change color of 1st matrix card's backside to orange
		$('#r1c1').flip(true); // Flip the 1st matrix card to its backside 
		$('#first').flip(true); // Flip the 1st equation card to its backside
		r1c1Reveals++; // Increment the fucntion execution counter
	}		
	if (count == 2 && r1c1Reveals != 1) { 
		userSelection[1] = matrix[0];  
		getId('secondChoiceReveal').innerHTML = matrix[0]; 
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; // Purple 
		getId('r1c1Reveal').style.backgroundColor = "#661aff";
		$('#r1c1').flip(true); 
		$('#second').flip(true); 
		r1c1Reveals++; 
		checkEquation(); // Check if the equation is true
	}
}

// Reveal R1C2 Card
function revealR1C2() {
	if (seconds == 0 && r1c2Reveals != 1) { 
		count++; 						   
	}	
	if (count == 1 && r1c2Reveals != 1) {
		userSelection[0] = matrix[1]; 
		getId('firstChoiceReveal').innerHTML = matrix[1]; 
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; // Orange 
		getId('r1c2Reveal').style.backgroundColor = "#ff6600"; 
		$('#r1c2').flip(true);
		$('#first').flip(true);
		r1c2Reveals++; 
	}		
	if (count == 2 && r1c2Reveals != 1) { 
		userSelection[1] = matrix[1]; 
		getId('secondChoiceReveal').innerHTML = matrix[1];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; // Purple
		getId('r1c2Reveal').style.backgroundColor = "#661aff";
		$('#r1c2').flip(true);
		$('#second').flip(true);
		r1c2Reveals++; 
		checkEquation(); 
	}
}

// Reveal R1C3 Card
function revealR1C3() {
	if (seconds == 0 && r1c3Reveals != 1) { 
		count++; 						   
	}	
	if (count == 1 && r1c3Reveals != 1) {
		userSelection[0] = matrix[2]; 
		getId('firstChoiceReveal').innerHTML = matrix[2];
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; 
		getId('r1c3Reveal').style.backgroundColor = "#ff6600";
		$('#r1c3').flip(true);
		$('#first').flip(true);
		r1c3Reveals++; 
	}		
	if (count == 2 && r1c3Reveals != 1) { 
		userSelection[1] = matrix[2]; 
		getId('secondChoiceReveal').innerHTML = matrix[2];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; 
		getId('r1c3Reveal').style.backgroundColor = "#661aff";
		$('#r1c3').flip(true);
		$('#second').flip(true);
		r1c3Reveals++; 
		checkEquation(); 
	}
}

// Reveal R2C1 Card
function revealR2C1() {
	if (seconds == 0 && r2c1Reveals != 1) { 
		count++; 						   
	}	
	if (count == 1 && r2c1Reveals != 1) {
		userSelection[0] = matrix[3];
		getId('firstChoiceReveal').innerHTML = matrix[3];
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; 
		getId('r2c1Reveal').style.backgroundColor = "#ff6600";		
		$('#r2c1').flip(true);
		$('#first').flip(true);
		r2c1Reveals++;
	}		
	if (count == 2 && r2c1Reveals != 1) { 
		userSelection[1] = matrix[3]; 
		getId('secondChoiceReveal').innerHTML = matrix[3];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; 
		getId('r2c1Reveal').style.backgroundColor = "#661aff";
		$('#r2c1').flip(true);
		$('#second').flip(true);
		r2c1Reveals++; 
		checkEquation(); 
	}
}

// Reveal R2C2 Card
function revealR2C2() {
	if (seconds == 0 && r2c2Reveals != 1) { 
		count++; 						   
	}	
	if (count == 1 && r2c2Reveals != 1) {
		userSelection[0] = matrix[4]; 
		getId('firstChoiceReveal').innerHTML = matrix[4];
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; 
		getId('r2c2Reveal').style.backgroundColor = "#ff6600";
		$('#r2c2').flip(true);
		$('#first').flip(true);
		r2c2Reveals++; 
	}		
	if (count == 2 && r2c2Reveals != 1) { 
		userSelection[1] = matrix[4]; 
		getId('secondChoiceReveal').innerHTML = matrix[4];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; 
		getId('r2c2Reveal').style.backgroundColor = "#661aff";
		$('#r2c2').flip(true);
		$('#second').flip(true);
		r2c2Reveals++; 
		checkEquation(); 
	}
}

// Reveal R2C3 Card
function revealR2C3() {
	if (seconds == 0 && r2c3Reveals != 1) { 
		count++; 						   
	}	
	if (count == 1 && r2c3Reveals != 1) {
		userSelection[0] = matrix[5];
		getId('firstChoiceReveal').innerHTML = matrix[5];
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; 
		getId('r2c3Reveal').style.backgroundColor = "#ff6600";
		$('#r2c3').flip(true);
		$('#first').flip(true);
		r2c3Reveals++; 
	}		
	if (count == 2 && r2c3Reveals != 1) { 
		userSelection[1] = matrix[5]; 
		getId('secondChoiceReveal').innerHTML = matrix[5];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; 
		getId('r2c3Reveal').style.backgroundColor = "#661aff";
		$('#r2c3').flip(true);
		$('#second').flip(true);
		r2c3Reveals++; 
		checkEquation(); 
	}
}

// Reveal R3C1 Card
function revealR3C1() {
	if (seconds == 0 && r3c1Reveals != 1) { 
		count++; 						  
	}	
	if (count == 1 && r3c1Reveals != 1) {
		userSelection[0] = matrix[6]; 
		getId('firstChoiceReveal').innerHTML = matrix[6];
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; 
		getId('r3c1Reveal').style.backgroundColor = "#ff6600";
		$('#r3c1').flip(true);
		$('#first').flip(true);
		r3c1Reveals++; 
	}		
	if (count == 2 && r3c1Reveals != 1) { 
		userSelection[1] = matrix[6]; 
		getId('secondChoiceReveal').innerHTML = matrix[6];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; 
		getId('r3c1Reveal').style.backgroundColor = "#661aff";
		$('#r3c1').flip(true);
		$('#second').flip(true);
		r3c1Reveals++; 
		checkEquation();
	}
}

// Reveal R3C2 Card
function revealR3C2() {
	if (seconds == 0 && r3c2Reveals != 1) { 
		count++; 						   
	}	
	if (count == 1 && r3c2Reveals != 1) {
		userSelection[0] = matrix[7]; 
		getId('firstChoiceReveal').innerHTML = matrix[7];
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; 
		getId('r3c2Reveal').style.backgroundColor = "#ff6600";
		$('#r3c2').flip(true);
		$('#first').flip(true);
		r3c2Reveals++; 
	}		
	if (count == 2 && r3c2Reveals != 1) { 
		userSelection[1] = matrix[7]; 
		getId('secondChoiceReveal').innerHTML = matrix[7];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; 
		getId('r3c2Reveal').style.backgroundColor = "#661aff";
		$('#r3c2').flip(true);
		$('#second').flip(true);
		r3c2Reveals++; 
		checkEquation(); 
	}
}

// Reveal R3C3 Card
function revealR3C3() {
	if (seconds == 0 && r3c3Reveals != 1) { 
		count++; 						   
	}	
	if (count == 1 && r3c3Reveals != 1) {
		userSelection[0] = matrix[8]; 
		getId('firstChoiceReveal').innerHTML = matrix[8];
		getId('firstChoiceReveal').style.backgroundColor = "#ff6600"; 
		getId('r3c3Reveal').style.backgroundColor = "#ff6600";
		$('#r3c3').flip(true);
		$('#first').flip(true);
		r3c3Reveals++; 
	}		
	if (count == 2 && r3c3Reveals != 1) { 
		userSelection[1] = matrix[8]; 
		getId('secondChoiceReveal').innerHTML = matrix[8];
		getId('secondChoiceReveal').style.backgroundColor = "#661aff"; 
		getId('r3c3Reveal').style.backgroundColor = "#661aff";
		$('#r3c3').flip(true);
		$('#second').flip(true);
		r3c3Reveals++; 
		checkEquation(); 
	}
}

// Reveal the answer cards
function revealAnswerCards() {
	flipAnswerCard(answerCard1);
	flipAnswerCard(answerCard2);	
}

// Flip the answer card in the matrix
function flipAnswerCard(cardNumber) {	
	switch (cardNumber) {
		case 0:
			getId('r1c1Reveal').style.backgroundColor = "#29a329"; // Change the first answer card's backside to green
			$('#r1c1').flip(true); // Flip the first anwer card to its backside, if not yet flipped
			break;
		case 1:
			getId('r1c2Reveal').style.backgroundColor = "#29a329"; // Green
			$('#r1c2').flip(true);
			break;
		case 2:
			getId('r1c3Reveal').style.backgroundColor = "#29a329";
			$('#r1c3').flip(true);
			break;
		case 3:
			getId('r2c1Reveal').style.backgroundColor = "#29a329";
			$('#r2c1').flip(true);
			break;
		case 4:
			getId('r2c2Reveal').style.backgroundColor = "#29a329";
			$('#r2c2').flip(true);
			break;
		case 5:
			getId('r2c3Reveal').style.backgroundColor = "#29a329";
			$('#r2c3').flip(true);
			break;
		case 6:
			getId('r3c1Reveal').style.backgroundColor = "#29a329";
			$('#r3c1').flip(true);
			break;
		case 7:
			getId('r3c2Reveal').style.backgroundColor = "#29a329";
			$('#r3c2').flip(true);
			break;
		case 8:
			getId('r3c3Reveal').style.backgroundColor = "#29a329";
			$('#r3c3').flip(true);
			break;
	}
}

// Check Equation
function checkEquation(){
	var first = userSelection[0]; // The user's 1st selected card value from the matrix
	var second = userSelection[1]; // The user's 2nd selected card value from the matrix	
	if (operator === "addition") {
		if ((first + second) == answer) {
			getId('answerReveal').style.backgroundColor = "#29a329"; // Change the answer card's backside to green
			revealAnswer();
		} else {
			getId('answerReveal').style.backgroundColor = "#000000"; // Change the answer card's backside to black
			revealAnswer();
			setTimeout(revealAnswerCards, 500) // Delay revealing the answer cards in the matrix by 0.5 seconds
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			getId('answerReveal').style.backgroundColor = "#29a329"; // Green
			revealAnswer();
		} else { 
			getId('answerReveal').style.backgroundColor = "#000000"; // Black 
			revealAnswer();
			setTimeout(revealAnswerCards, 500)
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			getId('answerReveal').style.backgroundColor = "#29a329";
			revealAnswer();
		} else {
			getId('answerReveal').style.backgroundColor = "#000000";
			revealAnswer();
			setTimeout(revealAnswerCards, 500)
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			getId('answerReveal').style.backgroundColor = "#29a329";
			revealAnswer();
		} else {
			getId('answerReveal').style.backgroundColor = "#000000"; 
			revealAnswer();
			setTimeout(revealAnswerCards, 500) 
		}
	} else {
		alert('Unable to identify operator during checkEquation');	
	}
}



























