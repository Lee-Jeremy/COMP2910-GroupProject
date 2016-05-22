<?php
    // PHP Query: grabs the values from the USERS 
    $loginInfo = "SELECT username, password FROM Users";

    $loginInfoResult = mysqli_query($conn, $loginInfo) or 
	    die(mysqli_error($conn));

    $userReg = $_POST['userRegPHP'];
    $passReg = $_POST['passRegPHP'];


?>