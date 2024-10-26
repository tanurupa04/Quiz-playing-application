<?php
$servername = "localhost";
$username = "root";
$password = "";
$db="quizio_app";
// Create connection to MySQL server
$conn = mysqli_connect($servername, $username, $password, $db);

// Check connection
if (!$conn) {
    die("Connection failed: " . $mysqli_connect_error());
}
else{
    echo "Connection is successful<br>";
}

$sql ="CREATE TABLE feedback (phone_number BIGINT , feedback VARCHAR(30), PRIMARY KEY(phone_number))";
$res = mysqli_query($conn, $sql);
if($res){
echo "table is created succesfully<br>";
}
else{
echo "table is not created succesfully because of this error --> ".mysqli_error($conn);
}
?>