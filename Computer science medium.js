let questions = [
    {
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        correct: 1
      },
      {
        question: "Which sorting algorithm is known as a comparison sort?",
        options: ["Merge Sort", "Counting Sort", "Radix Sort", "Bucket Sort"],
        correct: 0
      },
      {
        question: "Which data structure uses the LIFO (Last In First Out) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correct: 1
      },
      {
        question: "What does the acronym SQL stand for?",
        options: ["Simple Query Language", "Structured Query Language", "Sequential Query Language", "Structured Question Language"],
        correct: 1
      },
      {
        question: "In object-oriented programming, what is a class?",
        options: ["A blueprint for creating objects", "An instance of an object", "A function", "A variable"],
        correct: 0
      },
      {
        question: "What is polymorphism in object-oriented programming?",
        options: ["The ability to take many forms", "Data hiding", "Class inheritance", "Function overloading"],
        correct: 0
      },
      {
        question: "Which of the following is not a type of database management system?",
        options: ["Hierarchical", "Relational", "Network", "Object-relational"],
        correct: 3
      },
      {
        question: "What is the main difference between HTTP and HTTPS?",
        options: ["HTTP is faster", "HTTPS is secure", "HTTP is secure", "There is no difference"],
        correct: 1
      },
      {
        question: "Which programming paradigm focuses on functions and avoids changing state and mutable data?",
        options: ["Procedural", "Object-Oriented", "Functional", "Imperative"],
        correct: 2
      },
      {
        question: "In computer networking, what does TCP stand for?",
        options: ["Transmission Control Protocol", "Transfer Control Protocol", "Transmission Connection Protocol", "Transfer Connection Protocol"],
        correct: 0
      },
      {
        question: "What is a primary key in a database?",
        options: ["A unique identifier for a record", "A foreign key", "A key used to encrypt data", "A key used to create indexes"],
        correct: 0
      },
      {
        question: "What is the purpose of a firewall in computer networks?",
        options: ["To speed up the network", "To monitor and control incoming and outgoing network traffic", "To connect different networks", "To provide DNS services"],
        correct: 1
      },
      {
        question: "Which language is primarily used for data analysis and statistical computing?",
        options: ["Python", "Java", "R", "C++"],
        correct: 2
      },
      {
        question: "What is the main purpose of the OSI model in networking?",
        options: ["To provide a standard for different network protocols", "To improve network speed", "To secure network connections", "To provide a common format for data storage"],
        correct: 0
      },
      {
        question: "Which of the following is an example of a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        correct: 2
      },
      {
        question: "What does the 'inheritance' feature of OOP allow you to do?",
        options: ["Create multiple instances of a class", "Define a class based on another class", "Hide data", "Define a function"],
        correct: 1
      },
      {
        question: "In HTML, what is the purpose of the <div> tag?",
        options: ["To create a hyperlink", "To define a division or section", "To create a list", "To display an image"],
        correct: 1
      },
      {
        question: "Which protocol is commonly used for secure remote login and command execution?",
        options: ["FTP", "HTTP", "SSH", "SMTP"],
        correct: 2
      },
      {
        question: "What is the primary purpose of the Agile methodology in software development?",
        options: ["To deliver software in small, manageable pieces", "To increase software security", "To create detailed documentation", "To extend the project timeline"],
        correct: 0
      },
      {
        question: "In CSS, what does 'padding' refer to?",
        options: ["The space between the content and the border", "The space outside the border", "The space between elements", "The space inside the content"],
        correct: 0
      },
      {
        question: "Which of the following is a version control system?",
        options: ["Git", "Docker", "Kubernetes", "Nginx"],
        correct: 0
      },
      {
        question: "What does the 'return' keyword do in a function?",
        options: ["Exits the function and returns a value", "Starts the function", "Calls another function", "Declares a variable"],
        correct: 0
      },
      {
        question: "Which sorting algorithm is the fastest for large datasets?",
        options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
        correct: 1
      },
      {
        question: "In Python, what is the purpose of the 'self' parameter in a class method?",
        options: ["To refer to the current instance of the class", "To declare a static method", "To call another method", "To initialize a variable"],
        correct: 0
      },
      {
        question: "What does the term 'cloud computing' refer to?",
        options: ["Using remote servers to store, manage, and process data", "Using powerful desktop computers", "Running applications locally", "Managing a computer network"],
        correct: 0
      }
];

let currentQuestion = 0;
let score = 0;
let attemptedQuestions = 0;
let timerInterval;
let selectedQuestions = [];
let answers = [];

function selectRandomQuestions() {
  selectedQuestions = [];
  while (selectedQuestions.length < 5) {
    let randomIndex = Math.floor(Math.random() * questions.length);
    selectedQuestions.push(questions[randomIndex]);
    questions.splice(randomIndex, 1);
  }
}

function showQuestion() {
  let question = selectedQuestions[currentQuestion];
  document.getElementById("question-text").innerHTML = question.question;
  let optionsList = document.getElementById("options-list");
  optionsList.innerHTML = "";
  for (let i = 0; i < question.options.length; i++) {
    let option = document.createElement("li");
    option.innerHTML = `<input type="radio" id="option${i+1}" name="option" value="${i}" onclick="checkAnswer(${i})"><label for="option${i+1}" id="option${i+1}-label">${question.options[i]}</label>`;
    option.classList.add("option");
    optionsList.appendChild(option);
  }
  document.getElementById("question-number").innerHTML = `Question ${currentQuestion+1} of 5`;
  startTimer();
}

function startTimer() {
  let timeLeft = 30;
  document.getElementById("timer-text").innerHTML = `Time left: ${timeLeft} seconds`;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer-text").innerHTML = `Time left: ${timeLeft} seconds`;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      checkAnswer(null);
    }
  }, 1000);
}

function checkAnswer(selectedValue) {
  clearInterval(timerInterval);
  let correctOption = selectedQuestions[currentQuestion].correct;
  let correctLabel = document.getElementById(`option${correctOption+1}-label`);
  correctLabel.parentNode.style.backgroundColor = "green";

  if (selectedValue !== null) {
    if (selectedValue === correctOption) {
      score++;
      document.getElementById(`option${selectedValue+1}`).parentNode.style.backgroundColor = "green";
      answers[currentQuestion] = "correct";
    } else {
      document.getElementById(`option${selectedValue+1}`).parentNode.style.backgroundColor = "red";
      answers[currentQuestion] = "wrong";
    }
    attemptedQuestions++;
  } else {
    answers[currentQuestion] = "unanswered";
  }

  // Disable further option selection
  let options = document.querySelectorAll('input[name="option"]');
  options.forEach(option => option.disabled = true);

  updateAnswerIndicators();
  currentQuestion++;
  if (currentQuestion < 5) {
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(endQuiz, 1000); // Delayed to allow user to see the final result
  }
}

function updateAnswerIndicators() {
  let indicators = document.getElementById("answer-indicators");
  indicators.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let indicator = document.createElement("div");
    indicator.classList.add("circle");
    if (answers[i] === "correct") {
      indicator.innerHTML = "R";
      indicator.style.color = "green";
    } else if (answers[i] === "wrong") {
      indicator.innerHTML = "W";
      indicator.style.color = "red";
    } else {
      indicator.innerHTML = "NA";
    }
    indicators.appendChild(indicator);
  }
}

function submitQuiz() {
  endQuiz();
}

function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("question-text").innerHTML = ``;
  document.getElementById("options-list").innerHTML = "";
  document.getElementById("question-number").innerHTML = "";
  document.getElementById("timer-text").innerHTML = "";
  document.getElementById("next-button").style.display = "none";
  document.getElementById("submit-button").style.display = "none";

  let finalScoreText = `Total Questions: 5<br>Number of attempted Questions: ${attemptedQuestions}<br>Your score is ${score} out of 5`;
  document.getElementById("final-score").innerHTML = finalScoreText;

  // Show the modal
  let modal = document.getElementById("congratsModal");
  modal.style.display = "block";

  // Trigger confetti effect
  confetti();
}

// Get the modal element
let modal = document.getElementById("congratsModal");

// Get the <span> element that closes the modal
let span = document.getElementById("closeModal");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("next-button").addEventListener("click", () => {
  clearInterval(timerInterval); // Clear the timer interval before moving to the next question
  currentQuestion++;
  if (currentQuestion < 5) {
    showQuestion();
  } else {
    endQuiz();
  }
});
document.getElementById("submit-button").addEventListener("click", submitQuiz);

selectRandomQuestions();
showQuestion();
    