let questions = [
    {
      question: "Goa : Panaji:: Gujarat: ?",
      options: ["Ahmedabad", "Porbandar", "Gandhinagar", "Kandla"],
      correct: 2
    },
    {
      question: "Which of the following is the same as Toyota, Honda, BMW ? ",
      options: ["TVS", "Bajaj", "Hero", "Mercedes"],
      correct: 3
    },
    {
      question: "Which of the following is the same as Australia, America, Antarctica?",
      options: ["India", "Europe", "Japan", "New Zealand"],
      correct: 1
    },
    {
      question: "Which number should come next in the series, 48, 24, 12, ......?",
      options: ["8", "6", "4", "2"],
      correct: 1
    },
   
      {
        question: "What comes next in the series: 2, 6, 12, 20, ... ?",
        options: ["30", "28", "24", "32"],
        correct: 1
      },
      {
        question: "Which of the following words is the same as 'Teacher', 'Doctor', 'Engineer'?",
        options: ["Architect", "Building", "School", "Study"],
        correct: 0
      },
      {
        question: "If the code for 'MANGO' is 'NBOHP', what is the code for 'APPLE'?",
        options: ["BQQMF", "BOQMF", "BQQMG", "BQPMG"],
        correct: 0
      },
      {
        question: "What is the next number in the sequence: 5, 10, 15, ...?",
        options: ["18", "20", "25", "30"],
        correct: 1
      },
      {
        question: "If all the vowels are removed from the word 'APPLICATION', which letter will be third from the left?",
        options: ["P", "L", "C", "T"],
        correct: 2
      },
      {
        question: "What is the odd one out: Circle, Square, Triangle, Rectangle?",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correct: 0
      },
      {
        question: "What is the next number in the series: 2, 4, 8, 16, ...?",
        options: ["20", "24", "32", "30"],
        correct: 2
      },
      {
        question: "If the day before yesterday was Thursday, what day will it be three days from today?",
        options: ["Friday", "Saturday", "Sunday", "Monday"],
        correct: 1
      },
      {
        question: "Which of the following is a synonym for 'Happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correct: 1
      },
      {
        question: "Find the odd one out: 2, 3, 5, 9, 11",
        options: ["2", "3", "5", "9"],
        correct: 3
      },
      {
        question: "If 'BOOK' is coded as 'DOOL', how is 'PAPER' coded?",
        options: ["PEREP", "RERAP", "REPER", "REPAP"],
        correct: 2
      },
      {
        question: "Which of the following is a prime number?",
        options: ["4", "6", "9", "11"],
        correct: 3
      },
      {
        question: "Which of the following can be arranged into a 5-letter English word?",
        options: ["H R G S T", "R I L S A", "T O O M T", "W Q R G S"],
        correct: 1
      },
      {
        question: "What comes next in the series: 3, 6, 9, 12, ...?",
        options: ["14", "15", "16", "18"],
        correct: 3
      },
      {
        question: "Which of the following is a synonym for 'Intelligent'?",
        options: ["Dull", "Smart", "Slow", "Lazy"],
        correct: 1
      },
      {
        question: "If 1=5, 2=10, 3=15, 4=20, then 5=?",
        options: ["20", "25", "30", "35"],
        correct: 1
      },
      {
        question: "What is the missing number in the series: 4, 7, 10, 13, ...?",
        options: ["14", "15", "16", "17"],
        correct: 2
      },
      {
        question: "Which of the following is an anagram of 'EARTH'?",
        options: ["HEART", "HATER", "REATH", "HERT"],
        correct: 0
      },
      {
        question: "If the code for 'CAT' is 'DBU', what is the code for 'DOG'?",
        options: ["DOP", "EPI", "EPH", "EPG"],
        correct: 1
      },
      {
        question: "Which of the following is a type of triangle?",
        options: ["Sphere", "Cone", "Scalene", "Rectangle"],
        correct: 2
      },
      {
        question: "Find the next term in the series: 5, 10, 20, 40, ...",
        options: ["50", "60", "80", "100"],
        correct: 2
      },
      {
        question: "Which of the following words is an antonym for 'Increase'?",
        options: ["Grow", "Expand", "Reduce", "Raise"],
        correct: 2
      },
      {
        question: "If 'SLOW' is coded as 'UPQB', how is 'FAST' coded?",
        options: ["HCUV", "GBUG", "GBUR", "HCUR"],
        correct: 0
      },
      {
        question: "Which number should come next in the series: 3, 6, 12, 24, ...?",
        options: ["36", "48", "30", "60"],
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
        