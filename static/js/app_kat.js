function optionChanged(){
  let drop_year = d3.select('#selDataset_year').node().value[0];
  let drop_gender = d3.select('#selDataset_gender').node().value[0];
 createBarbyGender(drop_year,drop_gender);

}
function createBarbyGender(){
  let url = ["https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/gender"]
  let url2 = `/api/${year}/${gender}`
  d3.json(url2,function(testData){
    console.log(testData)
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
      console.log(exploitfemale)
      bar.html("")
      // console.log(yearmalearray)
      // console.log(yearfemalearray)
      let Female = {
        x: yearfemalearray,
        y: exploitfemale,
        type: "bar",
        marker: {
          color: 'rgba(50,171,96,0.6)',
        },
        name: 'Female'
      };
      let Male = {
        x: yearmalearray,
        y: exploitmale,
        type: "bar",
        marker: {
          color: 'rgba(50,171,60,0.6)',
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




