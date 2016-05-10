$(document).ready(function(){ 
	$(".menuCards").flip({ // Menu Cards
		axis: 'y',
		trigger: 'manual',
		front: ".back",
		back: ".front"	
	});
	$("#animationCardPlay").onload(function() { // Spreads the menu cards
		dealCards();
	});
});

// Global Variables
var count = 0; // Total number of user executed card flips for all cards
var modePlay = 0; // Total number of user executed card flips on card 1 
var modePractice = 0; // card 2 
var modeScoreboard = 0; // card 3
var menu = [1, 2, 3]; // The Menu Card Values
var answer; // The Answer to the Equation
var timer; // Card dealing and revealing timer
var seconds = 1; // Seconds counter within the timer

// Deal the cards
function dealCards() {
	var interval;
	$("#animationCardPlay").animate({ // Move to the answer card position and shrink
			left: '71.1vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},150, function() {		
	$("#animationCardPractice").animate({ // Move to the operator card position and shrink
			left: '20.7vw',
			top: '67vh',
			height: '15vh',
			width: '18.9vw'
		},150, function(){
	$("#animationCardScoreboard").animate({ // Move to the r3c3 position
			left: '58vw',
			top: '43.75vh',
		},150, function(){ // Change background color and border style of all matrix card's backside's
	
			getId('modePlay' + 'Back').style.backgroundColor = "#263545"; // Navy blue
			getId('modePlay' + 'Back').style.borderStyle = "1px solid #000000"; // Solid black border
			getId('modePractice' + 'Back').style.backgroundColor = "#263545"; // Navy blue
			getId('modePractice' + 'Back').style.borderStyle = "1px solid #000000"; // Solid black border
			getId('modeScoreboard' + 'Back').style.backgroundColor = "#263545"; // Navy blue
			getId('modeScoreboard' + 'Back').style.borderStyle = "1px solid #000000"; // Solid black border
	
	setTimeout(hideAnimations, 450);
		});		
		});
}

function hideAnimations() {
	$("#animationCard" + 'Play').css("visibility", "hidden");	
	$("#animationCard" + 'Practice').css("visibility", "hidden");	
	$("#animationCard" + 'Scoreboard').css("visibility", "hidden");	
		
	timer = setInterval(myTimer, 1000); // Begin the in-game card reveals. Execute Every 1 Second(s) 
}