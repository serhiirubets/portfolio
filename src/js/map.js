import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyaGlpLXJ1YmV0cyIsImEiOiJja2MzbG9sencyOGU1MnluYXdxaDQ1cDVzIn0.-0t8aXjMoRvUpbZvVFDxKA';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [30.51732443605647, 50.49802410165992],
  zoom: 11.4
});

map.on('styledata', function() {
  map.setPaintProperty('water', 'fill-color', '#16c2aa')
});


