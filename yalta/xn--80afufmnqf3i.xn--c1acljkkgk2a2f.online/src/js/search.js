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
    name: "Гурзуф",
    description: "населённые пункты",
    url: "https://гурзуф.гидпокрыму.online",
  },
  {
    id: 4,
    name: "Форос",
    description: "населённые пункты",
    url: "https://форос.гидпокрыму.online",
  },
  {
    id: 5,
    name: "Кореиз",
    description: "населённые пункты",
    url: "https://кореиз.гидпокрыму.online",
  },
  {
    id: 6,
    name: "Олива",
    description: "населённые пункты",
    url: "https://олива.гидпокрыму.online",
  },
  {
    id: 7,
    name: "Алупка",
    description: "населённые пункты",
    url: "https://алупка.гидпокрыму.online",
  },
  {
    id: 8,
    name: "Оползневое",
    description: "населённые пункты",
    url: "https://оползневое.гидпокрыму.online",
  },
  {
    id: 9,
    name: "Голубой Залив",
    description: "населённые пункты",
    url: "https://голубойзаливсимеиз.гидпокрыму.online",
  },
  {
    id: 10,
    name: "Охотничье",
    description: "населённые пункты",
    url: "https://охотничье.гидпокрыму.online",
  },
  {
    id: 11,
    name: "Береговое",
    description: "населённые пункты",
    url: "https://береговое.гидпокрыму.online",
  },
  {
    id: 12,
    name: "Кацивели",
    description: "населённые пункты",
    url: "https://кацивели.гидпокрыму.online",
  },
  {
    id: 13,
    name: "Симеиз",
    description: "населённые пункты",
    url: "https://симеиз.гидпокрыму.online",
  },
  {
    id: 14,
    name: "Гаспра",
    description: "населённые пункты",
    url: "https://гаспра.гидпокрыму.online",
  },
  {
    id: 15,
    name: "Симферополь",
    description: "города",
    url: "https://симферополь.гидпокрыму.online",
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
