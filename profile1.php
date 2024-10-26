<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Details</title>
    <style>
        body {
            background-image: url('profile image.avif'); /* Corrected the URL format */
            background-size: cover;
            background-position: center;
            font-family: Arial, sans-serif;
        }

        .profile {
            width: 450px;
            margin-left: 25%;
            margin-top: 4%;
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            text-align: center;
        }

        .centered-content {
            text-align: center;
            width: 28%;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-left: 30%;
            margin-bottom: 9%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .btn {
        margin-left: 30%;
        padding: 10px 20px;
        background-color: rgb(13, 17, 15);
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        width: 20%;
        margin: 35px;
        color: #e0e0e0;
        }
  
     .btn:hover {
             background-color: rgb(58, 59, 56);

    }
    </style>
</head>
<body>
    <h1>Profile Details</h1>
    <form class="profile" method="POST" action="">
        <label for="mail_id">Enter your email:</label>
        <input type="email" name="mail_id" id="mail_id" required>
        <input type="submit" value="Submit email">
    </form>
    <br><br>
    <div class="centered-content">
    <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $db = "quizio_app";

        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $db);

        // Check connection
        if (!$conn) {
            die("Sorry, we failed to connect: " . mysqli_connect_error());
        }

        // Check if form is submitted and mail_id is set
        if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['mail_id'])) {
            $mail_id = mysqli_real_escape_string($conn, $_POST['mail_id']);
            $sql = "SELECT * FROM participant WHERE mail_id='$mail_id'";
            $res = mysqli_query($conn, $sql);

            if (mysqli_num_rows($res) > 0) {
                while ($data = mysqli_fetch_assoc($res)) {
                   echo "Welcome to Quizio!<br>
                    YOUR NAME:".$data['full_name']."<br>
                    YOUR AGE:".$data['age']."<br>
                    PHONE NUMBER:".$data['phone_number']."";
                }
                }
             else {
                echo "<p>No record found</p>";
            }
        }

        mysqli_close($conn);
    ?>
    </div>
    <a href="dashboard.php"><button class="btn">Go to home</button></a>
</body>
</html>
