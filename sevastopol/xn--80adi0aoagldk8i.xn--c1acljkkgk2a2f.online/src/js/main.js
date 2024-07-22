const closeCardButton = document.getElementById("close-card-button");
const smallCardButton = document.getElementById("small-card-button");
const showCategoriesButton = document.getElementById("show-categories-button");

[smallCardButton, closeCardButton].forEach((e) =>
  e.addEventListener("click", () => {
    toggleVisibilityOfElement("card-overlay");
    toggleVisibilityOfElement("card-small");
  })
);

showCategoriesButton.addEventListener("click", () => {
  toggleVisibilityOfElement("categories-desktop");
  showCategoriesButton.innerText =
    showCategoriesButton.innerText === "Вернуться" ? "Категории" : "Вернуться";
  toggleVisibilityOfElement("card");
});

export function toggleVisibilityOfElement(id) {
  console.log(id);
  document.getElementById(id).classList.toggle("none");
}
