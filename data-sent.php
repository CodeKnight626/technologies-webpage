<?php
	//echo "Hola!";
	//file_put_contents("data/data.txt", "hola");
	//echo ($_POST["first-name"]);
	if (!empty($_POST)){
		
	}
	if(isset($_POST)){
		$first_name = $_POST["first-name"];
		$last_name = $_POST["last-name"];
		$email = $_POST["e-mail"];
		$comments = $_POST["comments"];

		$data_to_save = "\n" . $first_name . "," . $last_name . "," . $email . "," . $comments;

  		//data posted , save it to the database
		//display message etc
		file_put_contents("data/data.csv", $data_to_save, FILE_APPEND);
		//echo '¡Hola ' . htmlspecialchars($_POST["first-name"]) . '!';
	}
?>	
