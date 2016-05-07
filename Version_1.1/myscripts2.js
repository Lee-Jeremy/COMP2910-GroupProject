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
		revealOperator(); // Show the operator
		revealAnswer(); // Show the answer
	} else if (seconds == 3) {
		hideAnswer();
		revealMatrix();
	} else if (seconds == 5) {
		//revealAnswer();
		//hideOperator();
		hideMatrix();
		clearInterval(timer); // Stop the timer		
		seconds = 0; // Reset the seconds to 0 
	} 
}

// Choose an operator
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
	if (operator === "division") {
		for (i = 0; i < matrix.length; i++) {
			num = Math.floor(Math.random() * 145); // 0 to 144
			matrix[i] = num;
		}
	} else {
		for (i = 0; i < matrix.length; i++) {
			num = Math.floor(Math.random() * 13); // 0 to 12
			matrix[i] = num;
		}
	}
}

// Generate an answer
function generateAnswer() {
	var num1 = Math.floor(Math.random() * 9); // Randomly select a cell from the matrix
	var num2 = Math.floor(Math.random() * 9); // index 0 to index 8
	while (num1 == num2) {
		num1 = Math.floor(Math.random() * 9); 
		num2 = Math.floor(Math.random() * 9); 
	}
	if (operator === "addition") {
		answer = (matrix[num1] + matrix[num2]); 
	} else if(operator === "subtraction") {
		answer = (matrix[num1] - matrix[num2]); 
	} else if(operator === "multiplication") {
		answer = (matrix[num1] * matrix[num2]); 
	} else if(operator === "division") {
		checkCombinations();
		while (matrix[num1] % matrix[num2] != 0 || num1 == num2) {
			num1 = Math.floor(Math.random() * 9); 
			num2 = Math.floor(Math.random() * 9); 	
		}		
		answer = (matrix[num1] / matrix[num2]); 
	} else {
		alert("Unable to indetify an operator during generateAnswer");
	}
}

// Check matrix for all combinations of a 0 remainder division solution
function checkCombinations() {	
	var numCombinations = 0;
	var i;
	var k;
	for (i = 0; i < matrix.length - 1; i++) { 
		for (k = 1; k < matrix.length; k++) {
			if (matrix[i] % matrix [k] == 0) {
				numCombinations++;
			}
		}
	}
	for (i = matrix.length - 1; i >= 1; i--) {
		for (k = matrix.length - 2; k >= 0; k--) {
			if (matrix[i] % matrix[k] == 0) {
				numCombinations++;
			}
		}
	}
	while (numCombinations == 0) { 
		fillMatrix(); // If no combinations exist, re-fill the matrix with new numbers
		checkCombinations();
	}
}

// Reveal Operator
function revealOperator() {
	var cardValue = getId('operatorReveal');
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
	$("#operator").flip(true);
}

// Hide Operator
function hideOperator() {
	$("#operator").flip(false);	
}

// Reveal Answer
function revealAnswer() {
	var cell = getId('answerReveal');	
	cell.innerHTML = answer;
	$("#answer").flip(true);	
}

// Hide Answer
function hideAnswer() {
	$("#answer").flip(false);
}

// Reveal Matrix
function revealMatrix() {
	var cell;
	var i;
	var j;
	var k = 0;
	for (i = 1; i <= 3; i++) {
		for (j = 1; j <= 3; j++) {
			cell = getId('r' + i + 'c' + j + 'Reveal').innerHTML = matrix[k]; // Store each value in their div's
			k++;
		}
	}
	$('.matrixCards').flip(true); // Flip all the matrix cards to the back
}

// Hide Matrix
function hideMatrix() {
	$('.matrixCards').flip(false); // Flip all the matrix cards to the front	
}

// Reveal R1C1 Card
function revealR1C1() {	
	if (seconds == 0 && r1c1Reveals != 1) { // Prevents the function from executing before the intro reveals have
		count++; 						   // finished and from executing more that once on the same cell
	}	
	if (count == 1 && r1c1Reveals != 1) {
		userSelection[0] = matrix[0]; // Assign value of first matrix cell to answer array at index 0
		getId('firstChoiceReveal').innerHTML = matrix[0]; // Draw the selected card value to the 1st equation card
		$('#r1c1').flip(true); // Flip the selected card
		$('#first').flip(true); // Flip the 1st equation card
		r1c1Reveals++; // Increment the fucntion execution counter
	}		
	if (count == 2 && r1c1Reveals != 1) { 
		userSelection[1] = matrix[0]; // Assign value of first matrix cell to answer array at index 1 
		getId('secondChoiceReveal').innerHTML = matrix[0]; // Draw the selected card value to the 3rd equation card
		$('#r1c1').flip(true); // Flip the selected card
		$('#second').flip(true); // Flip the 2nd equation card
		r1c1Reveals++; // Increment the fucntion execution counter
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
		$('#r1c2').flip(true);
		$('first').flip(true);
		r1c2Reveals++; 
	}		
	if (count == 2 && r1c2Reveals != 1) { 
		userSelection[1] = matrix[1]; 
		getId('secondChoiceReveal').innerHTML = matrix[1];
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
		$('#r1c3').flip(true);
		$('#first').flip(true);
		r1c3Reveals++; 
	}		
	if (count == 2 && r1c3Reveals != 1) { 
		userSelection[1] = matrix[2]; 
		getId('secondChoiceReveal').innerHTML = matrix[2];
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
		$('#r2c1').flip(true);
		$('#first').flip(true);
		r2c1Reveals++;
	}		
	if (count == 2 && r2c1Reveals != 1) { 
		userSelection[1] = matrix[3]; 
		getId('secondChoiceReveal').innerHTML = matrix[3];
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
		$('#r2c2').flip(true);
		$('#first').flip(true);
		r2c2Reveals++; 
	}		
	if (count == 2 && r2c2Reveals != 1) { 
		userSelection[1] = matrix[4]; 
		getId('secondChoiceReveal').innerHTML = matrix[4];
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
		$('#r2c3').flip(true);
		$('#first').flip(true);
		r2c3Reveals++; 
	}		
	if (count == 2 && r2c3Reveals != 1) { 
		userSelection[1] = matrix[5]; 
		getId('secondChoiceReveal').innerHTML = matrix[5];
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
		$('#r3c1').flip(true);
		$('#first').flip(true);
		r3c1Reveals++; 
	}		
	if (count == 2 && r3c1Reveals != 1) { 
		userSelection[1] = matrix[6]; 
		getId('secondChoiceReveal').innerHTML = matrix[6];
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
		$('#r3c2').flip(true);
		$('#first').flip(true);
		r3c2Reveals++; 
	}		
	if (count == 2 && r3c2Reveals != 1) { 
		userSelection[1] = matrix[7]; 
		getId('secondChoiceReveal').innerHTML = matrix[7];
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
		$('#r3c3').flip(true);
		$('#first').flip(true);
		r3c3Reveals++; 
	}		
	if (count == 2 && r3c3Reveals != 1) { 
		userSelection[1] = matrix[8]; 
		getId('secondChoiceReveal').innerHTML = matrix[8];
		$('#r3c3').flip(true);
		$('#second').flip(true);
		r3c3Reveals++; 
		checkEquation(); 
	}
}

// Check Equation
function checkEquation(){
	var first = userSelection[0];
	var second = userSelection[1];	
	if (operator === "addition") {
		if ((first + second) == answer) {
			revealAnswer();
		} else {
			getId('answerReveal').style.backgroundColor = "#000000"; // Black
			revealAnswer();
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			revealAnswer();
		} else { 
			getId('answerReveal').style.backgroundColor = "#000000"; // Black
			revealAnswer();
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			revealAnswer();
		} else {
			getId('answerReveal').style.backgroundColor = "#000000"; // Black
			revealAnswer();
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			revealAnswer();
		} else {
			getId('answerReveal').style.backgroundColor = "#000000"; // Black
			revealAnswer();
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else {
		alert('Unable to identify operator during checkEquation');	
	}
}


























