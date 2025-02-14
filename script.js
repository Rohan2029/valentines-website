// Open the quiz popup when the button is clicked
function openQuiz() {
    document.getElementById("quizPopup").style.display = "block";
}

// Check the answer
function checkAnswer(answer) {
    if (answer === 'blue') {
        document.getElementById("quizPopup").style.display = "none";
        document.getElementById("gallery").style.display = "block";
    } else {
        document.getElementById("quizMessage").innerText = "Oops! Try again! 💔";
    }
}

// Attach event to CTA button
document.querySelector(".cta-button").addEventListener("click", openQuiz);
