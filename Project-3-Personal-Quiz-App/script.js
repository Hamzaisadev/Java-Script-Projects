const questions = [
    {
        question: "What's my favourite color?",
        answers: [
            {text: "Red", correct: false},
            {text: "Black", correct: true},
            {text: "Pink", correct: false},
            {text: "Brown", correct: false},
        ]
    },
    {
        question: "What's my favourite hobby?",
        answers: [
            {text: "Writing Poetry", correct: false},
            {text: "Gaming", correct: false},
            {text: "Watching movie", correct: false},
            {text: "Coding", correct: true},
        ]
    },
    {
        question: "What is My favourite movie?",
        answers: [
            {text: "Eternal Sunshine Of Spotless Mind", correct: true},
            {text: "Shawshank Redemption", correct: false},
            {text: "Pyscho", correct: false},
            {text: "Laila Majnu", correct: false},
        ]
    },
    {
        question: "How many siblings do i have?",
        answers: [
            {text: "2", correct: false},
            {text: "0", correct: true},
            {text: "1", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: "What is My favourite Travel Destination?",
        answers: [
            {text: "Japan", correct: true},
            {text: "Saudi Arabia", correct: false},
            {text: "USA", correct: false},
            {text: "London", correct: false},
        ]
    },
    {
        question: "What kind of coffee or tea do i prefer?",
        answers: [
            {text: "Black Coffee", correct: false},
            {text: "Karak Chai", correct: true},
            {text: "Latte", correct: false},
            {text: "Mocha", correct: false},
        ]
    },
    {
        question: "Who is my crush?",
        answers: [
            {text: "Jenna Ortega", correct: false},
            {text: "Emma Stone", correct: false},
            {text: "Elazibeth Olsen", correct: true},
            {text: "Emma Watson", correct: false},
        ]
    },
    {
        question: "Who is my favourite super hero?",
        answers: [
            {text: "Wanda", correct: false},
            {text: "Batman", correct: false},
            {text: "Ironman", correct: false},
            {text: "Loki", correct: true},
        ]
    },
    {
        question: "What is My favourite sports?",
        answers: [
            {text: "Baseball", correct: false},
            {text: "UFC", correct: true},
            {text: "Cricket", correct: false},
            {text: "Football", correct: false},
        ]
    },
    {
        question: "What is My favourite car?",
        answers: [
            {text: "BMW", correct: false},
            {text: "Ferrari", correct: false},
            {text: "Limousine", correct: true},
            {text: "Bugatti", correct: false},
        ]
    },
    {
        question: "What is My favourite childhood cartoon?",
        answers: [
            {text: "Ben 10", correct: false},
            {text: "Doreamon", correct: true},
            {text: "Shinchan", correct: false},
            {text: "Ninja Hattori", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btns");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    answerButton.innerHTML = "";
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => {
            if (answer.correct) {
                score++;
                button.style.backgroundColor = "green";
                if (score >= 7) {
                    alert("WOW, YOU'RE A GENIUS! You're on a roll!");
                } else if (score === 1) {
                    alert("Yay, you got one right! Don't get too cocky, though.");
                } else if (score === 2) {
                    alert("You're on a streak! Keep it up, hotshot!");
                } else {
                    alert("Correct! You're doing great!");
                }
            } else {
                button.style.backgroundColor = "red";
                if (score < 3) {
                    alert("Uh-oh, you're not doing so well... Try harder!");
                } else {
                    alert("Oops, wrong answer! Better luck next time!");
                }
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                questionElement.innerHTML = `Quiz finished! Your score is ${score} out of ${questions.length}.`;
                answerButton.innerHTML = "";
                nextButton.innerHTML = "Restart";
                nextButton.addEventListener("click", startQuiz);
                if (score < 7) {
                    if (score < 3) {
                        alert("Wow, you're really bad at this. Maybe you should just give up now.");
                    } else if (score < 5) {
                        alert("Not great, not terrible. But let's be real, you're not exactly a quiz master.");
                    } else {
                        alert("You managed to scrape together a decent score, but it's still not impressive.");
                    }
                }
            }
        });
        answerButton.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        alert("Please select an answer before moving to the next question!");
    } else {
        startQuiz();
    }
});

startQuiz();