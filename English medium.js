let questions = [
        {
          question: "Choose the word that is most similar in meaning to 'CONCUR'.",
          options: ["Disagree", "Agree", "Argue", "Discuss"],
          correct: 1
        },
        {
          question: "Choose the word that is most opposite in meaning to 'CONSPICUOUS'.",
          options: ["Obvious", "Visible", "Hidden", "Noticeable"],
          correct: 2
        },
        {
          question: "Choose the correct spelling:",
          options: ["Reccomend", "Recommend", "Recomend", "Reccommed"],
          correct: 1
        },
        {
          question: "Identify the correct sentence.",
          options: [
            "He don't like ice cream.",
            "He doesn't likes ice cream.",
            "He doesn't like ice cream.",
            "He don't likes ice cream."
          ],
          correct: 2
        },
        {
          question: "Which of the following is a synonym for 'ERADICATE'?",
          options: ["Build", "Create", "Eliminate", "Form"],
          correct: 2
        },
        {
          question: "Choose the word that best completes the sentence: She has a ____ of foreign coins.",
          options: ["collection", "collect", "collector", "collective"],
          correct: 0
        },
        {
          question: "Identify the correct sentence.",
          options: [
            "She was looking forward for the trip.",
            "She was looking forward to the trip.",
            "She was looking forward on the trip.",
            "She was looking forward in the trip."
          ],
          correct: 1
        },
        {
          question: "Choose the correct spelling:",
          options: ["Acquaintence", "Acquaintance", "Aqquaintance", "Acquaintanse"],
          correct: 1
        },
        {
          question: "Choose the word that is most similar in meaning to 'INNOVATE'.",
          options: ["Copy", "Create", "Destroy", "Repeat"],
          correct: 1
        },
        {
          question: "Choose the word that is most opposite in meaning to 'BENIGN'.",
          options: ["Kind", "Gentle", "Harmless", "Harmful"],
          correct: 3
        },
        {
          question: "Choose the word that best completes the sentence: The scientist's discovery was a ____ in the field of medicine.",
          options: ["breakthrough", "breakdown", "breakup", "breakoff"],
          correct: 0
        },
        {
          question: "Choose the correct spelling:",
          options: ["Buisness", "Businness", "Business", "Bussiness"],
          correct: 2
        },
        {
          question: "Choose the word that is most similar in meaning to 'ABRIDGE'.",
          options: ["Shorten", "Lengthen", "Expand", "Extend"],
          correct: 0
        },
        {
          question: "Choose the word that is most opposite in meaning to 'PROLIFIC'.",
          options: ["Productive", "Fertile", "Barren", "Fruitful"],
          correct: 2
        },
        {
          question: "Identify the correct sentence.",
          options: [
            "She speaks French good.",
            "She speaks French well.",
            "She speaks good French.",
            "She speaks well French."
          ],
          correct: 1
        },
        {
          question: "Choose the word that best completes the sentence: The CEO's speech ____ confidence in the employees.",
          options: ["instilled", "installed", "ensured", "insured"],
          correct: 0
        },
        {
          question: "Choose the correct spelling:",
          options: ["Febuary", "Februery", "February", "Februry"],
          correct: 2
        },
        {
          question: "Choose the word that is most similar in meaning to 'OMINOUS'.",
          options: ["Hopeful", "Promising", "Threatening", "Encouraging"],
          correct: 2
        },
        {
          question: "Choose the word that is most opposite in meaning to 'STRINGENT'.",
          options: ["Strict", "Lenient", "Tight", "Severe"],
          correct: 1
        },
        {
          question: "Identify the correct sentence.",
          options: [
            "She has the ability of play the piano.",
            "She has the ability to play the piano.",
            "She has the ability for play the piano.",
            "She has the ability in play the piano."
          ],
          correct: 1
        },
        {
          question: "Choose the word that best completes the sentence: The artist was known for his ____ use of colors.",
          options: ["vivid", "vividly", "vividness", "vividest"],
          correct: 0
        },
        {
          question: "Choose the correct spelling:",
          options: ["Mispell", "Misspell", "Mispel", "Misspel"],
          correct: 1
        },
        {
          question: "Choose the word that is most similar in meaning to 'FORTITUDE'.",
          options: ["Weakness", "Courage", "Fear", "Cowardice"],
          correct: 1
        },
        {
          question: "Choose the word that is most opposite in meaning to 'MITIGATE'.",
          options: ["Alleviate", "Relieve", "Intensify", "Lessen"],
          correct: 2
        },
        {
          question: "Identify the correct sentence.",
          options: [
            "He don't have any money.",
            "He doesn't have any money.",
            "He doesn't has any money.",
            "He don't has any money."
          ],
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
