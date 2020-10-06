d3.json("sqlite:///assaultdb.sqlite").then(function(response) {
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