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

//Parse the data & Format the data and convert to numerical and date values
// Create a function to parse date and time

// Second Try!
function(data){
    return{ date: d3.timeParse("%Y-%m")(data.review_date, value:data.reviwer_score)}

// Second Try! - Add x axis 

function(data){
    var x = d3.scaleTime()
    .domain(d3.extent(data, function(d){return d.review_date;}))
    .range([0,width]);
    svg.append("g")
    .attr("transform","transalte(0,"+ height + ")")
    .call(d3.axisBottom(x));

// Add y axis
    var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return +d.reviwer_score; })])
    .range([ height, 0 ]);])
    svg.append("g")
    .call(d3.axisLeft(y));

// Add the line
svg.append("path")
.datum(data)
.attr("fill","none")
.attr("stroke","steelblue")
.attr("stroke-width",1.5)
.attr("d",d3.line())
    .x(function(d) { return x(d.review_date) })
    .y(function(d) { return y(d.reviwer_score) })
        )