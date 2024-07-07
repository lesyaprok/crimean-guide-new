const placesWrapper = document.querySelector(".places-button__wrapper");
const routesWrapper = document.querySelector(".routes-button__wrapper");
const btnRoutes = document.getElementById("button-routes");
const btnPlaces = document.getElementById("button-places");
const categoriesMobile = document.getElementById("categories-mobile");
const routesMobile = document.getElementById("routes-mobile");

btnRoutes.addEventListener("click", () => {
  routesWrapper.classList.toggle("activeBlock");
  routesMobile.classList.toggle("none");
});

btnPlaces.addEventListener("click", () => {
  placesWrapper.classList.toggle("activeBlock");
  categoriesMobile.classList.toggle("none");
});
