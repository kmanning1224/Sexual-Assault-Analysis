// Set up initial map center and zoom level
var map = L.map('map', {
  center: [40.7749, -97.4194], 
  zoom: 4,  
  scrollWheelZoom: true
});

var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map); 

// var url = "https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/assault_by_state"
// console.log(url);


// var data = "static/us_trafficking_locations.geojson";

// console.log(data)


// d3.json(url).then(data => {
//   console.log(data)
//   var latitude = data[1].latitude;
//   var longitude = data[1].longitude;
//   var occurrences = data[1].reportedTraffickingCases;

// });




function test(){
  const url = ["https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/assault_by_state"]
  d3.json(url,function(testData){
    testData.forEach(testDatum =>{
      let latitude = testDatum.latitude
      console.log(latitude)
      let longitude = testDatum.longitude
      console.log(longitude)
      let occurrences = testDatum.reportedTraffickingCases
      console.log(occurrences)
    })
  })
}
test();

var heatMapPoints = [latitude, longitude, occurrences];

var heat = L.heatLayer(heatMapPoints, {radius: 25}).addTo(map);



// var heatMapPoints = [];

// JSON.features.forEach(function(feature) {
//   heatMapPoints.push([feature.geometry.coordinates[0],feature.geometry.coordinates[1], feature.properties.occurrence[0]])
// });

// var heat = L.heatLayer(heatMapPoints, {radius: 25}).addTo(map);




// var heat = L.heatLayer([
// [32.377716, -86.300568, 82],
// [58.301598, -134.420212, 15],
// [33.448143, -112.096962, 234],
// ], {radius: 25}).addTo(map);





// USE THIS ONE
// d3.json(url, function(response) {

//   console.log(response);

//   var heatArray = [];

//   var latitude = response[0].latitude;
//   var longitude = response[0].longitude;
//   var occurrences = response[0].reportedTraffickingCases;
  
// console.log(latitude);



  // for (var i = 0; i < response.length; i++) {
  //   var location = response[i].location;

  //   if (location) {
  //     heatArray.push([location.latitude[1], location.longitude[0]]);
  //   }
  // }

  // var heat = L.heatLayer(heatArray, {
  //   radius: 20,
  //   blur: 35
  // }).addTo(map);

// });






// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/assualt_by_state', (req, res) => {
//   request(
//     { url: 'https://assaultdb.herokuapp.com/assault_by_state' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));










// var data = "static/us_trafficking_locations.geojson";

// d3.json(data, function(response) {

//   console.log(response);

//   var heatArray = [];

//   for (var i = 0; i < response.length; i++) {
//     var location = response[i].location;

//     if (location) {
//       heatArray.push([location.coordinates[1], location.coordinates[0]]);
//     }
//   }

//   var heat = L.heatLayer(heatArray, {
//     radius: 20,
//     blur: 35
//   }).addTo(map);

// });





// var queryUrl = "static/us_trafficking_locations.geojson";

// // Perform a GET request to the query URL
// d3.json(queryUrl, function(data) {
//   // Once we get a response, send the data.features object to the createFeatures function
//   createFeatures(data.features);
// });

// var circleMarkers = {
//   radius: +data.features.properties.occurrences * 40000,
//   fillColor: "lightblue",
//   color: "blue",
//   weight: 1, 
//   opacity: 1, 
//   fillOpacity: 0.5,
// };

// function createFeatures(traffickingData) {

//   // Define a function we want to run once for each feature in the features array
//   // Give each feature a popup describing the place and time of the earthquake
//   function onEachFeature(feature, layer) {
//     layer.bindPopup("<h3>" + feature.properties.state +
//       "</h3><hr><p>" + new Date(feature.properties.year) + "</p><p>" + "Occurence:" + feature.properties.occurrence + "</p>");
//   }

//   // Create a GeoJSON layer containing the features array on the earthquakeData object
//   // Run the onEachFeature function once for each piece of data in the array
//   var trafficking = L.geoJSON(traffickingData, {
//     onEachFeature: onEachFeature,
//     pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng, circleMarkers)
//     }
//   });

//   // Sending our earthquakes layer to the createMap function
//   createMap(trafficking);
// }