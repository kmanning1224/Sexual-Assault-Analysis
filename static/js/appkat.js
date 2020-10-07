function optionChanged(){
  let drop_year = d3.select('#selDataset_year').node().value[0];
  let drop_gender = d3.select('#selDataset_gender').node().value[0];
 createBarbyGender(drop_year,drop_gender);

}
function createBarbyGender(){
  let url = ["https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/gender"]
  
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
        marker: {
          color: 'rgba(50,171,96,0.6)',
          line: {
            color: 'rgba(50,171,96,1.0)',
            width: 1
          }
        },
        name: 'Female',
        orientation : 'h'
      };
      let Male = {
        x: yearmalearray,
        y: exploitmale,
        type: "bar",
        mode: 'lines+markers',
        line: {
          color: 'rgb(128,0,128)'
      },
        name: 'Male'
      };
      let testdata = [Female,Male];

      let barlayout = {
        title: `Sexual Exploits Male vs. Female`
      }
      Plotly.newPlot("bar", testdata, barlayout)
    })
  })
}
createBarbyGender();
optionChanged();




