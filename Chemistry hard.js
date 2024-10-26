let questions = [
    {
        question: "Which of the following elements has the highest ionization energy?",
        options: ["Fluorine", "Neon", "Oxygen", "Nitrogen"],
        correct: 1 // Neon
      },
      {
        question: "In the context of quantum chemistry, what does the '4f' designation represent?",
        options: ["A type of orbital", "A principal quantum number", "An electron shell", "An element group"],
        correct: 0 // A type of orbital
      },
      {
        question: "What is the main product of the reaction between sulfur dioxide (SO2) and oxygen (O2) in the presence of a catalyst?",
        options: ["Sulfur trioxide (SO3)", "Sulfuric acid (H2SO4)", "Sulfur (S)", "Sulfur dioxide (SO2)"],
        correct: 0 // Sulfur trioxide (SO3)
      },
      {
        question: "What is the main feature of an exothermic reaction?",
        options: ["Absorbs heat from the surroundings", "Releases heat to the surroundings", "No heat change", "Forms a gas"],
        correct: 1 // Releases heat to the surroundings
      },
      {
        question: "Which principle states that no two electrons in an atom can have the same set of quantum numbers?",
        options: ["Pauli Exclusion Principle", "Hund's Rule", "Aufbau Principle", "Heisenberg Uncertainty Principle"],
        correct: 0 // Pauli Exclusion Principle
      },
      {
        question: "Which of the following compounds is a chelating agent?",
        options: ["EDTA", "NaCl", "H2O", "HCl"],
        correct: 0 // EDTA
      },
      {
        question: "In the equilibrium reaction CO(g) + 2H2(g) ⇌ CH3OH(g), what is the effect of increasing the pressure on the equilibrium position?",
        options: ["Shifts to the left", "Shifts to the right", "No change", "Depends on the temperature"],
        correct: 1 // Shifts to the right
      },
      {
        question: "What is the term for the energy required to remove the outermost electron from a neutral atom?",
        options: ["Electron affinity", "Electronegativity", "Ionization energy", "Bond dissociation energy"],
        correct: 2 // Ionization energy
      },
      {
        question: "What is the common name for the reaction of an acid with a base?",
        options: ["Redox reaction", "Decomposition reaction", "Neutralization reaction", "Synthesis reaction"],
        correct: 2 // Neutralization reaction
      },
      {
        question: "Which of the following substances has the highest boiling point?",
        options: ["Hydrogen chloride (HCl)", "Ammonia (NH3)", "Water (H2O)", "Methane (CH4)"],
        correct: 2 // Water (H2O)
      },
      {
        question: "What is the term for the process of converting a gas directly into a solid?",
        options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
        correct: 1 // Deposition
      },
      {
        question: "In the context of thermodynamics, what does the Gibbs free energy change (ΔG) indicate?",
        options: ["The heat released or absorbed", "The total energy of a system", "The spontaneity of a reaction", "The rate of a reaction"],
        correct: 2 // The spontaneity of a reaction
      },
      {
        question: "What type of isomerism is exhibited by compounds with the same molecular formula but different connectivity of atoms?",
        options: ["Geometric isomerism", "Structural isomerism", "Optical isomerism", "Conformational isomerism"],
        correct: 1 // Structural isomerism
      },
      {
        question: "Which law states that the rate of a reaction is proportional to the concentration of the reactants raised to a power?",
        options: ["Beer-Lambert Law", "Rate Law", "Raoult's Law", "Henry's Law"],
        correct: 1 // Rate Law
      },
      {
        question: "What is the term for the number that represents the number of particles in one mole of a substance?",
        options: ["Avogadro's number", "Faraday's constant", "Boltzmann constant", "Planck's constant"],
        correct: 0 // Avogadro's number
      },
      {
        question: "Which of the following methods is used for separating mixtures based on differences in boiling points?",
        options: ["Distillation", "Filtration", "Chromatography", "Electrophoresis"],
        correct: 0 // Distillation
      },
      {
        question: "What is the primary characteristic of an endothermic reaction?",
        options: ["Releases heat", "Absorbs heat", "No heat exchange", "Forms a precipitate"],
        correct: 1 // Absorbs heat
      },
      {
        question: "Which quantum number describes the shape of an atomic orbital?",
        options: ["Principal quantum number", "Azimuthal quantum number", "Magnetic quantum number", "Spin quantum number"],
        correct: 1 // Azimuthal quantum number
      },
      {
        question: "What is the chemical formula for potassium dichromate?",
        options: ["K2Cr2O7", "K2CrO4", "KCr2O7", "KCrO4"],
        correct: 0 // K2Cr2O7
      },
      {
        question: "What is the name of the process in which a solid is dissolved in a liquid to form a solution?",
        options: ["Dissolution", "Sublimation", "Evaporation", "Condensation"],
        correct: 0 // Dissolution
      },
      {
        question: "Which of the following statements is true about an ideal gas?",
        options: ["Molecules have no volume", "Molecules interact with each other", "The gas has a definite shape and volume", "The gas molecules are stationary"],
        correct: 0 // Molecules have no volume
      },
      {
        question: "What is the term for the equilibrium constant of a reaction expressed in terms of partial pressures of gaseous reactants and products?",
        options: ["Kc", "Kp", "Kw", "Ka"],
        correct: 1 // Kp
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
    