let questions = [
    {
        question: "What is the value of the expression 3x^2 - 4x + 2 when x = 2?",
        options: ["6", "10", "12", "14"],
        correct: 1
      },
      {
        question: "If a triangle has sides of lengths 7, 24, and 25, what type of triangle is it?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correct: 3
      },
      {
        question: "What is the sum of the interior angles of a pentagon?",
        options: ["360 degrees", "540 degrees", "720 degrees", "900 degrees"],
        correct: 1
      },
      {
        question: "What is the solution to the equation 2x + 3 = 11?",
        options: ["2", "3", "4", "5"],
        correct: 2
      },
      {
        question: "What is the derivative of f(x) = 5x^3 + 3x^2 - 7x + 1?",
        options: ["15x^2 + 6x - 7", "15x^2 - 7", "15x^2 + 3x - 7", "15x^2 + 6x + 1"],
        correct: 0
      },
      {
        question: "What is the area of a trapezoid with bases 6 and 10, and height 4?",
        options: ["32", "34", "36", "40"],
        correct: 2
      },
      {
        question: "What is the logarithm base 10 of 1000?",
        options: ["1", "2", "3", "4"],
        correct: 2
      },
      {
        question: "What is the probability of rolling a sum of 7 with two six-sided dice?",
        options: ["1/6", "1/5", "1/4", "1/3"],
        correct: 0
      },
      {
        question: "What is the value of the determinant of the matrix [[1, 2], [3, 4]]?",
        options: ["-2", "-1", "1", "2"],
        correct: 0
      },
      {
        question: "If y varies directly as x and y = 10 when x = 2, what is the value of y when x = 5?",
        options: ["20", "25", "30", "35"],
        correct: 1
      },
      {
        question: "What is the solution to the inequality 3x - 4 < 2x + 5?",
        options: ["x < 9", "x < 1", "x > 1", "x > -9"],
        correct: 0
      },
      {
        question: "What is the sum of the first 10 positive integers?",
        options: ["45", "50", "55", "60"],
        correct: 2
      },
      {
        question: "What is the radius of a circle with circumference 20π?",
        options: ["5", "10", "15", "20"],
        correct: 1
      },
      {
        question: "If the sequence is defined as a_n = 3n + 2, what is the 5th term?",
        options: ["17", "18", "19", "20"],
        correct: 2
      },
      {
        question: "What is the surface area of a cylinder with radius 3 and height 5?",
        options: ["30pi", "60pi", "75pi", "90pi"],
        correct: 3
      },
      {
        question: "What is the value of sin(30 degrees)?",
        options: ["0.5", "0.707", "0.866", "1"],
        correct: 0
      },
      {
        question: "What is the simplified form of the expression (3x^2 - x) - (2x^2 + 4x)?",
        options: ["x^2 - 5x", "x^2 + 3x", "5x^2 - 5x", "x^2 + x"],
        correct: 0
      },
      {
        question: "What is the volume of a sphere with radius 4?",
        options: ["64pi", "128pi", "256pi", "512pi"],
        correct: 1
      },
      {
        question: "What is the value of the geometric series 2 + 4 + 8 + 16 + ... for 5 terms?",
        options: ["30", "31", "62", "63"],
        correct: 3
      },
      {
        question: "What is the slope of the line passing through points (2, 3) and (4, 7)?",
        options: ["1", "2", "3", "4"],
        correct: 1
      },
      {
        question: "What is the value of the integral 'Integration of(2x) dx' from x = 0 to x = 3?",
        options: ["3", "6", "9", "18"],
        correct: 2
      },
      {
        question: "What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ...?",
        options: ["10", "11", "12", "13"],
        correct: 3
      },
      {
        question: "If a rectangle's length is doubled and its width is halved, what happens to its area?",
        options: ["It is halved", "It is doubled", "It remains the same", "It is quadrupled"],
        correct: 2
      },
      {
        question: "What is the value of (a + b)^2?",
        options: ["a^2 + b^2", "a^2 + 2ab + b^2", "a^2 - 2ab + b^2", "2a^2 + 2b^2"],
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
    