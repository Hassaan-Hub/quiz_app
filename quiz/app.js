var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "Home Tool Markup Language",
        option3: "Hyperlinks and Text Markup Language",
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which HTML element is used for the largest heading?",
        option1: "<h6>",
        option2: "<h1>",
        option3: "<header>",
        correctAnswer: "<h1>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<br>",
        option2: "<lb>",
        option3: "<break>",
        correctAnswer: "<br>"
    },
    {
        question: "Which attribute is used to provide an alternative text for an image?",
        option1: "alt",
        option2: "title",
        option3: "src",
        correctAnswer: "alt"
    },
    {
        question: "What is the correct way to make a checkbox in HTML?",
        option1: "<input type='checkbox'>",
        option2: "<checkbox>",
        option3: "<input type='box'>",
        correctAnswer: "<input type='checkbox'>"
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        option1: "<ul>",
        option2: "<ol>",
        option3: "<list>",
        correctAnswer: "<ul>"
    },
    {
        question: "What does the <title> element define?",
        option1: "The document's body",
        option2: "The document's title in the browser toolbar",
        option3: "The main heading",
        correctAnswer: "The document's title in the browser toolbar"
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        option1: "<link>",
        option2: "<href>",
        option3: "<a>",
        correctAnswer: "<a>"
    },
    {
        question: "What is the correct syntax for adding a background color in HTML?",
        option1: "<body bg='color'>",
        option2: "<body style='background-color: color;'>",
        option3: "<background color='color'>",
        correctAnswer: "<body style='background-color: color;'>"
    },
    {
        question: "How can you make text bold in HTML?",
        option1: "<strong>",
        option2: "<b>",
        option3: "Both <strong> and <b>",
        correctAnswer: "Both <strong> and <b>"
    },
    {
        question: "Which tag is used to insert an image in HTML?",
        option1: "<img>",
        option2: "<image>",
        option3: "<pic>",
        correctAnswer: "<img>"
    },
    {
        question: "Which attribute is used to provide a unique name to an HTML element?",
        option1: "class",
        option2: "id",
        option3: "name",
        correctAnswer: "id"
    },
    {
        question: "Which tag is used to define a table row?",
        option1: "<td>",
        option2: "<tr>",
        option3: "<th>",
        correctAnswer: "<tr>"
    },
    {
        question: "Which tag is used to create a paragraph?",
        option1: "<p>",
        option2: "<para>",
        option3: "<text>",
        correctAnswer: "<p>"
    },
    {
        question: "Which input type is used for passwords?",
        option1: "text",
        option2: "password",
        option3: "email",
        correctAnswer: "password"
    }
];


var ques = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var button = document.getElementById("btn");
var index = 0;
var score = 0;
var isQuizEnded = false; // prevent multiple alerts

function nextQuestion() {
    var options = document.getElementsByName("answer");
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var selected = options[i].value;
            var userAnswer = questions[index][`option${selected}`];
            var correctAns = questions[index].correctAnswer;
            if (userAnswer === correctAns) score++;
            options[i].checked = false;
            button.disabled = true;
        }
    }
    index++;

    if (index >= questions.length) {
        endQuiz(); // quiz end if questions finish
    } else {
        ques.innerText = questions[index].question;
        option1.innerText = questions[index].option1;
        option2.innerText = questions[index].option2;
        option3.innerText = questions[index].option3;
    }
}

// Enable next button
function enableBtn() {
    button.disabled = false;
}

// Initialize first question
nextQuestion();

// Timer setup
var timer = document.getElementById("timer");
var min = 1;
var sec = 59;

var interval = setInterval(function () {
    timer.innerHTML = `${min}:${sec < 10 ? "0" + sec : sec}`;
    sec--;
    if (sec < 0) {
        if (min <= 0) {
            endQuiz(); // timer ends → quiz ends
        } else {
            min--;
            sec = 59;
        }
    }
}, 1000);

// End Quiz function with SweetAlert pass/fail
function endQuiz() {
    if (isQuizEnded) return;
    isQuizEnded = true;

    clearInterval(interval);

    var percentage = (score / questions.length) * 100;

    if (percentage < 50) {
        Swal.fire({
            icon: "error",
            title: "Oops... 😢",
            text: "You failed the quiz!",
            footer: `<b>Score:</b> ${score}/${questions.length} | <b>${percentage.toFixed(2)}%</b>`
        });
    } else {
        Swal.fire({
            title: "Good job! 🎉",
            html: `<b>Score:</b> ${score}/${questions.length} <br><b>Percentage:</b> ${percentage.toFixed(2)}%`,
            icon: "success"
        });
    }

    button.disabled = true;
    var options = document.getElementsByName("answer");
    for (var i = 0; i < options.length; i++) options[i].disabled = true;
}


