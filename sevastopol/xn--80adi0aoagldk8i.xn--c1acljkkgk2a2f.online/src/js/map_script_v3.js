import { CRIMEA_COORDINATES, SEVASTOPOL_COORDINATES } from "./coordinates.js";

initMap();

const CENTER = [34.78162312890623, 45.293871646881776];
const ZOOM = 7;

async function initMap() {
  try {
    await ymaps3.ready;
    const {
      YMap,
      YMapDefaultSchemeLayer,
      YMapDefaultFeaturesLayer,
      YMapFeatureDataSource,
      YMapFeature,
      YMapMarker,
    } = ymaps3;
    const { YMapDefaultMarker } = await ymaps3.import(
      "@yandex/ymaps3-markers@0.0.1"
    );

    const map = new YMap(document.getElementById("map"), {
      location: {
        center: CENTER,
        zoom: ZOOM,
      },
    });
    map.addChild(new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());
    map.addChild(
      new YMapFeatureDataSource({
        id: "markerSource",
      })
    );

    const polygonFeature = new YMapFeature({
      id: "polygon",
      geometry: {
        type: "Polygon",
        coordinates: SEVASTOPOL_COORDINATES,
      },
      onclick: () => alert("HI"),
      balloonContentHeader: '<a href="https:ссылка/"></a>',
      balloonContent: "<b>Куратор: </b>",
      balloonContentFooter: "Телефон: </b>",
      clusterCaption: "<?=$item['PROPERTY_RAION_VALUE']?>", // Кластер объекта
      hintContent: "<?=$item['NAME']?>", // Подсказка объекта

      properties: {
        description:
          '<article class="card__location">\n    <img src="" alt="" class="card__img">\n    <div class="card__main">\n        <h2 class="card__name">Джанкойский район</h2>\n        <p class="card__description">РАБОТАЕМ НАД ДАННЫМ РЕГИОНОМ. СЕЙЧАС ДОСТУПЕН ЯЛТИНСКИЙ ГОРОДСКОЙ ОКРУГ</p>\n        <!--<div class="card__buttons">\n            <a href="" target="_blank">\n                <button target="_blank" type="button">\n                    узнать больше\n                </button>\n            </a>\n        </div>-->\n    </div>\n</article>\n\n\n\n<style>\n    .card__location {\n        position: relative;\n        width: fit-content;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 2px;\n        background: #ffffff;\n        \n        border-radius: 5px;\n    }\n\n\n\n    .card__main {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 5px;\n        padding: 5px;\n        color: #000000;\n    }\n\n    .card__name {\n        font-size: 18px;\n        font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;\n        font-weight: 300;\n    }\n\n\n\n\n    .card__description {\n        font-size: 10px;\n        color: #454545;\n        font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;\n    }\n\n    .card__buttons {\n        display: flex;\n        gap: 8px;\n    }\n\n    .card__buttons button {\n        padding: 7px 10px;\n        background: #2196F3;\n        border-radius: 2px;\n        border: none;\n        color: #fff;\n        cursor: pointer;\n    }\n</style>',
        fill: "#177bc9",
        "fill-opacity": 0.9,
        stroke: "#ed4543",
        "stroke-width": "3",
        "stroke-opacity": 0.9,
      },
    });

    console.log(polygonFeature);

    const content =
      '<article class="card__location">\n    <img src="" alt="" class="card__img">\n    <div class="card__main">\n        <h2 class="card__name">Джанкойский район</h2>\n        <p class="card__description">РАБОТАЕМ НАД ДАННЫМ РЕГИОНОМ. СЕЙЧАС ДОСТУПЕН ЯЛТИНСКИЙ ГОРОДСКОЙ ОКРУГ</p>\n        <!--<div class="card__buttons">\n            <a href="" target="_blank">\n                <button target="_blank" type="button">\n                    узнать больше\n                </button>\n            </a>\n        </div>-->\n    </div>\n</article>\n\n\n\n<style>\n    .card__location {\n        position: relative;\n        width: fit-content;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 2px;\n        background: #ffffff;\n        \n        border-radius: 5px;\n    }\n\n\n\n    .card__main {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        gap: 5px;\n        padding: 5px;\n        color: #000000;\n    }\n\n    .card__name {\n        font-size: 18px;\n        font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;\n        font-weight: 300;\n    }\n\n\n\n\n    .card__description {\n        font-size: 10px;\n        color: #454545;\n        font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\', \'Lucida Sans\', Arial, sans-serif;\n    }\n\n    .card__buttons {\n        display: flex;\n        gap: 8px;\n    }\n\n    .card__buttons button {\n        padding: 7px 10px;\n        background: #2196F3;\n        border-radius: 2px;\n        border: none;\n        color: #fff;\n        cursor: pointer;\n    }\n</style>';

    // ПОЛЗОВАТЕЛЬСКАЯ МЕТКА
    const markerElement = document.createElement("div");
    markerElement.className = "marker-class";
    markerElement.innerText = "I'm marker!";

    const marker = new YMapMarker(
      {
        coordinates: [33.828254, 45.993498],
      },
      markerElement
    );

    // ДЕФОЛТНАЯ МЕТКА
    const defaultMarker = new YMapDefaultMarker({
      coordinates: [33.828254, 45.993498],
      color: "#006efc",
      popup: { content: content, position: "left" },
      title: "Hello World!",
      subtitle: "kind and bright",
      color: "blue",
    });

    map.addChild(polygonFeature).addChild(defaultMarker);
  } catch (e) {
    console.log("SMTH WENT WRONG", e);
    const mapConstructor = document.createElement("script");
    mapConstructor.async = true;
    mapConstructor.src =
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A75f2d66cf7759cb7577c58d5ba7c02bd74bc327b81b6b362effa609de6c3abd4&amp;lang=ru_RU&amp;scroll=true";
    document.getElementById("map").prepend(mapConstructor);
  }
}
