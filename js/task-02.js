const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector(`#ingredients`);

const elements = ingredients.map((element) => {
  const newElements = document.createElement(`li`);
  newElements.classList = `item`;
  newElements.textContent = element;

  return newElements;
});

listEl.append(...elements);
