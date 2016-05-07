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
function docId(id) {
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
		//hideFifth();
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
	var cell = docId('second');
	if (operator === "addition") {
		cell.innerHTML = "+";
	} else if(operator === "subtraction") {
		cell.innerHTML = "-";
	} else if(operator === "multiplication") {
		cell.innerHTML = "*";
	} else if(operator === "division") {
		cell.innerHTML = "/";
	} else {
		alert("Unable to indentify an operator during revealOperator");
	}	
}

// Hide Operator
function hideOperator() {
	var cell = docId('second');
	cell.innerHTML = "";	
}

// Reveal Answer
function revealAnswer() {
	var cell = docId('fifth');	
	cell.innerHTML = answer;	
}

// Hide Answer
function hideFifth() {
	var cell = docId('fifth');
	cell.innerHTML = "";	
}

// Reveal Matrix
function revealMatrix() {
	var cell;
	var i;
	var j;
	var k = 0;
	for (i = 1; i <= 3; i++) {
		for (j = 1; j <= 3; j++) {
			cell = docId('r' + i + 'c' + j).innerHTML = matrix[k]; // Reveal each value in their div's
			k++;
		}
	}
}

// Hide Matrix
function hideMatrix() {
	var cell;
	var i;
	var k;
	for (i = 1; i <= 3; i++) {
		for (k = 1; k <= 3; k++) {
			cell = docId('r' + i + 'c' + k).innerHTML = ""; // Remove each value from their div's
		}
	}	
}

// Reveal R1C1 Value
function revealR1C1(id) {
	var cell = docId(id); // First matrix cell
	var num = matrix[0]; // First value of matrix array  	
	
	if (seconds == 0 && r1c1Reveals != 1) { // Prevents the function from executing before the intro reveals have
		count++; 						   // finished and from executing more that once on the same cell
	}
	
	if (count == 1 && r1c1Reveals != 1) {
		cell.innerHTML = num; // Assign first value of matrix array to first matrix cell and reveal
		cell.style.backgroundColor = "#800080"; // Change background color of first matrix cell to purple
		docId('first').innerHTML = num; // Assign value of first matrix cell to first equation cell and reveal
		docId('first').style.backgroundColor = "#800080"; // Change background color of first equation cell to purple
		userSelection[0] = num; // Assign value of first matrix cell to answer array at index 0
		r1c1Reveals++; // Increment the fucntion execution counter
	}	
	
	if (count == 2 && r1c1Reveals != 1) { 
		cell.innerHTML = num;
		cell.style.backgroundColor = " #4169E1"; // Blue
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = " #4169E1"; // Blue
		userSelection[1] = num; 
		r1c1Reveals++; 
		checkEquation(); // Check if the equation is true
	}
}

// Reveal R1C2 Value
function revealR1C2(id) {
	var cell = docId(id);
	var num = matrix[1];
	
	if (seconds == 0 && r1c2Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r1c2Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080"; 
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r1c2Reveals++; 
	}	
	
	if (count == 2 && r1c2Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#4169E1"; 
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r1c2Reveals++; 
		checkEquation();	
	}
}

// Reveal R1C3 Value
function revealR1C3(id) {
	var cell = docId(id);
	var num = matrix[2];
	
	if (seconds == 0 && r1c3Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r1c3Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080";
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r1c3Reveals++;
	}	
	
	if (count == 2 && r1c3Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#4169E1"; 
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1";
		userSelection[1] = num;
		r1c3Reveals++;
		checkEquation();
	}
}

// Reveal R2C1 Value
function revealR2C1(id) {
	var cell = docId(id);
	var num = matrix[3];
	
	if (seconds == 0 && r2c1Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r2c1Reveals != 1) {
		cell.innerHTML = num;
	cell.style.backgroundColor = "#800080";		 
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r2c1Reveals++;
	}	
	
	if (count == 2 && r2c1Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r2c1Reveals++;
		checkEquation();
	}
}

// Reveal R2C2 Value
function revealR2C2(id) {
	var cell = docId(id);
	var num = matrix[4];
	
	if (seconds == 0 && r2c2Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r2c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r2c2Reveals++;
	}	

	if (count == 2 && r2c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r2c2Reveals++;
		checkEquation();
	}	
}

// Reveal R2C3 Value
function revealR2C3(id) {
	var cell = docId(id);
	var num = matrix[5];	
	
	if (seconds == 0 && r2c3Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r2c3Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r2c3Reveals++;
	}	
	
	if (count == 2 && r2c3Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#4169E1";
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r2c3Reveals++;
		checkEquation();
	}
}

// Reveal R3C1 Value
function revealR3C1(id) {
	var cell = docId(id);
	var num = matrix[6];	
	
	if (seconds == 0 && r3c1Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r3c1Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r3c1Reveals++;
	}
	
	if (count == 2 && r3c1Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r3c1Reveals++;
		checkEquation();
	}
}

// Reveal R3C2 Value
function revealR3C2(id) {
	var cell = docId(id);
	var num = matrix[7];
	
	if (seconds == 0 && r3c2Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r3c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r3c2Reveals++;
	}	
	
	if (count == 2 && r3c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r3c2Reveals++;
		checkEquation();
	}
}

// Reveal R3C3 Value
function revealR3C3(id) {
	var cell = docId(id);
	var num = matrix[8];	
	
	if (seconds == 0 && r3c3Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r3c3Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		docId('first').innerHTML = num;
		docId('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r3c3Reveals++;
	}
	
	if (count == 2 && r3c3Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		docId('third').innerHTML = num;
		docId('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
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
			docId('fifth').style.backgroundColor = "#29a329"; // Green
		} else {
			revealAnswer();
			docId('fifth').style.backgroundColor = "#e60000"; // Red
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			revealAnswer();
			docId('fifth').style.backgroundColor = "#29a329"; // Green
		} else {
			revealAnswer();
			docId('fifth').style.backgroundColor = "#e60000"; // Red
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			revealAnswer();
			docId('fifth').style.backgroundColor = "#29a329"; // Green
		} else {
			revealAnswer();
			docId('fifth').style.backgroundColor = "#e60000"; // Red
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			revealAnswer();
			docId('fifth').style.backgroundColor = "#29a329"; // Green
		} else {
			revealAnswer();
			docId('fifth').style.backgroundColor = "#e60000"; // Red
			setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
		}
	} else {
		alert('Unable to identify operator during checkEquation');	
	}
}


























