let questions = [
    {
        question: "Which of the following diagrams best illustrates the relationship between 'Cats', 'Mammals', and 'Animals'?",
        options: ["Venn Diagram 1", "Venn Diagram 2", "Venn Diagram 3", "Venn Diagram 4"],
        correct: 0
      },
      {
        question: "A person covers half of the journey at 30 km/h and the rest at 60 km/h. If the total time taken is 4 hours, what is the total distance traveled?",
        options: ["120 km", "150 km", "180 km", "240 km"],
        correct: 0
      },
      {
        question: "A boat takes 4 hours to travel 44 km downstream and 3 hours to travel 33 km upstream. What is the speed of the boat in still water?",
        options: ["8.5 km/h", "9 km/h", "10 km/h", "11 km/h"],
        correct: 2
      },
      {
        question: "A and B can complete a task in 12 days, B and C can complete it in 15 days, and A and C can complete it in 20 days. How long will it take A, B, and C together to complete the task?",
        options: ["8 days", "10 days", "12 days", "6 days"],
        correct: 1
      },
      {
        question: "A sum of money doubles itself in 5 years at simple interest. In how many years will it become four times itself at the same rate of interest?",
        options: ["15 years", "20 years", "10 years", "25 years"],
        correct: 2
      },
      {
        question: "Two pipes can fill a tank in 20 minutes and 30 minutes respectively. Both pipes are opened together, but after 10 minutes, the first pipe is turned off. How much more time will it take to fill the tank?",
        options: ["10 minutes", "12 minutes", "15 minutes", "18 minutes"],
        correct: 1
      },
      {
        question: "A train running at a speed of 60 km/h crosses a pole in 9 seconds. What is the length of the train?",
        options: ["150 meters", "180 meters", "324 meters", "540 meters"],
        correct: 1
      },
      {
        question: "If the price of a book is increased by 20% and then decreased by 20%, what is the final price of the book compared to the original price?",
        options: ["Same", "2% decrease", "4% decrease", "4% increase"],
        correct: 2
      },
      {
        question: "A and B together can complete a work in 8 days. A alone can do it in 12 days. How long will it take B alone to complete the work?",
        options: ["20 days", "24 days", "18 days", "16 days"],
        correct: 1
      },
      {
        question: "The sum of the ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
        options: ["4 years", "8 years", "6 years", "10 years"],
        correct: 0
      },
      {
        question: "If a person travels at 30 km/h instead of 24 km/h, they save 10 minutes. What is the distance travelled?",
        options: ["10 km", "20 km", "30 km", "40 km"],
        correct: 1
      },
      {
        question: "Find the missing number in the series: 2, 6, 12, 20, ...?",
        options: ["30", "28", "26", "24"],
        correct: 1
      },
      {
        question: "In a certain code, 'ROAD' is written as 'WBLF'. How is 'BEAT' written in that code?",
        options: ["YHZW", "YGZV", "YGZW", "YHZV"],
        correct: 2
      },
      {
        question: "If 'MANGO' is written as 'OGNAM' in a certain code, how is 'APPLE' written in that code?",
        options: ["ELPPA", "EAPLP", "EPPLA", "ALEPP"],
        correct: 0
      },
      {
        question: "Which of the following is the odd one out? Elephant, Tiger, Dog, Whale",
        options: ["Elephant", "Tiger", "Dog", "Whale"],
        correct: 3
      },
      {
        question: "Find the missing number in the series: 2, 9, 28, 65, ...?",
        options: ["126", "91", "144", "89"],
        correct: 1
      },
      {
        question: "In a certain code, 'BRICK' is written as 'CQLJD'. How is 'CEMENT' written in that code?",
        options: ["DPLFOS", "DOLFPS", "DPLFOT", "DPLFST"],
        correct: 2
      },
      {
        question: "Pointing to a man, a woman said, 'His brother's father is the only son of my grandfather.' How is the woman related to the man?",
        options: ["Mother", "Sister", "Aunt", "Daughter"],
        correct: 1
      },
      {
        question: "If 'MATH' is coded as 'PHMW', how is 'SCIENCE' coded in that code?",
        options: ["VFLHQFH", "VHLHQFH", "VHFLQFH", "VHLQHFF"],
        correct: 0
      },
      {
        question: "Which of the following is the odd one out? Square, Rectangle, Circle, Triangle, Pentagon",
        options: ["Square", "Rectangle", "Circle", "Pentagon"],
        correct: 2
      },
      {
        question: "Which of the following words is most similar in meaning to 'OBFUSCATE'?",
        options: ["Clarify", "Obscure", "Simplify", "Explain"],
        correct: 1
      },
      {
        question: "Choose the correct synonym for 'ESOTERIC'.",
        options: ["Common", "Simple", "Arcane", "Obvious"],
        correct: 2
      },
      {
        question: "Find the antonym for 'GARRULOUS'.",
        options: ["Reticent", "Loquacious", "Talkative", "Verbose"],
        correct: 0
      },
      {
        question: "Which of the following words means 'to lessen the severity of something'?",
        options: ["Intensify", "Alleviate", "Aggravate", "Exacerbate"],
        correct: 1
      },
      {
        question: "Choose the correct meaning of the idiom: 'To turn over a new leaf'.",
        options: ["To start a new chapter", "To make a significant change in one's life", "To continue in the same way", "To move to a new place"],
        correct: 1
      },
      {
        question: "Which of the following words is most similar in meaning to 'OBDURATE'?",
        options: ["Flexible", "Stubborn", "Yielding", "Gentle"],
        correct: 1
      },
      {
        question: "Choose the correct synonym for 'MELANCHOLY'.",
        options: ["Joyful", "Mournful", "Cheerful", "Elated"],
        correct: 1
      },
      {
        question: "Find the antonym for 'PROFLIGATE'.",
        options: ["Extravagant", "Thrifty", "Lavish", "Wasteful"],
        correct: 1
      },
      {
        question: "Which of the following words means 'to criticize sharply'?",
        options: ["Praise", "Scold", "Compliment", "Excoriate"],
        correct: 3
      },
      {
        question: "Choose the correct meaning of the idiom: 'To cut the Gordian knot'.",
        options: ["To solve a difficult problem with ease", "To complicate matters", "To make a bold decision", "To avoid responsibility"],
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
        