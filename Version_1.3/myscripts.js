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
    $("#buttonLeft").click(function() {
		if (getId('buttonLeftText').innerHTML === 'Yes') { // Quit Confirm overlay
            goToStartScreen(); // Temporary function to go to Start Screen
        } else { // Current Level and Play Again overlay
            hideOverlay();
            quitConfirm(); // Asks if the user really wants to quit
        }
	});
	$("#buttonRight").click(function() { // Reset the Level; checks which overlay the user is on
		if (getId('buttonRightText').innerHTML === 'No') { // Quit Confirm overlay
		   //playAgain
		   showLevelOverlay();
		} else if (getId('buttonRightText').innerHTML === 'Yes') { // Play Again overlay
            if (lives === 0) {
                level = 1;
                lives = 3;
                showLevelOverlay();
            } else {
                showLevelOverlay();
            }
        } else { // Current Level overlay
		    hideOverlay(); // Hides the overlay after clicking on the button
            resetLevel();
            setTimeout(dealCards, 500); // Automatically deals the cards after .5 seconds
        } 
	});
    $("#arrow").click(function() { // Temporary function to prompt Quit screen on Back Button
		quitConfirm();
	});
});

// Global Variables
var count = 0; // Total number of user executed card flips in the matrix
var r1c1Clicks = 0; // Number of user clicks on the 1st Matrix card
var r1c2Clicks = 0; // 								2nd
var r1c3Clicks = 0; // 								3rd
var r2c1Clicks = 0; //								4th
var r2c2Clicks = 0; // 								5th
var r2c3Clicks = 0; // 								6th
var r3c1Clicks = 0; // 								7th
var r3c2Clicks = 0; //								8th
var r3c3Clicks = 0; // 								9th
var numClicks = 0;
var matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // The Matrix Card Values
var userSelection = [1, 2]; // The Two User Selected Card Values
var answer; // The Answer to the Equation
var answerCard1; // The first matrix card value used in generating the answer
var answerCard2; // The other matrix card value used in generating the answer
var operator = ""; // Mathematical operator (+, -, *, or /)
var timer; // Card dealing and revealing timer
var seconds = 1; // Seconds counter within the reveal timer
var level = 1; // Level user is currently on
var lives = 3; // Number of lives; starts at 3
var points = 25; // Total points scored in the current level
var totalScore = 0; // Total points scored across all levels
var multTimer; // Multiplier timer to determine bonus points
var multiplier = 4; // Points multiplier
var pointsPerLevel = 0; // Total points for the current level
var mSeconds = 0; // Seconds counter within the multiplier timer
var cardValueMax; // The max range of the value for each matrix card
var cardValueMin; // The min range of the value for each matrix card
var divisionCardValueMax; // The max range of the value for each matrix card during division
var divisionCardValueMin; // The min range of the value for each matrix card during division
var firstRevealWave; // 1st set of card reveals 
var secondRevealWave; // 2nd set of card reveals 
var thirdRevealWave; // 3rd set of card reveals 
	
// Deal the cards
function dealCards() {
	var interval;
	$("#animationCard11").animate({ // Move to the answer card position and shrink
			left: '71.1vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},150, function() {		
	$("#animationCard10").animate({ // Move to the operator card position and shrink
			left: '20.7vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},150, function(){
	$("#animationCard9").animate({ // Move to the r3c3 position
			left: '58vw',
			top: '43.75vh',
		},150, function(){
	$("#animationCard8").animate({ // Move to the r3c2 position
			left: '33.6vw',
			top: '43.75vh',
		},150, function(){
	$("#animationCard7").animate({ // Move to the r3c1 position
			left: '9.5vw',
			top: '43.75vh',
		},150, function(){
	$("#animationCard6").animate({ // Move to the r2c3 position
			left: '58vw',
			top: '21.8vh',
		},150, function(){
	$("#animationCard5").animate({ // Move to the r2c2 position
			left: '33.6vw',
			top: '21.8vh',
		},150, function(){
	$("#animationCard4").animate({ // Move to the r2c1 position
			left: '9.5vw',
			top: '21.8vh',
		},150, function(){
	$("#animationCard3").animate({ // Move to the r1c3 position
			left: '58vw',
			top: '0vh',
		},150, function(){
	$("#animationCard2").animate({ // Move to the r1c2 position
			left: '33.6vw',
			top: '0vh',
		},150, function(){ // Change background color and border style of all matrix card's backside's
	for (var i = 1; i <= 3; i++) {
		for (var k = 1; k <=3; k++) {
			getId('r' + i + 'c' + k + 'Back').style.backgroundColor = "#263545"; // Navy blue
			getId('r' + i + 'c' + k + 'Back').style.border = "1px solid #000000"; // Solid black border
		}
	}
	getId('eqCard2Back').style.backgroundColor = "#800000"; // Red
	getId('eqCard2Back').style.border = "1px solid #000000"; // Solid black border
	getId('eqCard4Back').style.backgroundColor = "#800000";	// Red
	getId('eqCard4Back').style.border = "1px solid #000000"; // Solid black border
	setTimeout(hideAnimations, 450);
		});		
		});	
		});	
		});		
		});		
		});		
		});	
		});	
		});
		});
}

// Abbreviated getElementByID
function getId(id) {
	var element = document.getElementById(id); 
	if (element == null) { 
		alert ('programmer error: ' + id + ' does not exist.');
	}
	return element;			
	}
	
// Hide all animation divisions
function hideAnimations() {
	for (var i = 1; i <= 11; i++) {
		$("#animationCard" + i).css("visibility", "hidden");	
	}	
	setDifficulty();
	timer = setInterval(myTimer, 1000); // Begin the in-game card reveals. Execute Every 1000 milliseconds 
}

// Level difficulty
function setDifficulty() {
	if (level < 10) {
		cardValueMin = 1;
		cardValueMax = 10;
		divisionCardValueMin = 1;
		divisionCardValueMax = 9;
		firstRevealWave = 2;
		secondRevealWave = 4;
		thirdRevealWave = 9;
	} else if (level == 10) {
		cardValueMin = -2;
		cardValueMax = 12;
		divisionCardValueMin = 1;
		divisionCardValueMax = 12;
		firstRevealWave = 2;
		secondRevealWave = 4;
		thirdRevealWave = 8;
		points = 50; // Increase the base amount of points per level
	} else if (level == 20) {
		cardValueMin = 15;
		cardValueMax = -2;
		divisionCardValueMin = 1;
		divisionCardValueMax = 20;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 8;
		points = 75; // Increase base points
	} else if (level == 30) {
		cardValueMin = -5;
		cardValueMax = 36;
		divisionCardValueMin = 1;
		divisionCardValueMax = 144;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 7;		
		points = 100; 
		multiplier = 5; // Unlock 5x multiplier
	} else if (level == 40) { 
		cardValueMin = -10;
		cardValueMax = 156;
		divisionCardValueMin = 1;
		divisionCardValueMax = 144;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 4;
		points = 250; 
	} else if (level == 50) { 
		points = 500; 
	} else if (level == 60) { 
		points = 750; 
		multiplier = 8; // Unlock 8x multiplier
	} else if (level == 70) { 
		points = 1000; 
	} else if (level == 80) { 
		points = 2000; 
	} else if (level == 90) { 
		points = 3000; 
	} else if (level == 100) { 
		points = 5000; 
		multiplier = 10; // Unlock 10x multiplier
	} else if (level == 110) { 
		points = 7500; 
	} else if (level == 120) {  
		points = 9000; 
	} else if (level == 130) {  
		points = 12000; 
	} else if (level == 140) {  
		points = 20000;		
	} else if (level == 150) {  
		points = 35000; 
	}
}

// Timer - Set the reveal times
function myTimer() {	
	seconds++;	
	if (seconds == firstRevealWave) {
		generateOperator(); // Generate a random operator
		fillMatrix(); // Fill the matrix with randomly generated numbers
		generateAnswer(); // Generate an answer from two randomly picked cells within the matrix
		revealOperator(); // Flip the operator card
		revealAnswer(); // Flip the answer card
	} else if (seconds == secondRevealWave) {
		hideAnswer(); // Flip back the answer card
		revealMatrix(); // Flip all matrix cards
	} else if (seconds == thirdRevealWave) {
		hideMatrix(); // Flip back all matrix cards
		seconds = 0; // Reset the seconds to 0 
		clearInterval(timer); // Stop the timer		
		multTimer = setInterval(multiplierTimer, 1000);
	} 
}

// Multiplier timer
function multiplierTimer() {
	mSeconds++;
	if (mSeconds == 2) {
		multiplier = 4;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (mSeconds == 3) {
		multiplier = 3;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (mSeconds == 4) {
		multiplier = 2;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (mSeconds == 5) {
		multiplier = 1;
		getId('multiplierText').innerHTML = "x" + multiplier;
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
	if (operator === "division") { 
		for (i = 0; i < matrix.length; i++) {
			num = Math.floor((Math.random() * divisionCardValueMax) + divisionCardValueMin);
			matrix[i] = num; 
		}
	} else if (operator !== "division") {	
		for (i = 0; i < matrix.length; i++) { 
			num = Math.floor((Math.random() * cardValueMax) + cardValueMin);
			matrix[i] = num;
		}
	} 
	//checkDuplicates(); // Check for duplicate values in the matrix
	// Assign 1st matrix card's frontside to 1st matrix array index. 2nd card = matrix[1],...9th = matrix[8]
	insertValues(); 	
}

// Don't allow for duplicate values in the matrix
function checkDuplicates() {
	var i;
	var k;
	var duplicates = 0;
	for (i = 0; i < matrix.length - 1; i++) {
		for (k = 1; k < matrix.length; k++) {
			if (matrix[i] == matrix[k]) {
			duplicates++;		
			}
		}
	}
	while (duplicates >= 3) {
		fillMatrix();
	}
}

// Copy the values from the matrix array to the front of each matrix card
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

// Generate an answer
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
			if (matrix[i] % matrix [k] == 0 || matrix[k] % matrix [i] == 0) {
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
}

// Hide Operator
function hideOperator() {
	$("#eqCard2").flip(false); // Flip the operator card to its backside	
}

// Reveal Answer
function revealAnswer() {
	var cell = getId('eqCard4FrontText'); // Frontside of the answer card	
	cell.innerHTML = answer; // Assign the frontside the answer value
	$("#eqCard4").flip(true); // Flip the answer card to its frontside
}

// Hide Answer
function hideAnswer() {
	$("#eqCard4").flip(false); // Flip the answer card to its backside
}

// Reveal Matrix
function revealMatrix() {
	$('.matrixCards').flip(true); // Flip all the matrix cards to their frontside
}

// Hide Matrix
function hideMatrix() {
	$('.matrixCards').flip(false); // Flip all the matrix cards to their backside	
}

// Reveal Matrix Card
function revealMatrixCard(rowCol, cardIndexNum, cardNum) {
	if (seconds == 0) {
		incrementClicks(cardNum);
	}
	if (seconds == 0 && numClicks == 1) { // Prevent the user from flipping a card before all reveals finish
		count++; 					   // and from flipping the same card twice 
	}	
	if (count == 1 && numClicks == 1) {
		userSelection[0] = matrix[cardIndexNum]; // Assign the 1st matrix card value to the 1st index in the user selection array
		getId('eqCard1FrontText').innerHTML = matrix[cardIndexNum]; // Assign the 1st matrix card value to the 1st equation card
		$("#" + rowCol + "Back").css("background-color", "#D7DADB"); // Change 1st matric card's backside color to grey 
		$("#" + rowCol + "Back").css("border-style", "dashed"); // Change 1st matrix card's backside border-style to dashed
		$("#animationCard" + cardNum).css("visibility", "visible"); // Make the hidden animate division visible
		$("#animationCard" + cardNum).animate({ // Change size and width of animate div to match equation card dimensions
			left: '0vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard1Back").css("background-color", "#263545"); // Change 1st equation card backside color to Navy blue
			setTimeout(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard" + cardNum).css("visibility", "hidden"); // Hide the animate division
				$('#eqCard1').flip(true); // Flip the 1st equation card to its frontside
			}
		});
	}		
	if (count == 2 && numClicks == 1) { 
		clearInterval(multTimer); // Stop the multiplier timer function
		userSelection[1] = matrix[cardIndexNum]; 
		getId('eqCard3FrontText').innerHTML = matrix[cardIndexNum]; // Assign the 1st matrix card value to the 3rd equation card 
		$("#" + rowCol + "Back").css("background-color", "#D7DADB"); 
		$("#" + rowCol + "Back").css("border-style", "dashed"); 
		$("#animationCard" + cardNum).css("visibility", "visible"); 
		$("#animationCard" + cardNum).animate({ 
			left: '41.4vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},200, function() {
			$("#eqCard3Back").css("background-color", "#263545"); // Change 3rd equation card backside color to Navy blue
			setTimeout(hideAnimator, 450); 
			function hideAnimator() {
				$("#animationCard" + cardNum).css("visibility", "hidden"); 
				$('#eqCard3').flip(true); // Flip the 3rd equation card to its frontside
			}
		});
		setTimeout(checkEquation, 1200); // Check if the equation is true
	}
}

// Get the corresponding matrix card clicks variable to increment
function incrementClicks(cardNum) {
	switch (cardNum) {
		case "1":
			r1c1Clicks++;
			numClicks = r1c1Clicks;
			break;
		case "2":
			r1c2Clicks++;
			numClicks = r1c2Clicks;
			break;
		case "3":
			r1c3Clicks++;
			numClicks = r1c3Clicks;
			break;
		case "4":
			r2c1Clicks++;
			numClicks = r2c1Clicks;
			break;
		case "5":
			r2c2Clicks++;
			numClicks = r2c2Clicks;
			break;
		case "6":
			r2c3Clicks++;
			numClicks = r2c3Clicks;
			break;
		case "7":
			r3c1Clicks++;
			numClicks = r3c1Clicks;
			break;
		case "8":
			r3c2Clicks++;
			numClicks = r3c2Clicks;
			break;
		case "9":
			r3c3Clicks++;
			numClicks = r3c3Clicks;
			break;
	}
}

// Check Equation
function checkEquation(){
	var Symbol;
	var first = userSelection[0]; // The user's 1st selected card value from the matrix
	var second = userSelection[1]; // The user's 2nd selected card value from the matrix	
	if (operator === "addition") {
		if ((first + second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			levelComplete();
		} else {
			levelFailed();
		}
	} else {
		alert('Unable to identify operator during checkEquation');	
	}
}

// Successfully Completed the Equation
function levelComplete() {
	pointsPerLevel = (points * multiplier);
	totalScore += pointsPerLevel; 
    level++; // Increases the level count after each play
    if ((level % 10) === 0 && lives != 3) { // Adds a life every 10 levels
		lives++;
    }
	getId('eqCard4Front').style.backgroundColor = "#29a329"; // Green
	revealAnswer();
    setTimeout(showLevelOverlay, 1000); // Delays showing the overlay after 2 seconds
}

// Failed to Complete the Equation
function levelFailed() {
	lives--;
	getId('eqCard4Front').style.backgroundColor = "#000000"; // Change the answer card's frontside to black
	revealAnswer();
	setTimeout(revealAnswerCards, 500); // Delay revealing the answer cards in the matrix by 0.5 seconds
    if (lives === 0) { // Checks to see if the lives are 0 causing game over
		totalScore = 0;
        setTimeout(playAgain, 2000)
    } else { // If lives are not 0, reshuffle and redeal
        setTimeout(resetLevel, 2500);
        setTimeout(dealCards, 3500);
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
			getId('r1c1Front').style.backgroundColor = "#29a329"; // Change the answer card's frontside to green
			$('#r1c1').flip(true); // Flip the matrix card to its frontside, if not yet flipped
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

// Reset Level
function resetLevel() {
	// Change all card front's and back's to original colors and flip to their back's
	for (var i = 1; i <= 3; i++) {	
		for (var k = 1; k <= 3; k++) {
			$("#r" + i + "c" + k).flip(false); // Flip all cards to their backside 
			getId('r' + i + 'c' + k + 'Front').style.backgroundColor = "#3385ff"; // Sky blue
			getId('r' + i + 'c' + k + 'Back').style.backgroundColor = "#D7DADB"; // Light Gray
			getId('r' + i + 'c' + k + 'Back').style.border = "1px dashed #000000"; // Black
		}
	}

	for (var i = 1; i <= 4; i++) {
		$("#eqCard" + i).flip(false); // Backside
		getId('eqCard' + i + 'Front').style.backgroundColor = "#3385ff"; // Sky blue
		getId('eqCard' + i + 'Back').style.backgroundColor = "#D7DADB"; // Light gray
		getId('eqCard' + i + 'Back').style.border = "1px dashed #000000"; // Black
		if (i == 2 || i == 4) {
			getId('eqCard' + i + 'Front').style.backgroundColor = "#800000"; // Red
		}
	}
	setTimeout(restack, 500); // Restack the Animation Divisions
	// Reset all counters
	count = 0;   
	seconds = 1;
	operator = "";
	mSeconds = 0;
	pointsPerLevel = 0;
	numClicks = 0;
	r1c1Clicks = 0;
	r1c2Clicks = 0;
	r1c3Clicks = 0;
	r2c1Clicks = 0;
	r2c2Clicks = 0;
	r2c3Clicks = 0;
	r3c1Clicks = 0;
	r3c2Clicks = 0;
	r3c3Clicks = 0;
	updateGameStatistics();
}

// Restack the Animation Cards
function restack() {
	getId('animationCard1').style.left = "10.5%";
	getId('animationCard1').style.top = "0%";
	getId('animationCard2').style.left = "10.25%";
	getId('animationCard2').style.top = "-0.5%";
	getId('animationCard3').style.left = "10%";
	getId('animationCard3').style.top = "-0.75%";
	getId('animationCard4').style.left = "9.75%";
	getId('animationCard4').style.top = "-1%";
	getId('animationCard5').style.left = "9.5%";
	getId('animationCard5').style.top = "-1.25%";
	getId('animationCard6').style.left = "9.25%";
	getId('animationCard6').style.top = "-1.5%";
	getId('animationCard7').style.left = "9%";
	getId('animationCard7').style.top = "-1.75%";
	getId('animationCard8').style.left = "8.75%";
	getId('animationCard8').style.top = "-2%";
	getId('animationCard9').style.left = "8.5%";
	getId('animationCard9').style.top = "-2.25%";
	getId('animationCard10').style.left = "8.25%";
	getId('animationCard10').style.top = "-2.5%";
	getId('animationCard11').style.left = "8%";
	getId('animationCard11').style.top = "-2.75%";
	// Resize Animation Cards
	for (var i = 1; i <= 11; i++) {
		getId('animationCard' + i).style.width = "25%";
		getId('animationCard' + i).style.height = "32%";
	}
	// Make animation cards visible
	for (var i = 1; i <= 11; i++) {
		getId('animationCard' + i).style.visibility = "visible";
	}	
}

// Update Game Statistics
function updateGameStatistics() {
	// Post score and set multiplier for next level in-game screen
	getId('pointsText').innerHTML = totalScore + "Pts";
	getId('hexagonText').innerHTML = level;
	if (level < 30) {
		multiplier = 4;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (level >= 30 && level < 60) {
		multiplier = 5;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (level >= 60 && level < 100) {
		multiplier = 8;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (level >= 100) {
		multiplier = 10;
		getId('multiplierText').innerHTML = "x" + multiplier;
	}
}

// Show Overlay
function showOverlay() {
	$("#overlayContainer").fadeIn();
	$("#quitOverlay").fadeIn();
	$("#buttonLeft").fadeIn();
	$("#buttonRight").fadeIn();
    //getId('overlayContainer').style.display = "block";
    //getId('quitOverlay').style.display = "block";
    //getId('buttonLeft').style.display = "block";
    //getId('buttonRight').style.display = "block";
}

// Hide Overlay
function hideOverlay() {
	//$("#levelOverlay").fadeOut();
	//$("#overlayContainer").fadeOut();
	//$("#quitOverlay").fadeOut();
	//$("#buttonLeft").fadeOut();
	//$("#buttonRight").fadeOut();
    getId('levelOverlay').style.display = "none";
    getId('overlayContainer').style.display = "none";
    getId('quitOverlay').style.display = "none";
    getId('buttonLeft').style.display = "none";
    getId('buttonRight').style.display = "none";
}

// Show Current Level Overlay
function showLevelOverlay() {
    hideOverlay();
	$("#overlayContainer").fadeIn();
	$("#levelOverlay").fadeIn();
	$("#buttonLeft").fadeIn();
	$("#buttonRight").fadeIn();
    //getId('overlayContainer').style.display = "block";
    //getId('levelOverlay').style.display = "block";
    //getId('buttonLeft').style.display = "block";
    //getId('buttonRight').style.display = "block";
    getId('buttonLeftText').innerHTML = "Quit";
    getId('buttonRightText').innerHTML = "Play";  
    getId('levelText').innerHTML = "Level " + level; // Increments the level after each play
    getId('tutorialOrHeartsText').innerHTML = "Current Lives: " + lives;
	getId('scoreMultipliedText').innerHTML = points + " pts x " + multiplier;
	getId('normalScoreText').innerHTML = pointsPerLevel + " pts";
	getId('totalPointsText').innerHTML = "Total " + totalScore + " pts";
}

// Play Again
function playAgain() {
    showOverlay();
    getId('quitText').innerHTML = "Would you like to CONTINUE? ";
    getId('buttonLeftText').innerHTML = "No";
    getId('buttonRightText').innerHTML = "Yes";  
}

// Quit Confirm
function quitConfirm() {
	if (seconds == 0) {
		showOverlay();
		getId('quitText').innerHTML = "Are you sure you want to QUIT?";
		getId('buttonLeftText').innerHTML = "Yes";
		getId('buttonRightText').innerHTML = "No";
	}
}

















