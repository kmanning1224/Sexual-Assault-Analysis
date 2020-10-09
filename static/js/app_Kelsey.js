var map = L.map('map').setView([37.8, -96], 4);

var geoData = "/geodata"
console.log(geoData)
var geojson;

const API_KEY = "pk.eyJ1Ijoia2x3MTFqIiwiYSI6ImNrZmVqZXZwdjA1ZTMycWxtNzFleG1lNTMifQ.NLpMj8I-pGYMKI6Q4hZSfA";


d3.json(geoData, function(data_geo) {
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);


geojson = L.choropleth(data_geo, {
    
  // Define what  property in the features to use
  valueProperty: "density",

  // Set color scale
  scale: ["#ece7f2", "#2b8cbe"],

  // Number of breaks in step range
  steps: 5,

  style: {
    // Border color
    color: "#fff",
    weight: 3,
    fillOpacity: 0.8,
  },

  // Binding a pop-up to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup("State: " + feature.properties.name + "<br>Number of Occurrences:<br>" + feature.properties.density);
  }
}).addTo(map);
});

