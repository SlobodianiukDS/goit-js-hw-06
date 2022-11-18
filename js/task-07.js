const rangeInputFontSize = document.querySelector(`#font-size-control`);
const textOfChange = document.querySelector(`#text`);

rangeInputFontSize.addEventListener(`input`, fontSizeChange);

function fontSizeChange(event) {
  textOfChange.style.fontSize = `${event.currentTarget.value}px`;
}
