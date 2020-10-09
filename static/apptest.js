
    let url = ["https://assaultdb.herokuapp.com/gender"]
    // let url2 = `/api/${year}/${gender}`
    d3.json(url,function(testData){
        testData.forEach((Data) =>{
            let array_data = [];
            for (let i=0; i<1; i++) {
                array_data[i]={
                    Gender: Data.gender,
                    Year: Data.yearOfRegistration,
                    Sexual_Exploit_Count: Data.isSexualExploit,
                    Physical_Abuse: Data.meansOfControlPhysicalAbuse,
                    Psychoactive_Substances: 
                }
                console.log(array_data)
        
            }
    })
})
