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

								$sql = "SELECT * FROM game";
								$result = mysqli_query($conn, $sql);

								if (mysqli_num_rows($result) > 0) {
								    // output data of each row
								    while($row = mysqli_fetch_assoc($result)) {
								        echo "id: " . $row["name"]. " - Name: " . $row["score"]. " " . $row["game_session_id"]. " " . $row["victim"]. "<br>";	

								    }
								} else {
								    echo "0 results";
								}

								mysqli_close($conn);
?>