const quizData = [
    { question: "What is my favorite color?", options: ["Red", "Blue", "Green", "White"], correct: 1 },
    { question: "Where did we first meet?", options: ["Cafe", "Park", "Library", "Mall"], correct: 1 },
    { question: "What’s my favorite food?", options: ["Pizza", "Sushi", "Burger", "Pasta"], correct: 1 },
    { question: "What’s our anniversary month?", options: ["January", "February", "March", "April"], correct: 1 },
    { question: "Where did we go on our first trip?", options: ["Beach", "Mountains", "City", "Village"], correct: 1 },
    { question: "Which song reminds you of me?", options: ["Song 1", "Song 2", "Song 3", "Song 4"], correct: 1 },
    { question: "What’s my favorite movie?", options: ["Movie A", "Movie B", "Movie C", "Movie D"], correct: 1 },
    { question: "What’s my favorite drink?", options: ["Coffee", "Tea", "Juice", "Soda"], correct: 1 },
    { question: "What’s our pet’s name?", options: ["Fluffy", "Charlie", "Bella", "Rocky"], correct: 1 },
    { question: "What’s my dream destination?", options: ["Paris", "Bali", "Tokyo", "New York"], correct: 1 }
];

let currentQuestionIndex = 0;
let score = 0;

function openQuiz() {
    document.getElementById("quizPopup").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const container = document.getElementById("question-container");
    container.innerHTML = ""; // Clear previous question

    const q = quizData[currentQuestionIndex];

    let questionText = document.createElement("h3");
    questionText.innerText = q.question;
    container.appendChild(questionText);

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        container.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    let correctIndex = quizData[currentQuestionIndex].correct;

    if (selectedIndex === correctIndex) {
        score++;
    }

    document.querySelectorAll("#question-container button").forEach((btn, idx) => {
        if (idx === correctIndex) {
            btn.classList.add("correct");
        } else {
            btn.classList.add("wrong");
        }
        btn.disabled = true;
    });

    document.querySelector(".next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        document.querySelector(".next-btn").style.display = "none";
    } else {
        if (score === quizData.length) {
            window.open("gallery.html", "_blank");
        } else {
            alert("Oops! Try again. You need to get all answers correct.");
            location.reload();
        }
    }
}
