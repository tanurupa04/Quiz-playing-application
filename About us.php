<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizio</title>
    <style>
        body {
            background-image: url("About us bg.jpg"); /* replace 'background.jpg' with your background image file */
            background-size: cover;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .user{
    padding-left: 30%; ;
}

.sidebar-toggle {
    display: none;
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color:#f7ed9d;
    color: #141313;
    padding: 20px;
    transform: translateX(0);
    transition: transform 0.3s ease;
}

.sidebar-hidden {
    transform: translateX(-100%);
}

.hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 10px;
}

.hamburger div {
    width: 100%;
    height: 4px;
    background-color: black;
}

#sidebar-toggle:checked ~ .sidebar {
    transform: translateX(-100%);
}

#sidebar-toggle:checked ~ .main-content {
    margin-left: 0;
}


.main-content {
    margin-left: 250px;
    padding: 20px;
    transition: margin-left 0.3s ease;
}
        .container {
            padding: 20px;
            background: rgba(255, 255, 255, 0.8); /* To make the text more readable */
            margin: 50px;
        }
        .title {
            font-size: 2em;
            text-align: center;
            margin-top: 50px;
        }
        .image {
            display: block;
            margin: 6px auto;
            width: 50%;
            height: 20%;
        }
        .text-section {
            text-align: center;
            margin: 20px 0;
        }
        .footer {
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.footer-columns {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

.get-in-touch, .quick-links, .send-feedback {
    width: 30%;
}

.get-in-touch h2, .quick-links h2, .send-feedback h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.get-in-touch p, .quick-links ul, .send-feedback textarea {
    margin-bottom: 10px;
}

.quick-links ul {
    list-style: none;
    padding: 0;
}

.quick-links li {
    margin-bottom: 10px;
}

.quick-links a {
    color: #fff;
    text-decoration: none;
}

.send-feedback textarea {
    width: 100%;
    height: 80px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

.btn {
    margin: 10px;
    padding: 10px 20px;
    background-color: orange;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: yellow;

  }
 
    </style>
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
             <li><a href="Logout.html">Logout</a></li>
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
    <div class="container">
        <div class="title">About Us</div>
        <img src="About us.avif" alt="Image" class="image"> <!-- replace 'your-image.jpg' with your image file -->
        <div class="title">Why Choose Us?</div>
        <div class="text-section">
            <p>Welcome to Quizio, where the thrill of knowledge meets the joy of competition! At Quizio, we believe that learning should be a fun and engaging experience for everyone. Our platform offers a wide variety of quizzes across a wide range of topics, designed to challenge your mind and expand your horizons. Whether you're a student eager to test your skills or preparing for government exams such as bank, rail, etc., or someone who simply enjoys a good mental workout, then Quizio is your go-to destination. Our sleek, user-friendly interface ensures a seamless experience, making it easy for you to dive into the world of quizzes. Join us at Quizio, where every question is a step towards greater knowledge and the ultimate destination for engaging and interactive quiz experiences!</p>
            <p>Our mission is to provide a fun, educational platform where users can strengthen their time management skills, which is a challenge for many students, and this is how they can challenge themselves to excel and expand their knowledge across various topics. So, whether you're a trivia enthusiast, a student looking to test your skills, or just someone who loves a good challenge, Quizio has something for everyone. With our user-friendly interface and diverse question sets, we make learning enjoyable and accessible for all. Join us and start quizzing today! Start your journey towards success with Quizio!</p>
        </div>
    </div>
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
</body>
</html>
