var map = L.map('map').setView([37.8, -96], 4);

var geoData = "static/us_trafficking_locations2.geojson";

var geojson;

const API_KEY = "pk.eyJ1Ijoia2x3MTFqIiwiYSI6ImNrZmVqZXZwdjA1ZTMycWxtNzFleG1lNTMifQ.NLpMj8I-pGYMKI6Q4hZSfA";


d3.json(geoData, function(data) {
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(map);

geojson = L.choropleth(data, {
    
  // Define what  property in the features to use
  valueProperty: "occurrence",

  // Set color scale
  scale: ["#ece7f2", "#2b8cbe"],

  // Number of breaks in step range
  steps: 5,

  // q for quartile, e for equidistant, k for k-means
  // mode: "q",
  style: {
    // Border color
    color: "#fff",
    weight: 3,
    fillOpacity: 0.8,
    fillColor: "blue"
  },

  // Binding a pop-up to each layer
  onEachFeature: function(feature, layer) {
    layer.bindPopup("State: " + feature.properties.state + "<br>Number of Occurrences:<br>" + feature.properties.occurrence);
  }
}).addTo(map);
});


  // // Set up the legend
  // var legend = L.control({ position: "bottomright" });
  // legend.onAdd = function() {
  //   var div = L.DomUtil.create("div", "info legend");
  //   var limits = geojson.options.limits;
  //   var colors = geojson.options.colors;
  //   var labels = [];

  //   // Add min & max
  //   var legendInfo = "<h1>Number of Occurrences</h1>" +
  //     "<div class=\"labels\">" +
  //       "<div class=\"min\">" + limits[0] + "</div>" +
  //       "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
  //     "</div>";

  //   div.innerHTML = legendInfo;

  //   limits.forEach(function(limit, index) {
  //     labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
  //   });

  //   div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  //   return div;
  // };

  // // Adding legend to the map
  // legend.addTo(map);


