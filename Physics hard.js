let questions = [
    {
        question: "What is the energy required to remove an electron from a neutral atom called?",
        options: ["Ionization energy", "Electron affinity", "Electronegativity", "Work function"],
        correct: 0 // Ionization energy
      },
      {
        question: "Which principle explains the functioning of a jet engine?",
        options: ["Bernoulli's Principle", "Archimedes' Principle", "Pascal's Principle", "Newton's Third Law"],
        correct: 3 // Newton's Third Law
      },
      {
        question: "What is the term for the energy stored in the nucleus of an atom?",
        options: ["Chemical energy", "Electrical energy", "Nuclear energy", "Potential energy"],
        correct: 2 // Nuclear energy
      },
      {
        question: "What phenomenon causes the red shift observed in distant galaxies?",
        options: ["Doppler Effect", "Gravitational Lensing", "Cosmic Microwave Background", "Compton Effect"],
        correct: 0 // Doppler Effect
      },
      {
        question: "In quantum mechanics, what is the name of the principle stating that no two electrons can have the same set of quantum numbers?",
        options: ["Heisenberg Uncertainty Principle", "Pauli Exclusion Principle", "Schrödinger Equation", "Planck's Law"],
        correct: 1 // Pauli Exclusion Principle
      },
      {
        question: "What is the physical quantity that describes the rate of change of momentum?",
        options: ["Force", "Energy", "Impulse", "Acceleration"],
        correct: 0 // Force
      },
      {
        question: "What does the term 'blackbody radiation' refer to?",
        options: ["Radiation emitted by a perfect absorber", "Radiation absorbed by a perfect reflector", "Radiation emitted by an ideal gas", "Radiation scattered by a solid object"],
        correct: 0 // Radiation emitted by a perfect absorber
      },
      {
        question: "Which law describes the relationship between the pressure and volume of a gas at constant temperature?",
        options: ["Charles's Law", "Boyle's Law", "Avogadro's Law", "Gay-Lussac's Law"],
        correct: 1 // Boyle's Law
      },
      {
        question: "What is the term for the ratio of the speed of light in a vacuum to the speed of light in a medium?",
        options: ["Refractive index", "Optical density", "Absorption coefficient", "Scattering factor"],
        correct: 0 // Refractive index
      },
      {
        question: "Which type of radioactive decay involves the emission of a helium nucleus?",
        options: ["Alpha decay", "Beta decay", "Gamma decay", "Positron emission"],
        correct: 0 // Alpha decay
      },
      {
        question: "Which phenomenon occurs when the frequency of a wave is altered due to the motion of the source relative to the observer?",
        options: ["Doppler Effect", "Rayleigh Scattering", "Refraction", "Interference"],
        correct: 0 // Doppler Effect
      },
      {
        question: "What is the term for the total energy of the system when considering both kinetic and potential energy in a mechanical system?",
        options: ["Mechanical energy", "Thermal energy", "Internal energy", "Free energy"],
        correct: 0 // Mechanical energy
      },
      {
        question: "In optics, what does the focal length of a lens determine?",
        options: ["The distance between the lens and the image", "The distance between the lens and the object", "The size of the lens", "The power of the lens"],
        correct: 3 // The power of the lens
      },
      {
        question: "What is the term for the phenomenon where a particle and its antiparticle annihilate each other?",
        options: ["Pair production", "Annihilation", "Compton scattering", "Photoelectric effect"],
        correct: 1 // Annihilation
      },
      {
        question: "Which constant is used to describe the proportionality between the force experienced by a charged particle and the electric field in a given region?",
        options: ["Coulomb's constant", "Gravitational constant", "Boltzmann constant", "Planck constant"],
        correct: 0 // Coulomb's constant
      },
      {
        question: "What is the term for the process in which a high-energy photon converts into an electron-positron pair near a nucleus?",
        options: ["Pair production", "Photoelectric effect", "Compton scattering", "Bremsstrahlung"],
        correct: 0 // Pair production
      },
      {
        question: "What is the term for the measurement of a system's disorder or randomness?",
        options: ["Entropy", "Enthalpy", "Gibbs free energy", "Internal energy"],
        correct: 0 // Entropy
      },
      {
        question: "In a double-slit experiment, what causes the formation of an interference pattern?",
        options: ["Superposition of waves", "Diffraction of waves", "Reflection of waves", "Refraction of waves"],
        correct: 0 // Superposition of waves
      },
      {
        question: "What is the name of the effect where an electron transitions between energy levels within an atom, emitting or absorbing a photon?",
        options: ["Quantum transition", "Photoelectric effect", "Compton scattering", "Bremsstrahlung"],
        correct: 0 // Quantum transition
      },
      {
        question: "What is the physical quantity that describes the amount of heat required to raise the temperature of 1 kg of a substance by 1°C?",
        options: ["Specific heat capacity", "Latent heat", "Thermal conductivity", "Heat capacity"],
        correct: 3 // Heat capacity
      },
      {
        question: "In electromagnetism, what is the term for the rate at which magnetic flux changes through a given area?",
        options: ["Induced emf", "Magnetic field strength", "Electric field strength", "Magnetic flux density"],
        correct: 0 // Induced emf
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
    