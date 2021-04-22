
API_KEY = "pk.eyJ1IjoiY2Fyb2x5YW4iLCJhIjoiY2tuMjBhZTR2MGNydzJvdGVpODR1bnF2dSJ9.RdVBWnEtcnEUGn3_B5SvYA"

var hotel_locations = []

// Load data from csv
d3.csv("europesctop.csv").then(function(schotelData){
  // console.log(schotelData);
  for (var i = 0; i <11; i++) {
    // console.log(schotelData[i])
    hotel_locations.push({
      name: schotelData[i].hotel_name,
      location: [schotelData[i].lat, schotelData[i].lng]
    })
    }
  });

console.log(hotel_locations)

//Goal: to plot the lat and lng data in the eurosctop.csv
//Include image on the marker

// Creating map object
var myMap = L.map("map", {
  center: [54.5260, -15.2551],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



// //loop thro
var hotelMarkers = L.markerClusterGroup();

for (var i = 0; i < hotel_locations.length; i++) {
  console.log(hotel_locations[i])
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  hotelMarkers.push(
    hotelMarkers.addLayer(L.marker(hotel_locations[i].location).bindPopup("<h1>" + hotel_location.name + "</h1>"))
  );
}



//Add our marker cluster layer to the map
myMap.addLayer(hotelMarkers);



