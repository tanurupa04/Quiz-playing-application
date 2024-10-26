<!DOCTYPE html>
<html>
<head>
	<title>Login Form</title>
	<style>
		/* Add a background image to the body */
		body {
			background-image: url('Image1.avif');
			background-size: cover;
			background-position: center;
			font-family: arial, poppins, sans-serif;
		}
		
		/* Center the login form */
		.login-form {
			width: 350px;
			margin: 130px auto;
			padding: 20px;
			background-color: #f9f9f9;
			border: 1px solid #ccc;
			border-radius: 10px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
		.login-form h2 {
            text-align: center;
			color: #c57316;
        }
		/* Add a gap between form elements */
		.login-form label, .login-form input, .login-form button {
			margin-bottom: 20px;
		}
	
		/* Style the input fields */
		.login-form input {
			width: 95%;
			padding: 10px;
			margin-bottom: 20px;
			border: 1px solid #ccc;
			border-radius: 5px;
		}
		
		/* Style the submit button */
		.btn {
			width: 100%;
			padding: 10px;
            background-color: #edcf25;
			color: #281313;
			border: none;
			border-radius: 5px;
		}
		
		/* Add animation to submit button on hover */
		.btn:hover {
            background-color: #e9e43ef6;
			transition: background-color 0.3s;
		}
	</style>
	<script type="text/javascript">
		function preventBack() {
			window.history.forward();
		}
		setTimeout("preventBack()", 0);
		window.onunload = function () { null; }
	</script>
</head>
<body>
	<div class="login-form">
		<form name="form" method="post">
			<h2>Welcome to Quizio</h2>
			<label for="username">Username:</label>
			<input type="text" id="username" name="username" placeholder="Enter your mail as username" required>
			
			<label for="password">Password:</label>
			<input type="password" id="password" name="password" placeholder="Enter your password" required>
			
			<input type="submit" id="submit" class="btn" value="Login">
            <p>New user? <a href="registration1.php" class="SignUp-link">Sign Up</a></p>
		</form>

		<?php
		$servername = "localhost";
		$username = "root";
		$password = "";
		$db = "quizio_app";
		$conn = mysqli_connect($servername, $username, $password, $db);

		if (!$conn) {
			die("Sorry, we failed to connect: " . mysqli_connect_error());
		}

		// Check if form is submitted
		if ($_SERVER['REQUEST_METHOD'] == 'POST') {
			$user = mysqli_real_escape_string($conn, $_POST['username']);
			$pass = mysqli_real_escape_string($conn, $_POST['password']);

			// Query to check for matching credentials
			$sql = "SELECT * FROM participant WHERE mail_id = '$user' AND password = '$pass'";
			$res = mysqli_query($conn, $sql);

			// Check if the query returned any result
			if (mysqli_num_rows($res) > 0) {
				// Successful login
				header("Location: dashboard.php");
				exit(); // Ensure no further code execution
			} else {
				// Invalid credentials
				echo "<p style='color:red;'>Invalid username or password.</p>";
			}
		}
		?>
	</div>
</body>
</html>
