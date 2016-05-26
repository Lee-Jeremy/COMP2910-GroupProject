<?php
    // Starts the sessions; tracks user
    session_start();

    // Connects to the database
    require('./config.php');
    
    // Stores the user's input into PHP variables
    $forgotRequest = $_POST['forgotEmail'];

    // Sends a query to check if login name exists
    $forgotEmail = "SELECT * FROM Users WHERE username='$forgotRequest'";
    $userEmail = mysqli_query($conn, $forgotEmail) or
        die(mysqli_error($conn));

    // Grabs the users password if the login exists and emails them, otherwise produce error
    if (mysqli_num_rows($userEmail) == 1) {
        $forgotPass = "SELECT password FROM Users WHERE username='$forgotRequest'";
        $userPass = mysqli_query($conn, $forgotPass) or
            die(mysqli_error($conn));

        // Sends the email (NOT FUNCTIONING)
        // $forgotMsg = "Your password is: " . $userPass;
        // mail($forgotRequest, "Forgot Password Request", $forgotMsg);

        header("location: ../startscreen.php");
        exit();
        // PRODUCE SENT EMAIL CONFIRMATION
    } else {
        // PRODUCE SOME SORT OF ERROR MESSAGE IF LOGIN DOES NOT EXIST
        // exit();
    }

?>

<html>
<body>
<?php echo "Username doesn't exist"?>
</body>
</html>