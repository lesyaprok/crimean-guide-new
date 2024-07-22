import { regions } from "./constants/transformedPolygonCoordinates.js";
import { points } from "./constants/pointsCoordinates.js";
import { categories } from "./constants/categories/categories.js";

const CENTER = [44.450293, 34.063253];
const ZOOM = 11;
const categoriesList = document.getElementById("categories-desktop");

ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map(
    "map",
    {
      center: CENTER,
      zoom: ZOOM,
      controls: ["geolocationControl", "fullscreenControl"],
    },
    { provider: "yandex#search" }
  );
  const clusterer = new ymaps.Clusterer();
  const categoryClusterer = new ymaps.Clusterer();
  const categoriesCollection = new ymaps.GeoObjectCollection();

  regions.map(({ geometry, name, description, link, properties }) => {
    const content = `<article class="map-baloon">
              <img src="" alt="" class="map-baloon__img">
              <div class="map-baloon__main">
                <h2 class="map-baloon__name">${name}</h2>
                <p class="map-baloon__description">${description}</p>
              </div>
            </article>`;
    // Создаем многоугольник, используя класс GeoObject.
    const polygon = new ymaps.GeoObject(
      {
        geometry: {
          // Тип геометрии - "Многоугольник".
          type: "Polygon",
          coordinates: geometry.coordinates,
          // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
          fillRule: "nonZero",
        },
        properties: {
          balloonContent: content,
        },
      },
      {
        // Описываем опции геообъекта.
        fillColor: properties.fill,
        strokeColor: properties.stroke,
        fillOpacity: properties["fill-opacity"],
        strokeWidth: properties["stroke-width"],
        strokeOpacity: 1,
        openHintOnHover: true,
      }
    );
    myMap.geoObjects.add(polygon);
  });

  [...points].map((point) => {
    const createdPoint = createPoint(point);
    myMap.geoObjects.add(createdPoint);
    clusterer.add(createdPoint);
  });

  myMap.geoObjects.add(clusterer);

  categoriesList.addEventListener("click", (e) => {
    const category = e.target.innerText;
    if (!category || !categories[category]) return;

    categoriesCollection.removeAll();
    categoryClusterer.removeAll();

    categories[category].map((item) => {
      const createdPoint = createPoint(item);
      categoriesCollection.add(createdPoint);
      categoryClusterer.add(createdPoint);
    });
    myMap.geoObjects.add(categoriesCollection);
    myMap.geoObjects.add(categoryClusterer);
    myMap.setBounds(categoryClusterer.getBounds());
  });
}

function createPoint({
  name,
  description,
  buttonText,
  link,
  geometry,
  properties,
}) {
  const content = `<article class="map-baloon">
              <img src="" alt="" class="map-baloon__img">
              <div class="map-baloon__main">
                  <h2 class="map-baloon__name">${name}</h2>
                  <p class="map-baloon__description">${description}</p>
                  <div class="map-baloon__buttons">
                      <a href=${link} target="_blank" class="button">${buttonText}
                      </a>       
                  </div>
              </div>
          </article>`;

  const point = new ymaps.GeoObject(
    {
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: geometry.coordinates, // координаты точки
      },
      properties: {
        iconCaption: name,
        balloonContent: content,
      },
    },
    {
      preset: "islands#circleIcon",
      iconColor: properties["marker-color"],
    }
  );
  return point;

}
