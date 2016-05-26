<?php
    // Connects to the SQL server
    $conn = mysqli_connect("sql3.freesqldatabase.com", "sql3119990","JfXFBwKd8t") or
	    die(mysqli_connect_error());

    // Selects the DB
    mysqli_select_db($conn, "sql3119990") or 
	    die(mysqli_error($conn));
?>