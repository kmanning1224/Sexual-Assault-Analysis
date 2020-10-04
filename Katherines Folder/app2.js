function makeplot(){
    plotly.d3.csv("data/Alltotals_global_dataset_2020.csv", function(data){processData(data)});
    function processData(allRows){
        console.log(allRows)
    }
}
    
  