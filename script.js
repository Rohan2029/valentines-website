const questions = [
    { question: "What is my favorite color?", options: ["Red", "Blue", "Green", "White"], correct: "Blue" },
    { question: "Where did we first meet?", options: ["Cafe", "Park", "School", "Work"], correct: "Cafe" },
    { question: "Our anniversary month?", options: ["January", "July", "October", "December"], correct: "July" },
    { question: "Favorite travel destination?", options: ["Paris", "Bali", "New York", "Tokyo"], correct: "Bali" },
    { question: "What’s my favorite food?", options: ["Pizza", "Sushi", "Burger", "Pasta"], correct: "Sushi" },
    { question: "First movie we watched together?", options: ["Titanic", "Inception", "La La Land", "Avengers"], correct: "La La Land" },
    { question: "Our song?", options: ["Lover", "Perfect", "Shallow", "Someone Like You"], correct: "Perfect" },
    { question: "Who said 'I love you' first?", options: ["Me", "You", "Both", "Not sure"], correct: "Me" },
    { question: "First gift I gave you?", options: ["Flowers", "Watch", "Book", "Chocolate"], correct: "Book" },
    { question: "Our dream vacation?", options: ["Maldives", "Switzerland", "Japan", "Greece"], correct: "Switzerland" }
];

let currentQuestion = 0;
let correctAnswers = 0;

function openQuiz() {
    document.getElementById("quizPopup").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "";

    const q = document.createElement("h3");
    q.textContent = questions[currentQuestion].question;
    questionContainer.appendChild(q);

    questions[currentQuestion].options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        questionContainer.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].correct) {
        correctAnswers++;
    }
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    if (correctAnswers === questions.length) {
        window.open("gallery.html", "_blank");
    } else {
        alert("Oops! You need to answer all correctly. Try again!");
        currentQuestion = 0;
        correctAnswers = 0;
        loadQuestion();
    }
}
