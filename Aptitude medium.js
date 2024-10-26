let questions = [
    {
        question: "A train running at a speed of 60 km/h crosses a pole in 9 seconds. What is the length of the train?",
        options: ["150 meters", "180 meters", "324 meters", "540 meters"],
        correct: 1
      },
      {
        question: "If the price of a book is increased by 20% and then decreased by 20%, what is the final price of the book compared to the original price?",
        options: ["Same", "2% decrease", "4% decrease", "4% increase"],
        correct: 2
      },
      {
        question: "A and B together can complete a work in 8 days. A alone can do it in 12 days. How long will it take B alone to complete the work?",
        options: ["20 days", "24 days", "18 days", "16 days"],
        correct: 1
      },
      {
        question: "The sum of the ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
        options: ["4 years", "8 years", "6 years", "10 years"],
        correct: 0
      },
      {
        question: "If a person travels at 30 km/h instead of 24 km/h, they save 10 minutes. What is the distance travelled?",
        options: ["10 km", "20 km", "30 km", "40 km"],
        correct: 1
      },
      {
        question: "Find the missing number in the series: 2, 6, 12, 20, ...?",
        options: ["30", "28", "26", "24"],
        correct: 1
      },
      {
        question: "In a certain code, 'ROAD' is written as 'WBLF'. How is 'BEAT' written in that code?",
        options: ["YHZW", "YGZV", "YGZW", "YHZV"],
        correct: 2
      },
      {
        question: "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose photograph was it?",
        options: ["His own", "His son's", "His father's", "His nephew's"],
        correct: 1
      },
      {
        question: "If 'MANGO' is written as 'OGNAM' in a certain code, how is 'APPLE' written in that code?",
        options: ["ELPPA", "EAPLP", "EPPLA", "ALEPP"],
        correct: 0
      },
      {
        question: "Which of the following is the odd one out? Elephant, Tiger, Dog, Whale",
        options: ["Elephant", "Tiger", "Dog", "Whale"],
        correct: 3
      },
      {
        question: "Which of the following words is most similar in meaning to 'EUPHORIC'?",
        options: ["Happy", "Sad", "Depressed", "Calm"],
        correct: 0
      },
      {
        question: "Choose the correct synonym for 'PROLIFIC'.",
        options: ["Scarce", "Plentiful", "Rare", "Unproductive"],
        correct: 1
      },
      {
        question: "Find the antonym for 'VIGOROUS'.",
        options: ["Weak", "Strong", "Energetic", "Active"],
        correct: 0
      },
      {
        question: "Which of the following words means 'to make something weaker or less effective'?",
        options: ["Strengthen", "Enhance", "Undermine", "Bolster"],
        correct: 2
      },
      {
        question: "Choose the correct meaning of the idiom: 'A blessing in disguise'.",
        options: ["A bad thing", "A good thing", "An apparent misfortune that results in something good", "A visible blessing"],
        correct: 2
      },
      {
        question: "Which of the following diagrams best illustrates the relationship between 'Birds', 'Sparrows', and 'Animals'?",
        options: ["Venn Diagram 1", "Venn Diagram 2", "Venn Diagram 3", "Venn Diagram 4"],
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
        