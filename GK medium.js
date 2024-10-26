let questions = [
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: 3
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      correct: 1
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "George Orwell", "Jane Austen", "Charles Dickens"],
      correct: 0
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Platinum"],
      correct: 2
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
      correct: 1
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correct: 2
    },
    {
      question: "In which year did the Titanic sink?",
      options: ["1912", "1905", "1898", "1923"],
      correct: 0
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Mars", "Venus", "Earth"],
      correct: 0
    },
    {
      question: "What element does 'O' represent on the periodic table?",
      options: ["Osmium", "Oxygen", "Oganesson", "Oxide"],
      correct: 1
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      correct: 2
    },
    {
      question: "Who is the author of 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "J.D. Salinger"],
      correct: 0
    },
    {
      question: "Which is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
      correct: 3
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Pb", "Fe"],
      correct: 1
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: 0
    },
    {
      question: "Who discovered penicillin?",
      options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"],
      correct: 1
    },
    {
      question: "Which ocean is the Bermuda Triangle located in?",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      correct: 0
    },
    {
      question: "What is the largest island in the world?",
      options: ["Australia", "Greenland", "New Guinea", "Borneo"],
      correct: 1
    },
    {
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      correct: 0
    },
    {
      question: "Which country is known for inventing pizza?",
      options: ["France", "Italy", "Greece", "Turkey"],
      correct: 1
    },
    {
      question: "What is the longest river in Africa?",
      options: ["Nile", "Congo", "Zambezi", "Orange"],
      correct: 0
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Pepper", "Avocado", "Onion"],
      correct: 2
    },
    {
      question: "Who wrote the novel '1984'?",
      options: ["Aldous Huxley", "George Orwell", "H.G. Wells", "Ray Bradbury"],
      correct: 1
    },
    {
      question: "Which planet is known for its rings?",
      options: ["Earth", "Mars", "Saturn", "Neptune"],
      correct: 2
    },
    {
      question: "What is the chemical symbol for silver?",
      options: ["Ag", "Au", "Pb", "Fe"],
      correct: 0
    },
    {
      question: "Which is the smallest ocean in the world?",
      options: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: 2
    },
    {
      question: "Which famous scientist developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Stephen Hawking"],
      correct: 1
    },
    {
      question: "What is the currency of Japan?",
      options: ["Won", "Yuan", "Yen", "Ringgit"],
      correct: 2
    },
    {
      question: "What is the largest country by land area?",
      options: ["United States", "China", "Canada", "Russia"],
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

  