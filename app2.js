function ist(){
  let url = ["https://assaultdb.herokuapp.com/fulldate"]
  d3.json(url,function(testData){
    testData.map(testDatum =>{
      let years = testDatum.yearOfRegistration;
      // console.log(years)
      let drop_menu = d3.select("#selDataset");
      years.forEach(function(year_id) {
        drop_menu.append("option").text(year_id).propetyu("value");
      })
    }
)}
)}
ist();    


function test(){
  let url = ["https://assaultdb.herokuapp.com/fulldate"]
  d3.json(url,function(testData){
    testData.map(testDatum =>{
      let gender = testDatum.gender;
      // let year2015 = 2015;
      let year = testDatum.yearOfRegistration;
      let sexualassault = testDatum.isSexualExploit;
      console.log(year)
      let testtrace = {
        x: year,
        y: gender,
        type: "bar",
      };
      let testdata = [testtrace];

      let barlayout = {
        title: `TEST`
      }
      Plotly.newPlot("bar", testdata, barlayout)

    })
  })
}
test();
// const url = ["https://assaultdb.herokuapp.com/fulldate"]

// async function fetchAll(){
//   const results = await Promise.all(url.map((urls) => fetch(urls).then ((r) => r.json())));
//   let array = JSON.stringify(results, null, 2)
//   console.log(array)
//   };
