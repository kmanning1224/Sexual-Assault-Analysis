
    let url = ["https://assaultdb.herokuapp.com/gender"]
    // let url2 = `/api/${year}/${gender}`
    d3.json(url,function(testData){
        testData.forEach((Data) =>{
            let array_data = [];
            for (let i=0; i<1; i++) {
                array_data[i]={
                    Gender: Data.gender
                };
                console.log(array_data)
        
            }
    })
})
