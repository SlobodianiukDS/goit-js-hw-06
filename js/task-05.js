const inputTextName = document.querySelector(`#name-input`);
const greetingName = document.querySelector(`#name-output`);

function makerGreetingName(event) {
  greetingName.textContent = event.currentTarget.value;
}

inputTextName.addEventListener(`input`, makerGreetingName);
