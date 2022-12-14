const textInput = document.querySelector(`#validation-input-id`);

textInput.addEventListener(`blur`, validTextInput);

function validTextInput() {
  textInput.classList.remove(`validation-invalid`);
  textInput.classList.remove(`validation-valid`);
  if (textInput.selectionEnd !== textInput.dataset.length) {
    textInput.classList.add(`validation-invalid`);
    return;
  }
  textInput.classList.remove(`validation-invalid`);
  textInput.classList.toggle(`validation-valid`);
}
