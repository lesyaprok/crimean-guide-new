import {CRIMEA_COORDINATES} from "./coordinates.js";
console.log()
// initMap();

const CENTER = [34.78162312890623, 45.293871646881776];
const ZOOM = 7;

async function initMap() {
  await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapFeature } = ymaps3;
  const map = new YMap(document.getElementById("map"), {
    location: {
      center: CENTER,
      zoom: ZOOM,
    },
  });
  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

const polygonFeature = new YMapFeature({
  id: 'polygon',
  geometry: {
    type: 'Polygon',
    coordinates: [CRIMEA_COORDINATES]
  },
  style: {
    stroke: [{width: 6, color: 'rgb(14, 194, 219)'}],
    fill: 'rgba(56, 56, 219, 0.5)'
  }
});

map.addChild(polygonFeature);
}
