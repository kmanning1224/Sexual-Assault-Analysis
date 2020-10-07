function optionChanged(){
  let drop_year = d3.select('#selDataset_year').value
  let drop_gender = d3.select('#selDataset_gender').value
 createDonut(drop_year);
 createBarGraph(drop_year,drop_gender);

}

function apitest(gender,year){
  let url = `api/${year}/${gender}`
  d3.json(url,function(data) {
    const year = data.yearOfRegistration;
    const gender = data.gender;

    let trace1 = {
      x: year,
      y: gender,
      text: gender,
      type:"bar",
    };
    let data2 = [trace1];
    let layout ={
      title: 'TEST API CALL'
    }
    Plotly.newPlot("bubble",data2,layout)
  })
}
apitest();
function test(){
  let url = ["https://assaultdb.herokuapp.com/gender"]
  
  d3.json(url,function(testData){
      let yearfemalearray =[];
      let yearmalearray =[];
      let exploitmale = [];
      let exploitfemale=[];
      testData.map((testDatum) =>{
        // console.log(testDatum)
      if (testDatum.gender === "Male"){
        yearmalearray.push(testDatum.yearOfRegistration);
        exploitmale.push(testDatum.isSexualExploit);
      }
      else {
        yearfemalearray.push(testDatum.yearOfRegistration);
        exploitfemale.push(testDatum.isSexualExploit);
      }
      // console.log(yearmalearray)
      // console.log(yearfemalearray)
      let Female = {
        x: yearfemalearray,
        y: exploitfemale,
        type: "bar",
        name: 'Female'
      };
      let Male = {
        x: yearmalearray,
        y: exploitmale,
        type: "bar",
        name: 'Male'
      };
      let testdata = [Female,Male];

      let barlayout = {
        title: `TEST`
      }
      Plotly.newPlot("bar", testdata, barlayout)
    })
  })
}

      
    
test();


function fireoff(year,gender){
d3.json(`/api/${year}/${gender}`).then(test => {

})
}

