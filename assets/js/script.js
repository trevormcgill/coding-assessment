var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-el")

var interval;
var time = 100;
var questionIndex = 0;
var lastQuestionCorrect;
var lastQuestionIncorrect;

var questions = [
  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
];

function displayQuestion() {
  mainEl.innerHTML = "";

  if (questionIndex >= questions.length) {
    endGame();
    return;
  }
  
  var h1El = document.createElement('h1');
  h1El.textContent = questions[questionIndex].questionText;
  mainEl.appendChild(h1El);
  
  var btnDivEl = document.createElement("div")
  mainEl.appendChild(btnDivEl)

  var pEl = document.createElement('p');
  pEl.textContent = lastQuestionCorrect;
  mainEl.appendChild(pEl);
  
  mainEl.addEventListener("click", function(event) {
    var target = event.target;
  
    if (target.getAttribute("class") !== 'btn') return;

    var clickedQuestionIndex = parseInt(target.getAttribute("data-index"));

    if (clickedQuestionIndex === questions[questionIndex].correctAnswer) {
      lastQuestionCorrect = "Correct"
    } else {
      time = time - 10;
      lastQuestionIncorrect = "Incorrect"
    }

    questionIndex++;

    displayQuestion();

  });


  for (var i = 0; i < questions[questionIndex].questionChoices.length; i++) {
    var buttonEl = document.createElement('button');
    buttonEl.textContent = questions[questionIndex].questionChoices[i];
    buttonEl.setAttribute("class", "btn");
    btnDivEl.setAttribute("data-index", i);
    //make another div put buttons in div and style
    // mainEl.appendChild(buttonEl);

    };
  }



// start button
startBtnEl.addEventListener("click", function (event) {
  mainEl.innerHTML = "";

  interval = setInterval(function() {
    time--;
    timerEl.textContent = `Time: ${time}`;

    if (time <=0) {
      clearInterval(interval);
      endGame();
      return;
    }
  }, 1000);

  displayQuestion();

});


// what happens when game is over
function endGame() {
  clearInterval(interval);
  //save to local storage

}