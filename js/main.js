function playGames() {
  // hide the element by adding hidden class
  addClass("home", "hidden");
  // show element by removing hidden class
  removeClass("playground", "hidden");
  continueGame();
}

function continueGame() {
  const alphabet = getARandomAlphabet();
  const showText = document.getElementById("show-text");
  showText.innerText = alphabet;
  // set background color
  addClass(alphabet, "bg-yellow-400");
}

document.addEventListener("keyup", function (e) {
  const playerPressed = e.key;
  // close the game if the player press escape key
  if (playerPressed === "Escape") {
    gameOver();
  }
  const currentText = document.getElementById("show-text").innerText;
  const expectedAlphabet = currentText.toLowerCase();
  if (playerPressed === expectedAlphabet) {
    const scoreValue = getCurrentValue("current-score");
    let currentScoreValue = scoreValue + 1;
    setValue("current-score", currentScoreValue);

    removeClass(expectedAlphabet, "bg-yellow-400");
    continueGame();
  } else {
    // get and set current life value
    const lifeValue = getCurrentValue("current-life");
    const currentLifeValue = lifeValue - 1;
    setValue("current-life", currentLifeValue);

    // hide playground and show final score
    if (currentLifeValue === 0) {
      gameOver();
    }
    console.log("you lost a life", currentLifeValue);
  }
});

// play again
function playAgain() {
  addClass("score-section", "hidden");
  removeClass("playground", "hidden");
  setValue("current-life", 5);
  const showText = document.getElementById("show-text").innerText;
  removeClass(showText, "bg-yellow-400");
  setValue("current-score", 0);

  continueGame();
}
