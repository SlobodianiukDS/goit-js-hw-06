const value = document.querySelector(`#value`);

let textValue = value.textContent;
if (textValue === `0`) {
  textValue = 0;
}

const btnMinus = document.querySelector(`.btn-decrement`);
const btnPlus = document.querySelector(`.btn-increment`);

btnMinus.addEventListener(`click`, () => {
  textValue -= 1;
  value.textContent = textValue;
});

btnPlus.addEventListener(`click`, () => {
  textValue += 1;
  value.textContent = textValue;
});
