function optionChanged() {
    let drop_year = d3.select('#selDataset_year').node().value;
    let drop_gender = d3.select('#selDataset_gender').node().value;
    //  createBarbyGender(drop_year,drop_gender);
    // createDonut();
    newPlot();
}
function newPlot() {
    let url = ["https://assaultdb.herokuapp.com/gender"]
    // let url2 = `/api/${year}/${gender}`
    d3.json(url, function (testData) {
        let y_select = d3.select('#selDataset_year').node().value;
        let g_select = d3.select('#selDataset_gender').node().value;
        let filter = testData.filter(y => y.yearOfRegistration === parseInt(y_select) && y.gender === g_select);
        let array_dataf =[];
        let array_datam =[];
        console.log(array_dataf)
        filter.map((Data) => {
            if(Data.gender === "Female")
            for (let i = 0; i < 1; i++) {
                array_dataf[i] = {
                    Gender: Data.gender,
                    Year: Data.yearOfRegistration,
                    Sexual_Exploit_Count: Data.isSexualExploit,
                    Physical_Abuse: Data.meansOfControlPhysicalAbuse,
                    Psychoactive_Substances: Data.meansOfControlPsychoactiveSubstances,
                    Restrict_Movement: Data.meansOfControlRestrictsMovement,
                    Sexual_Abuse: Data.meansOfControlSexualAbuse,
                    Takes_Earnings: Data.meansOfControlTakesEarnings,
                    Law_Enforcement: Data.meansOfControlThreatOfLawEnforcement,
                    Threats: Data.meansOfControlThreats,
                    Recruit_Fam: Data.recruiterRelationFamily,
                    Recruit_Friend: Data.recruiterRelationFriend,
                    Recruit_Int_P: Data.recruiterRelationIntimatePartner,
                    Recruit_Other: Data.reacruiterRelationOther
                }
                let tracetest = {
                    x: array_dataf.Year[0],
                    y: array_dataf.Sexual_Exploit_Count[0],
                    name: 'TEST',
                    type: 'scatter'
                };
                let tracedata = [tracetest]
                let layout = {
                    title: 'Sexual Exploitation Male / Female',
                    xaxis:{
                        title: "Exploitation by Year"
                    },
                    showlegend: true
                };
                Plotly.newPlot("bar", tracedata, layout)
            }
            else {
            for (let i =0; i<1; i++){
                array_datam[i] = {
                    Gender: Data.gender,
                    Year: Data.yearOfRegistration,
                    Sexual_Exploit_Count: Data.isSexualExploit,
                    Physical_Abuse: Data.meansOfControlPhysicalAbuse,
                    Psychoactive_Substances: Data.meansOfControlPsychoactiveSubstances,
                    Restrict_Movement: Data.meansOfControlRestrictsMovement,
                    Sexual_Abuse: Data.meansOfControlSexualAbuse,
                    Takes_Earnings: Data.meansOfControlTakesEarnings,
                    Law_Enforcement: Data.meansOfControlThreatOfLawEnforcement,
                    Threats: Data.meansOfControlThreats,
                    Recruit_Fam: Data.recruiterRelationFamily,
                    Recruit_Friend: Data.recruiterRelationFriend,
                    Recruit_Int_P: Data.recruiterRelationIntimatePartner,
                    Recruit_Other: Data.reacruiterRelationOther
                }
            }

            }
        }
        )
    })
}
newPlot();
