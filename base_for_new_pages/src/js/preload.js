import { toggleVisibilityOfElement } from "./main";

document.addEventListener("DOMContentLoaded", function () {
  new Promise((res) => {
    setTimeout(() => {
      toggleVisibilityOfElement("preload");
    }, 3000);
    res();
  });
});
