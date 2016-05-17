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
        switch (getId('buttonLeftText').innerHTML) {
            case 'Yes': // Quit Confirm overlay
                goToStartScreen();
                break;
            case 'End': // Pause Game
                mainMenu();
                break;
            case 'Reset': // High Score Prompt
                getId('nameForm').reset();
                break;
            default: // Current Level and Play Again overlay
                hideOverlay();
                quitConfirm();
        }
	});
	$("#buttonRight").click(function() {
		switch (getId('buttonRightText').innerHTML) {
		    case 'No': // Quit Confirm Overlay
                if (lives === 0) {
                    playAgain();
                } else {
					showLevelOverlay();
                }
                break;
            case 'Back': // Main Menu Overlay
                pauseGame();
                break;
            case 'Resume': // Pause Game Overlay
                multTimer = setInterval(multiplierTimer, 1000);
                hideOverlay();
                hideOverlayContainer();
                break;
            case 'Yes': // Play Again Overlay
                if (lives === 0) {
                    level = 1;
                    lives = 3;
					totalScore = 0;
                    fullLives();
                    fadeLevelOverlay();
					getId('scoreMultipliedText').innerHTML = points + " pts x 0";
                    getId('hexagonTextOverlay').innerHTML = "1";
                    getId('passOrFail').style.display = "none";
                } else {
                    showLevelOverlay();
                }
                break;
            case 'Submit': // High Score Prompt
                // Insert Submit Function
                break;
            default: // Current Level Overlay
                hideOverlay();
                hideOverlayContainer();
                resetLevel();
                hexColour();
                setTimeout(dealCards, 500);
				hexColour();
        }
	});
    $("#back").click(function() {
		clearInterval(multTimer);
        fadePauseGame();
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
var numClicks = 0; // Used in determining which matrix clicks variable (listed above) to call
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
var flip = new Audio("sounds/flip.wav"); //sound clip for card flip
var fail = new Audio("sounds/fail.wav"); //sound clip for game over
var success = new Audio("sounds/success.wav"); //sound clip for success
var wrong = new Audio("sounds/wrong.mp3"); //sound clip for wrong answer
var easterEggCounter = 0; // Counter for easter egg
var deal = new Audio("sounds/Dealing1.wav"); //sound clip for dealing
var whoosh = new Audio("sounds/whoosh.wav"); //sound clip for card movement
var click = new Audio("sounds/click.wav"); //sound clip for mouse click
	
// Deal the cards
function dealCards() {
	var interval;
    deal.play();
	$("#animationCard11").animate({ // Move to the answer card position and shrink
			left: '71.1vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},150, function(){		
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
        deal.pause();
	}
    
	getId('eqCard2Back').style.backgroundColor = "#800000"; // Red
	getId('eqCard2Back').style.border = "1px solid #000000"; // Solid black border
	getId('eqCard4Back').style.backgroundColor = "#800000";	// Red
	getId('eqCard4Back').style.border = "1px solid #000000"; // Solid black border
    easterEgg(); // Put easter eggs on card backs if condition is met
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
	if (level < 5) {
		cardValueMin = 1;
		cardValueMax = 10;
		divisionCardValueMin = 1;
		divisionCardValueMax = 12;
		firstRevealWave = 2;
		secondRevealWave = 4;
		thirdRevealWave = 7;
	} else if (level == 5) {
		cardValueMin = 1;
		cardValueMax = 12;
		divisionCardValueMin = 1;
		divisionCardValueMax = 12;
		firstRevealWave = 2;
		secondRevealWave = 4;
		thirdRevealWave = 7;
		points = 50; // Increase the base amount of points per level
	} else if (level == 10) {
		cardValueMin = -1;
		cardValueMax = 15;
		divisionCardValueMin = 1;
		divisionCardValueMax = 20;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 7;
		points = 75; // Increase base points
	} else if (level == 15) {
		cardValueMin = -5;
		cardValueMax = 25;
		divisionCardValueMin = 1;
		divisionCardValueMax = 40;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 7;		
		points = 100; 
		multiplier = 5; // Unlock 5x multiplier
	} else if (level == 20) { 
		cardValueMin = -10;
		cardValueMax = 50;
		divisionCardValueMin = 1;
		divisionCardValueMax = 70;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 250; 
	} else if (level == 25) {
		cardValueMin = -10;
		cardValueMax = 60;
		divisionCardValueMin = 1;
		divisionCardValueMax = 100;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 500; 
	} else if (level == 30) {
		cardValueMin = -10;
		cardValueMax = 70;
		divisionCardValueMin = 1;
		divisionCardValueMax = 144;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 750; 
		multiplier = 8; // Unlock 8x multiplier
	} else if (level == 35) { 
		cardValueMin = -10;
		cardValueMax = 80;
		divisionCardValueMin = -1;
		divisionCardValueMax = 144;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 6;
		points = 1000; 
	} else if (level == 40) { 
		cardValueMin = -10;
		cardValueMax = 90;
		divisionCardValueMin = -1;
		divisionCardValueMax = 160;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 5;
		points = 2000; 
	} else if (level == 45) { 
		cardValueMin = -10;
		cardValueMax = 100;
		divisionCardValueMin = -1;
		divisionCardValueMax = 200;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 5;
		points = 3000; 
	} else if (level == 50) { 
		cardValueMin = -20;
		cardValueMax = 20;
		divisionCardValueMin = -10;
		divisionCardValueMax = 20;
		firstRevealWave = 2;
		secondRevealWave = 3;
		thirdRevealWave = 5;
		points = 5000; 
		multiplier = 10; // Unlock 10x multiplier
	} else if (level == 55) { 
		points = 7500; 
	} else if (level == 60) {  
		points = 9000; 
	} else if (level == 65) {  
		points = 12000; 
	} else if (level == 70) {  
		points = 20000;		
	} else if (level == 80) {  
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
			while (num == matrix[0] || num == matrix[1] || num == matrix[2] || num == matrix[3] || num == matrix[4] 
			|| num == matrix[5] || num == matrix[6] || num == matrix[7] || num == matrix[8]) {
				num = Math.floor((Math.random() * divisionCardValueMax) + divisionCardValueMin);
			}
		matrix[i] = num;
		}
	}
	if (operator !== "division") {	
		for (i = 0; i < matrix.length; i++) { 
			num = Math.floor((Math.random() * cardValueMax) + cardValueMin);
			while (num == matrix[0] || num == matrix[1] || num == matrix[2] || num == matrix[3] || num == matrix[4] 
			|| num == matrix[5] || num == matrix[6] || num == matrix[7] || num == matrix[8]) {
				num = Math.floor((Math.random() * divisionCardValueMax) + divisionCardValueMin);
			}
		matrix[i] = num;
		}
	} 
	// Assign 1st matrix card's frontside to 1st matrix array index. 2nd card = matrix[1],...9th = matrix[8]
	insertValues(); 	
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
    flip.play();
}

// Hide Operator
function hideOperator() {
	$("#eqCard2").flip(false); // Flip the operator card to its backside
	flip.play();	
}

// Reveal Answer
function revealAnswer() {
	var cell = getId('eqCard4FrontText'); // Frontside of the answer card	
	cell.innerHTML = answer; // Assign the frontside the answer value
	$("#eqCard4").flip(true); // Flip the answer card to its frontside
    flip.play();
}

// Hide Answer
function hideAnswer() {
	$("#eqCard4").flip(false); // Flip the answer card to its backside
    flip.play();
}

// Reveal Matrix
function revealMatrix() {
	$('.matrixCards').flip(true); // Flip all the matrix cards to their frontside
    flip.play();
}

// Hide Matrix
function hideMatrix() {
	$('.matrixCards').flip(false); // Flip all the matrix cards to their backside	
    flip.play();
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
        getId(rowCol + 'Img').src = "images/egg_empty.png"; // Removes the easter egg from the card's back
		$("#" + rowCol + "Back").css("background-color", "#D7DADB"); // Change 1st matric card's backside color to grey 
		$("#" + rowCol + "Back").css("border-style", "dashed"); // Change 1st matrix card's backside border-style to dashed
		$("#animationCard" + cardNum).css("visibility", "visible"); // Make the hidden animate division visible
        click.play();
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
                flip.play();
				$('#eqCard1').flip(true); // Flip the 1st equation card to its frontside
				flip.play();
			}
		});
	}		
    whoosh.play();
	if (count == 2 && numClicks == 1) { 
		clearInterval(multTimer); // Stop the multiplier timer function
		userSelection[1] = matrix[cardIndexNum]; 
		getId('eqCard3FrontText').innerHTML = matrix[cardIndexNum]; // Assign the 1st matrix card value to the 3rd equation card
        getId(rowCol + 'Img').src = "images/egg_empty.png"; // Removes the easter egg from the card's back
		$("#" + rowCol + "Back").css("background-color", "#D7DADB"); 
		$("#" + rowCol + "Back").css("border-style", "dashed"); 
		$("#animationCard" + cardNum).css("visibility", "visible"); 
        click.play();
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
                flip.play();
				$('#eqCard3').flip(true); // Flip the 3rd equation card to its frontside
				flip.play();
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
            success.play();
		} else {
			levelFailed();
            wrong.play();
		}
	} else if(operator === "subtraction") {
		if ((first - second) == answer) {
			levelComplete();
            success.play();
		} else {
			levelFailed();
            wrong.play();
		}
	} else if(operator === "multiplication") {
		if ((first * second) == answer) {
			levelComplete();
            success.play();
		} else {
			levelFailed();
            wrong.play();
		}
	} else if(operator === "division") {
		if ((first / second) == answer) {
			levelComplete();
            success.play();
		} else {
			levelFailed();
            wrong.play();
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
    getId('passOrFailText').innerHTML = "Complete!";
    if ((level % 10) === 1 && lives != 3) { // Adds a life every 10 levels
		lives++;
        setTimeout(gainingLife, 500);
        getId('gainedHeartText').style.display = "block";
    } else {
        getId('gainedHeartText').style.display = "none";
    }
	getId('eqCard4Front').style.backgroundColor = "#29a329"; // Green
	revealAnswer();
    setTimeout(fadeLevelOverlay, 1000); // Delays showing the overlay after 1 seconds
}

// Failed to Complete the Equation
function levelFailed() {
	lives--;
    setTimeout(losingLife, 1500);
	getId('eqCard4Front').style.backgroundColor = "#000000"; // Change the answer card's frontside to black
	revealAnswer();
	setTimeout(revealAnswerCards, 500); // Delay revealing the answer cards in the matrix by 0.5 seconds
    if (lives === 0) { // Checks to see if the lives are 0 causing game over
        setTimeout(fadePlayAgain, 2000)
    } else { // If lives are not 0, reshuffle and redeal
        setTimeout(resetLevel, 2500);
        setTimeout(dealCards, 3500);
    }
}

// Reveal the answer cards
function revealAnswerCards() {
	flipAnswerCard(answerCard1);
    flip.play();
	flipAnswerCard(answerCard2);
    flip.play();
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
	seconds = 1;
	updateGameStatistics();
}

// Restack the Animation Cards
function restack() {
    hideEasterEgg(); // Removes easter eggs from all card backs
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
	if (level < 15) {
		multiplier = 4;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (level >= 15 && level < 30) {
		multiplier = 5;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (level >= 30 && level < 50) {
		multiplier = 8;
		getId('multiplierText').innerHTML = "x" + multiplier;
	} else if (level >= 50) {
		multiplier = 10;
		getId('multiplierText').innerHTML = "x" + multiplier;
	}
}

// Hide Overlay Container
function hideOverlayContainer() {
    $("#overlayContainer").fadeOut();
}

// Show Overlay
function showOverlay() {
    getId('overlayContainer').style.display = "block";
    getId('quitOverlay').style.display = "block";
    getId('buttonLeft').style.display = "block";
    getId('buttonRight').style.display = "block";
}

// Fade Overlay
function fadeOverlay() {
    $("#overlayContainer").fadeIn();
	$("#quitOverlay").fadeIn();
	$("#buttonLeft").fadeIn();
	$("#buttonRight").fadeIn();
}

// Hide Overlay
function hideOverlay() {
    getId('levelOverlay').style.display = "none";
    getId('quitOverlay').style.display = "none";
    getId('buttonLeft').style.display = "none";
    getId('buttonRight').style.display = "none";
    getId('playAgain').style.display = "none";
}

// Show Current Level Overlay
function showLevelOverlay() {
    hideOverlay();
	if (level != 1) {
		getId('tutorial').style.display = "none";
		getId('passOrFail').style.display = "block";
		getId('hexagonTextOverlay').innerHTML = level - 1; // Increments the level after each play
	} 
	getId('overlayContainer').style.display = "block";
	getId('levelOverlay').style.display = "block";
	getId('buttonLeft').style.display = "block";
	getId('buttonRight').style.display = "block";
    getId('scoreMultiplied').style.display = "block";
    getId('normalScore').style.display = "block";
	getId('buttonLeftText').innerHTML = "Quit";
	getId('buttonRightText').innerHTML = "Play";  
	getId('scoreMultipliedText').innerHTML = points + " pts x " + multiplier;
	getId('normalScoreText').innerHTML = pointsPerLevel + " pts";
	getId('totalPointsText').innerHTML = "Total " + totalScore + " pts";
}

// Fade Current Level Overlay
function fadeLevelOverlay() {
    hideOverlay();
	$("#overlayContainer").fadeIn();
	$("#levelOverlay").fadeIn();
	$("#buttonLeft").fadeIn();
	$("#buttonRight").fadeIn();
    getId('scoreMultiplied').style.display = "block";
    getId('normalScore').style.display = "block";
    getId('buttonLeftText').innerHTML = "Quit";
    getId('buttonRightText').innerHTML = "Play";  
	getId('scoreMultipliedText').innerHTML = points + " pts x " + multiplier;
	getId('normalScoreText').innerHTML = pointsPerLevel + " pts";
	getId('totalPointsText').innerHTML = "Total " + totalScore + " pts";
    if (level != 1) {
        getId('tutorial').style.display = "none";
        getId('passOrFail').style.display = "block";
        getId('hexagonTextOverlay').innerHTML = level - 1;
	}
	if (lives == 0) {
		getId('scoreMultipliedText').innerHTML = points + " pts x 0";
	}
}

// Play Again
function playAgain() {
    showLevelOverlay();
    getId('tutorial').style.display = "none";
    getId('passOrFail').style.display = "block";
    getId('hexagonTextOverlay').innerHTML = level;
    getId('passOrFailText').innerHTML = "Failed!";
    getId('buttonLeftText').innerHTML = "No";
    getId('buttonRightText').innerHTML = "Yes";
    getId('playAgain').style.display = "block";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
}

// Fade Play Again
function fadePlayAgain() {
    fadeLevelOverlay();
    getId('tutorial').style.display = "none";
    getId('passOrFail').style.display = "block";
    getId('hexagonTextOverlay').innerHTML = level;
    getId('passOrFailText').innerHTML = "Failed!";
    getId('buttonLeftText').innerHTML = "No";
    getId('buttonRightText').innerHTML = "Yes";
    getId('playAgain').style.display = "block";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
}

// High Score
function highScore() {
    fadeLevelOverlay();
    getId('currentLevel').style.display = "none";
    getId('passOrFail').style.display = "none";
    getId('scoreMultiplied').style.display = "none";
    getId('normalScore').style.display = "none";
    getId('pointsDivider').style.display = "none";
    getId('tutorialOrHearts').style.display = "none";
    getId('congrats').style.display = "block";
    getId('highScore').style.display = "block";
    getId('enterName').style.display = "block";
    getId('nameBoxContainer').style.display = "block";
    getId('buttonLeftText').innerHTML = "Reset";
    getId('buttonRightText').innerHTML = "Submit";
}

// Quit Confirm
function quitConfirm() {
	showOverlay();
	getId('quitText').innerHTML = "Are you sure you<br>want to QUIT?";
	getId('buttonLeftText').innerHTML = "Yes";
	getId('buttonRightText').innerHTML = "No";
}

// Fade Pause Game
function fadePauseGame() {
    if (seconds == 0 && count <= 1) {
        hideOverlay();
        fadeOverlay();
	    getId('quitText').innerHTML = "Game is PAUSED.";
	    getId('buttonLeftText').innerHTML = "End";
	    getId('buttonRightText').innerHTML = "Resume";
    }
}

// Pause Game
function pauseGame() {
    if (seconds == 0 && count <= 1) {
        hideOverlay();
        showOverlay();
	    getId('quitText').innerHTML = "Game is PAUSED.";
	    getId('buttonLeftText').innerHTML = "End";
	    getId('buttonRightText').innerHTML = "Resume";
    }
}

// Main Menu
function mainMenu() {
    hideOverlay();
    showOverlay();
    getId('quitText').innerHTML = "Go to the MAIN MENU?";
	getId('buttonLeftText').innerHTML = "Yes";
	getId('buttonRightText').innerHTML = "Back";
}

//Changing the Hex Colour
function hexColour() {
	if ( level >= 5 && level < 10) {
		getId('hexImg').src= "images/gray.png";
		getId('hexImgOverlay').src= "images/gray.png";
	}
	else if ( level >= 10 && level < 15) {
		getId('hexImg').src= "images/red.png";
		getId('hexImgOverlay').src= "images/red.png";
	}
	else if ( level >= 15 && level < 20) {
		getId('hexImg').src= "images/purple.png";
		getId('hexImgOverlay').src= "images/purple.png";
	}
	else if ( level >= 20 && level < 25) {
		getId('hexImg').src= "images/blue.png";
		getId('hexImgOverlay').src= "images/blue.png";
	}
	else if ( level >= 25 && level < 30) {
		getId('hexImg').src= "images/yellow.png";
		getId('hexImgOverlay').src= "images/yellow.png";
	}
	else if ( level >= 30 && level < 35) {
		getId('hexImg').src= "images/green.png";
		getId('hexImgOverlay').src= "images/green.png";
	}
	else if ( level >= 35 && level < 40) {
		getId('hexImg').src= "images/pink.png";
		getId('hexImgOverlay').src= "images/pink.png";
	}
	else if ( level >= 40 && level < 45) {
		getId('hexImg').src= "images/cyan.png";
		getId('hexImgOverlay').src= "images/cyan.png";
	}
	else if ( level >= 50) {
		getId('hexImg').src= "images/black.png";
		getId('hexImgOverlay').src= "images/black.png";
	}
}

// Full Lives
function fullLives() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartfull.png";
    getId('hearts3').src= "images/heartfull.png";
}


// Two Lives
function twoLives() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartfull.png";
    getId('hearts3').src= "images/heartempty.png";    
}

// One Life
function oneLife() {
    getId('hearts1').src= "images/heartfull.png";
    getId('hearts2').src= "images/heartempty.png";
    getId('hearts3').src= "images/heartempty.png";
}

// No lives
function noLives() {
    getId('hearts1').src= "images/heartempty.png";
    getId('hearts2').src= "images/heartempty.png";
    getId('hearts3').src= "images/heartempty.png";
}

// Losing Life
function losingLife() {
    switch (lives) {
        case 2:
			twoLives();
			break;
		case 1:
			oneLife();
			break;
		case 0:
			noLives();
			break;
    }
}

// Gaining Life
function gainingLife() {
    switch (lives) {
        case 3:
			fullLives();
			break;
		case 2:
			twoLives();
			break;
		case 1:
			oneLife();
			break;
    }
}
//Changing the Hex Colour
function hexColour() {
	if ( level >= 5 && level < 10) {
		getId('hexImg').src= "images/gray.png";
		getId('hexImgOverlay').src= "images/gray.png";
	}
	else if ( level >= 10 && level < 15) {
		getId('hexImg').src= "images/red.png";
		getId('hexImgOverlay').src= "images/red.png";
	}
	else if ( level >= 15 && level < 20) {
		getId('hexImg').src= "images/purple.png";
		getId('hexImgOverlay').src= "images/purple.png";
	}
	else if ( level >= 20 && level < 25) {
		getId('hexImg').src= "images/blue.png";
		getId('hexImgOverlay').src= "images/blue.png";
	}
	else if ( level >= 25 && level < 30) {
		getId('hexImg').src= "images/yellow.png";
		getId('hexImgOverlay').src= "images/yellow.png";
	}
	else if ( level >= 30 && level < 35) {
		getId('hexImg').src= "images/green.png";
		getId('hexImgOverlay').src= "images/green.png";
	}
	else if ( level >= 35 && level < 40) {
		getId('hexImg').src= "images/pink.png";
		getId('hexImgOverlay').src= "images/pink.png";
	}
	else if ( level >= 40 && level < 45) {
		getId('hexImg').src= "images/cyan.png";
		getId('hexImgOverlay').src= "images/cyan.png";
	}
	else if ( level >= 50) {
		getId('hexImg').src= "images/black.png";
		getId('hexImgOverlay').src= "images/black.png";
	}
}

// Display Crown
function displayCrown() {
    getId('crown').style.display = "block";
}

// Display Crown
function displayCrown() {
    getId('crown').style.display = "block";
}

// Increments the easter egg counter
function easterEggTrigger() {
    easterEggCounter++;
}

// Puts easter eggs on card backs randomly in specified conditions
function easterEgg() {
    if (easterEggCounter >= 26) {
        showEasterEgg();
        easterEggCounter = 0; // Resets the easter egg counter
    } else if (easterEggCounter == 0) {
        hideEasterEgg();
    }
}

// Shows easter eggs on the card backs
function showEasterEgg() {
    for (var i = 1; i <= 3; i++) {
		for (var k = 1; k <=3; k++) {
            getId('r' + i + 'c' + k + 'Img').src = "images/egg" + (Math.floor(Math.random() * 5) + 1) + ".jpg";
            getId('r' + i + 'c' + k + 'Img').setAttribute("Width", "100%");
	    }
    }
}

// Hides easter eggs from the card backs
function hideEasterEgg() {
    for (var i = 1; i <= 3; i++) {
		for (var k = 1; k <=3; k++) {
            getId('r' + i + 'c' + k + 'Img').src = "images/egg_empty.png";
        }
    }
}
