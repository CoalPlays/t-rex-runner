<?php
$servername = "localhost";
$username = "trex";
$password = "123";
$dbname = "leaderboard";

$nick = $_GET["nick"];
$score = $_GET["score"];


// Create connection
$conn = new mysqli($servername, $username, $password,$dbname);

$sql = "insert into scores (name,score) values ('$nick',  $score  )";

$conn->query($sql);






