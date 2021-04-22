API_KEY = "pk.eyJ1IjoiY2Fyb2x5YW4iLCJhIjoiY2tuMjBhZTR2MGNydzJvdGVpODR1bnF2dSJ9.RdVBWnEtcnEUGn3_B5SvYA"

// // Load second top hotel data from csv
// d3.csv("/Users/yanyibing/Desktop/BOOTCAMPHW/Project_2/Project_2/Project_2/europesctop.csv").then(function(schotelData){
//   // console.log(schotelData);
//   for (var i = 0; i <11; i++) {
//     // console.log(schotelData[i])
//     hotel_locations.push({
//       name: schotelData[i].hotel_name,
//       location: [schotelData[i].lat, schotelData[i].lng]
//     })
//     }
//   });

// console.log(hotel_locations)

//Goal: to plot the lat and lng data in the eurosctop.csv
//Include image on the marker

// Creating map object
var myMap = L.map("map", { 
  center: [48.864716, 2.349014],
  zoom: 50
});

// Adding tile layer to the map
var second = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var hotel_locations = []
var hotel_name=[]

// Load top Europe hotel data from json
const url = "http://127.0.0.1:5000/data";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
});

// Promise Pending
var dataPromise = d3.json(url);
// var hotelArray = dataPromise.products.map(i => [i.hotel_name, i.lat, i.lng]);
console.log(Object.entries(dataPromise));
// for (var i=0; i < dataPromise.length; i++){
//  var hotel_name = hotel_name.push(dataPromise[i].hotel_name);
//  var hotel_locations = hotel_locations.push([dataPromise[i].lat, dataPromise[i].lng])
// }

// console.log(hotel_name)
// console.log(hotel_locations)
// console.log(dataPromise)


//Pass in the hotel_name, lat & lng data from Europe Top Hotel url
// //create marker cluster group for the Europe TOP Hotel
// var tophotelMarkers = L.markerClusterGroup();

// for (var i = 0; i < dataPromise.length; i++) {
//   console.log(dataPromise[i])
//   // loop through the cities array, create a new marker, push it to the cityMarkers array
//   tophotelMarkers.push(
//     tophotelMarkers.addLayer(L.marker(hotel_locations[i].location).bindPopup("<h1>" + hotel_location.name + "</h1>"))
//   );
// }


// // //create marker cluster group for the europe second top hotel
// var hotelMarkers = L.markerClusterGroup();

// for (var i = 0; i < hotel_locations.length; i++) {
//   console.log(hotel_locations[i])
//   // loop through the cities array, create a new marker, push it to the cityMarkers array
//   hotelMarkers.push(
//     hotelMarkers.addLayer(L.marker(hotel_locations[i].location).bindPopup("<h1>" + hotel_location.name + "</h1>"))
//   );
// }

// //Layer of top Europe hotel data
// var overlayMaps = {
//   "Top Europe Hotels": topHotelMarkers,
//   "Second Top Europe Hotels": hotelMarkers
// };

// L.control.layers(overlayMaps).addTo(map)
//Add our marker cluster layer to the map
// myMap.addLayer(hotelMarkers);


