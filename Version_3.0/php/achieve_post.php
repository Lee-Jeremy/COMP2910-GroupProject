<?php
    // Starts the sessions; tracks user
    session_start();  
    
    // Connects to the database
    // require('./config.php');   

    // Stores the user's achievements into PHP variables    
    $achieve1Post = $_POST['achieve1'];
    $achieve2Post = $_POST['achieve2'];
    $achieve3Post = $_POST['achieve3'];

    // Checks if user's logged in and updates the achievements column values
    if (isset($_SESSION['SESS_LOGIN']) && $_SESSION['SESS_LOGIN'] != '') {
        $achievePost = $_SESSION['SESS_LOGIN'];
        
        if ($achieve1Post == "yes") {
            $writeA1 = "UPDATE Users SET achieve1='yes' WHERE username='$achievePost'";
            mysqli_query($conn, $writeA1) or
                die(mysqli_error($conn));
        }

        if ($achieve2Post == "yes") {
            $writeA2 = "UPDATE Users SET achieve2='yes' WHERE username='$achievePost'";
            mysqli_query($conn, $writeA2) or
                die(mysqli_error($conn));
        }

        if ($achieve3Post == "yes") {
            $writeA3 = "UPDATE Users SET achieve3='yes' WHERE username='$achievePost'"; 
            mysqli_query($conn, $writeA3) or
                die(mysqli_error($conn));     
        }
    }
?>