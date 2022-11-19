function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector(`.change-color`);
const colorName = document.querySelector(`.color`);
const body = document.querySelector(`body`);

btnColor.addEventListener(`click`, changerColor);

function changerColor() {
  const newColor = getRandomHexColor();

  colorName.textContent = newColor;
  body.style.backgroundColor = newColor;
}
