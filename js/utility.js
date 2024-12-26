function addClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.add(className);
}

function removeClass(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.remove(className);
}

function getARandomAlphabet() {
  const alphabetText = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = alphabetText.split("");
  const randomNumber = Math.floor(Math.random() * 26);
  const randomAlphabet = alphabet[randomNumber];
  return randomAlphabet;
}
function getCurrentValue(elementId) {
  const currentText = document.getElementById(elementId);
  const elementText = currentText.innerText;
  const previewsValue = Number(elementText);
  return previewsValue;
}
function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function gameOver() {
  addClass("playground", "hidden");
  removeClass("score-section", "hidden");

  // get the final result and set to final result
  const scoreValue = getCurrentValue("current-score");
  setValue("final-score", scoreValue);
}
