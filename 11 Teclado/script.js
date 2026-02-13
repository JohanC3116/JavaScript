const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomKey() {
  return keys[getRandomNumber(0, keys.length - 1)];
}

function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
}

document.addEventListener("keyup", (event) => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const KeyElement = document.getElementById(keyPressed);
  const highlightedkey = document.querySelector(".selected");
  KeyElement.classList.add("hit");
  KeyElement.addEventListener("animationend", () => {
    KeyElement.classList.remove("hit");
  });
  if (keyPressed === highlightedkey.innerHTML) {
    highlightedkey.classList.remove("selected");
    targetRandomKey();
  }
});

targetRandomKey()
