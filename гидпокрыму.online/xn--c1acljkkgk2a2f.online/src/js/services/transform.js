const polygonCoordinates = require("./polygonCoordinates.js");

polygonCoordinates.forEach((e) =>
  e.geometry.coordinates[0].forEach((element) => element.reverse())
);
// console.log(polygonCoordinates)
fs.writeFile(
  "../constants/transformedPolygonCoordinates.js",
  JSON.stringify(polygonCoordinates),
  (err) => (err ? err : "")
);
