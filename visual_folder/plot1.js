var data = [
    {
      x: ['Austria', 'France', 'Italy', 'Netherlands', 'Spain', 'United Kingdom'],
      y: [8.574658, 8.494945, 8.318012, 8.409524, 8.499519, 8.484000],
      type: 'bar'
    }
  ];

var layout = {
    title: "Total Average Score per Country",
    xaxis: { title: "Country" },
    yaxis: { title: "Avg of Average Score" }

};

Plotly.newPlot('plot', data, layout);