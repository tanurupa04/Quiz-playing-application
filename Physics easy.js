let questions = [
    {
        question: "What is the unit of force in the International System of Units (SI)?",
        options: ["Joule", "Pascal", "Watt", "Newton"],
        correct: 3 // Newton
      },
      {
        question: "What is the speed of light in a vacuum?",
        options: ["3 x 10^6 m/s", "3 x 10^8 m/s", "3 x 10^4 m/s", "3 x 10^10 m/s"],
        correct: 1 // 3 × 10^8 m/s
      },
      {
        question: "What is the formula for calculating gravitational force between two masses?",
        options: ["F = G(m1 * m2) / r^2", "F = m1 * m2 / r", "F = G * (m1 + m2) / r^2", "F = m1 * m2 * r^2"],
        correct: 0 // F = G(m1 * m2) / r^2
      },
      {
        question: "What is the acceleration due to gravity on the surface of the Earth?",
        options: ["10 m/s^2", "9.8 m/s^2", "8.9 m/s^2", "9.0 m/s^2"],
        correct: 1 // 9.8 m/s^2
      },
      {
        question: "What is the formula for calculating kinetic energy?",
        options: ["KE = 1/2 mv^2", "KE = mv", "KE = 1/2 mgh", "KE = mgh"],
        correct: 0 // KE = 1/2 mv^2
      },
      {
        question: "What is the SI unit of electric current?",
        options: ["Watt", "Ohm", "Ampere", "Volt"],
        correct: 2 // Ampere
      },
      {
        question: "What is the principle behind a lever?",
        options: ["Mechanical advantage", "Conservation of energy", "Electromagnetic induction", "Conservation of momentum"],
        correct: 0 // Mechanical advantage
      },
      {
        question: "What type of wave is sound?",
        options: ["Longitudinal", "Transverse", "Mechanical", "Electromagnetic"],
        correct: 0 // Longitudinal
      },
      {
        question: "What is the unit of work in the International System of Units (SI)?",
        options: ["Joule", "Newton", "Pascal", "Watt"],
        correct: 0 // Joule
      },
      {
        question: "What is the force of gravity acting on a 10 kg mass?",
        options: ["98 N", "10 N", "100 N", "90 N"],
        correct: 0 // 98 N
      },
      {
        question: "What does the law of reflection state?",
        options: ["Angle of incidence equals angle of reflection", "Angle of incidence plus angle of reflection equals 180 degrees", "Angle of incidence is double the angle of reflection", "Angle of incidence is half the angle of reflection"],
        correct: 0 // Angle of incidence equals angle of reflection
      },
      {
        question: "What is the formula for Ohm's law?",
        options: ["V = IR", "P = IV", "E = mc^2", "F = ma"],
        correct: 0 // V = IR
      },
      {
        question: "What is the speed of an object that travels 100 meters in 20 seconds?",
        options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
        correct: 0 // 5 m/s
      },
      {
        question: "What is the SI unit of energy?",
        options: ["Joule", "Newton", "Coulomb", "Watt"],
        correct: 0 // Joule
      },
      {
        question: "What type of energy is stored in a stretched rubber band?",
        options: ["Elastic potential energy", "Kinetic energy", "Chemical energy", "Gravitational potential energy"],
        correct: 0 // Elastic potential energy
      },
      {
        question: "What is the relationship between frequency and wavelength in a wave?",
        options: ["Frequency equals speed divided by wavelength", "Frequency equals wavelength divided by speed", "Frequency equals the inverse of wavelength", "Frequency equals speed times wavelength"],
        correct: 0 // Frequency equals speed divided by wavelength
      },
      {
        question: "What is the primary source of energy for the Earth?",
        options: ["The Sun", "Geothermal energy", "Nuclear reactions", "The Moon"],
        correct: 0 // The Sun
      },
      {
        question: "What is the unit of power in the International System of Units (SI)?",
        options: ["Watt", "Joule", "Volt", "Newton"],
        correct: 0 // Watt
      },
      {
        question: "What phenomenon causes the blue color of the sky?",
        options: ["Rayleigh scattering", "Refraction", "Reflection", "Diffraction"],
        correct: 0 // Rayleigh scattering
      },
      {
        question: "What type of energy does a moving car have?",
        options: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"],
        correct: 0 // Kinetic energy
      },
      {
        question: "What is the temperature at which water boils?",
        options: ["100°C", "0°C", "50°C", "32°C"],
        correct: 0 // 100°C
      },
      {
        question: "What type of lens is used to correct nearsightedness?",
        options: ["Concave lens", "Convex lens", "Bifocal lens", "Cylindrical lens"],
        correct: 0 // Concave lens
      },
      {
        question: "What is the speed of sound in air at room temperature?",
        options: ["343 m/s", "250 m/s", "300 m/s", "200 m/s"],
        correct: 0 // 343 m/s
      },
      {
        question: "What is the effect of increasing the temperature on the resistance of a conductor?",
        options: ["Resistance increases", "Resistance remains constant", "Resistance decreases", "Resistance doubles"],
        correct: 0 // Resistance increases
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
    