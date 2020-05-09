const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const scoreButton = document.getElementById('score-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let gameScore

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    gameScore = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
        scoreButton.innerText = 'Score: '+ gameScore
    }
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        scoreButton.innerText = 'Score: '+ gameScore
    }
    if(selectedButton.dataset.correct != null) {
        gameScore++
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which of the following is not a control statement', 
        answers : [
            {text: 'goto', correct: false},
            {text: 'if', correct: false},
            {text: 'class', correct: true}
        ]
    },
    {
        question: 'How are classes instantiated?', 
        answers : [
            {text: 'constructors', correct: true},
            {text: 'declaration', correct: false},
            {text: 'instantiation', correct: false}
        ]
    },
    {
        question: 'Which is not a programming language?', 
        answers : [
            {text: 'HTML', correct: true},
            {text: 'Lua', correct: false},
            {text: 'Haskell', correct: false}
        ]
    },
    {
        question: 'Is the start.ng program remote?', 
        answers : [
            {text: 'no', correct: false},
            {text: 'yes', correct: true},
            {text: 'sometimes', correct: false}
        ]
    },
    {
        question: 'Which of the following is not a primitive variable?', 
        answers : [
            {text: 'bool', correct: false},
            {text: 'string', correct: true},
            {text: 'integer', correct: false}
        ]
    }




]
