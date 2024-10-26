let questions = [
    {
        question: "What is the integral of e^x from x = 0 to x = 1?",
        options: ["e - 1", "e", "e^2 - 1", "e - e^2"],
        correct: 0
      },
      {
        question: "Solve for x in the equation log_2(x) + log_2(x - 3) = 4.",
        options: ["7", "8", "9", "10"],
        correct: 1
      },
      {
        question: "Find the determinant of the matrix [[2, 3, 1], [1, -2, 0], [4, 5, 1]].",
        options: ["-1", "0", "1", "2"],
        correct: 1
      },
      {
        question: "What is the limit of (x^2 - 1)/(x - 1) as x approaches 1?",
        options: ["0", "1", "2", "Infinity"],
        correct: 2
      },
      {
        question: "Find the eigenvalues of the matrix [[1, 2], [2, 1]].",
        options: ["0, 3", "1, -1", "2, -2", "1, 2"],
        correct: 1
      },
      {
        question: "Solve the differential equation dy/dx = x^2 + y^2.",
        options: ["y = x^3/3 + C", "y = x^3 + C", "y = x^2/2 + C", "y = e^x + C"],
        correct: 0
      },
      {
        question: "Find the volume of a tetrahedron with vertices at (0, 0, 0), (1, 0, 0), (0, 1, 0), and (0, 0, 1).",
        options: ["1/6", "1/4", "1/3", "1"],
        correct: 0
      },
      {
        question: "What is the order of the polynomial P(x) = x^4 - 4x^3 + 6x^2 - 4x + 1?",
        options: ["1", "2", "3", "4"],
        correct: 3
      },
      {
        question: "What is the solution to the matrix equation A x = b where A = [[1, 2], [3, 4]] and b = [5, 6]?",
        options: ["x = [1, 1]", "x = [2, 1]", "x = [1, 2]", "x = [0, 1]"],
        correct: 1
      },
      {
        question: "What is the angle between the vectors [1, 0, 0] and [1, 1, 1]?",
        options: ["30 degrees", "45 degrees", "60 degrees", "90 degrees"],
        correct: 2
      },
      {
        question: "What is the radius of convergence for the series 'summation of (x^n/n!)'?",
        options: ["0", "1", "e", "Infinity"],
        correct: 3
      },
      {
        question: "What is the derivative of the function f(x) = x^2 sin(x)?",
        options: ["2x sin(x) + x^2 cos(x)", "2x cos(x) - x^2 sin(x)", "2x sin(x) - x^2 cos(x)", "2x cos(x) + x^2 sin(x)"],
        correct: 0
      },
      {
        question: "What is the rank of the matrix [[1, 2, 3], [4, 5, 6], [7, 8, 9]]?",
        options: ["1", "2", "3", "0"],
        correct: 1
      },
      {
        question: "What is the Laplace transform of t^2?",
        options: ["1/(s^3)", "2/(s^3)", "2/(s^2)", "1/(s^2)"],
        correct: 0
      },
      {
        question: "Find the eigenvectors corresponding to the eigenvalue Lambda = 2 for the matrix [[2, 1], [1, 2]].",
        options: ["[1, 1]", "[1, -1]", "[-1, 1]", "[1, 0]"],
        correct: 0
      },
      {
        question: "What is the sum of the roots of the polynomial x^3 - 3x^2 + 4x - 2?",
        options: ["-1", "1", "2", "3"],
        correct: 3
      },
      {
        question: "Find the Fourier series of f(x) = x on the interval [-pi, pi].",
        options: ["x", "pi - x", "x - pi", "pi/2 - x"],
        correct: 0
      },
      {
        question: "What is the value of the Riemann zeta function at s = 2?",
        options: ["pi^2/6", "pi^2/4", "pi", "2pi"],
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
    