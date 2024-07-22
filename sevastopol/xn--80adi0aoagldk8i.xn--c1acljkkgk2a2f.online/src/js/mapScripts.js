import { regions } from "./constants/transformedPolygonCoordinates.js";
import { points } from "./constants/pointsCoordinates.js";

const CENTER = [44.54879107660936, 33.52975719489878];
const ZOOM = 10.2;

ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: CENTER,
      zoom: ZOOM,
      controls: ["geolocationControl", "fullscreenControl"],
    },
    { provider: "yandex#search" }
  );

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
          // fillRule: "nonZero",
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
        strokeStyle: "shortdash",
        strokeOpacity: 1,
        openHintOnHover: true,
      }
    );
    myMap.geoObjects.add(polygon);
  });

  points.map(
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
    }
  );
}
