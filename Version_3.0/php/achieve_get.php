<?php
    // Starts the sessions; tracks user
    session_start();  
    
    // Connects to the database
    // require('./config.php');

    // Grabs the achievements from the users database given they are logged in
    if (isset($_SESSION['SESS_LOGIN']) && $_SESSION['SESS_LOGIN'] != '') {
        $achieveGet = $_SESSION['SESS_LOGIN'];

        // GRABS THE VALUES FROM THE TABLE
        $loggedAchieve = "SELECT achieve1, achieve2, achieve3 FROM Users WHERE username='$achieveGet'";
        $loggedAchieveQuery = mysqli_query($conn, $loggedAchieve) or
            die(mysqli_error($conn, $loggedAchieve));
        // STORE THE VALUES INTO AN ARRAY AND INTO PHP VARIABLES
        $achieveRow = mysqli_fetch_assoc($loggedAchieveQuery);
        $_SESSION['SESS_ACHIEVE1'] = $achieveRow['achieve1'];
        $_SESSION['SESS_ACHIEVE2'] = $achieveRow['achieve2'];
        $_SESSION['SESS_ACHIEVE3'] = $achieveRow['achieve3'];    
    }
?>