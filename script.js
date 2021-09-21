var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var startQuizButton = document.getElementById("startQuizButton")

function showQuestions(questions, quizContainer) {
    var output = [];
    var answers;

    console.log("it worked")

    for (var i = 0; i < questions.length; i++) {

        answers = [];
        for (letter in questions[i].answers) {

            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ': '
                + questions[i].answers[letter]
                + '</label>'
            );
        }
        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
}

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

   
    console.log("it worked")
    showQuestions(questions, quizContainer);
}

var myQuestions = [
    {
        question: "How many milliseconds are in 10 minuets",
        answers: {
            a: '10,000',
            b: '60,000',
            c: '120,000'
        },
        correctAnswer: 'b'
    },
    {
        question: "Who shot first",
        answers: {
            a: 'yoda',
            b: 'han solo',
            c: 'greedo'
        },
        correctAnswer: 'b'
    }
];



function showResults(questions, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    var numCorrect = 0;

    for (var i = 0; i < questions.length; i++) {

        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
 
        if (userAnswer === questions[i].correctAnswer) {
            numCorrect++;

            answerContainers[i].style.color = 'lightgreen';
        }
        else {
            answerContainers[i].style.color = 'red';
        }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
}
startQuizButton.onclick = function () {
    generateQuiz();

}
