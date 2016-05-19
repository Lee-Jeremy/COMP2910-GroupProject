/**
 * Global Vaiables
 */
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