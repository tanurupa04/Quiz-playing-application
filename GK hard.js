let questions = [
    {
      question: "Who was the first woman to win a Nobel Prize?",
      options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Barbara McClintock"],
      correct: 0
    },
    {
      question: "What is the capital of Mongolia?",
      options: ["Ulaanbaatar", "Astana", "Kathmandu", "Thimphu"],
      correct: 0
    },
    {
      question: "In which year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      correct: 2
    },
    {
      question: "What is the most abundant gas in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Argon", "Carbon Dioxide"],
      correct: 1
    },
    {
      question: "Which famous physicist developed the theory of quantum mechanics?",
      options: ["Niels Bohr", "Max Planck", "Werner Heisenberg", "Erwin Schrödinger"],
      correct: 1
    },
    {
      question: "Who is known as the father of modern chemistry?",
      options: ["Antoine Lavoisier", "Dmitri Mendeleev", "Robert Boyle", "Joseph Priestley"],
      correct: 0
    },
    {
      question: "What is the longest river in Asia?",
      options: ["Yangtze", "Mekong", "Ganges", "Lena"],
      correct: 0
    },
    {
      question: "Which treaty ended World War I?",
      options: ["Treaty of Versailles", "Treaty of Paris", "Treaty of Utrecht", "Treaty of Tordesillas"],
      correct: 0
    },
    {
      question: "Which planet has the largest volcano in the solar system?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correct: 1
    },
    {
      question: "What is the smallest unit of life that can replicate independently?",
      options: ["Virus", "Bacterium", "Cell", "Organism"],
      correct: 2
    },
    {
      question: "Who composed the famous classical work 'The Four Seasons'?",
      options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Antonio Vivaldi", "Wolfgang Amadeus Mozart"],
      correct: 2
    },
    {
      question: "What is the chemical symbol for tungsten?",
      options: ["W", "T", "Tu", "U"],
      correct: 0
    },
    {
      question: "Which country was the first to grant women the right to vote?",
      options: ["United States", "United Kingdom", "New Zealand", "Australia"],
      correct: 2
    },
    {
      question: "What is the term for a word that is spelled the same forwards and backwards?",
      options: ["Palindrome", "Anagram", "Homophone", "Synonym"],
      correct: 0
    },
    {
      question: "Who wrote 'War and Peace'?",
      options: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
      correct: 0
    },
    {
      question: "What is the currency of South Korea?",
      options: ["Won", "Yen", "Ringgit", "Rupee"],
      correct: 0
    },
    {
      question: "Which famous novel begins with the line 'It was the best of times, it was the worst of times'? ",
      options: ["Great Expectations", "A Tale of Two Cities", "Oliver Twist", "David Copperfield"],
      correct: 1
    },
    {
      question: "What is the name of the largest moon of Saturn?",
      options: ["Titan", "Rhea", "Iapetus", "Enceladus"],
      correct: 0
    },
    {
      question: "Which ancient civilization is known for its pyramids and pharaohs?",
      options: ["Mesopotamian", "Roman", "Egyptian", "Greek"],
      correct: 2
    },
    {
      question: "What element has the highest atomic number?",
      options: ["Uranium", "Plutonium", "Oganesson", "Neptunium"],
      correct: 2
    },
    {
      question: "Who was the first person to reach the North Pole?",
      options: ["Robert Peary", "Ernest Shackleton", "Roald Amundsen", "James Cook"],
      correct: 0
    },
    {
      question: "What is the most widely spoken language in the world?",
      options: ["English", "Mandarin", "Spanish", "Hindi"],
      correct: 1
    },
    {
      question: "Which novel by George Orwell is set in a dystopian future where surveillance and totalitarianism are rampant?",
      options: ["Animal Farm", "Brave New World", "1984", "Fahrenheit 451"],
      correct: 2
    },
    {
      question: "Who painted the ceiling of the Sistine Chapel?",
      options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Titian"],
      correct: 1
    },
    {
      question: "Which element is the most abundant in the Earth's crust?",
      options: ["Silicon", "Aluminum", "Iron", "Calcium"],
      correct: 0
    },
    {
      question: "Which Shakespearean play features the characters Oberon and Titania?",
      options: ["A Midsummer Night's Dream", "Romeo and Juliet", "Macbeth", "Hamlet"],
      correct: 0
    },
    {
      question: "Which scientist is known for his laws of motion and universal gravitation?",
      options: ["Isaac Newton", "Galileo Galilei", "James Clerk Maxwell", "Niels Bohr"],
      correct: 0
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
  

        