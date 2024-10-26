let questions = [
      {
        question: "In which medium does sound travel the fastest?",
        options: ["Air", "Water", "Vacuum", "Steel"],
        correct: 3 // Steel
      },
      {
        question: "What is the energy stored in a capacitor called?",
        options: ["Kinetic energy", "Potential energy", "Electric energy", "Elastic energy"],
        correct: 2 // Electric energy
      },
      {
        question: "Which law states that the total momentum of a closed system remains constant if no external forces act on it?",
        options: ["Newton's First Law", "Law of Universal Gravitation", "Conservation of Momentum", "Ohm's Law"],
        correct: 2 // Conservation of Momentum
      },
      {
        question: "What is the SI unit of magnetic flux?",
        options: ["Tesla", "Weber", "Henry", "Ampere"],
        correct: 1 // Weber
      },
      {
        question: "What is the principle of a transformer based on?",
        options: ["Faraday's Law of Electromagnetic Induction", "Ohm's Law", "Newton's Third Law", "Law of Conservation of Energy"],
        correct: 0 // Faraday's Law of Electromagnetic Induction
      },
      {
        question: "What is the relationship between voltage, current, and resistance in a circuit?",
        options: ["V = IR", "V = I/R", "I = VR", "R = VI"],
        correct: 1 // V = I/R
      },
      {
        question: "What does the Hubble's Law relate to in cosmology?",
        options: ["Expansion of the universe", "Speed of light", "Gravitational force", "Magnetic fields"],
        correct: 0 // Expansion of the universe
      },
      {
        question: "What type of radiation has the highest penetrating power?",
        options: ["Alpha particles", "Beta particles", "Gamma rays", "Ultraviolet rays"],
        correct: 2 // Gamma rays
      },
      {
        question: "What is the term for the change in frequency or wavelength of a wave in relation to an observer moving relative to the source of the wave?",
        options: ["Doppler effect", "Photoelectric effect", "Compton effect", "Rayleigh scattering"],
        correct: 0 // Doppler effect
      },
      {
        question: "What is the speed of light in a medium with a refractive index of 2?",
        options: ["1.5 x 10^8 m/s", "3 x 10^8 m/s", "1.5 x 10^10 m/s", "6 x 10^8 m/s"],
        correct: 0 // 1.5 × 10^8 m/s
      },
      {
        question: "What does the term 'half-life' refer to in radioactive decay?",
        options: ["Time for half of the substance to decay", "Time for the substance to reach its maximum decay rate", "Time for the substance to become stable", "Time for the substance to double"],
        correct: 1 // Time for the substance to reach its maximum decay rate
      },
      {
        question: "What is the rate at which work is done or energy is transferred called?",
        options: ["Power", "Work", "Energy", "Force"],
        correct: 0 // Power
      },
      {
        question: "What is the measure of the average kinetic energy of the molecules in a substance?",
        options: ["Temperature", "Pressure", "Volume", "Density"],
        correct: 0 // Temperature
      },
      {
        question: "What is the formula for calculating gravitational potential energy?",
        options: ["PE = mgh", "PE = 1/2 mv^2", "PE = Fd", "PE = 1/2 kx^2"],
        correct: 2 // PE = Fd
      },
      {
        question: "What is the name of the effect where a current-carrying conductor is placed in a magnetic field and experiences a force?",
        options: ["Electromagnetic induction", "Lorentz force", "Photoelectric effect", "Hall effect"],
        correct: 1 // Lorentz force
      },
      {
        question: "What physical quantity is described by the ratio of the force applied to the area over which it is applied?",
        options: ["Pressure", "Stress", "Strain", "Density"],
        correct: 1 // Stress
      },
      {
        question: "What is the term for the bending of light as it passes from one medium to another?",
        options: ["Refraction", "Reflection", "Diffraction", "Dispersion"],
        correct: 2 // Dispersion
      },
      {
        question: "What is the name of the phenomenon where light waves spread out after passing through a narrow slit?",
        options: ["Diffraction", "Interference", "Refraction", "Reflection"],
        correct: 2 // Refraction
      },
      {
        question: "What type of lens is used to correct farsightedness?",
        options: ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
        correct: 0 // Convex lens
      },
      {
        question: "In an electric circuit, what is the name of the component that resists the flow of electric current?",
        options: ["Resistor", "Capacitor", "Inductor", "Diode"],
        correct: 2 // Inductor
      },
      {
        question: "What is the term for the energy required to raise the temperature of 1 gram of a substance by 1 degree Centigrade?",
        options: ["Specific heat capacity", "Latent heat", "Thermal conductivity", "Heat transfer"],
        correct: 1 // Latent heat
      },
      {
        question: "What is the name of the phenomenon where a material absorbs energy and then re-emits it as light?",
        options: ["Luminescence", "Thermal radiation", "Reflection", "Refraction"],
        correct: 3 // Refraction
      },
      {
        question: "What is the name of the principle that states that energy cannot be created or destroyed, only transformed from one form to another?",
        options: ["Conservation of Energy", "Newton's Third Law", "Law of Universal Gravitation", "First Law of Thermodynamics"],
        correct: 2 // Law of Universal Gravitation
      },
      {
        question: "What is the effect observed when light passes through a prism and splits into its constituent colors?",
        options: ["Dispersion", "Refraction", "Diffraction", "Interference"],
        correct: 1 // Refraction
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
    