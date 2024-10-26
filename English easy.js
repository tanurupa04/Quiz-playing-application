let questions = [
        {
          question: "Choose the word that is most similar in meaning to 'HAPPY'.",
          options: ["Sad", "Angry", "Joyful", "Hungry"],
          correct: 2
        },
        {
          question: "Choose the word that is most opposite in meaning to 'LARGE'.",
          options: ["Big", "Huge", "Small", "Giant"],
          correct: 2
        },
        {
          question: "Choose the word that is most similar in meaning to 'QUIET'.",
          options: ["Noisy", "Loud", "Silent", "Shout"],
          correct: 2
        },
        {
          question: "Choose the word that is most opposite in meaning to 'OLD'.",
          options: ["Young", "Ancient", "Past", "Elder"],
          correct: 0
        },
        {
          question: "She is very good ____ playing the piano.",
          options: ["in", "at", "on", "with"],
          correct: 1
        },
        {
          question: "Choose the correct spelling:",
          options: ["Recieve", "Receive", "Recive", "Receeve"],
          correct: 1
        },
        {
          question: "Choose the word that best completes the sentence: The sky is ____.",
          options: ["blue", "blues", "blu", "bloo"],
          correct: 0
        },
        {
          question: "Choose the word that is most similar in meaning to 'BEGIN'.",
          options: ["Start", "Stop", "End", "Finish"],
          correct: 0
        },
        {
          question: "Choose the word that is most opposite in meaning to 'DAY'.",
          options: ["Morning", "Evening", "Night", "Afternoon"],
          correct: 2
        },
        {
          question: "He ____ to the market every day.",
          options: ["go", "goes", "gone", "going"],
          correct: 1
        },
        {
          question: "Choose the correct spelling:",
          options: ["Definately", "Definitely", "Definitley", "Definatly"],
          correct: 1
        },
        {
          question: "Choose the word that best completes the sentence: The cat is ____ the table.",
          options: ["on", "in", "at", "with"],
          correct: 0
        },
        {
          question: "Choose the word that is most similar in meaning to 'CLOSE'.",
          options: ["Far", "Near", "Shut", "Open"],
          correct: 2
        },
        {
          question: "Choose the word that is most opposite in meaning to 'HOT'.",
          options: ["Cold", "Warm", "Cool", "Heat"],
          correct: 0
        },
        {
          question: "They ____ playing football.",
          options: ["is", "am", "are", "be"],
          correct: 2
        },
        {
          question: "Choose the correct spelling:",
          options: ["Acomodate", "Accommodate", "Acomoddate", "Accomadate"],
          correct: 1
        },
        {
          question: "Choose the word that best completes the sentence: She is ____ than her sister.",
          options: ["tall", "taller", "tallest", "talls"],
          correct: 1
        },
        {
          question: "Choose the word that is most similar in meaning to 'HAPPY'.",
          options: ["Sad", "Angry", "Joyful", "Hungry"],
          correct: 2
        },
        {
          question: "Choose the word that is most opposite in meaning to 'SAD'.",
          options: ["Happy", "Angry", "Joyful", "Hungry"],
          correct: 0
        },
        {
          question: "Choose the word that best completes the sentence: The book is ____ the table.",
          options: ["on", "in", "at", "with"],
          correct: 0
        },
        {
          question: "Choose the correct spelling:",
          options: ["Maneger", "Manager", "Maneger", "Manadger"],
          correct: 1
        },
        {
          question: "Choose the word that is most similar in meaning to 'BRIGHT'.",
          options: ["Dark", "Dull", "Shiny", "Dim"],
          correct: 2
        },
        {
          question: "Choose the word that is most opposite in meaning to 'TALL'.",
          options: ["High", "Short", "Large", "Small"],
          correct: 1
        },
        {
          question: "He ____ to school every day.",
          options: ["go", "goes", "gone", "going"],
          correct: 1
        },
        {
          question: "Choose the correct spelling:",
          options: ["Freind", "Friend", "Freend", "Frend"],
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
  