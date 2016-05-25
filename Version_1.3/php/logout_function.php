<?php
    // Starts the sessions; tracks user
    session_start();  
    
    // Connects to the database
    require('./config.php');  
	
	//Unset the variables stored in session
	unset($_SESSION['SESS_LOGIN']);
	unset($_SESSION['SESS_PASSWORD']);
	unset($_SESSION['SESS_ACHIEVE1']);
	unset($_SESSION['SESS_ACHIEVE2']);
    unset($_SESSION['SESS_ACHIEVE3']);
    session_write_close();
	header("location: ../startscreen.php");
	exit();
?>