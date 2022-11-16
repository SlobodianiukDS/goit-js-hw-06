const titles = document.querySelectorAll(".item h2");
const elemetInCategories = document.querySelectorAll(`.item ul`);

console.log(`Category:`, titles[0].textContent);
console.log(`Elements:`, elemetInCategories[0].children.length);
console.log(`Category:`, titles[1].textContent);
console.log(`Elements:`, elemetInCategories[1].children.length);
console.log(`Category:`, titles[2].textContent);
console.log(`Elements:`, elemetInCategories[2].children.length);
