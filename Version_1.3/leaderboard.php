<?php

include 'config.php';
include 'functions.php';

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Mathemagics v2.0</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="./style/base.css">
        <link href='https://fonts.googleapis.com/css?family=Montserrat:700' rel='stylesheet' type='text/css'>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.rawgit.com/nnattawat/flip/v1.0.20/dist/jquery.flip.min.js"></script>
        <script type="text/javascript">
            var tenthScore = <?php echo $scoreArray[9] ?>;
        </script>
        <script src="myscripts.js"></script>
    </head>
    <body>
    <!--------- High Scores --------->
	<div id="highScoresPageContainer">
		<div id="highScoresPageTextContainer">
			<div id="highScoresTitle">High Scores</div>
			<div id="highScoresPointsLeader">
				<div id="highScoresPointsLeaderText">
					<img src="images/crown.png" alt="crown">
					<p id="rank1"><?php echo $nameArray[0]; ?> </p> <!-- Grabs the first value from the SQL name array -->
					<p><?php echo $scoreArray[0]; ?> pts</p> <!-- Grabs the first value from the SQL score array -->
				</div>
			</div>
			<div id="highScoresList">
				<div>
					<p id="rank2">2.</p>
					<p><?php echo $nameArray[1]; ?></p>
					<p><?php echo $scoreArray[1]; ?> pts</p>
				</div>
				<div>
					<p id="rank3">3.</p>
					<p><?php echo $nameArray[2]; ?></p>
					<p><?php echo $scoreArray[2]; ?> pts</p>
				</div>
				<div>
					<p id="rank4">4.</p>
					<p><?php echo $nameArray[3]; ?></p>
					<p><?php echo $scoreArray[3]; ?> pts</p>
				</div>
				<div>
					<p id="rank5">5.</p>
					<p><?php echo $nameArray[4]; ?></p>
					<p><?php echo $scoreArray[4]; ?> pts</p>
				</div>
				<div>
					<p id="rank6">6.</p>
					<p><?php echo $nameArray[5]; ?></p>
					<p><?php echo $scoreArray[5]; ?> pts</p>
				</div>
				<div>
					<p id="rank7">7.</p>
					<p><?php echo $nameArray[6]; ?></p>
					<p><?php echo $scoreArray[6]; ?> pts</p>
				</div>
				<div>
					<p id="rank8">8.</p>
					<p><?php echo $nameArray[7]; ?></p>
					<p><?php echo $scoreArray[7]; ?> pts</p>
				</div>
				<div>
					<p id="rank9">9.</p>
					<p><?php echo $nameArray[8]; ?></p>
					<p><?php echo $scoreArray[8]; ?> pts</p>
				</div>
				<div>
					<p id="rank10">10.</p>
					<p><?php echo $nameArray[9]; ?></p>
					<p><?php echo $scoreArray[9]; ?> pts</p>
				</div>
			</div>
		</div>	
	</div> <!-- High Scores End -->
    </body>
</html>
