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
var levelCompletions = 0; // Number of practice mode levels completed
var lives = 3; // Number of lives; starts at 3
var points = 25; // Total points scored in the current level
var totalScore = 0; // Total points scored across all levels
var multTimer; // Multiplier timer to determine bonus points
var multiplier = 4; // Points multiplier
var pointsPerLevel = 0; // Total points for the current level
var mSeconds = 0; // Seconds counter within the multiplier timer
var cardValueMax = 13; // The max range of the value for each matrix card
var cardValueMin = -6; // The min range of the value for each matrix card
var divisionCardValueMax = 13; // The max range of the value for each matrix card during division
var divisionCardValueMin = -6; // The min range of the value for each matrix card during division
var firstRevealWave = 2; // 1st set of card reveals 
var secondRevealWave = 4; // 2nd set of card reveals 
var thirdRevealWave = 6; // 3rd set of card reveals 
var newHighScore = new Audio("sounds/high_score.mp3"); // Sound clip for the start of the game
var highScoreCounter = 0; // Only play the high score audio the first time
var gameStart = new Audio("sounds/game_start.mp3"); // Sound clip for the start of the game
var gamePlay1 = new Audio("sounds/game_play1.mp3"); // Sound clip in-game play
var gamePlay2 = new Audio("sounds/game_play2.mp3"); // Sound clip in-game play
var gamePlay3 = new Audio("sounds/game_play3.mp3"); // Sound clip in-game play
var gamePlay4 = new Audio("sounds/game_play4.mp3"); // Sound clip in-game play
var gamePlay5 = new Audio("sounds/game_play5.mp3"); // Sound clip in-game play
var gamePlayMusic = [gamePlay1, gamePlay2, gamePlay3, gamePlay4, gamePlay5]; // in-game music loop
var flip = new Audio("sounds/flip.wav"); // Sound clip for card flip
var fail = new Audio("sounds/level_fail.mp3"); // Sound clip for level failed
var gameOver = new Audio("sounds/game_over.mp3"); // Sound clip for game over
var success = new Audio("sounds/success.mp3"); // Sound clip for success
var deal = new Audio("sounds/Dealing1.wav"); // Sound clip for dealing
var firstClick = new Audio("sounds/card_pick.mp3"); // Sound clip for mouse click
var secondClick = new Audio("sounds/card_pick.mp3"); // Sound clip for mouse click
var hexOrange = "images/orange.png"; // Orange hexagon
var hexBlue = "images/blue.png"; // Orange hexagon
var hexGrey = "images/grey.png"; // Grey hexagon
var hexLime = "images/lime.png"; // Lime hexagon
var hexPink = "images/pink.png"; // Pink hexagon
var hexPurple = "images/purple.png"; // Purple hexagon
var hexRed = "images/red.png"; // Red hexagon
var hexTeal = "images/teal.png"; // Teal hexagon
var hexYellow = "images/yellow.png"; // Yellow hexagon
var hexGreen = "images/green.png"; // Green hexagon
var hexImgArray = [ // Stores the hexagons into an arry
    hexOrange,
    hexBlue,
    hexGrey,
    hexLime,
    hexPink,
    hexPurple,
    hexRed,
    hexTeal,
    hexYellow,
    hexGreen
];
var hexCount = 0; // Count for looping hexagon images