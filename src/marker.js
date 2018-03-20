const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

function buildMarker(type, coordinates) {
  const mapMarker = document.createElement('div');

  const imgurl = type === "activity" ? iconURLs.activities :
                  type === "hotel" ? iconURLs.hotels :
                  type === "restaurant" ? iconURLs.restaurants :
                  undefined;

  mapMarker.style.width = "32px";
  mapMarker.style.height = "39px";
  mapMarker.style.backgroundImage = `url(${imgurl})`;

  return new mapbox.Marker(mapMarker).setLngLat(coordinates);
}

module.exports = buildMarker;
