let questions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "O2", "NaCl"],
        correct: 0 // H2O
      },
      {
        question: "Which element is represented by the symbol 'Na'?",
        options: ["Sodium", "Nitrogen", "Neon", "Nickel"],
        correct: 0 // Sodium
      },
      {
        question: "What is the atomic number of carbon?",
        options: ["6", "12", "14", "8"],
        correct: 0 // 6
      },
      {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
        correct: 2 // Nitrogen
      },
      {
        question: "What type of bond involves the sharing of electron pairs between atoms?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        correct: 1 // Covalent bond
      },
      {
        question: "What is the pH value of pure water?",
        options: ["7", "14", "0", "10"],
        correct: 0 // 7
      },
      {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCO3", "MgO"],
        correct: 0 // NaCl
      },
      {
        question: "Which of the following is a noble gas?",
        options: ["Neon", "Oxygen", "Nitrogen", "Hydrogen"],
        correct: 0 // Neon
      },
      {
        question: "What is the main component of natural gas?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        correct: 0 // Methane
      },
      {
        question: "Which element is used in the batteries of many electronic devices?",
        options: ["Lithium", "Iron", "Copper", "Gold"],
        correct: 0 // Lithium
      },
      {
        question: "What is the common name for sodium bicarbonate?",
        options: ["Baking soda", "Epsom salt", "Table salt", "Cream of tartar"],
        correct: 0 // Baking soda
      },
      {
        question: "Which of these is a compound?",
        options: ["Oxygen", "Hydrogen", "Water", "Nitrogen"],
        correct: 2 // Water
      },
      {
        question: "What is the chemical formula for glucose?",
        options: ["C6H12O6", "C6H6", "C12H22O11", "CH4"],
        correct: 0 // C6H12O6
      },
      {
        question: "Which acid is found in vinegar?",
        options: ["Acetic acid", "Citric acid", "Sulfuric acid", "Hydrochloric acid"],
        correct: 0 // Acetic acid
      },
      {
        question: "Which of the following is a common base?",
        options: ["Hydrochloric acid", "Sodium hydroxide", "Sulfuric acid", "Nitric acid"],
        correct: 1 // Sodium hydroxide
      },
      {
        question: "What is the smallest unit of a chemical element that retains its chemical properties?",
        options: ["Molecule", "Atom", "Ion", "Compound"],
        correct: 1 // Atom
      },
      {
        question: "What type of reaction involves the combination of two or more substances to form a new compound?",
        options: ["Decomposition reaction", "Single displacement reaction", "Double displacement reaction", "Combination reaction"],
        correct: 3 // Combination reaction
      },
      {
        question: "What is the name of the process where a liquid turns into a gas?",
        options: ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        correct: 1 // Evaporation
      },
      {
        question: "Which element is essential for respiration in humans?",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        correct: 0 // Oxygen
      },
      {
        question: "What is the common name for carbon dioxide in soft drinks?",
        options: ["Carbonic acid", "Carbon monoxide", "Nitric oxide", "Hydrogen carbonate"],
        correct: 0 // Carbonic acid
      },
      {
        question: "What is the main use of sulfuric acid in industry?",
        options: ["Fertilizer production", "Food preservation", "Cleaning agent", "Water purification"],
        correct: 0 // Fertilizer production
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
    