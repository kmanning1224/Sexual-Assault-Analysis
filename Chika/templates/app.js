function buildData(sample) {
    var url = "https://assaultdb.herokuapp.com/fulldate"
    d3.json(url).then((data) => {
        console.log(data)
        var metadata = data.metadata;

        // filter to the each sample
        var resultList = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultList[0];

        var LOC = d3.select("#sample-metadata");
        LOC.html("");

        //Bring data using object.entries and loop through each key and value
        Object.entries(result).forEach(([key,value]) => {
            LOC.append("h5").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

function buildChart(sample) {
    var url = "https://assaultdb.herokuapp.com/fulldate"
    d3.json(url).then((data) => {
        // var samples = data.samples;
        // var resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        // var result = resultArray[0];
        // console.log(result.otu_ids)

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
        console.log(sample_values)
        
        //Build bubble chart

        var Bdata = [
            {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Jet"
            }
            
            }
        ];
        var bubblelayout = {
            title: "Bacteria per Sample",
            margin: { t: 0},
            hovermode: "closest",
            xaxis: { title: "OTU ID"},
            margin: { t: 30}
        };


        Plotly.newPlot("bubble", Bdata, bubblelayout);

        yaxis =  otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [
            {
            y:yaxis,
            x: sample_values.slice(0,10).reverse(),
            type: "bar",
            text: otu_labels.slice(0,10).reverse(),
            orientation: "h",
            }
        ];

        var barLayout = {
            title: " Top 10 Bacteria found",
            margin: { t: 30, l: 150}
        };

        Plotly.newPlot("bar", barData, barLayout);

        //Build guage chart 

        var Gdata = [
            {
                
                domain: { x: [0, 1], y: [0, 1] },
                value: 9, //parseFloat(wfreq),
                title: { text: "Belly Button Washing Frequency", font: {size: 30} },
                type: "indicator",
                mode: "gauge+number",

                gauge: { axis: { range: [null, 9], tickwidth: 1, tickcolor: "darkblue"},
                   steps: [
                    { range: [0, 1], color: "floralwhite" },
                    { range: [1, 2], color: "OldLace" },
                    { range: [2, 3], color: "LightGoldenRodYellow" },
                    { range: [3, 4], color: "PaleGoldenRod" },
                    { range: [4, 5], color: "palegreen" },
                    { range: [5, 6], color: "darkseagreen" },
                    { range: [6, 7], color: "mediumseagreen" },
                    { range: [7, 8], color: "forestgreen" },
                    { range: [8, 9], color: "seagreen" },
                  ]}
            }
        ];
        
        var Glayout = { width: 700, height: 600, margin: { t: 20, b: 40, 1:100, r:100} };

        Plotly.newPlot("gauge", Gdata, Glayout);
    });
}

function start() {

    var selector = d3.select("#selDataset");

    // use the list of samples to bring it live to the front end
    d3.json("samples.json").then((sampleNames)=>{
        var sampleNames = sampleNames.names;

        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });

        var firstvalue = sampleNames[0];
        buildChart(firstvalue);
        buildData(firstvalue);
    });
     
}
d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged(nextValue) {
    buildChart(nextValue);
    buildData(nextValue);
}

// start the dashboard

start();