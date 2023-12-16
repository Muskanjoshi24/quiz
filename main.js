const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which programming language is this quiz written in?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
    
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            correctAnswer: "Blue Whale"
        },
        {
            question: "In what year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correctAnswer: "1945"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Venus", "Jupiter"],
            correctAnswer: "Mars"
        },
        {
            question: "What is the capital of Japan?",
            options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
            correctAnswer: "Tokyo"
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Oxygen", "Gold", "Iron", "Hydrogen"],
            correctAnswer: "Oxygen"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the currency of Brazil?",
            options: ["Peso", "Euro", "Real", "Dollar"],
            correctAnswer: "Real"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        }
    ];
    
    let currentQuestion = 0;
    let score = 0;
    
    function startQuiz() {
        showQuestion();
    }
    
    function showQuestion() {
        const questionContainer = document.getElementById("question-container");
        const optionsContainer = document.getElementById("options-container");
        const resultContainer = document.getElementById("result-container");
    
        resultContainer.innerHTML = "";
    
        if (currentQuestion < questions.length) {
            const currentQuiz = questions[currentQuestion];
    
            questionContainer.innerHTML = `<p>${currentQuiz.question}</p>`;
    
            optionsContainer.innerHTML = "";
            for (let option of currentQuiz.options) {
                optionsContainer.innerHTML += `
                    <button onclick="checkAnswer('${option}')">${option}</button>
                `;
            }
        } else {
            showResult();
        }
    }
    
    function checkAnswer(answer) {
        const currentQuiz = questions[currentQuestion];
    
        if (answer === currentQuiz.correctAnswer) {
            score++;
        }
    
        currentQuestion++;
        showQuestion();
    }
    
    function showResult() {
        const resultContainer = document.getElementById("result-container");
        const nextButton = document.getElementById("next-button");
    
        resultContainer.innerHTML = `
            <h2>Your Score: ${score}/${questions.length}</h2>
            ${score >= 7 ? '<img src="giphy.gif" alt="Winning Gif">' : '<img src="200w.webp" alt="Losing Gif">'}
            <p>${score >= 7 ? "Congratulations! You are a winner!" : "Better luck next time!"}</p>
        `;
    
        nextButton.style.display = "none"; // Hide the next button at the end
    }
    
    function nextQuestion() {
        const nextButton = document.getElementById("next-button");
        nextButton.style.display = "block"; // Show the next button again
    
        showQuestion();
    }
    
    // Start the quiz when the page loads
    startQuiz();
    
