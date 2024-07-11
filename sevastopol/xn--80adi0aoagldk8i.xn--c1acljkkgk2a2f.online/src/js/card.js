const cardInfoNavigation = document.querySelector(".card__info_nav");
cardInfoNavigation.addEventListener("click", (e) =>
  ![...e.target.classList].find((e) => e === "active")
    ? showInfoById(e.target.id)
    : ""
);

function showInfoById(id) {
  const links = {
    toMain: "main",
    toHistory: "history",
    toFun: "fun",
  };
  const infoTextSection = [...document.querySelectorAll(".info-text__section")];
  [...cardInfoNavigation.children].forEach((e) =>
    e.id === id ? e.classList.add("active") : e.classList.remove("active")
  );
  infoTextSection.forEach((e) => {
    e.id === links[id] ? e.classList.remove("none") : e.classList.add("none");
  });
}
