d3.json("data/assault_us_array.json").then((data) => {
    //  Create the Traces
    var trace1 = {
      x: data.yearOfRegistration,
      y: data.gender,
      type: "bar",
      name: "TEST",
      boxpoints: "all"
    };
  
    // Create the data array for the plot
    var data = [trace1];
    let data2 = d3.json("data/assault_us_array.json")
    console.log(data2)
    // Define the plot layout
    var layout = {
      title: "TEST",
    };
  
    // Plot the chart to a div tag with id "plot"
    Plotly.newPlot("bar", data, layout);
  });