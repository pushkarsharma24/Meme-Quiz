const questions = [
    {
        question: "Khelega Free Firrreee?",
        answers: [
            {text: "Yadav Huu", correct: true},
            {text: "Pro Player", correct: false},
            {text: "Nahii", correct: false},
            {text: "Free Fire Id Btao", correct: false},
        ]
    },
    {
        question: "70 me kya jorde ki 17 ban jaaye",
        answers: [
            {text: "Nhi pata", correct: false},
            {text: "ee ki matra", correct: true},
            {text: "Khelega Free Fiirree", correct: false},
            {text: "Koi boltai ree", correct: true},
        ]
    },
    {
        question: "Who is the Prime Minister of India?",
        answers: [
            {text: "Rahul Gandhi", correct: false},
            {text: "Pappu", correct: true},
            {text: "Yogi", correct: false},
            {text: "Ayega toh modi he..", correct: true},
        ]
    },
    {
        question: "Aur Bhai Placement lag gyii",
        answers: [
            {text: "haan bhai", correct: false},
            {text: "Itna chubhne lga hu", correct: true},
            {text: "Nikal tori maaye ke", correct: false},
            {text: "Passion follow kruga", correct: true},
        ]
    },
    
]; 

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach( button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton (){
    currentQuestionIndex++;
    if(currentQuestionIndex < questionslength){
        showQuestion();
    }else {
        showScore();
    }
}


nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else {
        startQuiz();
    }
});

startQuiz();