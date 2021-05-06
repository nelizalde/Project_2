var data = [
    {
      x: ['Austria', 'France', 'Italy', 'Netherlands', 'Spain', 'United Kingdom'],
      y: [1563.287671, 636.703297, 1598.633540, 2161.247619, 1440.028846, 1533.440000],
      type: 'bar'
    }
  ];

var layout = {
    title: "Total Average Number of Reviews per Country",
    xaxis: { title: "Country" },
    yaxis: { title: "Avg of Total Number of Reviews" }

};

Plotly.newPlot('plot', data, layout);