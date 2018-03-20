const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiY29uamVzcyIsImEiOiJjamV6dGhrdHowaWExMzNubmdxOGg0M3RpIn0.z6yhDu5wEJ4XGWbUxOeGWQ'; 

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705], // FullStack NY coordinates
    zoom: 12, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const mapMarker = document.createElement('div');
mapMarker.style.width = "32px";
mapMarker.style.height = "39px";
mapMarker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

new mapboxgl.Marker(mapMarker).setLngLat([-74.009151, 40.705086]).addTo(map);
