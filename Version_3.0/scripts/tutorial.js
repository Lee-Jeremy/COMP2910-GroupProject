// Show tutorial
function displayTutorial() {
	if (tutorialCounter == 0){
		hideOverlay();
		showOverlay();
		getId('quitText').innerHTML = "Memorize the <mark>ANSWER</mark> card at the bottom";
		getId('buttonRightText').innerHTML = "Next";
		getId('buttonLeftText').innerHTML = "Back";
	}	
}
function tutorial() {
	if (tutorialCounter == 1){
	hideOverlay();
	hideOverlayContainer();
	
	//deals the cards without any inputs due to stopping the hide animations
	dealCards();
	//Hard-coded operator "addition"
	tutorialOperator();
	//it reveals the operator
	setTimeout(revealOperator,2000);
	
	//hard coded matrix 
	tutorialMatrix();
	
	
	//sets the answer card
	setTimeout(tutorialAnswer,2000);
	
	// reveals answer
	setTimeout(revealAnswer,2000);

	//Makes the card flip yellow for answer
	getId('eqCard4Front').style.backgroundColor = "yellow"; 
	//Makes the card flip red for operator
	getId('eqCard2Front').style.backgroundColor = "#800000";
	
	// increments the tutorial counter to the next line
	tutorialCounter++;
	//Waits until animation is complete to go onto next tutorial overlay
	setTimeout(tutorial1,3500);
}
}
function tutorial1() {
	if (tutorialCounter == 2){
		hideOverlay();
		fadeOverlay();
		getId('quitText').innerHTML = "Memorize the <mark>MATRIX</mark> to equal the <mark>ANSWER</mark>";
}
}

function tutorial2() {
	if (tutorialCounter == 3){
	hideOverlay();
	hideOverlayContainer();
	// changing color of all the matrix cars to yellow
	getId('r1c1Front').style.backgroundColor = "yellow"; 
	getId('r1c2Front').style.backgroundColor = "yellow"; 
	getId('r1c3Front').style.backgroundColor = "yellow"; 
	getId('r2c1Front').style.backgroundColor = "yellow"; 
	getId('r2c2Front').style.backgroundColor = "yellow"; 
	getId('r2c3Front').style.backgroundColor = "yellow"; 
	getId('r3c1Front').style.backgroundColor = "yellow"; 
	getId('r3c2Front').style.backgroundColor = "yellow"; 
	getId('r3c3Front').style.backgroundColor = "yellow"; 
	
	// reveals answer
	setTimeout(hideAnswer,2000);

	//Flips over the matrix
	setTimeout(revealMatrix,2000);
	
	// increments the tutorial counter to the next line
	tutorialCounter++;	
	setTimeout(tutorial3,3500);

}
}

function tutorial3() {
	if (tutorialCounter == 4){
		hideOverlay();
		fadeOverlay();
		getId('quitText').innerHTML = "Click on 2 cards from the matrix to solve the <mark>ANSWER</mark>";
}
	}
function tutorial4() {
	if (tutorialCounter == 5){
		hideOverlay();
		hideOverlayContainer();
		hideMatrix();
		tutorialAnswer();
		hideAnswer();

		tutorialCounter++;

	}
}
function tutorial5() {
	if (tutorialCounter == 6){
		hideOverlay();
		fadeOverlay();
		getId('quitText').innerHTML = "More points are rewarded by solving the <br>answer quickly.<br><br>Difficulty increases every 5 levels.";
}
	}
	
//Tutorial Operator hard coded as addition
function tutorialOperator () {
	operator = "addition";
}
// Assigns each of the matrix card a value
function tutorialMatrix(){
	matrix[0] = 5; 
	matrix[1] = 3;  
	matrix[2] = 8;  
	matrix[3] = 1;  
	matrix[4] = 4;  
	matrix[5] = 6;  
	matrix[6] = 2;  
	matrix[7] = 7; 
	matrix[8] = 9; 
	// inserts the hard coded values into the matrix
	insertValues();
}
// Hard coding an answer
function tutorialAnswer() {
	answer = (matrix[0] + matrix[4]);
	// when the matrix card reveals from revealAnswerCards will show these 2 points
	answerCard1 = matrix [0];
	answerCard2 = matrix [3];
}


// tutorial option for checking the answer
function tutorialEquation() {
	var first = userSelection[0]; // The user's 1st selected card value from the matrix
	var second = userSelection[1]; // The user's 2nd selected card value from the matrix
 if(operator === "addition") {
	 //if answer is right will show the answer at the bottom and move onto next tutorial
		if ((first + second) == answer) {
			setTimeout(tutorial5,2000);
			revealAnswer();
		} else {
			//if wrong will reset all the counters and redeal the cards
			modifiedReset();
			modifiedDealCards();
			//have to reput tutorial operator due to reset in cards
			setTimeout(tutorialOperator,1500);
			setTimeout(revealOperator,2000);
			setTimeout(revealAnswer,2000);
			setTimeout(revealAnswerCards,2000);
			setTimeout(tutorial5,3000);
		}
	}
}
// resets all the card values except the matrix
function modifiedReset() {
	// Change all card front's and back's to original colors and flip to their back's
	for (var i = 1; i <= 3; i++) {	
		for (var k = 1; k <= 3; k++) {
			//flips all of the cards to the backside
			$("#r" + i + "c" + k).flip(false); // Flip all cards to their backside 
		}
	}

	for (var i = 1; i <= 4; i++) {
		$("#eqCard" + i).flip(false); // Backside
		//flips the bottom 4 cards to the backside
		if (i == 2 || i == 4) {
			getId('eqCard' + i + 'Front').style.backgroundColor = "#800000"; // Red
		}
	}
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
}

// redeals the cards that went to the bottom to refill the matrix
function modifiedDealCards() {
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