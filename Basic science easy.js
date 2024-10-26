let questions = [
        {
          question: "What is the chemical symbol for water?",
          options: ["O2", "H2O", "CO2", "NaCl"],
          correct: 1
        },
        {
          question: "What planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correct: 1
        },
        {
          question: "What is the largest organ in the human body?",
          options: ["Heart", "Liver", "Skin", "Lungs"],
          correct: 2
        },
        {
          question: "What force keeps us grounded on Earth?",
          options: ["Magnetism", "Electricity", "Gravity", "Friction"],
          correct: 2
        },
        {
          question: "What gas do plants absorb from the atmosphere?",
          options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          correct: 2
        },
        {
          question: "What is the boiling point of water?",
          options: ["50°C", "75°C", "100°C", "150°C"],
          correct: 2
        },
        {
          question: "What is the center of an atom called?",
          options: ["Proton", "Neutron", "Electron", "Nucleus"],
          correct: 3
        },
        {
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
          correct: 1
        },
        {
          question: "Which planet is closest to the Sun?",
          options: ["Earth", "Venus", "Mercury", "Mars"],
          correct: 2
        },
        {
          question: "What is the main gas found in the air we breathe?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
          correct: 2
        },
        {
          question: "What part of the plant conducts photosynthesis?",
          options: ["Root", "Stem", "Leaf", "Flower"],
          correct: 2
        },
        {
          question: "How many bones are in the adult human body?",
          options: ["206", "205", "210", "208"],
          correct: 0
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Gold", "Iron", "Diamond", "Silver"],
          correct: 2
        },
        {
          question: "What is the largest planet in our solar system?",
          options: ["Earth", "Saturn", "Jupiter", "Mars"],
          correct: 2
        },
        {
          question: "What element does 'O' represent on the periodic table?",
          options: ["Gold", "Oxygen", "Silver", "Iron"],
          correct: 1
        },
        {
          question: "What is the most abundant gas in the Earth's atmosphere?",
          options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
          correct: 3
        },
        {
          question: "What is the process by which plants make their food?",
          options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
          correct: 1
        },
        {
          question: "What planet is known as the Morning Star or the Evening Star?",
          options: ["Mars", "Venus", "Jupiter", "Saturn"],
          correct: 1
        },
        {
          question: "Which element is necessary for the formation of bones and teeth?",
          options: ["Iron", "Calcium", "Sodium", "Potassium"],
          correct: 1
        },
        {
          question: "What is the common name for the process of 'evaporation and condensation' in nature?",
          options: ["Carbon Cycle", "Water Cycle", "Nitrogen Cycle", "Oxygen Cycle"],
          correct: 1
        },
        {
          question: "What is the largest mammal in the world?",
          options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
          correct: 1
        },
        {
          question: "What part of the brain controls voluntary movements?",
          options: ["Cerebrum", "Cerebellum", "Medulla", "Brainstem"],
          correct: 0
        },
        {
          question: "What mineral is essential for the production of hemoglobin?",
          options: ["Calcium", "Iron", "Potassium", "Sodium"],
          correct: 1
        },
        {
          question: "Which organ is responsible for pumping blood throughout the body?",
          options: ["Liver", "Lungs", "Brain", "Heart"],
          correct: 3
        },
        {
          question: "What is the closest star to Earth?",
          options: ["Alpha Centauri", "Proxima Centauri", "Sirius", "The Sun"],
          correct: 3
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
        