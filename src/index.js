const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiY29uamVzcyIsImEiOiJjamV6dGhrdHowaWExMzNubmdxOGg0M3RpIn0.z6yhDu5wEJ4XGWbUxOeGWQ'; 

const map = new mapboxgl.Map({
    container: 'map',
    center: [-74.009, 40.705], // FullStack NY coordinates
    zoom: 12, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
