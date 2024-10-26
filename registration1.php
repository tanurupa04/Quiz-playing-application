<!DOCTYPE html>
<html>
<head>
	<title>Registration Form</title>
	<style>
		/* Add a background image to the body */
		body {
			background-image: url(Image\ 3.jpg);
			background-size: cover;
			background-position: center;
			font-family: Arial, sans-serif;
		}
		
		/* Center the login form */
		.registration-form {
			width: 400px;
			margin-right: 140px;
			margin-top: 16px;
			float: right;
			padding: 20px;
			background-color: #f9f9f9;
			border: 1px solid #ccc;
			border-radius: 10px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
		.registration-form h2 {
			text-align: center;
			color: #c57316;
		}
		/* Add a gap between form elements */
		.h2, .registration-form label, .registration-form input, .registration-form button {
			margin-bottom: 20px;
		}
		/* Style the input fields */
		.registration-form input {
			width: 60%;
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
		p {
			text-align: center;
		}
	</style>
</head>
<body>
	<div class="registration-form">
		<form name="form" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
			<h2>Create a new account</h2>
			<label for="full_name">Full name:</label>
			<input type="text" id="full_name" name="full_name" placeholder="Enter your full name" required>
			<br>
			<label for="age">Age:</label>
			<input type="number" id="age" name="age" placeholder="Enter your age">
			<br>
			<label for="education">Educational Qualification:</label>
			<select name="education" id="education">
				<option value="None">None</option>
				<option value="1-10">Studying from class 1 to 10</option>
				<option value="Class 10">Class 10 passed</option>
				<option value="Class 12">Class 12 passed</option>
				<option value="Graduate">Graduate</option>
				<option value="Another">Another</option>
			</select>
			<br>
			<br>
			<label for="mail_id">Mail id:</label>
			<input type="email" id="mail_id" name="mail_id" placeholder="Enter your mail id" required>
			<br>
			<label for="phone_number">Phone number:</label>
			<input type="number" id="phone_number" name="phone_number" placeholder="Enter your phone number" required>
			<br>
			<label for="password">Create password:</label>
			<input type="password" id="password" name="password" placeholder="Enter a password" required>
			<br>
			<button type="submit" id="submit" class="btn" name="submit">Submit</button>
			<p>Already have an account? <a href="login page1.php" class="Login-link">Login</a></p>
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
				if (isset($_POST['submit'])) {
					// Get form data
					$full_name = $_POST['full_name'];
					$age = $_POST['age'];
					$education = $_POST['education'];
					$mail_id = $_POST['mail_id'];
					$phone_number = $_POST['phone_number'];
					$password = $_POST['password'];

					// Insert data into the database
					$sql = "INSERT INTO participant (full_name, age, education, mail_id, phone_number, password) VALUES ('$full_name', '$age', '$education', '$mail_id', '$phone_number', '$password')";
					$res = mysqli_query($conn, $sql);
					if ($res) {
						echo "Registered successfully";
					} else {
						echo "Error: " . mysqli_error($conn);
					}
				}
			?>
		</form>
	</div>
</body>
</html>
