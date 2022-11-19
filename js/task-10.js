function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const placeCreat = document.querySelector(`#boxes`);
const btnCreate = document.querySelector(`[data-create]`);
const btnClear = document.querySelector(`[data-destroy]`);
const inputCreate = document.querySelector(`#controls input`);
let nomberAdds = 0;
let squareSize = 20;
let boxes = ``;

btnCreate.addEventListener(`click`, addNewBoxes);
btnClear.addEventListener(`click`, clearAllBoxes);

function addNewBoxes() {
  // console.log(`начало функции`);
  for (let i = 0; i < inputCreate.valueAsNumber; i += 1) {
    const newColor = getRandomHexColor();
    squareSize = squareSize + 10;
    nomberAdds = nomberAdds + 1;
    boxes += `<div class="newDiv${nomberAdds}" style="background-color: ${newColor};height: ${squareSize}px;width: ${squareSize}px;"></div>`;
    // console.log(`создал ${nomberAdds}, его размер${squareSize}px`);
  }
  // console.log(boxes);
  placeCreat.innerHTML = boxes;
}

function clearAllBoxes() {
  // console.log(`удалил`);
  boxes = ``;
  nomberAdds = 0;
  squareSize = 20;
  placeCreat.innerHTML = boxes;
}
