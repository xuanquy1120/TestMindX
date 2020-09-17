const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
//   fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&fbclid=IwAR2R7O2Uli_wI-YQgap5Q47jkJwxrHEam9MVgOLNOPsyvC8GTMpOTt8fwpA')
//   .then(response => response.json())
//   .then(data => console.log(data));
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
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which of the following sports is not part of the triathlon?',
    answers: [
      { text: 'Horse-Riding', correct: true },
      { text: 'Cycling', correct: false },
      { text: 'Swimming', correct: false },
      { text: 'Running', correct: false }

    ]
  },
  {
    question: 'Which team won 2014 FIFA World Cup in Brazil?',
    answers: [
      { text: 'Germany', correct: true },
      { text: 'Argentina', correct: false },
      { text: 'Brazil', correct: false },
      { text: 'Netherlands', correct: false }
    ]
  },
  {
    question: 'This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.',
    answers: [
      { text: 'Don McKellar', correct: false },
      { text: 'Don Cherry', correct: true },
      { text: 'Don Taylor', correct: false },
      { text: 'Donald Sutherland', correct: false }
    ]
  },
  {
    question: 'What is the name of Manchester United home stadium?',
    answers: [
      { text: 'Anfield', correct: false },
      { text: 'Old Trafford', correct: true },
      { text: 'City of Manchester Stadium', correct: false },
      { text: 'St James Park', correct: false }
    ]
  },

  {
    question: 'Which year did Jenson Button won his first ever Formula One World Drivers; Championship?',
    answers: [
      { text: '2010', correct: false },
      { text: '2009', correct: true },
      { text: '2007', correct: false },
      { text: '2006', correct: false }
    ]
  }
]
//ket noi APIS
fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple&fbclid=IwAR2R7O2Uli_wI-YQgap5Q47jkJwxrHEam9MVgOLNOPsyvC8GTMpOTt8fwpA')
.then(response => response.json())
.then(data => console.log(data));
