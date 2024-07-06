const data = [
  {
    id: 0,
    name: "Севастополь",
    description: "города",
    url: "https://севастополь.гидпокрыму.online",
  },
  {
    id: 1,
    name: "Памятник затопленным кораблям",
    description: "памятники",
    url: "",
  },
  {
    id: 2,
    name: "Ялта",
    description: "города",
    url: "https://округялта.гидпокрыму.online",
  },
  {
    id: 3,
    name: "Симферополь",
    description: "города",
    url: "",
  },
];

const inputValue = document.getElementById("search-input");
const matchesList = document.getElementById("matches-list");
let filteredData = [];

inputValue.addEventListener("keyup", (e) =>
  searchPlaces(normalizeValue(e.target.value))
);

function searchPlaces(value) {
  if (!value) {
    matchesList.innerHTML = "";
    return;
  }
  matchesList.innerHTML = "";
  filteredData = data.filter((e) => normalizeValue(e.name).startsWith(value));
  if (!filteredData.length) {
    matchesList.insertAdjacentHTML(
      "beforeend",
      `<li class="search-info-message">Нет такого места :(</li>`
    );
    return;
  }
  filteredData.map((e) => {
    matchesList.insertAdjacentHTML(
      "beforeend",
      `<li><a href=${e.url}>${e.name}<span>${e.description}</span></a></li>`
    );
  });
}

function normalizeValue(value) {
  return value.trim().toLowerCase();
}
