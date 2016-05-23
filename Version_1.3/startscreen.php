<?php
    // Starts the sessions; tracks user
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Mathemagics v2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./style/startscreen.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.rawgit.com/nnattawat/flip/v1.0.20/dist/jquery.flip.min.js"></script>
        <script src="./scripts/card_place.js"></script>
        <script src="./scripts/card_restack.js"></script>
        <script src="./scripts/get_id.js"></script>
        <script src="./scripts/globals.js"></script>
        <script src="./scripts/menu_main.js"></script>
        <script src="./scripts/menu_practice.js"></script>
        <script src="./scripts/menu_login.js"></script>
        <script src="./scripts/startscreen.js"></script>
        <script src="./scripts/transition.js"></script>
    </head>
    <body>
        <!-- Start Screen Wrapper -->
        <div id="startscreen">

            <!-- Title Wrapper -->
            <div id="title" class="container">
                <img src="./images/title.png" alt="Mathemagics">
            </div>

            <!-- Main Menu 1 Wrapper -->
            <div id="menuMainBox0" class="menuMainBox">
                <!-- Main: Play -->
                <div id="menuMain0" class="mainCard">
                    <div id="menuMain0Back" class="back">
                    </div>
                    <div id="menuMain0Front" class="front">
                        <div id="menuMain0FrontText" class="mainFrontText">
                        </div>
                    </div>
                </div> <!-- Main: Play -->
            </div> <!-- Main Menu 1 Wrapper -->
            <!-- Main Menu 2 Wrapper -->
            <div id="menuMainBox1" class="menuMainBox">
                <!-- Main: Practice -->
                <div id="menuMain1" class="mainCard">
                    <div id="menuMain1Back" class="back">
                        <div id="menuMain1BackText" class="mainBackText">
                        </div>
                    </div>
                    <div id="menuMain1Front" class="front">
                        <div id="menuMain1FrontText" class="mainFrontText">
                        </div>
                    </div>
                </div> <!-- Main: Practice -->
            </div> <!-- Main Menu 2 Wrapper -->
            <!-- Main Menu 3 Wrapper -->
            <div id="menuMainBox2" class="menuMainBox">
                <!-- Main: Leaderboard -->
                <div id="menuMain2" class="mainCard">
                    <div id="menuMain2Back" class="back">
                    </div>
                    <div id="menuMain2Front" class="front">
                        <div id="menuMain2FrontText" class="mainFrontText">
                        </div>
                    </div>
                </div> <!-- Main: Leaderboard -->
            </div> <!-- Main Menu 3 Wrapper -->
            <!-- Main Menu 4 Wrapper -->
            <div id="menuMainBox3" class="menuMainBox">
                <!-- Main: Login -->
                <div id="menuMain3" class="mainCard">
                    <div id="menuMain3Back" class="back">
                        <div id="menuMain3BackText" class="mainBackText">
                        </div>
                    </div>
                    <div id="menuMain3Front" class="front">
                        <div id="menuMain3FrontText" class="mainFrontText">
                        </div>
                    </div>
                </div> <!-- Main: Login -->
            </div> <!-- Main Menu 4 Wrapper -->
            <!-- Practice Menu 1 Wrapper -->
            <div id="menuPracBox0" class="menuPracBox">
                <!-- Practice: Addition -->
                <div id="menuPrac0" class="pracCard">
                    <div id="menuPrac0Back" class="back">
                    </div>
                    <div id="menuPrac0Front" class="front">
                        <div id="menuPrac0FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Addition -->
            </div> <!-- Practice Menu 1 Wrapper -->
            <!-- Practice Menu 2 Wrapper -->
            <div id="menuPracBox1" class="menuPracBox">
                <!-- Practice: Subtraction -->
                <div id="menuPrac1" class="pracCard">
                    <div id="menuPrac1Back" class="back">
                    </div>
                    <div id="menuPrac1Front" class="front">
                        <div id="menuPrac1FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Subtraction -->
            </div> <!-- Practice Menu 2 Wrapper -->
            <!-- Practice Menu 3 Wrapper -->
            <div id="menuPracBox2" class="menuPracBox">
                <!-- Practice: Multiplication -->
                <div id="menuPrac2" class="pracCard">
                    <div id="menuPrac2Back" class="back">
                    </div>
                    <div id="menuPrac2Front" class="front">
                        <div id="menuPrac2FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Multiplication -->
            </div> <!-- Practice Menu 3 Wrapper -->
            <!-- Practice Menu 4 Wrapper -->
            <div id="menuPracBox3" class="menuPracBox">
                <!-- Practice: Division -->
                <div id="menuPrac3" class="pracCard">
                    <div id="menuPrac3Back" class="back">
                    </div>
                    <div id="menuPrac3Front" class="front">
                        <div id="menuPrac3FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Division -->
            </div> <!-- Practice Menu 4 Wrapper -->

            <!-- Login Window 1 Wrapper -->
            <div id="menuLoginBox0" class="menuLoginBox">
                <div id="menuLogin0" class="loginCard">
                    <div id="menuLogin0Back" class="back">
                        <div id="menuLogin0BackText" class="loginBackText">
                        </div>
                    </div>
                    <div id="menuLogin0Front" class="front">
                        <div id="menuLogin0FrontText" class="loginFrontText">
                        </div>
                    </div>
                </div>
            </div> <!-- Login Window 1 Wrapper -->
        </div> <!-- Start Screen Wrapper -->
    </body>
</html>