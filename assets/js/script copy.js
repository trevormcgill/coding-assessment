var mainEl = document.querySelector("main");
var startBtnEl = document.querySelector("#start-btn");
var timerEl = document.querySelector("#time-el");
var saveFormEl = document.querySelector("#save-form");

var interval;
var time = 100;
var questionIndex = 0;
var lastQuestionCorrect;
var lastQuestionIncorrect;

var questions = [
  {
    questionText: "What is your favorite color?",
    questionChoices: ["Red", "White", "Blue"],
    correctAnswer: 1
  },
  {
    questionText: "What is your favorite food?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 2
  },
  {
    questionText: "WHAT IS GOING ON????",
    questionChoices: ["Pizza", "okay", "Yogurt", "Hot Dogs"],
    correctAnswer: 2
  },
  {
    questionText: "What is your favorite thing?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
  {
    questionText: "What is your favorite ting?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 3
  },
  {
    questionText: "What is your favorite brit?",
    questionChoices: ["Pizza", "Ice Cream", "Yogurt", "Hot Dogs"],
    correctAnswer: 0
  },
];

/* function displayQuestion() {
  mainEl.innerHTML = "";

  if (questionIndex >= questions.length) {
    endGame();
    return;
  }
  var btnDivEl = document.createElement("div")
  mainEl.appendChild(btnDivEl)
  
  var h1El = document.createElement('h1');
  h1El.setAttribute("id", "intro")
  h1El.textContent = questions[questionIndex].questionText;
  btnDivEl.appendChild(h1El);
  
  // Reset result variables
  lastQuestionCorrect = "";
  lastQuestionIncorrect = "";

  // Append result text to btnDivEl
  var pEl = document.createElement('p');
  pEl.textContent = lastQuestionCorrect;
  btnDivEl.appendChild(pEl);
  
  mainEl.addEventListener("click", function(event) {
    var target = event.target;
  
    if (target.getAttribute("class") !== 'custom-btn') return;

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


  for (var j = 0; j < questions[questionIndex].questionChoices.length; j++) {
    var buttonEl = document.createElement('button');
    buttonEl.textContent = questions[questionIndex].questionChoices[j];
    // buttonEl.setAttribute("class", "btn");
    buttonEl.setAttribute("class", "custom-btn");
    buttonEl.setAttribute("data-index", j);
    //make another div put buttons in div and style
    btnDivEl.appendChild(buttonEl);

    };
  } */


/* function displayQuestion() {
  mainEl.innerHTML = "";
  console.log('questionIndex:', questionIndex);

  var btnDivEl = document.createElement("div")
  mainEl.appendChild(btnDivEl)
  
  var h1El = document.createElement('h1');
  h1El.setAttribute("id", "intro")
  h1El.textContent = questions[questionIndex].questionText;
  btnDivEl.appendChild(h1El);
  

  var pEl = document.createElement('p');
  pEl.textContent = lastQuestionCorrect;
  mainEl.appendChild(pEl);
  
  mainEl.addEventListener("click", function(event) {
    var target = event.target;
  
    if (target.getAttribute("class") !== 'custom-btn') return;

    var clickedQuestionIndex = parseInt(target.getAttribute("data-index"));

    if (clickedQuestionIndex === questions[questionIndex].correctAnswer) {
      lastQuestionCorrect = "Correct";
    } else {
      time = time - 10;
      lastQuestionIncorrect = "Incorrect";
    }
    
    
    if (questionIndex >= questions.length) {
      endGame();
      return;
    };
    
    displayQuestion();
    questionIndex++;

  });


  for (var j = 0; j < questions[questionIndex].questionChoices.length; j++) {
    var buttonEl = document.createElement('button');
    buttonEl.textContent = questions[questionIndex].questionChoices[j];
    // buttonEl.setAttribute("class", "btn");
    buttonEl.setAttribute("class", "custom-btn");
    buttonEl.setAttribute("data-index", j);
    //make another div put buttons in div and style
    btnDivEl.appendChild(buttonEl);

  };
}; */

function displayQuestion() {
  mainEl.innerHTML = "";

  if (questionIndex >= questions.length) {
    endGame();
    return;
  }
  
  var btnDivEl = document.createElement("div")
  mainEl.appendChild(btnDivEl)
  
  var h1El = document.createElement('h1');
  h1El.setAttribute("id", "intro")
  h1El.textContent = questions[questionIndex].questionText;
  btnDivEl.appendChild(h1El);
  

  var pEl = document.createElement('p');
  pEl.textContent = lastQuestionCorrect;
  mainEl.appendChild(pEl);
  
  var handleClick = function(event) {
    var target = event.target;
  
    if (target.getAttribute("class") !== 'custom-btn') return;

    var clickedQuestionIndex = parseInt(target.getAttribute("data-index"));

    if (clickedQuestionIndex === questions[questionIndex].correctAnswer) {
      lastQuestionCorrect = "Correct";
    } else {
      time = time - 10;
      lastQuestionIncorrect = "Incorrect";
    }
    
    questionIndex++;
    mainEl.removeEventListener("click", handleClick);
    displayQuestion();
  };

  mainEl.addEventListener("click", handleClick);

  for (var j = 0; j < questions[questionIndex].questionChoices.length; j++) {
    var buttonEl = document.createElement('button');
    buttonEl.textContent = questions[questionIndex].questionChoices[j];
    buttonEl.setAttribute("class", "custom-btn");
    buttonEl.setAttribute("data-index", j);
    btnDivEl.appendChild(buttonEl);
  };
};


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
  saveFormEl.setAttribute("style", "display: block !important");
  timerEl.setAttribute("style", "display: none !important");
}