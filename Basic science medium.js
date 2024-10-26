let questions = [
        {
          question: "What is the atomic number of carbon?",
          options: ["6", "8", "12", "14"],
          correct: 0
        },
        {
          question: "Which gas is most commonly used in light bulbs?",
          options: ["Oxygen", "Helium", "Argon", "Nitrogen"],
          correct: 2
        },
        {
          question: "What is the main component of natural gas?",
          options: ["Methane", "Ethane", "Propane", "Butane"],
          correct: 0
        },
        {
          question: "What is the chemical formula for table salt?",
          options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
          correct: 0
        },
        {
          question: "Which vitamin is produced when the skin is exposed to sunlight?",
          options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          correct: 3
        },
        {
          question: "What is the pH value of pure water?",
          options: ["5", "6", "7", "8"],
          correct: 2
        },
        {
          question: "What is the second most abundant element in the Earth's crust?",
          options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
          correct: 1
        },
        {
          question: "What type of bond is formed between water molecules?",
          options: ["Ionic", "Covalent", "Hydrogen", "Metallic"],
          correct: 2
        },
        {
          question: "What is the most common type of rock found on Earth's surface?",
          options: ["Igneous", "Sedimentary", "Metamorphic", "Magnetic"],
          correct: 1
        },
        {
          question: "Which organelle is responsible for photosynthesis?",
          options: ["Mitochondria", "Nucleus", "Chloroplast", "Ribosome"],
          correct: 2
        },
        {
          question: "What is the acceleration due to gravity on Earth?",
          options: ["9.8 m/s²", "8.9 m/s²", "9.8 km/s²", "8.9 km/s²"],
          correct: 0
        },
        {
          question: "Which element has the highest melting point?",
          options: ["Iron", "Tungsten", "Gold", "Silver"],
          correct: 1
        },
        {
          question: "What is the most abundant gas in the Earth's atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
          correct: 1
        },
        {
          question: "Which planet in our solar system has the most moons?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correct: 2
        },
        {
          question: "What is the largest type of star in the universe?",
          options: ["Red Dwarf", "White Dwarf", "Neutron Star", "Red Giant"],
          correct: 3
        },
        {
          question: "Which blood type is known as the universal donor?",
          options: ["A", "B", "AB", "O"],
          correct: 3
        },
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
          correct: 1
        },
        {
          question: "Which part of the human brain is responsible for balance and coordination?",
          options: ["Cerebrum", "Cerebellum", "Brainstem", "Medulla"],
          correct: 1
        },
        {
          question: "Which planet is known for having a prominent ring system?",
          options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
          correct: 1
        },
        {
          question: "What is the primary function of red blood cells?",
          options: ["Fight infections", "Transport oxygen", "Clot blood", "Remove waste"],
          correct: 1
        },
        {
          question: "Which of the following is a noble gas?",
          options: ["Oxygen", "Hydrogen", "Nitrogen", "Neon"],
          correct: 3
        },
        {
          question: "What type of bond involves the sharing of electron pairs between atoms?",
          options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
          correct: 1
        },
        {
          question: "Which chemical element is essential for the production of thyroid hormones?",
          options: ["Iron", "Iodine", "Calcium", "Magnesium"],
          correct: 1
        },
        {
          question: "What is the term for a material that does not conduct electricity?",
          options: ["Conductor", "Insulator", "Semiconductor", "Electrolyte"],
          correct: 1
        },
        {
          question: "What is the chemical name for baking soda?",
          options: ["Sodium chloride", "Sodium bicarbonate", "Calcium carbonate", "Potassium nitrate"],
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
    