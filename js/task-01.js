const titles = document.querySelectorAll(".item h2");
const elemetInCategories = document.querySelectorAll(`.item ul`);

for (let i = 0; i < titles.length; i += 1) {
  console.log(`Category:`, titles[i].textContent);
  console.log(`Elements:`, elemetInCategories[i].children.length);
}
