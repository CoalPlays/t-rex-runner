<?php
$servername = "imninja.eu";
$username = "trex";
$password = "123";

$nick = $_GET["nick"];
$score = $_GET["score"];

// Create connection
$conn = new mysqli($servername, $username, $password);

$sql = "insert into leaderboard (nick,score) values ('test','69')";


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";

$conn->query($sql)



?>