<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Mathemagics v2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./style/startscreen.css">
        <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.rawgit.com/nnattawat/flip/v1.0.20/dist/jquery.flip.min.js"></script>
        <script src="./scripts/card_place.js"></script>
        <script src="./scripts/card_restack.js"></script> 
        <script src="./scripts/get_id.js"></script>
        <script src="./scripts/globals.js"></script>
        <script src="./scripts/menu_main.js"></script>
        <script src="./scripts/menu_practice.js"></script>
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

            <!-- Main Menu Wrapper -->
            <div id="menuMain" class="container">
                <!-- Play Menu -->
                <div id="menuMain0" class="mainCard" onclick="">
                    <div id="menuMain0Back" class="back">
                    </div>
                    <div id="menuMain0Front" class="front">
                        <div id="menuMain0FrontText" class="mainFrontText">
                        </div>
                    </div>
                </div> <!-- Play Menu -->
                <!-- Practice Menu -->
                <div id="menuMain1" class="mainCard" onclick="">
                    <div id="menuMain1Back" class="back">
                        <div id="menuMain1BackText" class="mainBackText">
                        </div>
                    </div>
                    <div id="menuMain1Front" class="front">
                        <div id="menuMain1FrontText" class="mainFrontText">
                        </div>
                    </div>
                </div> <!-- Practice Menu -->
                <!-- Leaderboard Menu -->
                <div id="menuMain2" class="mainCard" onclick="">
                    <div id="menuMain2Back" class="back">
                    </div>
                    <div id="menuMain2Front" class="front">
                        <div id="menuMain2FrontText" class="mainFrontText">
                        </div>
                    </div>
                </div> <!-- Leaderboard Menu -->
                <!-- Anmimation Card: Play Menu -->
                <div id="aniMain0" class="aniMainCard"></div>
                <!-- Anmimation Card: Practice Menu -->
                <div id="aniMain1" class="aniMainCard"></div>
                <!-- Anmimation Card: Leaderboard Menu -->
                <div id="aniMain2" class="aniMainCard"></div>
                <!-- Practice Menu Anmimation Card: Addition -->
                <div id="aniPrac0" class="aniPracCard"></div>
                <!-- Practice Menu Anmimation Card: Subtraction -->
                <div id="aniPrac1" class="aniPracCard"></div>
                <!-- Practice Menu Anmimation Card: Multiplication -->
                <div id="aniPrac2" class="aniPracCard"></div>
                <!-- Practice Menu Anmimation Card: Division -->
                <div id="aniPrac3" class="aniPracCard"></div>

            </div> <!-- Main Menu Wrapper -->
            <!-- Practice Menu Wrapper -->
            <div id="menuPrac" class="container">
                <!-- Practice: Addition -->
                <div id="menuPrac0" class="pracCard" onclick="">
                    <div id="menuPrac0Back" class="back">
                    </div>
                    <div id="menuPrac0Front" class="front">
                        <div id="menuPrac0FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Addition -->
                <!-- Practice: Subtraction -->
                <div id="menuPrac1" class="pracCard" onclick="">
                    <div id="menuPrac1Back" class="back">
                    </div>
                    <div id="menuPrac1Front" class="front">
                        <div id="menuPrac1FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Subtraction -->
                <!-- Practice: Multiplication -->
                <div id="menuPrac2" class="pracCard" onclick="">
                    <div id="menuPrac2Back" class="back">
                    </div>
                    <div id="menuPrac2Front" class="front">
                        <div id="menuPrac2FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Multiplication -->
                <!-- Practice: Division -->
                <div id="menuPrac3" class="pracCard" onclick="">
                    <div id="menuPrac3Back" class="back">
                    </div>
                    <div id="menuPrac3Front" class="front">
                        <div id="menuPrac3FrontText" class="pracFrontText">
                        </div>
                    </div>
                </div> <!-- Practice: Division -->
            </div> <!-- Practice Menu Wrapper -->
        </div> <!-- Start Screen Wrapper -->
    </body>

</html>