var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-el");
var saveFormEl = document.querySelector("#save-form");

var interval;
var time = 100;
var questionIndex = 0;
var lastQuestionCorrect;
var lastQuestionIncorrect;

// create a container for the save form
/* var saveFormContainer = document.createElement("div");
saveFormContainer.id = "save-form-container";
mainEl.appendChild(saveFormContainer); */

// append the save form to the container
/* saveFormContainer.appendChild(saveFormEl); */

var questions = [
  {
    questionText: "What is your favorite color?",
    questionChoices: ["1. Red", "2. White", "3. Blue"],
    correctAnswer: 1
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ["1. Pizza", "2. Ice Cream", "3. Yogurt", "4. Hot Dogs"],
    correctAnswer: 0
  },
  {
    questionText: "WHAT IS GOING ON????",
    questionChoices: ["1. I don't know", "2. okay", "3. AAAHHH", "4. HOT DOG!"],
    correctAnswer: 2
  },
  {
    questionText: "What is your favorite thing?",
    questionChoices: ["1. Computer", "2. Apple", "3. Overwatch", "4. Path of Exile"],
    correctAnswer: 2
  },
  {
    questionText: "What is your favorite ting?",
    questionChoices: ["1. You", "2. Me", "3. Nandos", "4. HELP ME"],
    correctAnswer: 3
  },
  {
    questionText: "What is your favorite animal?",
    questionChoices: ["1. Dog", "2. Monke", "3. Bear", "4. MONKE"],
    correctAnswer: 1
  },
];

function displayQuestion() {
  mainEl.innerHTML = "";

  if (questionIndex >= questions.length) {
    endGame();
    return;
  }

  var btnDivEl = document.createElement("div");
  mainEl.appendChild(btnDivEl);

  var h1El = document.createElement("h1");
  h1El.setAttribute("id", "intro");
  h1El.textContent = questions[questionIndex].questionText;
  btnDivEl.appendChild(h1El);

  // Reset result variables
  lastQuestionCorrect = "";
  lastQuestionIncorrect = "";

  // Append result text to btnDivEl
  var pEl = document.createElement("p");
  pEl.textContent = lastQuestionCorrect;
  btnDivEl.appendChild(pEl);

  for (var j = 0; j < questions[questionIndex].questionChoices.length; j++) {
    var buttonEl = document.createElement("button");
    buttonEl.textContent = questions[questionIndex].questionChoices[j];
    buttonEl.setAttribute("class", "custom-btn");
    buttonEl.setAttribute("data-index", j);
    btnDivEl.appendChild(buttonEl);
  }

  btnDivEl.addEventListener("click", function (event) {
    var target = event.target;

    if (target.getAttribute("class") !== "custom-btn") return;

    var clickedQuestionIndex = parseInt(target.getAttribute("data-index"));

    if (clickedQuestionIndex === questions[questionIndex].correctAnswer) {
      lastQuestionCorrect = "Correct";
    } else {
      time = time - 10;
      lastQuestionIncorrect = "Incorrect";
    }

    questionIndex++;

    displayQuestion();
  });
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
  console.log("hit")
  clearInterval(interval);
  //save to local storage
/*   saveFormContainer.classList.remove("d-none");
  saveFormContainer.appendChild(saveFormEl); */
  saveFormEl.setAttribute("class", "d-block !important");
  console.log(document.querySelector('#save-form'));
  timerEl.setAttribute("style", "display: none !important");
};