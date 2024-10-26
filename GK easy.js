let questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correct: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    correct: 2
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    correct: 0
  },
  {
    question: "What is the largest living species of lizard?",
    options: ["Komodo dragon", "Saltwater crocodile", "Black mamba", "Green anaconda"],
    correct: 0
  },
  {
    question: "What is the highest mountain peak in the solar system?",
    options: ["Mount Everest", "Olympus Mons", "Mauna Kea", "Denali"],
    correct: 1
  },
  {
    question: "Which of the following planets is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Blue whale", "Fin whale", "Humpback whale", "Sperm whale"],
    correct: 0
  },
  {
    question: "What is the deepest ocean?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correct: 0
  },
  {
    question: "What is the highest waterfall in the world?",
    options: ["Victoria Falls", "Iguazu Falls", "Niagara Falls", "Angel Falls"],
    correct: 3
  },
  {
    question: "What is the longest river in South America?",
    options: ["Amazon River", "Parana River", "Sao Francisco River", "Magdalena River"],
    correct: 0
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Kalahari"],
    correct: 0
  },
  {
    question: "Which ocean is the smallest by surface area?",
    options: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"],
    correct: 1
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["O2", "CO2", "H2O", "H2SO4"],
    correct: 2
  },
  {
    question: "What is the largest continent by area?",
    options: ["Africa", "Asia", "Europe", "North America"],
    correct: 1
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: 2
  },
  {
    question: "What is the tallest building in the world as of 2021?",
    options: ["Shanghai Tower", "Burj Khalifa", "One World Trade Center", "Eiffel Tower"],
    correct: 1
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    correct: 0
  },
  {
    question: "Which country has the largest population?",
    options: ["India", "China", "United States", "Indonesia"],
    correct: 1
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correct: 2
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: ["Horse", "Elephant", "Camel", "Llama"],
    correct: 2
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
