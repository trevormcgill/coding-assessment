var deleteBtn = document.querySelector('#delete-btn');
var scoreEl = document.querySelector("#high-score-list");
var highScoreList = document.getElementById("high-score-initials");

deleteBtn.addEventListener("click", function(event){
  localStorage.removeItem("highScore");
  highScoreList.innerHTML = "";
  var successNotification = document.createElement("h2");
  successNotification.textContent = "High scores have been cleared."
  successNotification.setAttribute("class", "fs-4 fw-semibold text-center");
  scoreEl.appendChild(successNotification);
  deleteBtn.disabled = true;
})

function getHighScore(){
  var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
  highScore.forEach(function (item){
    var finalPlayerScore = document.createElement("li");
    finalPlayerScore.setAttribute("style", "list-style: none")
    finalPlayerScore.setAttribute("class", "fs-4 text-uppercase fw-semibold text-center")
    finalPlayerScore.textContent = `${item.initials} - ${item.score} seconds`
    highScoreList.appendChild(finalPlayerScore);
  });
}

getHighScore();