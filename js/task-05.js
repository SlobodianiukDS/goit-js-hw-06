const inputTextName = document.querySelector(`#name-input`);
const greetingName = document.querySelector(`#name-output`);

function makerGreetingName(event) {
  greetingName.textContent = event.currentTarget.value;
  if (greetingName.textContent == ``) {
    greetingName.textContent = `Anonymous`;
  }
}

inputTextName.addEventListener(`input`, makerGreetingName);
