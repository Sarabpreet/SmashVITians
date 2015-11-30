<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Smash VITians</title>
		<link rel="stylesheet" href="../css/style.css">
		<link rel="stylesheet" href="../css/font-awesome.css">
	</head>
	<body>
		


<?php


									$servername = "localhost";
									$username = "root";
									$password = "root";
									$dbname = "game";
									// Create connection
									$conn = new mysqli($servername, $username, $password, $dbname);

									// Check connection
									if ($conn->connect_error) {
									    die("Connection failed: " . $conn->connect_error);
									}

								$sql = "SELECT * FROM game ORDER BY score DESC";
								$result = mysqli_query($conn, $sql);
								echo "<div class='box retrive'>";
								if (mysqli_num_rows($result) > 0) {
								    // output data of each row
								    while($row = mysqli_fetch_assoc($result)) {
								        echo "<div class='retri'> Name: " . $row["name"]. " | score: " . $row["score"]. " | victim: " . $row["victim"]. "</div><br>";	

								    }
								} else {
								    echo "0 results";
								}
								echo "</div>";	
								mysqli_close($conn);
?>


<script src="js/main.js"></script>
</body>
</html>