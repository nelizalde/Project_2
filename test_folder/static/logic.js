
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
    .select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Load Data from csv, using a promise(.then)
d3.csv("Hotel_Reviews_csv.csv").then(function(hotelData){
    console.log(hotelData[0]);

//Parse the data & Format the data and convert to numerical and date values
// Create a function to parse date and time
var parseTime = d3.timeParse("%m/%d/%Y");

// Format the data
hotelData.forEach(function(data){
    data.Review_Date = parseTime(data.Review_Date);
    data.Reviewer_Score = +data.Reviewer_Score;
 });
 console.log(hotelData[0]);

//Create the scales for the chart
    var xTimeScale = d3.scaleTime()
    .domain(d3.extent(hotelData, d => d.Review_Date))
    .range([0, width]);

    var yLinearScale = d3.scaleLinear().range([height,0]);

// Set up the y-axis domain and determine the max y value
    var review_score_max = d3.max(hotelData, d => d.Reviewer_Score)

    yLinearScale.domain([0, review_score_max]);
    console.log(review_score_max)
    
// Create the axes 
var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%b-%Y")).ticks(14);
var leftAxis = d3.axisLeft(yLinearScale);

//Append x-axis
chartGroup.append("g")
.attr("transform", `translate(0, ${height})`)
.call(bottomAxis);

// //Append y-axis
chartGroup.append("g").call(leftAxis);

// //Set up the line generator 
var line = d3.line()
    .x(d => xTimeScale(d.Review_Date))
    .y(d => yLinearScale(d.Reviewer_Score));

// // //Draw in scatter plot 
    chartGroup
    .selectAll("dot")
    .data(hotelData)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return xTimeScale(d.Review_Date); } )
      .attr("cy", function (d) { return yLinearScale(d.Reviewer_Score); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")


    // .append("path")
    // .attr("fill","none")
    // .attr("stroke","steelblue")
    // .attr("stroke-width",1.5)
    // .attr("d", line)
    //.classed("blue", true);
svg.append("path")



}).catch(function(error) {
    console.log(error);
  });