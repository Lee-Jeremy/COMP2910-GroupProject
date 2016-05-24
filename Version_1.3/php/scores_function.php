<?php
    // Starts the sessions; tracks user
    session_start();

    // Connects to the database
<<<<<<< HEAD
    // require('./config.php');
=======
    //require('./config.php');
>>>>>>> 6e117c6e8dad8ae6b374b7caa826cb4621c6c043

    // PHP Query: grabs the values from the TABLE (both name and score columns) and stores into a variable    
    $table = "SELECT name, score FROM HighScores ORDER BY score DESC";
    $tableResult = mysqli_query($conn, $table) or 
	    die(mysqli_error($conn));

    // Stores the values from the TABLE into an array
    while($row = mysqli_fetch_array($tableResult)) {
        $nameArray[] = $row['name'];
        $scoreArray[] = $row['score'];    
    }

    // Adds a new score
    $name = NULL;
    $score = NULL;

    $name = $_POST['newNameInput'];
    $score = $_POST['newTotalScore'];

    $newScore = "INSERT INTO HighScores (name, score) VALUES ('$name', '$score')";

    mysqli_query($conn, $newScore) or 
    die(mysqli_error($conn));

    // Deletes the lowest score
    $oldName = $nameArray[10];
    $oldScore = $scoreArray[10];

    $deleteScore = "DELETE FROM HighScores WHERE name='$oldName' AND score='$oldScore'";

    mysqli_query($conn, $deleteScore) or 
    die(mysqli_error($conn));
?>