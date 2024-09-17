var clutter = "";
var randomNumber = "";
var timer = 20;
var randomHit = "";
var score = 0;

var panelBottom = document.querySelector("#pbottom")
var timerElem = document.querySelector("#timer-value")
var hitElem = document.querySelector("#hit-value")
var scoreElem = document.querySelector("#scoreval")

function increaseScore() {
    score += 7;
    scoreElem.textContent = score
}

function randomNumberBubble(){
    return randomNumber = Math.floor(Math.random()*10)
}

function makebubble() {
    clutter = ""; // Reset the clutter variable
    for (var i = 1; i<= 168; i++) {
        randomNumberBubble()
        clutter  += `<div class="bubble">${randomNumber}</div>`;
        panelBottom.innerHTML = clutter
    }
}

function getNewhit() {
    randomHit = Math.floor(Math.random()*10)
    hitElem.textContent = randomHit
}

function runTimer() {
    var timerint = setInterval( function(){
        if (timer > 0){
            timer--;
        }
        else {
            clearInterval(timerint);
            displayFunnyMessage()
            restartGame()      
        }
        timerElem.textContent = timer
    },1000);
}


// Function to display a funny message based on the score
function displayFunnyMessage() {
    const scoreValue = parseInt(document.getElementById('scoreval').textContent);
  
    if (scoreValue < 10) {
      alert("Wow, " + scoreValue + " points? You must have gotten those by accident. Like, you were trying to close the tab and your finger slipped.");
    } else if (scoreValue === 10) {
      alert("10 whole points? Congratulations, you've managed to achieve the bare minimum. You must be so proud.");
    } else if (scoreValue < 20) {
      alert("You've reached " + scoreValue + " points? That's cute. You think you're a real gamer now, don't you?");
    } else if (scoreValue === 20) {
      alert("20 points? Oh, you've finally figured out how to click the mouse. Good job, I guess.");
    } else if (scoreValue < 30) {
      alert("You've managed to scrape together " + scoreValue + " points? I'm impressed. Not really, but I'll pretend to be.");
    } else if (scoreValue === 30) {
      alert("30 points? You're officially a gaming novice. Don't worry, it's not like you're going to get a participation trophy or anything.");
    } else if (scoreValue < 40) {
      alert("You've reached " + scoreValue + " points? That's almost as impressive as your mom's cooking.");
    } else if (scoreValue === 40) {
      alert("40 points? Oh, you've finally learned how to use the keyboard. Congratulations, you're a real gamer now.");
    } else if (scoreValue < 50) {
      alert("You've managed to get " + scoreValue + " points? I'm shocked. Not really, but I'll pretend to be.");
    } else if (scoreValue === 50) {
      alert("50 points? You're officially mediocre. Keep it up and you might just become average.");
    } else if (scoreValue < 60) {
      alert("You've reached " + scoreValue + " points? That's almost as impressive as your dad's jokes.");
    } else if (scoreValue === 60) {
      alert("60 points? Oh, you've finally figured out how to use the internet. Good job, grandpa.");
    } else if (scoreValue < 70) {
      alert("You've managed to get " + scoreValue + " points? I'm not impressed. But hey, at least you're trying.");
    } else if (scoreValue === 70) {
      alert("70 points? You're officially decent. Don't get too cocky, though. You're still not that good.");
    } else {
      alert("HOLY COW, " + scoreValue + " POINTS?! YOU MUST HAVE CHEATED. THERE'S NO WAY YOU'RE THAT GOOD.");
    }
  }
function restartGame() {
    // Reset game variables
    score = 0;
    timer = 20;
    clutter = "";

    // Clear the panel
    panelBottom.innerHTML = "";

    // Re-generate bubbles
    makebubble();

    // Get a new hit
    getNewhit();

    // Restart the timer
    runTimer();

    // Update the UI
    scoreElem.textContent = score;
    timerElem.textContent = timer;
}

var selectedBubble = panelBottom.addEventListener("click", function(dets) {
    var selectedNumber = Number(dets.target.textContent)
    if (selectedNumber === randomHit ) {
        increaseScore()
        getNewhit()
        makebubble() // Generate new bubbles
    }
})

makebubble()
getNewhit()
runTimer()