<?php
    // Starts the sessions; tracks user
    session_start();  
    
    // Connects to the database
    require('./config.php');      

    // PHP Query: grabs the values from the USERS 
    $userLogInfo = "SELECT username, password, achieve1, achieve2, achieve3 FROM Users";

    mysqli_query($conn, $userLogInfo) or 
	    die(mysqli_error($conn));
     
    // Stores the user's input into PHP variables
    $userLogName = $_POST['logName'];
    $userLogPass = $_POST['logPass'];

    // Sends a query to check if the username and passwords match
    $login = "SELECT * FROM Users WHERE username='$userLogName' AND password='$userLogPass'";
    $loginCheck = mysqli_query($conn, $login) or
        die(mysqli_error($conn));

    // Checks if username and password match, otherwise produce error message
    if (mysqli_num_rows($loginCheck) == 1) {
        session_regenerate_id;
        $user = mysqli_fetch_assoc($loginCheck);
        $_SESSION['SESS_LOGIN'] = $user['username'];
        $_SESSION['SESS_PASSWORD'] = $user['password'];
        $_SESSION['SESS_ACHIEVE1'] = $user['achieve1'];
        $_SESSION['SESS_ACHIEVE2'] = $user['achieve2'];
        $_SESSION['SESS_ACHIEVE3'] = $user['achieve3'];
        session_write_close();
        header("location: ../startscreen.php");
        exit();
    } else {
        // PRODUCE ERROR MESSAGE
    }
?>

<html>
<body>
<?php echo "Incorrect login information"?>    
</body>
</html>