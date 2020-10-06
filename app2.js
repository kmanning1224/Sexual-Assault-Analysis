function test(){
  const url = ["https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/test"]
  d3.json(url,function(testData){
    testData.map(testDatum =>{
      let gender = testDatum.gender;
      let year2015 = 2015;
      let year = testDatum.yearOfRegistration;
      let sexualassault = testDatum.isSexualExploit;
      console.log(testData)
      let testtrace = {
        x: year,
        y: sexualassault,
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
const url = ["https://assaultdb.herokuapp.com/fulldate"]

// async function fetchAll(){
//   const results = await Promise.all(url.map((urls) => fetch(urls).then ((r) => r.json())));
//   let array = JSON.stringify(results, null, 2)
//   console.log(array)
//   };
