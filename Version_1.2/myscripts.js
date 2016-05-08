// Set-up Matrix and Equation Cards for Flipping
$(document).ready(function(){ 
	$(".matrixCards").flip({ // Matrix Cards
		axis: 'y',
		trigger: 'manual',
		front: ".back",
		back: ".front"	
	});	
	$(".equationCards").flip({ // Equation Cards
		axis: 'y',
		trigger: 'manual',
		front: ".back",
		back: ".front"	
	});		
});

// Global Variables
var count = 0; // Total number of user executed card flips for all cards
var r1c1Reveals = 0; // Total number of user executed card flips on card 1 
var r1c2Reveals = 0; //   						 					card 2 
var r1c3Reveals = 0; //   						 					card 3
var r2c1Reveals = 0; //   						 					card 4
var r2c2Reveals = 0; //   						 					card 5
var r2c3Reveals = 0; //   						 					card 6
var r3c1Reveals = 0; //   						 					card 7
var r3c2Reveals = 0; //   						 					card 8
var r3c3Reveals = 0; //   						 					card 9
var matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // The Matrix Card Values
var userSelection = [1, 2]; // The Two User Selected Card Values
var answer; // The Answer to the Equation
var answerCard1; // The first matrix card value used in generating the answer
var answerCard2; // The other matrix card value used in generating the answer
var operator = ""; // Mathematical operator (+, -, *, or /)
var timer; // Card reveal timer
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
		default:
			alert('Unable to set an operator during generateOperator');
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
	switch (operator) {
		case "addition":
			getId('eqCard2Front').innerHTML = "+"; // Frontside of operator card
			break;
		case "subtraction":
			getId('eqCard2Front').innerHTML = "-";
			break;
		case "multiplication":
			getId('eqCard2Front').innerHTML = "x";
			break;
		case "division":
			getId('eqCard2Front').innerHTML = "/";
			break;
		default:
			alert("Unable to indentify an operator during revealOperator");
	}	
	$("#operator").flip(true); // Flip the operator card to its frontside	
}

// Hide Operator
function hideOperator() {
	$("#operator").flip(false); // Flip the operator card to its backside	
}

// Reveal Answer
function revealAnswer() {
	var cell = getId('eqCard5Front'); // Frontside of the answer card	
	cell.innerHTML = answer; // Assign the frontside the answer value
	$("#answer").flip(true); // Flip the answer card to its frontside
}

// Hide Answer
function hideAnswer() {
	$("#answer").flip(false); // Flip the answer card to its backside
}

// Reveal Matrix
// Assign 1st matrix card's frontside to 1st matrix array index. 2nd card = matrix[1],...9th = matrix[8]
function revealMatrix() {
	var cell;
	var i;
	var j;
	var k = 0;
	for (i = 1; i <= 3; i++) { 
		for (j = 1; j <= 3; j++) { 
			cell = getId('r' + i + 'c' + j + 'Front').innerHTML = matrix[k]; 
			k++;															  
		}
	}
	$('.matrixCards').flip(true); // Flip all the matrix cards to their frontside
}

// Hide Matrix
function hideMatrix() {
	$('.matrixCards').flip(false); // Flip all the matrix cards to their backside	
}

// Reveal R1C1 Card
function revealR1C1() {	
	var temp;
	if (seconds == 0 && r1c1Reveals != 1) { // Prevent the user from flipping a card before all reveals finish
		count++; 						    // and from flipping the same card twice 
	}	
	if (count == 1 && r1c1Reveals != 1) {
		userSelection[0] = matrix[0]; // Assign the 1st matrix card value to the 1st index in the user selection array
		getId('eqCard1Front').innerHTML = matrix[0]; // Assign the 1st matrix card value to the 1st equation card
		$("#r1c1Back").css("background-color", "#D7DADB"); // Change 1st matric card's backside color to grey 
		$("#r1c1Back").css("border-style", "dashed"); // Change 1st matrix card's backside border-style to dashed
		$("#animationCard1").css("visibility", "visible"); // Make the hidden animate division visible
		$("#animationCard1").animate({ // Change size and width of animate div to match equation card dimensions
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); // Change 1st equation card backside color to Navy blue
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard1").css("visibility", "hidden"); // Hide the animate division
				$('#first').flip(true); // Flip the 1st equation card to its frontside
			}
		});
		r1c1Reveals++; // Increment the fucntion execution counter
	}		
	if (count == 2 && r1c1Reveals != 1) { 		
		userSelection[1] = matrix[0]; 
		getId('eqCard3Front').innerHTML = matrix[0]; // Assign the 1st matrix card value to the 3rd equation card 
		$("#r1c1Back").css("background-color", "#D7DADB"); 
		$("#r1c1Back").css("border-style", "dashed"); 
		$("#animationCard1").css("visibility", "visible"); 
		$("#animationCard1").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); // Change 3rd equation card backside color to Navy blue
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard1").css("visibility", "hidden"); 
				$('#second').flip(true); // Flip the 3rd equation card to its frontside
			}
		});
		r1c1Reveals++; // Increment the fucntion execution counter
		checkEquation(); // Check if the equation is true
	}
}

// Reveal R1C2 Card
function revealR1C2() {	
	var temp;
	if (seconds == 0 && r1c2Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r1c2Reveals != 1) {
		userSelection[0] = matrix[1]; 
		getId('eqCard1Front').innerHTML = matrix[1]; 
		$("#r1c2Back").css("background-color", "#D7DADB");  
		$("#r1c2Back").css("border-style", "dashed"); 
		$("#animationCard2").css("visibility", "visible"); 
		$("#animationCard2").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard2").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r1c2Reveals++; 
	}		
	if (count == 2 && r1c2Reveals != 1) { 		
		userSelection[1] = matrix[1]; 
		getId('eqCard3Front').innerHTML = matrix[1]; 
		$("#r1c2Back").css("background-color", "#D7DADB"); 
		$("#r1c2Back").css("border-style", "dashed"); 
		$("#animationCard2").css("visibility", "visible"); 
		$("#animationCard2").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard2").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
		r1c2Reveals++; 
		checkEquation(); 
	}
}

// Reveal R1C3 Card
function revealR1C3() {	
	var temp;
	if (seconds == 0 && r1c3Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r1c3Reveals != 1) {
		userSelection[0] = matrix[2]; 
		getId('eqCard1Front').innerHTML = matrix[2]; 
		$("#r1c3Back").css("background-color", "#D7DADB");  
		$("#r1c3Back").css("border-style", "dashed"); 
		$("#animationCard3").css("visibility", "visible"); 
		$("#animationCard3").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard3").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r1c3Reveals++; 
	}		
	if (count == 2 && r1c3Reveals != 1) { 		
		userSelection[1] = matrix[2]; 
		getId('eqCard3Front').innerHTML = matrix[2]; 
		$("#r1c3Back").css("background-color", "#D7DADB"); 
		$("#r1c3Back").css("border-style", "dashed"); 
		$("#animationCard3").css("visibility", "visible"); 
		$("#animationCard3").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard3").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
		r1c3Reveals++; 
		checkEquation(); 
	}
}

// Reveal R2C1 Card
function revealR2C1() {	
	var temp;
	if (seconds == 0 && r2c1Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r2c1Reveals != 1) {
		userSelection[0] = matrix[3]; 
		getId('eqCard1Front').innerHTML = matrix[3]; 
		$("#r2c1Back").css("background-color", "#D7DADB");  
		$("#r2c1Back").css("border-style", "dashed"); 
		$("#animationCard4").css("visibility", "visible"); 
		$("#animationCard4").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard4").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r2c1Reveals++; 
	}		
	if (count == 2 && r2c1Reveals != 1) { 		
		userSelection[1] = matrix[3]; 
		getId('eqCard3Front').innerHTML = matrix[3]; 
		$("#r2c1Back").css("background-color", "#D7DADB"); 
		$("#r2c1Back").css("border-style", "dashed"); 
		$("#animationCard4").css("visibility", "visible"); 
		$("#animationCard4").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard4").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
		r2c1Reveals++; 
		checkEquation(); 
	}
}

// Reveal R2C2 Card
function revealR2C2() {	
	var temp;
	if (seconds == 0 && r2c2Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r2c2Reveals != 1) {
		userSelection[0] = matrix[4]; 
		getId('eqCard1Front').innerHTML = matrix[4]; 
		$("#r2c2Back").css("background-color", "#D7DADB");  
		$("#r2c2Back").css("border-style", "dashed"); 
		$("#animationCard5").css("visibility", "visible"); 
		$("#animationCard5").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard5").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r2c2Reveals++; 
	}		
	if (count == 2 && r2c2Reveals != 1) { 		
		userSelection[1] = matrix[4]; 
		getId('eqCard3Front').innerHTML = matrix[4]; 
		$("#r2c2Back").css("background-color", "#D7DADB"); 
		$("#r2c2Back").css("border-style", "dashed"); 
		$("#animationCard5").css("visibility", "visible"); 
		$("#animationCard5").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard5").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
		r2c2Reveals++; 
		checkEquation(); 
	}
}

// Reveal R2C3 Card
function revealR2C3() {	
	var temp;
	if (seconds == 0 && r2c3Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r2c3Reveals != 1) {
		userSelection[0] = matrix[5]; 
		getId('eqCard1Front').innerHTML = matrix[5]; 
		$("#r2c3Back").css("background-color", "#D7DADB");  
		$("#r2c3Back").css("border-style", "dashed"); 
		$("#animationCard6").css("visibility", "visible"); 
		$("#animationCard6").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard6").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r2c3Reveals++; 
	}		
	if (count == 2 && r2c3Reveals != 1) { 		
		userSelection[1] = matrix[5]; 
		getId('eqCard3Front').innerHTML = matrix[5]; 
		$("#r2c3Back").css("background-color", "#D7DADB"); 
		$("#r2c3Back").css("border-style", "dashed"); 
		$("#animationCard6").css("visibility", "visible"); 
		$("#animationCard6").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard6").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
		r2c3Reveals++; 
		checkEquation(); 
	}
}

// Reveal R3C1 Card
function revealR3C1() {	
	var temp;
	if (seconds == 0 && r3c1Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r3c1Reveals != 1) {
		userSelection[0] = matrix[6]; 
		getId('eqCard1Front').innerHTML = matrix[6]; 
		$("#r3c1Back").css("background-color", "#D7DADB");  
		$("#r3c1Back").css("border-style", "dashed"); 
		$("#animationCard7").css("visibility", "visible"); 
		$("#animationCard7").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard7").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r3c1Reveals++; 
	}		
	if (count == 2 && r3c1Reveals != 1) { 		
		userSelection[1] = matrix[6]; 
		getId('eqCard3Front').innerHTML = matrix[6]; 
		$("#r3c1Back").css("background-color", "#D7DADB"); 
		$("#r3c1Back").css("border-style", "dashed"); 
		$("#animationCard7").css("visibility", "visible"); 
		$("#animationCard7").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard7").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
		r3c1Reveals++; 
		checkEquation(); 
	}
}

// Reveal R3C2 Card
function revealR3C2() {	
	var temp;
	if (seconds == 0 && r3c2Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r3c2Reveals != 1) {
		userSelection[0] = matrix[7]; 
		getId('eqCard1Front').innerHTML = matrix[7]; 
		$("#r3c2Back").css("background-color", "#D7DADB");  
		$("#r3c2Back").css("border-style", "dashed"); 
		$("#animationCard8").css("visibility", "visible"); 
		$("#animationCard8").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard8").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r3c2Reveals++; 
	}		
	if (count == 2 && r3c2Reveals != 1) { 		
		userSelection[1] = matrix[7]; 
		getId('eqCard3Front').innerHTML = matrix[7]; 
		$("#r3c2Back").css("background-color", "#D7DADB"); 
		$("#r3c2Back").css("border-style", "dashed"); 
		$("#animationCard8").css("visibility", "visible"); 
		$("#animationCard8").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard8").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
		r3c2Reveals++; 
		checkEquation(); 
	}
}

// Reveal R3C3 Card
function revealR3C3() {	
	var temp;
	if (seconds == 0 && r3c3Reveals != 1) { 
		count++; 						    
	}	
	if (count == 1 && r3c3Reveals != 1) {
		userSelection[0] = matrix[8]; 
		getId('eqCard1Front').innerHTML = matrix[8]; 
		$("#r3c3Back").css("background-color", "#D7DADB");  
		$("#r3c3Back").css("border-style", "dashed"); 
		$("#animationCard9").css("visibility", "visible"); 
		$("#animationCard9").animate({ 
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard9").css("visibility", "hidden"); 
				$('#first').flip(true); 
			}
		});
		r3c3Reveals++; 
	}		
	if (count == 2 && r3c3Reveals != 1) { 		
		userSelection[1] = matrix[8]; 
		getId('eqCard3Front').innerHTML = matrix[8]; 
		$("#r3c3Back").css("background-color", "#D7DADB"); 
		$("#r3c3Back").css("border-style", "dashed"); 
		$("#animationCard9").css("visibility", "visible"); 
		$("#animationCard9").animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); 
			temp = setInterval(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard9").css("visibility", "hidden"); 
				$('#second').flip(true); 
			}
		});
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
			getId('r1c1Front').style.backgroundColor = "#29a329"; // Change the first answer card's frontside to green
			if (cardNumber){
				$('#r1c1').flip(true); // Flip the first matrix card to its frontside, if not yet flipped
			}
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

// Check Equation
function checkEquation(){
	var first = userSelection[0]; // The user's 1st selected card value from the matrix
	var second = userSelection[1]; // The user's 2nd selected card value from the matrix	
	if (operator === "addition") {
		if ((first + second) == answer) {
			getId('eqCard5Front').style.backgroundColor = "#29a329"; // Change the answer card's frontside to green
			revealAnswer();
		} else {
			getId('eqCard5Front').style.backgroundColor = "#000000"; // Change the answer card's frontside to black
			revealAnswer();
			setTimeout(revealAnswerCards, 500) // Delay revealing the answer cards in the matrix by 0.5 seconds
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			getId('eqCard5Front').style.backgroundColor = "#29a329"; // Green
			revealAnswer();
		} else { 
			getId('eqCard5Front').style.backgroundColor = "#000000"; // Black 
			revealAnswer();
			setTimeout(revealAnswerCards, 500)
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			getId('eqCard5Front').style.backgroundColor = "#29a329";
			revealAnswer();
		} else {
			getId('eqCard5Front').style.backgroundColor = "#000000";
			revealAnswer();
			setTimeout(revealAnswerCards, 500)
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			getId('eqCard5Front').style.backgroundColor = "#29a329";
			revealAnswer();
		} else {
			getId('eqCard5Front').style.backgroundColor = "#000000"; 
			revealAnswer();
			setTimeout(revealAnswerCards, 500) 
		}
	} else {
		alert('Unable to identify operator during checkEquation');	
	}
}



























