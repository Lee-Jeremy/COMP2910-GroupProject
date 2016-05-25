<!-- Practice mode in-game screen -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Mathemagics v3.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./style/base.css">
        <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.rawgit.com/nnattawat/flip/v1.0.20/dist/jquery.flip.min.js"></script>
        <script src="./scripts/answer.js"></script>
        <script src="./scripts/answer_cards.js"></script>
        <script src="./scripts/back_button.js"></script>
        <script src="./scripts/check_equation.js"></script>
        <script src="./scripts/deal_cards.js"></script>
        <script src="./scripts/easter_egg.js"></script>
        <script src="./scripts/flip.js"></script>
        <script src="./scripts/get_id.js"></script>
        <script src="./scripts/globals.js"></script>
        <script src="./scripts/hexagon.js"></script>
        <script src="./scripts/hide_animations.js"></script>
        <script src="./scripts/left_button.js"></script>
        <script src="./scripts/matrix.js"></script>
        <script src="./scripts/matrix_card.js"></script>
        <script src="./scripts/operator.js"></script>
        <script src="./scripts/overlays.js"></script>
        <script src="./scripts/reset_level.js"></script>
        <script src="./scripts/right_button.js"></script>
        <script src="./scripts/set_difficulty.js"></script>
        <script src="./scripts/set_level.js"></script>
        <script src="./scripts/timer.js"></script>
    </head>
    <body>
        <!--- Wrapper --->
        <div id="wrapper">

            <!------------ Header ------------>
            <div id="header" class="container">
                <div id="back">
                    <div id="backImgContainer">
                        <img id="backImg" src="images/pause.png" alt="pause"> <!-- Back Button -->
                    </div>
                </div>
                <div id="completions">
                    <div id="practiceText">Levels<br>Completed: 0</div> <!-- Points -->
                </div>
                <div id="hexagon" onclick="easterEggTrigger()">
                    <img id="hexImg" src="images/orange.png" alt="hexImg"> <!-- Hexagon -->
                    <div id="hexagonText">1</div>
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
                        <div id="eqCard2FrontText" class="cardFrontText"><img id="eqCard2FrontImg" alt="operator"></div> <!-- Text -->
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
                        <div id="currentLevel">
                            <p id="levelText">Level</p>
                            <div id="hexagonOverlay">
                                <div id="hexagonTextOverlay">1</div>    
                                <img id="hexImgOverlay" src="images/orange.png" alt="hexImgOverlay">  
                            </div>
                        </div>
                        <hr id="pointsDivider">
                        <div id="totalPoints">
                            <p id="totalPointsText">Addition</p>
                        </div>
                        <div id="tutorialOrHearts">
                            <form id="tutorial">
                                <p>Show Tutorial <input type="checkbox" name="tutorial" value="showTutorial"></p>
                            </form>
                        </div>
                         <div id="playAgain">
                            <p id="playAgainText">PLAY AGAIN?</p>
                        </div>
                    </div>
                </div> <!-- Level Overlay End -->
            </div> <!-- Overlay Container End -->
        </div> <!-- Wrapper End -->
    </body> 

</html>