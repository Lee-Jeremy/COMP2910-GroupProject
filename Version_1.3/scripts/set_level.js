/**
 * Randomly choose an operator
 */
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
		default:
			alert('Unable to set an operator during generateOperator');
	}
}

/**
 * Fill The Matrix Array
 */
function fillMatrix() {
	var i;
	var num;
	if (operator === "division") { // For division equations
		for (i = 0; i < matrix.length; i++) {
			num = Math.floor((Math.random() * divisionCardValueMax) + divisionCardValueMin);
			// Don't allow duplicate values in the matrix
			while (num == matrix[0] || num == matrix[1] || num == matrix[2] || num == matrix[3] || num == matrix[4] 
			|| num == matrix[5] || num == matrix[6] || num == matrix[7] || num == matrix[8]) {
				num = Math.floor((Math.random() * divisionCardValueMax) + divisionCardValueMin);
			}
		matrix[i] = num; // Place num into the matrix array
		}
	}
	if (operator !== "division") {	// For addition, subtraction, and multiplication equations
		for (i = 0; i < matrix.length; i++) { 
			num = Math.floor((Math.random() * cardValueMax) + cardValueMin);
			// Don't allow duplicate values in the matrix
			while (num == matrix[0] || num == matrix[1] || num == matrix[2] || num == matrix[3] || num == matrix[4] 
			|| num == matrix[5] || num == matrix[6] || num == matrix[7] || num == matrix[8]) {
				num = Math.floor((Math.random() * cardValueMax) + cardValueMin);
			}
		matrix[i] = num; // Place num into the matrix array
		}
	} 
	// Assign 1st matrix card's frontside to 1st matrix array index. 2nd card = matrix[1],...9th = matrix[8]
	insertValues(); 	
}
 
/**
 * Copy the values from the matrix array to the front of each matrix card
 */
function insertValues() {
	var cell;
	var i;
	var j;
	var k = 0;
	for (i = 1; i <= 3; i++) { 
		for (j = 1; j <= 3; j++) { 
			cell = getId('r' + i + 'c' + j + 'FrontText').innerHTML = matrix[k]; 
			k++;															  
		}
	}
}
 
/**
 * Generate an answer
 */
function generateAnswer() {
	var num1; // Select a random card from the matrix (1st card = 0, 2nd = 1,...9th = 8)
	var num2; // 0 to 8
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
		// Don't allow for a floating point answer and an answer of 2
		while (matrix[num1] % matrix[num2] != 0 || matrix[num1] / matrix[num2] == 2 || num1 == num2) {
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

/**
 * Check matrix for all combinations of a 0 remainder division solution
 */
function checkCombinations() {	
	var numCombinations = 0;
	var i;
	var k;
	for (i = 0; i < matrix.length - 1; i++) { // 1st card / 2nd card, 1st / 3rd , 1st / 4th ,... 8th / 9th
		for (k = 1; k < matrix.length; k++) {
			if (matrix[i] % matrix [k] == 0 || matrix[k] % matrix [i] == 0) {
				numCombinations++;
			}
		}
	}
	while (numCombinations) { 
		fillMatrix(); // If no combinations exist, re-fill the matrix with new values
		checkCombinations(); // Check again for combinations
	}
}