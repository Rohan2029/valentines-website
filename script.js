{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Open the quiz pop-up\
function openQuiz() \{\
    document.getElementById("quizPopup").style.display = "flex";\
\}\
\
// Check the answer\
function checkAnswer(answer) \{\
    if (answer === "blue") \{\
        document.getElementById("quizPopup").style.display = "none"; // Hide quiz\
        document.getElementById("gallery").style.display = "block"; // Show gallery\
    \} else \{\
        document.getElementById("quizMessage").innerText = "Oops! Try again!";\
    \}\
\}\
}