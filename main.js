const btn = document.getElementById("btn");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function randomColor() {
  let hexValue = "#";
  for (i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * hex.length);
    hexValue += hex[randomIndex];
  }
  btn.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
}
