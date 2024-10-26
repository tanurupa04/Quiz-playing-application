<?php
$servername = "localhost";
$username = "root";
$password = "";

// Create connection to MySQL server
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . $mysqli_connect_error());
}
else{
    echo "Connection is successful<br>";
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS quizio_app";
$res= mysqli_query($conn, $sql);
if ($res) {
    echo "Database quizio_app created successfully<br>";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

// Select the database
$sql ="USE quizio_app";
$res = mysqli_query($conn, $sql);
$sql ="CREATE TABLE Participant (full_name VARCHAR(30) ,age  INT , education VARCHAR(30),
mail_id VARCHAR(20) , phone_number BIGINT , password VARCHAR(30), PRIMARY KEY(mail_id))";
$res = mysqli_query($conn, $sql);
if($res){
echo "table is created succesfully<br>";
}
else{
echo "table is not created succesfully because of this error --> ".mysqli_error($conn);
}
?>