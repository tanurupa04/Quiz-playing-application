let questions = [
    {
        question: "What is the value of 'pi' rounded to two decimal places?",
        options: ["3.14", "3.15", "3.16", "3.17"],
        correct: 0
      },
      {
        question: "What is the sum of the angles in a triangle?",
        options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
        correct: 1
      },
      {
        question: "What is 5 + 7?",
        options: ["10", "11", "12", "13"],
        correct: 2
      },
      {
        question: "What is the square root of 81?",
        options: ["7", "8", "9", "10"],
        correct: 2
      },
      {
        question: "What is the perimeter of a rectangle with length 5 and width 3?",
        options: ["8", "10", "15", "16"],
        correct: 3
      },
      {
        question: "What is 15% of 200?",
        options: ["20", "25", "30", "35"],
        correct: 2
      },
      {
        question: "What is the value of 2^4 (2 raised to the power of 4)?",
        options: ["8", "12", "16", "20"],
        correct: 2
      },
      {
        question: "What is the next number in the sequence: 2, 4, 6, 8, ...?",
        options: ["9", "10", "11", "12"],
        correct: 1
      },
      {
        question: "What is the area of a circle with radius 3? (Use pi = 3.14)",
        options: ["28.26", "31.40", "18.84", "37.68"],
        correct: 0
      },
      {
        question: "What is the product of 7 and 6?",
        options: ["42", "48", "54", "56"],
        correct: 0
      },
      {
        question: "What is the value of 9 - 3?",
        options: ["5", "6", "7", "8"],
        correct: 1
      },
      {
        question: "What is 3/4 expressed as a decimal?",
        options: ["0.5", "0.6", "0.75", "0.8"],
        correct: 2
      },
      {
        question: "What is the sum of the first five prime numbers?",
        options: ["18", "26", "28", "30"],
        correct: 2
      },
      {
        question: "What is the result of 8 / 4?",
        options: ["1", "2", "3", "4"],
        correct: 1
      },
      {
        question: "If x + 2 = 5, what is the value of x?",
        options: ["1", "2", "3", "4"],
        correct: 2
      },
      {
        question: "What is the least common multiple (LCM) of 3 and 5?",
        options: ["10", "12", "15", "20"],
        correct: 2
      },
      {
        question: "What is 50% of 80?",
        options: ["30", "35", "40", "45"],
        correct: 2
      },
      {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: 2
      },
      {
        question: "What is the value of 7^0 (7 raised to the power of 0)?",
        options: ["0", "1", "7", "10"],
        correct: 1
      },
      {
        question: "What is 12 x 12?",
        options: ["120", "124", "140", "144"],
        correct: 3
      },
      {
        question: "What is the value of 100 / 25?",
        options: ["2", "3", "4", "5"],
        correct: 2
      },
      {
        question: "What is the result of 15 - 9?",
        options: ["4", "5", "6", "7"],
        correct: 2
      },
      {
        question: "What is the sum of 8 and 15?",
        options: ["21", "22", "23", "24"],
        correct: 2
      },
      {
        question: "What is the value of 5! (5 factorial)?",
        options: ["60", "100", "120", "150"],
        correct: 2
      },
      {
        question: "What is 1/2 + 1/4?",
        options: ["1/2", "3/4", "1", "1 1/4"],
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
    