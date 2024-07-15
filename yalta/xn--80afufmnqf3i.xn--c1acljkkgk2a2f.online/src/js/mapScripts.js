import { regions } from "./constants/transformedPolygonCoordinates.js";
import { points } from "./constants/pointsCoordinates.js";
import { beaches } from "./categories/beaches.js";

const CENTER = [44.450293, 34.063253];
const ZOOM = 11;

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

  [...points, ...beaches].map(
    ({ name, description, link, buttonText, geometry, properties }) => {
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
      myMap.geoObjects.add(point);
      clusterer.add(point);
    }
  );

  myMap.geoObjects.add(clusterer);
}
