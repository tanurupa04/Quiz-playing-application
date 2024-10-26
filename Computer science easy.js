let questions = [
        {
          question: "What does CPU stand for?",
          options: ["Central Processing Unit", "Central Programming Unit", "Central Performance Unit", "Central Power Unit"],
          correct: 0
        },
        {
          question: "What is the binary representation of the decimal number 10?",
          options: ["1010", "1001", "1100", "1000"],
          correct: 0
        },
        {
          question: "Which device is used to connect multiple computers in a network?",
          options: ["Modem", "Router", "Monitor", "Keyboard"],
          correct: 1
        },
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
          correct: 0
        },
        {
          question: "What is the main function of an operating system?",
          options: ["Run applications", "Manage hardware resources", "Provide a user interface", "All of the above"],
          correct: 3
        },
        {
          question: "Which programming language is primarily used for web development?",
          options: ["Python", "C++", "JavaScript", "Java"],
          correct: 2
        },
        {
          question: "What does RAM stand for?",
          options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Random Application Memory"],
          correct: 1
        },
        {
          question: "Which of the following is a non-volatile memory type?",
          options: ["RAM", "Cache", "ROM", "Register"],
          correct: 2
        },
        {
          question: "What does GUI stand for in computer science?",
          options: ["Graphic User Interface", "General User Interface", "Graphical User Interface", "Graph User Interface"],
          correct: 2
        },
        {
          question: "What is the extension of a Python file?",
          options: [".py", ".java", ".cpp", ".html"],
          correct: 0
        },
        {
          question: "Which of the following is an example of an input device?",
          options: ["Monitor", "Printer", "Keyboard", "Speaker"],
          correct: 2
        },
        {
          question: "What is the term for a network that covers a large geographical area?",
          options: ["LAN", "MAN", "WAN", "PAN"],
          correct: 2
        },
        {
          question: "Which command is used to create a new directory in a command-line interface?",
          options: ["mkdir", "rmdir", "cd", "dir"],
          correct: 0
        },
        {
          question: "What does SQL stand for?",
          options: ["Structured Query Language", "Sequential Query Language", "Structured Question Language", "None of these"],
          correct: 0
        },
        {
          question: "Which of the following is a search engine?",
          options: ["Google", "Facebook", "WhatsApp", "Skype"],
          correct: 0
        },
        {
          question: "What does HTTP stand for?",
          options: ["Hypertext Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Protocol", "Hypertext Transfer Protocol Secure"],
          correct: 0
        },
        {
          question: "Which of the following is used to style a webpage?",
          options: ["HTML", "CSS", "JavaScript", "Python"],
          correct: 1
        },
        {
          question: "What is the term for a flaw in a software program?",
          options: ["Bug", "Patch", "Virus", "Worm"],
          correct: 0
        },
        {
          question: "Which of the following is a popular operating system for mobile devices?",
          options: ["Windows", "Linux", "Android", "UNIX"],
          correct: 2
        },
        {
          question: "What does USB stand for?",
          options: ["Universal Serial Bus", "Universal System Bus", "Uniform Serial Bus", "Universal Software Bus"],
          correct: 0
        },
        {
          question: "Which company developed the Java programming language?",
          options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"],
          correct: 2
        },
        {
          question: "Which of the following is an example of a web browser?",
          options: ["Google", "Yahoo", "Bing", "Firefox"],
          correct: 3
        },
        {
          question: "What does DNS stand for in computer networking?",
          options: ["Digital Network Service", "Domain Name System", "Data Network Server", "Digital Name System"],
          correct: 1
        },
        {
          question: "What is the main purpose of an antivirus program?",
          options: ["To speed up the computer", "To manage files", "To protect the computer from malware", "To edit text files"],
          correct: 2
        },
        {
          question: "Which of the following is a file compression format?",
          options: [".exe", ".zip", ".dll", ".docx"],
          correct: 1
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
    