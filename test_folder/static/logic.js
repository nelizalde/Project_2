// Tool Tips
//Set the dimentions and margins of the graph
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//Create an SVG wrapper and append an SVG that will hold our chart
var svg = d3
    .select("#my_dataviz")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load Data from csv, using a promise(.then)
d3.csv("Hotel_Reviews_csv.csv").then(function(hotelData){
    console.log(hotelData);

//Parse the data & Format the data and convert to numerical and date values
// Create a function to parse date and time
var parseTime = d3.timeParse("%Y-%m");

// Format the data
hotelData.forEach(function(data){
    data.review_date = parseTime(data.review_date);
    data.reviwer_score = +data.reviwer_score;
 });
 console.log(hotelData);

//Create the scales for the chart
    var xTimeScale = d3.scaleTime()
    .domain(d3.extent(hotelData, d => d.review_date))
    .range([0, width]);

    var yLinearScale = d3.scaleLinear().range([height,0]);

// Set up the y-axis domain and determine the max y value
    var review_score_max = d3.max(hotelData, d => d.reviwer_score)

    yLinearScale.domain([0, review_score_max]);
    
// Create the axes 
var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
var leftAxis = d3.axisLeft(yLinearScale);

//Append x-axis
chartGroup.append("g")
.attr("transform", `translate(0, ${height})`)
.call(bottomAxis);

// //Append y-axis
chartGroup.append("g").call(leftAxis);

// //Set up the line generator 
var line = d3.line()
    .x(d => xTimeScale(d.review_date))
    .y(d => yLinearScale(d.reviwer_score));

// // //Draw in line by appending path
// // chartGroup
//     .append("path")
//     .attr("d", line(hotelData))
//     .classed("blue", true);
// svg.append("path")



}).catch(function(error) {
    console.log(error);
  });