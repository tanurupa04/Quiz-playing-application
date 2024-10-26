<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizio! - Dashboard</title>
    <link rel="stylesheet" href="dashboard.css">
    <script type="text/javascript">
        function preventBack(){window.history.forward()};
        setTimeout("preventBack()",0);
        window.onunload=function(){null;}
    </script>
</head>
<body>

    <!-- Sidebar -->
    <input type="checkbox" id="sidebar-toggle" class="sidebar-toggle">
    <aside class="sidebar">
        <div class="profile">
            <img src="user profile.jpg" alt="User Profile">
            <h2 class="user">User</h2>
            <p></p>
        </div>
        <ul>
            <li><a href="dashboard.php">Home</a></li>
            <li><a href="profile1.php">Profile</a></li>
            <li><a href="Logout.html" >Logout</a></li>
        </ul>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Header -->
        <header>
            <label for="sidebar-toggle" class="hamburger">
                <div></div>
                <div></div>
                <div></div>
            </label>
            <h1>Welcome to Quizio!</h1>
            <h2>Dashboard</h2>
        </header>

        <!-- Topics Section -->
        <section class="topics">
            <div class="topic">
                <img src="GK.jpg" alt="GK">
                <h3>GK</h3>
                <p> Current affairs,Miscellaneous questions from wide range of subjects raising general awareness. </p>
                <a href="GK level.html"><button class="btn">Start Quiz</button></a>
            </div>
            <div class="topic">
                <img src="aptitude.jpg" alt="Aptitude"">
                <h3>Aptitude</h3>
                <p>Logical reasoning and aptitude based questions checking verbal ability,pattern-matching,analogical skills </p>
                <a href="Aptitude level.html"><button class="btn">Start Quiz</button></a>
            </div>
            <div class="topic">
                <img src="english.jpg" alt="ENGLISH"">
                <h3>English</h3>
                <p>Grammar based questions from tenses,articles & prepositions,conjunctions, general vocabulary etc</p>
                <a href="English level.html"><button class="btn">Start Quiz </button></a>
            </div>
            <div class="topic">
                <img src="Basic science.avif" alt="Basic Science">
                <h3>Basic Science</h3>
                <p> Mixed questions from physics, chemistry, biology for school level and beyond</p>
                <a href="Basic science level.html"><button class="btn">Start Quiz</button></a>
            </div>
            <div class="topic">
                <img src="Computer Science.jpg" alt="Computer Science">
                <h3>Computer Science</h3>
                <p>Data Structures,Computer fundamentals, programming in C,C++,JAVA,Python,Database Management etc.</p>
                <a href="Computer science level.html"><button class="btn">Start Quiz</button></a>
            </div>
            <div class="topic">
                <img src="Mathematics.jpg" alt="Mathematics">
                <h3>Mathematics</h3>
                <p>Basic arithmetic,geometry, fractions,percentages, prime numbers,trigonometry,calculus, probability,differential equations and other elementary mathematics concept</p>
                <a href="Mathematics level.html"><button class="btn">Start Quiz</button></a>
            </div>
            <div class="topic">
                <img src="Physics.jpg" alt="Physics">
                <h3>Physics</h3>
                <p>Units & measurements, magnetism & electricity,optics,waves & oscillations,semiconductor devices,thermal physics</p>
                <a href="Physics level.html"><button class="btn">Start Quiz</button></a>
            </div>
            <div class="topic">
                <img src="Chemistry.jpg" alt="Chemistry">
                <h3>Chemistry</h3>
                <p>Atoms, molecules, and their reactions, crucial for understanding natural processes and technological advancements.</p>
                <a href="Chemistry level.html"><button class="btn">Start Quiz</button></a>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="footer-columns">
                <div class="get-in-touch">
                    <h2>Quizio</h2>
                    <p>Our mission is to provide best quality mock test with unlimited no of attempts which is completely free of cost.
                        Our comprehensive resources and practice tests help you ace your exams with confidence. 
                        Join us and start your journey to success today!</p>
                </div>
            <div class="footer-columns">
                <div class="get-in-touch">
                    <h2>Get in Touch</h2>
                    <p><i class="fas fa-envelope"></i> Email: info@quizio.com</p>
                    <p><i class="fas fa-phone"></i> Contact number: +91 723 456 7890</p>
                </div>
                <div class="quick-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="dashboard.php">Home</a></li>
                        <li><a href="About us.php">About Us</a></li>
                    </ul>
                </div>
                <div class="send-feedback">
                    <h2>Send Feedback</h2>
                    <form name="form" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                        
                    <label for="phone_number">Phone number:</label>
			<input type="number" id="phone_number" name="phone_number" placeholder="Enter your phone number" required>
			<br>
            <br>
			<label for="feedback">Send-feedback:</label>
			<textarea name="feedback" id="feedback" cols="30" rows="10" placeholder="Type your feedback here..." required></textarea>
			<button type="submit" id="submit" class="btn" name="submit">Submit</button>
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
					$phone_number = $_POST['phone_number'];
					$feedback = $_POST['feedback'];

					// Insert data into the database
					$sql = "INSERT INTO feedback (phone_number, feedback) VALUES ('$phone_number', '$feedback')";
					$res = mysqli_query($conn, $sql);
					if ($res) {
						echo "Feedback successfully submitted";
					} else {
						echo "Error: " . mysqli_error($conn);
					}
				}
			?>
		</form>

                </div>
            </div>
        </footer>
    </main>

    <!-- Background Effect -->
    <div class="background-effect">
        <div class="bg-layer"></div>
        <div class="bg-layer"></div>
        <div class="bg-layer"></div>
    </div>

</body>
</html>
