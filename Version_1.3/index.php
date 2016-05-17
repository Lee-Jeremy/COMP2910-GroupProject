<?php
$servername = "server31.000webhost.com";
$username = "a4755161_team26";
$password = "abc123";
$dbname = "a4755161_scores";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sqlName = "SELECT name, scores FROM HighScores ORDER BY score DESC";
$resultName = $conn->query($sql);

$sqlScores = "SELECT scores FROM HighScores";
$resultScores = $conn->query($sql);

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Mathemagics v2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="base.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.rawgit.com/nnattawat/flip/v1.0.20/dist/jquery.flip.min.js"></script>
        <script src="myscripts.js"></script>
    </head>
    <body>
        <!--- Wrapper --->
        <div id="wrapper">

            <!------------ Header ------------>
            <div id="header" class="container">
                <div id="back">
                    <div id="backImgContainer">
                        <img id="backImg" src="images/pause2.png" alt="pause"> <!-- Back Button -->
                    </div>
                </div>
                <div id="crown">
                    <div id="crownImgContainer">
                        <img id="crownImg" src="images/crown.png" alt="crown"> <!-- High Score Crown -->
                    </div>
                </div>
                <div id="points">
                    <div id="pointsText" class="numbers">0Pts</div> <!-- Points -->
                </div>
                <div id="multiplier">
                    <div id="multiplierText" class="numbers">x4</div> <!-- Multiplier -->
                </div>
                <div id="hexagon" onclick="easterEggTrigger()">
                    <div id="hexImgContainer"><img id="hexImg" src="images/orange.png"></div> <!-- Hexagon -->
                    <div id="hexagonText">1</div>
                </div>
                <div id="hearts">
                    <div class="hearts"><img src="images/heartfull.png" id="hearts1"></div><!-- Hearts -->
                    <div class="hearts"><img src="images/heartfull.png" id="hearts2"></div>
                    <div class="hearts"><img src="images/heartfull.png" id="hearts3"></div>
                </div>
            </div>

            <!------------ Matrix ------------>
            <div id="matrix" class="container">
                <div id="r1c1" class="matrixCards" onclick="revealMatrixCard('r1c1', '0', '1')">
                    <!-- 1st card --> <!-- 1st ROW -->
                    <div id="r1c1Back" class="back">
                        <div id="r1c1BackImg" class="cardBackImg"><img id="r1c1Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r1c1Front" class="front">
                        <div id="r1c1FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r1c2" class="matrixCards" onclick="revealMatrixCard('r1c2', '1', '2')">
                    <!-- 2nd card -->
                    <div id="r1c2Back" class="back">
                        <div id="r1c2BackImg" class="cardBackImg"><img id="r1c2Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r1c2Front" class="front">
                        <div id="r1c2FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r1c3" class="matrixCards" onclick="revealMatrixCard('r1c3', '2', '3')">
                    <!-- 3rd card -->
                    <div id="r1c3Back" class="back">
                        <div id="r1c3BackImg" class="cardBackImg"><img id="r1c3Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r1c3Front" class="front">
                        <div id="r1c3FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r2c1" class="matrixCards" onclick="revealMatrixCard('r2c1', '3', '4')">
                    <!-- 4th card --> <!-- 2nd ROW -->
                    <div id="r2c1Back" class="back">
                        <div id="r2c1BackImg" class="cardBackImg"><img id="r2c1Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r2c1Front" class="front">
                        <div id="r2c1FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r2c2" class="matrixCards" onclick="revealMatrixCard('r2c2', '4', '5')">
                    <!-- 5th card -->
                    <div id="r2c2Back" class="back">
                        <div id="r2c2BackImg" class="cardBackImg"><img id="r2c2Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r2c2Front" class="front">
                        <div id="r2c2FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r2c3" class="matrixCards" onclick="revealMatrixCard('r2c3', '5', '6')">
                    <!-- 6th card -->
                    <div id="r2c3Back" class="back">
                        <div id="r2c3BackImg" class="cardBackImg"><img id="r2c3Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r2c3Front" class="front">
                        <div id="r2c3FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r3c1" class="matrixCards" onclick="revealMatrixCard('r3c1', '6', '7')">
                    <!-- 7th card --> <!-- 3rd ROW -->
                    <div id="r3c1Back" class="back">
                        <div id="r3c1BackImg" class="cardBackImg"><img id="r3c1Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r3c1Front" class="front">
                        <div id="r3c1FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r3c2" class="matrixCards" onclick="revealMatrixCard('r3c2', '7', '8')">
                    <!-- 8th card -->
                    <div id="r3c2Back" class="back">
                        <div id="r3c2BackImg" class="cardBackImg"><img id="r3c2Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r3c2Front" class="front">
                        <div id="r3c2FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="r3c3" class="matrixCards" onclick="revealMatrixCard('r3c3', '8', '9')">
                    <!-- 9th card -->
                    <div id="r3c3Back" class="back">
                        <div id="r3c3BackImg" class="cardBackImg"><img id="r3c3Img" src="images/egg_empty.png" alt="egg_empty"></div>
                    </div>
                    <div id="r3c3Front" class="front">
                        <div id="r3c3FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="animationCard1"></div> <!-- Only used for fly animation -->
                <div id="animationCard2"></div> <!-- Only used for fly animation -->
                <div id="animationCard3"></div> <!-- Only used for fly animation -->
                <div id="animationCard4"></div> <!-- Only used for fly animation -->
                <div id="animationCard5"></div> <!-- Only used for fly animation -->
                <div id="animationCard6"></div> <!-- Only used for fly animation -->
                <div id="animationCard7"></div> <!-- Only used for fly animation -->
                <div id="animationCard8"></div> <!-- Only used for fly animation -->
                <div id="animationCard9"></div> <!-- Only used for fly animation -->
                <div id="animationCard10"></div> <!-- Only used for fly animation -->
                <div id="animationCard11"></div> <!-- Only used for fly animation -->
            </div>

            <!------------ Equation ------------>
            <div id="equation" class="container">
                <div id="eqCard1" class="equationCards">
                    <!-- 1st user selected equation card -->
                    <div id="eqCard1Back" class="back"></div>
                    <div id="eqCard1Front" class="front">
                        <div id="eqCard1FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="eqCard2" class="equationCards">
                    <!-- Operator card -->
                    <div id="eqCard2Back" class="back"></div>
                    <div id="eqCard2Front" class="front">
                        <div id="eqCard2FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="eqCard3" class="equationCards">
                    <!-- 2nd user selected equation card -->
                    <div id="eqCard3Back" class="back"></div>
                    <div id="eqCard3Front" class="front">
                        <div id="eqCard3FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
                <div id="equals" class="equationCards">
                    <!-- Equals Operator -->
                    <div class="fourth">=</div>
                </div>
                <div id="eqCard4" class="equationCards">
                    <!-- Answer card -->
                    <div id="eqCard4Back" class="back"></div>
                    <div id="eqCard4Front" class="front">
                        <div id="eqCard4FrontText" class="cardFrontText"></div> <!-- Text -->
                    </div>
                </div>
            </div>

            <!--- Overlay Container -->
            <div id="overlayContainer">

                <!----- Buttons ---->
                <div id="buttonLeft">
                    <div class="overlayText">
                        <p id="buttonLeftText">Quit</p>
                    </div>
                </div>
                <div id="buttonRight">
                    <div class="overlayText">
                        <p id="buttonRightText">Play</p>
                    </div>
                </div> <!-- Buttons End -->
				
                <!--- Quit Overlay -->
                <div id="quitOverlay">
                    <div class="overlayText">
                        <p id="quitText">Play Again?</p>
                    </div>
                </div> <!-- Quit Overlay End -->
				
                <!--- Level Overlay -->
                <div id="levelOverlay">
                    <div id="levelOverlayBox">
                        <div id="congrats">
                            <p id="congratsText">Congratulations!</p>
                        </div>
                        
                        <div id="highScore">
                            <p id="highScoreText">High Score!</p>
                        </div>

                        <div id="currentLevel">
                            <p id="levelText">Level</p>
                            <div id="hexagonOverlay">
                                <p id="hexagonTextOverlay">1</p>
                                <div id="hexImgContainerOverlay">
                                    <img id="hexImgOverlay" src="images/orange.png">
                                </div>
                            </div>
                        </div>

                        <div id="passOrFail">
                            <p id="passOrFailText">Complete!</p>
                        </div>

                        <div id="scoreMultiplied">
                            <p id="scoreMultipliedText">25 pts x 0</p>
                        </div>

                        <div id="normalScore">
                            <p id="normalScoreText">0 pts</p>
                        </div>

                        <hr id="pointsDivider">

                        <div id="totalPoints">
                            <p id="totalPointsText">Total 0 pts</p>
                        </div>

                        <div id="tutorialOrHearts">
                            <form id="tutorial">
                                <p>Show Tutorial <input type="checkbox" name="tutorial" value="showTutorial"></p>
                            </form>
                            <p id="gainedHeartText" style="display: none; margin: 0"><img src="images/heartfull.png" id="heartGained"> Gained!</p>
                        </div>

                        <div id="playAgain">
                            <p id="playAgainText">PLAY AGAIN?</p>
                        </div>

                        <div id="enterName">
                            <p id="enterNameText">Enter your name:</p>
                        </div>

                        <div id="nameBoxContainer">
                            <form id="nameForm">
                                <input type="text" name="nameBox" id="nameBox">
                            </form>
                        </div>
                    </div>
                </div> <!-- Level Overlay End -->
            </div> <!-- Overlay Container End -->
			
			<!--------- High Scores --------->
			<div id="highScoresPageContainer">
				<div id="highScoresPageTextContainer">
					<div id="highScoresTitle">High Scores</div>
					<div id="highScoresPointsLeader">
						<div id="highScoresPointsLeaderText">
							<img src="images/crown.png" alt="crown">
							<p id="rank1">Dude</p>
							<p>1,000,000 pts</p>
						</div>
					</div>
					<div id="highScoresList">
						<div>
							<p id="rank2">2.</p>
							<p>Keir</p>
							<p>878,934 pts</p>
						</div>
						<div>
							<p id="rank3">3.</p>
							<p>Jeremy</p>
							<p>804,126 pts</p>
						</div>
						<div>
							<p id="rank4">4.</p>
							<p>Luke</p>
							<p>803,999 pts</p>
						</div>
						<div>
							<p id="rank5">5.</p>
							<p>Yannick</p>
							<p>750,155 pts</p>
						</div>
						<div>
							<p id="rank6">6.</p>
							<p>Jeremy</p>
							<p>746,199 pts</p>
						</div>
						<div>
							<p id="rank7">7.</p>
							<p>Rei</p>
							<p>719,005 pts</p>
						</div>
						<div>
							<p id="rank8">8.</p>
							<p>Nobody</p>
							<p>655,900 pts</p>
						</div>
						<div>
							<p id="rank9">9.</p>
							<p>King</p>
							<p>419,225 pts</p>
						</div>
						<div>
							<p id="rank10">10.</p>
							<p>Dude2</p>
							<p>178,000 pts</p>
						</div>
					</div>
				</div>	
			</div> <!-- High Scores End -->
        </div> <!-- Wrapper End -->
		
    </body> 

</html>