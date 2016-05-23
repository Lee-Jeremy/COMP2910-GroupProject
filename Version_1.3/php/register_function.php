<?php
    // Starts the sessions; tracks user
    session_start();

    // Connects to the database
    require('./config.php');
    
    // PHP Query: grabs the values from the USERS 
    $userRegInfo = "SELECT username, password FROM Users";

    mysqli_query($conn, $userRegInfo) or 
	    die(mysqli_error($conn));
    
    // Stores the user's input into PHP variables
    $userRegName = $_POST['regName'];
    $userRegPass = $_POST['regPass'];
    $regAchieve1 = "no";
    $regAchieve2 = "no";
    $regAchieve3 = "no";

    // Sends a query to check if login name already exists
    $check = "SELECT * FROM Users WHERE username='$userRegName'";
    $checkResult = mysqli_query($conn, $check) or
        die(mysqli_error($conn));
    
    // Checks if login already exists, otherwise create new user
    if (mysqli_num_rows($checkResult) > 0) {
        // PRODUCE SOME SORT OF ERROR RESPONSE
        // exit();
    } else {
        $create = "INSERT INTO Users(username, password, achieve1, achieve2, achieve3) 
            VALUES ('$userRegName', '$userRegPass', '$regAchieve1', '$regAchieve2', '$regAchieve3')";
        mysqli_query($conn, $create) or
            die(mysqli_error($conn));
        header("location: ../startscreen.php");
        exit();
        // DISPLAY ACCOUNT CREATION SUCCESSFUL
    }
?>

<html>
<body>
<?php echo "Username already taken"?>
</body>
</html>