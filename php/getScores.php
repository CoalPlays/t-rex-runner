<?php
$servername = "localhost";
$username = "trex";
$password = "123";
$dbname = "leaderboard";



// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

$sql = "select * from scores";

$result = $conn->query($sql);

while($row = $result->fetch_assoc()) {
    echo '<p>Name:' . $row["name"] . ' -   Score: ' . $row["score"] . ' </p>';
  }





