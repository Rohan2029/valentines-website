const quizData = [
    { question: "Which of these has NOT been your nickname?", options: ["Ko", "Gruhenk", "Shrambo", "Sno"], correct: 2 },
    { question: "Which is my favourite cold coffee?", options: ["Vitos", "Amintiri", "Basil", "McD"], correct: 0 },
    { question: "It has been 44 months since we started dating. In how many of those months have we met?", options: ["16", "35", "26", "22"], correct: 2 },
    { question: "Where did we eat our most recent meal together?", options: ["Amintiri", "California Burrito", "Dominos", "Airport"], correct: 1 },
    { question: "What colour T-shirt did I wear to Coldplay?", options: ["White", "Black", "Red", "Yellow"], correct: 0 },
    { question: "Which year was our Goa trip?", options: ["2022", "2023", "2024", "2021"], correct: 1 },
    { question: "What is our age gap (in days)?", options: ["108", "115", "92", "142"], correct: 1 },
    { question: "Which is our favourite dosa?", options: ["Vidyarthi Bhavan", "Taaza Thindi", "Sagar Ratna", "Woodlands"], correct: 1 },
    { question: "Which number most represents us? Think closely", options: ["35", "2", "13", "44"], correct: 0 },
    { question: "What movie are we watching today?", options: ["Sleepless in Seattle", "Love, Simon", "Barfi", "Hum Tum"], correct: [0, 1, 2, 3] }
];

let currentQuestionIndex = 0;

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

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("options-container");

    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index);
        buttonContainer.appendChild(btn);
    });

    container.appendChild(buttonContainer);
}

function checkAnswer(selectedIndex) {
    let correctIndex = quizData[currentQuestionIndex].correct;

    if (Array.isArray(correctIndex)) {
        // Last question: all answers are correct
        nextQuestion();
    } else if (selectedIndex === correctIndex) {
        nextQuestion();
    } else {
        alert("Incorrect answer! Try again from the beginning.");
        currentQuestionIndex = 0; // Reset to first question
        loadQuestion();
    }
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        window.open("gallery.html", "_blank"); // Open gallery page in a new tab
    }
}
