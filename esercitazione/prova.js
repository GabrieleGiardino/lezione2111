// Array di domande
const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },

    // Aggiungi le altre domande qui
];

// Variabili di stato
let currentQuestionIndex = 0;
let timerDuration = 60; // 60 secondi per domanda
let timerInterval;

// Riferimenti agli elementi HTML
const timerNumber = document.getElementById("timer-number");
const progressBar = document.querySelector(".progress-bar");
const questionText = document.getElementById("question-text");
const questionCounter = document.getElementById("question-counter");
const optionsContainer = document.getElementById("options-container");

// Funzione per avviare il timer
function startTimer() {
    let timeLeft = timerDuration;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerNumber.textContent = timeLeft;
        const progress = ((timerDuration - timeLeft) / timerDuration) * 100;
        progressBar.style.background = `conic-gradient(#4caf50 ${progress}% 0%, #ccc ${progress}% 100%)`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            moveToNextQuestion();
        }
    }, 1000);
}

// Funzione per passare alla domanda successiva
function moveToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        alert("Quiz completato!");
    }
}

// Funzione per caricare una domanda
function loadQuestion(index) {
    const question = questions[index];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    // Aggiungere le opzioni di risposta
    const answers = [question.correct_answer, ...question.incorrect_answers];
    answers.sort(() => Math.random() - 0.5); // Mescolare le risposte
    answers.forEach(answer => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="option" class="option" value="${answer}">
            <span>${answer}</span>
        `;
        optionsContainer.appendChild(label);
    });

    questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    startTimer();
}

// Inizializza la prima domanda
loadQuestion(currentQuestionIndex);
