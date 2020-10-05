function buildCharts(sample) {
    var colorlist = ['#56dd3b','#3ad8bb','#3ba5e2','#3956db','#6639db',
    '#9f38e0','#da36e2','#93226d','#701339','#510811','#443536','#1c1919']
    // Fetch the sample data for the plots
    var url = `/sqltest`;
    d3.json(url).then(function(response) {
      const gender = response.gender;
      const year = response.yearOfRegistration;
      const agerange = response.agerange;
      const sexexploit = response.isSexualExploit;
      console.log(response)
  /*=========Build a bubble plot ==============*/
      var trace1 = {
        x: gender,
        y: year,
        text: agerange,
        marker:{
          size: sexexploit,
          color: gender,
          colorscale: "Portland"
        },
        mode: "markers"
      };
      var data1 = [trace1];
      var layout1 = {
        title: 'Test',
        showlegend: false,
        autoscale: true,
        margin: { t: 0 },
        hovermode: "closest",
      };
  
      Plotly.newPlot("bubble", data1, layout1)
    })
};
buildCharts();