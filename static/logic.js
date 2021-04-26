API_KEY = "pk.eyJ1IjoiY2Fyb2x5YW4iLCJhIjoiY2tuMjBhZTR2MGNydzJvdGVpODR1bnF2dSJ9.RdVBWnEtcnEUGn3_B5SvYA"


// Creating map object
var myMap = L.map("map", { 
  center: [48.864716, 2.349014],
  zoom: 10
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
var gdata
var hmarkers = []


var layers = [];

// for each layer we'd have one array
// one of the checkboxes is clicked on =>
// check the checkbox value
// if checked =>
//  add the layer back onto the map

function displayLayersOnMap() {
  layers.forEach(({ layerGroup }) => {
    layerGroup.addTo(myMap);
  });
}

function loadHotels() {
d3.json("/data").then(function(data) {
  gdata = data;
  hotel_name = data.map(i => i.hotel_name);
  hotel_locations = data.map(i => [i.lat, i.lng]);
  console.log(hotel_name);
  console.log(hotel_locations);
  gdata.forEach(d=> hmarkers.push(L.marker([d.lat, d.lng]).bindPopup("<h1>" + d.hotel_name + "</h1>")))



  var layerGroup = L.layerGroup(hmarkers)
  // .addTo(myMap);

  layers.push({
    name: 'high-ranking-hotels',
    layerGroup,
  });
  displayLayersOnMap();
  //
});
}
loadHotels()


sc_hotel_locations = []
//Second layer marker with local csv file
// Load second top hotel data from csv
d3.csv("/Users/yanyibing/Desktop/BOOTCAMPHW/Project_2/Project_2/Project_2/europesctop.csv").then(function(schotelData){
  // console.log(schotelData);
  for (var i = 0; i <11; i++) {
    // console.log(schotelData[i])
    sc_hotel_locations.push({
      name: schotelData[i].hotel_name,
      location: [schotelData[i].lat, schotelData[i].lng]
    })
    }
  });



function toggle() {
  if (document.getElementById('hotels').checked) {
    layers.forEach((layer) => {
      layer.layerGroup.clearLayers();
    });

    layers = layers.filter(layer => {
      if (layer.name === 'high-ranking-hotels') {
        return false;
      }
      return true;
    });
  }
  else {
    loadHotels()
  }

  displayLayersOnMap();
}


