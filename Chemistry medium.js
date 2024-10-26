let questions = [
    {
        question: "What is the primary type of intermolecular force present in water?",
        options: ["Hydrogen bonding", "Dipole-dipole interactions", "Van der Waals forces", "Ionic bonding"],
        correct: 0 // Hydrogen bonding
      },
      {
        question: "Which of the following is a common oxidation state for iron?",
        options: ["+1", "+2", "+3", "+4"],
        correct: 2 // +3
      },
      {
        question: "What is the name of the process where a solid turns directly into a gas without becoming a liquid?",
        options: ["Sublimation", "Deposition", "Evaporation", "Condensation"],
        correct: 0 // Sublimation
      },
      {
        question: "Which type of chemical reaction involves the transfer of electrons between substances?",
        options: ["Redox reaction", "Combination reaction", "Decomposition reaction", "Double displacement reaction"],
        correct: 0 // Redox reaction
      },
      {
        question: "What is the term for a solution that has the same concentration of solute as the cell's interior?",
        options: ["Hypotonic", "Hypertonic", "Isotonic", "Saturated"],
        correct: 2 // Isotonic
      },
      {
        question: "What is the main principle behind chromatography?",
        options: ["Separation based on solubility", "Separation based on density", "Separation based on particle size", "Separation based on mass"],
        correct: 0 // Separation based on solubility
      },
      {
        question: "What is the name of the effect where a metal reacts with oxygen to form a metal oxide?",
        options: ["Corrosion", "Rusting", "Oxidation", "Reduction"],
        correct: 1 // Rusting
      },
      {
        question: "Which of the following elements is most likely to form a covalent bond with chlorine?",
        options: ["Sodium", "Potassium", "Calcium", "Phosphorus"],
        correct: 3 // Phosphorus
      },
      {
        question: "In a balanced chemical equation, what is the coefficient for oxygen in the combustion of propane (C3H8)?",
        options: ["3", "5", "7", "8"],
        correct: 1 // 5
      },
      {
        question: "What type of solution has a pH greater than 7?",
        options: ["Acidic", "Neutral", "Basic", "Saturated"],
        correct: 2 // Basic
      },
      {
        question: "Which type of bond is formed when two atoms share a pair of electrons?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        correct: 1 // Covalent bond
      },
      {
        question: "What is the term for a reaction that absorbs heat from the surroundings?",
        options: ["Exothermic", "Endothermic", "Neutral", "Combustion"],
        correct: 1 // Endothermic
      },
      {
        question: "Which of the following compounds is known as table sugar?",
        options: ["Sucrose", "Glucose", "Fructose", "Lactose"],
        correct: 0 // Sucrose
      },
      {
        question: "What is the common name for the compound NaHCO3?",
        options: ["Baking soda", "Table salt", "Vinegar", "Lime juice"],
        correct: 0 // Baking soda
      },
      {
        question: "Which of the following acids is commonly used in car batteries?",
        options: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"],
        correct: 0 // Sulfuric acid
      },
      {
        question: "What is the term for the heat required to change a substance from a solid to a liquid at its melting point?",
        options: ["Latent heat of fusion", "Latent heat of vaporization", "Specific heat", "Heat capacity"],
        correct: 0 // Latent heat of fusion
      },
      {
        question: "Which property is most associated with metals?",
        options: ["High malleability", "High electronegativity", "High ionization energy", "High affinity for electrons"],
        correct: 0 // High malleability
      },
      {
        question: "In organic chemistry, what is the general formula for alkanes?",
        options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n+1"],
        correct: 0 // CnH2n+2
      },
      {
        question: "What is the name of the process where a substance is dissolved in water and its ions dissociate?",
        options: ["Ionization", "Hydrolysis", "Neutralization", "Oxidation"],
        correct: 0 // Ionization
      },
      {
        question: "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
        options: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Dalton's Law"],
        correct: 1 // Charles's Law
      },
      {
        question: "What type of bond is formed when electrons are transferred from one atom to another?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
        correct: 0 // Ionic bond
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
    