// Quiz questions and answers
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
    { question: "What movie are we watching today?", options: ["Sleepless in Seattle", "Love, Simon", "Barfi", "Hum Tum"], correct: -1 } // All answers are correct
];

let currentQuestionIndex = 0;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
    document.getElementById("quizPopup").style.display = "block";
}

// Show the current question
function showQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        window.open("gallery.html", "_blank"); // Open gallery in new tab
        return;
    }

    const questionData = quizData[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-button");

        button.addEventListener("click", function() {
            checkAnswer(index);
        });

        optionsContainer.appendChild(button);
    });
}

// Check answer and proceed
function checkAnswer(selectedIndex) {
    const questionData = quizData[currentQuestionIndex];

    if (questionData.correct === -1 || selectedIndex === questionData.correct) {
        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            showQuestion();
        } else {
            window.open("gallery.html", "_blank"); // Open gallery page in new tab
        }
    } else {
        alert("Incorrect answer! Restarting quiz...");
        startQuiz();
    }
}
