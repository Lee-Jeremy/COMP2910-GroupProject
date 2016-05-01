// Global Variables
var count = 0; // Number of reveals across all matrix cells
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
var numSolutions = 0; // Number of Solution Combinations in the Matrix
var timer; // Timer
var seconds = 1; // Seconds counter
var i; // For-loop iterator
var k; // For-loop iterator

generateAnswer();
fillMatrix();
check();

// Abbreviated getElementByID
function $(id) {
	var element = document.getElementById(id); 
	if (element == null) { 
		alert ('programmer error: ' + id + 'does not exist.');
	}
	return element;			
	}

// Timer
timer = setInterval(myTimer, 1000); // Execute Every 1 Second(s) 
function myTimer() {	
	seconds++;	
	if (seconds == 2) { 
		revealAnswer();
	} else if (seconds == 4) {
		hideFifth();
		revealMatrix();
	} else if (seconds == 8) {
		revealAnswer();
		hideMatrix();
		clearInterval(timer); // Stop the timer		
		seconds = 0; // Reset the seconds to 0 
	} 
}

// Create an answer
function generateAnswer() {
	answer = Math.floor((Math.random() * 9) + 1); // 1 to 9
}

// Fill The Matrix Array
function fillMatrix() {
	var rand;
	for (i = 0; i < matrix.length; i++) {
		rand = Math.floor(Math.random() * 9); // 0 to 9
		matrix[i] = rand;
	}
}

// Check the Matrix for at least One solution
function check() {
	var rand;
	for (i = 0; i < matrix.length - 1; i++) {	
		for (k = (i + 1); k < matrix.length; k++) {
			if ((matrix[i] + matrix[k]) == answer) { 
				numSolutions++;						
			} else if (numSolutions == 0){
				rand = Math.floor(Math.random() * 9); // 0 to 9
				matrix[k] = rand; // Assign the second value (k) a new random number		
			} 				
		}
	}
while (numSolutions == 0) { // Ensure the matrix contains at least one solution
	check();
}
numSolutions = 0;
}

// Reveal Operator
function revealOperator() {
	var cell = $('second');
	cell.innerHTML = "-";	
}

// Hide Operator
function hideOperator() {
	var cell = $('second');
	cell.innerHTML = "";	
}

// Reveal Answer
function revealAnswer() {
	var cell = $('fifth');	
	cell.innerHTML = answer;	
}

// Hide Answer
function hideFifth() {
	var cell = $('fifth');
	cell.innerHTML = "";	
}

// Reveal Matrix
function revealMatrix() {
	var z = 0;
	var cell;
	for (i = 1; i <= 3; i++) {
		for (k = 1; k <= 3; k++) {
			cell = $('r' + i + 'c' + k).innerHTML = matrix[z]; // Reveal each value in their div's
			z++;
		}
	}
}

// Hide Matrix
function hideMatrix() {
	var cell;
	for (i = 1; i <= 3; i++) {
		for (k = 1; k <= 3; k++) {
			cell = $('r' + i + 'c' + k).innerHTML = ""; // Remove each value from their div's
		}
	}	
}

// Reveal R1C1 Value
function revealR1C1(id) {
	var cell = ($(id)); // First matrix cell
	var num = matrix[0]; // First value of matrix array  	
	
	if (seconds == 0 && r1c1Reveals != 1) { // Prevents the function from executing before the intro reveals have
		count++; 						   // finished and from executing more that once on the same cell
	}
	
	if (count == 1 && r1c1Reveals != 1) {
		cell.innerHTML = num; // Copy first value of matrix array to first matrix cell and reveal
		cell.style.backgroundColor = "#800080"; // Change background color of first matrix cell to purple
		$('first').innerHTML = num; // Copy value of first matrix cell to first equation cell and reveal
		$('first').style.backgroundColor = "#800080"; // Change background color of first equation cell to purple
		userSelection[0] = num; // Copy value of first matrix cell to answer array at index 0
		r1c1Reveals++; // Increment the fucntion execution counter
	}	
	
	if (count == 2 && r1c1Reveals != 1) { 
		cell.innerHTML = num;
		cell.style.backgroundColor = " #4169E1"; // Blue
		$('third').innerHTML = num;
		$('third').style.backgroundColor = " #4169E1"; // Blue
		userSelection[1] = num; 
		r1c1Reveals++; 
		checkEquation(); // Check if the equation is true
	}
}

// Reveal R1C2 Value
function revealR1C2(id) {
	var cell = ($(id));
	var num = matrix[1];
	
	if (seconds == 0 && r1c2Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r1c2Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r1c2Reveals++; 
	}	
	
	if (count == 2 && r1c2Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#4169E1"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r1c2Reveals++; 
		checkEquation();	
	}
}

// Reveal R1C3 Value
function revealR1C3(id) {
	var cell = ($(id));
	var num = matrix[2];
	
	if (seconds == 0 && r1c3Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r1c3Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#800080";
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r1c3Reveals++;
	}	
	
	if (count == 2 && r1c3Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#4169E1"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1";
		userSelection[1] = num;
		r1c3Reveals++;
		checkEquation();
	}
}

// Reveal R2C1 Value
function revealR2C1(id) {
	var cell = ($(id));
	var num = matrix[3];
	
	if (seconds == 0 && r2c1Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r2c1Reveals != 1) {
		cell.innerHTML = num;
	cell.style.backgroundColor = "#800080";		 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r2c1Reveals++;
	}	
	
	if (count == 2 && r2c1Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r2c1Reveals++;
		checkEquation();
	}
}

// Reveal R2C2 Value
function revealR2C2(id) {
	var cell = ($(id));
	var num = matrix[4];
	
	if (seconds == 0 && r2c2Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r2c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r2c2Reveals++;
	}	

	if (count == 2 && r2c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r2c2Reveals++;
		checkEquation();
	}	
}

// Reveal R2C3 Value
function revealR2C3(id) {
	var cell = ($(id));
	var num = matrix[5];	
	
	if (seconds == 0 && r2c3Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r2c3Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r2c3Reveals++;
	}	
	
	if (count == 2 && r2c3Reveals != 1) {
		cell.innerHTML = num;	
		cell.style.backgroundColor = "#4169E1";
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r2c3Reveals++;
		checkEquation();
	}
}

// Reveal R3C1 Value
function revealR3C1(id) {
	var cell = ($(id));
	var num = matrix[6];	
	
	if (seconds == 0 && r3c1Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r3c1Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r3c1Reveals++;
	}
	
	if (count == 2 && r3c1Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r3c1Reveals++;
		checkEquation();
	}
}

// Reveal R3C2 Value
function revealR3C2(id) {
	var cell = ($(id));
	var num = matrix[7];
	
	if (seconds == 0 && r3c2Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r3c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r3c2Reveals++;
	}	
	
	if (count == 2 && r3c2Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r3c2Reveals++;
		checkEquation();
	}
}

// Reveal R3C3 Value
function revealR3C3(id) {
	var cell = ($(id));
	var num = matrix[8];	
	
	if (seconds == 0 && r3c3Reveals != 1) {
		count++;
	}
	
	if (count == 1 && r3c3Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#800080"; 
		$('first').innerHTML = num;
		$('first').style.backgroundColor = "#800080"; 
		userSelection[0] = num;
		r3c3Reveals++;
	}
	
	if (count == 2 && r3c3Reveals != 1) {
		cell.innerHTML = num;
		cell.style.backgroundColor = "#4169E1"; 
		$('third').innerHTML = num;
		$('third').style.backgroundColor = "#4169E1"; 
		userSelection[1] = num;
		r3c3Reveals++;
		checkEquation();
	}
}

// Check Equation
function checkEquation(){
	var first = userSelection[0];
	var second = userSelection[1];
	
	if ((first + second) == answer){
		revealAnswer();
		$('fifth').style.backgroundColor = "#29a329"; // Green
		
	} else {
		$('fifth').style.backgroundColor = "#e60000"; // Red
		setTimeout(revealMatrix, 500) // Delay Matrix Reveal by 0.5 seconds
	}
}


























