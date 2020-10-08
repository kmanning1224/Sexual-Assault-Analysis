// Set up initial map center and zoom level
var map = L.map('map', {
  center: [40.7749, -97.4194], 
  zoom: 3.5,  
  scrollWheelZoom: true
});

//cons API KEY =//

var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map); 



// Load in geojson data
var geoData = "static/us_trafficking_locations.geojson";

var geojson;


// Grab data with d3
d3.json(geoData, function(data) {
console.log(data)
  // Create a new choropleth layer
  geojson = L.geoJson(data, {
    
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

});
