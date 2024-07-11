import { toggleVisibilityOfElement } from "./main";

const closeButton = document.getElementById("close-button");
const form = document.getElementById("form");
const form2 = document.getElementById("form2");
const addPlaceButton = document.getElementById("add-place-button");
const writeButton = document.getElementById("write-button");
const closeForm = document.getElementById("close-form");
const closeForm2 = document.getElementById("close-form2");

[addPlaceButton, closeForm].forEach((e) => {
  e.addEventListener("click", () => toggleVisibilityOfElement("form"));
});
[writeButton, closeForm2].forEach((e) => {
  e.addEventListener("click", () => toggleVisibilityOfElement("form2"));
});
form.addEventListener("click", (e) =>
  e.target.id === "form" ? toggleVisibilityOfElement("form") : ""
);

form2.addEventListener("click", (e) =>
  e.target.id === "form2" ? toggleVisibilityOfElement("form2") : ""
);
