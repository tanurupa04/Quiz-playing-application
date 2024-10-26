let questions = [
    {
        question: "What is the time complexity of the best known algorithm for matrix multiplication?",
        options: ["O(n^2)", "O(n^2.81)", "O(n^3)", "O(n log n)"],
        correct: 1
      },
      {
        question: "Which data structure is used in the implementation of LRU cache?",
        options: ["HashMap and Doubly Linked List", "Queue and Stack", "Heap and Linked List", "Binary Search Tree and Queue"],
        correct: 0
      },
      {
        question: "In which scenario would a B+ tree be more advantageous over a B-tree?",
        options: ["When insertion speed is critical", "When deletion speed is critical", "When range queries are frequent", "When space efficiency is critical"],
        correct: 2
      },
      {
        question: "What is the purpose of the CAP theorem in distributed systems?",
        options: ["To describe the trade-offs between consistency, availability, and partition tolerance", "To optimize network bandwidth", "To ensure data security", "To manage distributed transactions"],
        correct: 0
      },
      {
        question: "Which of the following algorithms is used to solve the shortest path problem in a graph with negative weights?",
        options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", "A* Algorithm"],
        correct: 1
      },
      {
        question: "What is the main advantage of the Paxos algorithm in distributed computing?",
        options: ["High throughput", "Fault tolerance and consensus", "Low latency", "High availability"],
        correct: 1
      },
      {
        question: "Which of the following is a lossless data compression algorithm?",
        options: ["JPEG", "MP3", "LZW", "MPEG"],
        correct: 2
      },
      {
        question: "What is the primary purpose of the Kerberos protocol?",
        options: ["Encrypt data at rest", "Provide secure user authentication", "Manage network traffic", "Compress network data"],
        correct: 1
      },
      {
        question: "What is a major drawback of using a singly linked list over a doubly linked list?",
        options: ["Higher memory usage", "Complexity of node insertion", "Complexity of node deletion", "Inability to traverse in reverse"],
        correct: 3
      },
      {
        question: "In the context of databases, what does ACID stand for?",
        options: ["Atomicity, Consistency, Isolation, Durability", "Access, Consistency, Integrity, Durability", "Atomicity, Control, Integrity, Durability", "Access, Control, Isolation, Durability"],
        correct: 0
      },
      {
        question: "What is the primary advantage of a NoSQL database over a traditional SQL database?",
        options: ["Better performance for complex queries", "Easier to scale horizontally", "Stronger data consistency", "More robust security features"],
        correct: 1
      },
      {
        question: "In which scenario would a Red-Black Tree be preferred over an AVL Tree?",
        options: ["When frequent insertions and deletions are expected", "When memory usage is a concern", "When searching is the most frequent operation", "When data is mostly static"],
        correct: 0
      },
      {
        question: "Which of the following protocols is used for secure file transfer?",
        options: ["FTP", "SFTP", "HTTP", "SMTP"],
        correct: 1
      },
      {
        question: "What is the primary function of a load balancer in a web application architecture?",
        options: ["To increase the speed of data transfer", "To distribute incoming network traffic across multiple servers", "To ensure data consistency", "To monitor server health"],
        correct: 2
      },
      {
        question: "In machine learning, what is the purpose of a confusion matrix?",
        options: ["To measure the accuracy of a model", "To visualize the performance of an algorithm", "To identify classification errors", "To compare multiple algorithms"],
        correct: 2
      },
      {
        question: "What does the term 'Big O' notation describe?",
        options: ["The space complexity of an algorithm", "The time complexity of an algorithm", "The number of iterations in a loop", "The size of the input data"],
        correct: 1
      },
      {
        question: "Which of the following sorting algorithms is considered stable?",
        options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
        correct: 2
      },
      {
        question: "In cryptography, what is the primary advantage of asymmetric encryption over symmetric encryption?",
        options: ["Faster encryption and decryption", "Simpler key management", "Stronger security", "Reduced computational requirements"],
        correct: 1
      },
      {
        question: "Which of the following is an example of a functional programming language?",
        options: ["C++", "Java", "Haskell", "Python"],
        correct: 2
      },
      {
        question: "What is the purpose of the 'finally' block in Java exception handling?",
        options: ["To handle an exception", "To execute code after a try block regardless of whether an exception was thrown", "To catch multiple exceptions", "To terminate the program"],
        correct: 1
      },
      {
        question: "Which of the following is a widely-used framework for building scalable web applications?",
        options: ["Spring", "Qt", "Tkinter", "Swing"],
        correct: 0
      },
      {
        question: "What does the term 'sharding' refer to in the context of databases?",
        options: ["Encrypting database data", "Partitioning data across multiple databases", "Replicating data across multiple servers", "Compressing database files"],
        correct: 1
      },
      {
        question: "In a peer-to-peer network, what is the role of a supernode?",
        options: ["To store all the data in the network", "To coordinate and route traffic between nodes", "To provide security and encryption", "To act as a backup server"],
        correct: 1
      },
      {
        question: "What is the primary benefit of using Docker containers in software development?",
        options: ["Improved security", "Simplified testing", "Consistent environments across different stages of development", "Faster execution"],
        correct: 2
      },
      {
        question: "Which of the following is a distributed version control system?",
        options: ["Git", "Subversion", "CVS", "Mercurial"],
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
    