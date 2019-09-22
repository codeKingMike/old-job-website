	<!-- <?php

	$user_name = "diamond_hunter";
	$password = "password123";
	$database = "seo_demo";
	$server = "root";

	mysql_connect("$server","$user_name","$password");

	mysql_select_db("$database");

	if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$order = mysql_query("INSERT INTO people_info_table (id, name, email, subject, message) VALUES (NULL '$name', '$email', '$message')");

	if ($order) {
	    echo '<br>Input data is successful';
	} else {
	    echo '<br>Input data is not valid';
	}
	}
	?>


	<?php
		include_once '../dbase.php';

		$name = $POST_["name"];
		$email = $POST_["email"];
		$subject = $POST_["subject"];
		$message = $POST_["message"];

	$sql = "INSERT INTO seo_info (name, email, subject, message) 
	VALUES ('$name', '$email', '$subject', '$message');";

	mysqli_query($conn, $sql);

	header("Location: /index.php?signup=success"); -->