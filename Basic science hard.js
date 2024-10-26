let questions = [
        {
          question: "What is the Heisenberg Uncertainty Principle primarily concerned with?",
          options: ["Velocity and time", "Position and momentum", "Energy and mass", "Charge and spin"],
          correct: 1
        },
        {
          question: "Which type of radiation has the shortest wavelength?",
          options: ["Visible light", "Infrared", "Ultraviolet", "Gamma rays"],
          correct: 3
        },
        {
          question: "What is the main function of ribosomes in a cell?",
          options: ["Energy production", "Protein synthesis", "DNA replication", "Lipid metabolism"],
          correct: 1
        },
        {
          question: "What is the most common isotope of uranium found in nature?",
          options: ["U-233", "U-234", "U-235", "U-238"],
          correct: 3
        },
        {
          question: "Which law states that the total energy of an isolated system remains constant?",
          options: ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics", "Law of Conservation of Mass"],
          correct: 0
        },
        {
          question: "What is the term for the ability of a substance to be drawn into a wire?",
          options: ["Malleability", "Ductility", "Elasticity", "Plasticity"],
          correct: 1
        },
        {
          question: "What is the main purpose of the Krebs cycle in cellular respiration?",
          options: ["ATP production", "Glucose breakdown", "Oxygen consumption", "Carbon dioxide release"],
          correct: 0
        },
        {
          question: "Which particle is exchanged in a nuclear fusion reaction?",
          options: ["Neutrons", "Protons", "Electrons", "Photons"],
          correct: 0
        },
        {
          question: "What is the primary cause of the greenhouse effect?",
          options: ["Ozone depletion", "Carbon dioxide emissions", "Deforestation", "Industrial pollution"],
          correct: 1
        },
        {
          question: "What is the most stable electron configuration?",
          options: ["Full s orbital", "Full p orbital", "Full d orbital", "Full valence shell"],
          correct: 3
        },
        {
          question: "What does a catalyst do in a chemical reaction?",
          options: ["Increases reactant concentration", "Lowers activation energy", "Raises activation energy", "Decreases product concentration"],
          correct: 1
        },
        {
          question: "Which of the following is a monosaccharide?",
          options: ["Sucrose", "Lactose", "Glucose", "Cellulose"],
          correct: 2
        },
        {
          question: "Which organ is primarily responsible for detoxifying chemicals and metabolizing drugs?",
          options: ["Kidneys", "Liver", "Pancreas", "Stomach"],
          correct: 1
        },
        {
          question: "What is the main function of the large intestine?",
          options: ["Nutrient absorption", "Water absorption", "Protein digestion", "Fat digestion"],
          correct: 1
        },
        {
          question: "Which of the following is a strong acid?",
          options: ["Acetic acid", "Hydrochloric acid", "Carbonic acid", "Citric acid"],
          correct: 1
        },
        {
          question: "Which type of chemical reaction involves the exchange of ions between two compounds?",
          options: ["Synthesis reaction", "Decomposition reaction", "Single displacement reaction", "Double displacement reaction"],
          correct: 3
        },
        {
          question: "What is the chemical name for the compound with the formula NH3?",
          options: ["Ammonium", "Ammonia", "Nitrite", "Nitrate"],
          correct: 1
        },
        {
          question: "What is the primary structural component of plant cell walls?",
          options: ["Cellulose", "Starch", "Glycogen", "Chitin"],
          correct: 0
        },
        {
          question: "What is the unit of electrical resistance?",
          options: ["Volt", "Ampere", "Ohm", "Watt"],
          correct: 2
        },
        {
          question: "What is the primary function of chlorophyll in plants?",
          options: ["Water absorption", "Carbon fixation", "Light absorption", "Oxygen release"],
          correct: 2
        },
        {
          question: "Which quantum number specifies the orientation of an orbital?",
          options: ["Principal quantum number", "Azimuthal quantum number", "Magnetic quantum number", "Spin quantum number"],
          correct: 2
        },
        {
          question: "Which element is used as a moderator in nuclear reactors?",
          options: ["Uranium", "Plutonium", "Graphite", "Cadmium"],
          correct: 2
        },
        {
          question: "Which of the following is an example of a covalent network solid?",
          options: ["Sodium chloride", "Diamond", "Graphite", "Copper"],
          correct: 1
        },
        {
          question: "What is the general formula for alkanes?",
          options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnH2n+1"],
          correct: 1
        },
        {
          question: "What is the main role of enzymes in biochemical reactions?",
          options: ["Provide energy", "Act as substrates", "Act as catalysts", "Provide structural support"],
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
    