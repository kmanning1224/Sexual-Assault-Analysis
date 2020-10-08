function optionChanged(){
  let drop_year = d3.select('#selDataset_year').node().value[0];
  let drop_gender = d3.select('#selDataset_gender').node().value[0];
 createBarbyGender(drop_year,drop_gender);

}
function createBarbyGender(){
  let url = ["https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/fulldate"]
  d3.json(url,function(testData){
    console.log(testData)
      let yearfemalearray =[];
      let yearmalearray =[];
      let exploitmale = [];
      let exploitfemale=[];
      let meansofControlPAM =[];
      let meansofControlPAF =[];
      let meansofControlPSM =[];
      let meansofControlPSF =[];
      let meansofControlPsAM =[];
      let meansofControlPsAF =[];
      let meansofControlRMM =[];
      let meansofControlRMF =[];
      let meansofControlSAM =[];
      let meansofControlSAF =[];
      let meansofControlTEM = [];
      let meansofControlTEF = [];
      let meansofControlToLM = [];
      let meansofControlToLF = [];
      let meansofControlTM =[];
      let meansofControlTF =[];
      let meansofControlUCM =[];
      let meansofControlUCF = [];
      let recFamilyM =[];
      let recFamilyF =[];
      let recFriendM = [];
      let recFriendF = [];
      let recRomancM = [];
      let recRomancF = [];
      let recOtherM =[];
      let recOtherF =[];
      testData.map((testDatum) =>{
        // console.log(testDatum)
      if (testDatum.gender === "Male"){
        yearmalearray.push(testDatum.yearOfRegistration);
        exploitmale.push(testDatum.isSexualExploit);
        meansofControlPAM.push(testDatum.meansOfControlPhysicalAbuse)
        meansofControlPSM.push(testDatum.meansOfControlPsychoactiveSubstances)
        meansofControlPsAM.push(testDatum.meansOfControlPsychologicalAbuse)
        meansofControlRMM.push(testDatum.meansOfControlRestrictsMovement)
        meansofControlSAM.push(testDatum.meansOfControlSexualAbuse)
        meansofControlTEM.push(testDatum.meansOfControlTakesEarnings)
        meansofControlToLM.push(testDatum.meansOfControlThreatOfLawEnforcement)
        meansofControlTM.push(testDatum.meansOfControlThreats)
        meansofControlUCM.push(testDatum.meansOfControlUsesChildren)
        recFamilyM.push(testDatum.recruiterRelationFamily)
        recFriendM.push(testDatum.recruiterRelationFriend)
        recRomancM.push(testDatum.recruiterRelationIntimatePartner)
        recOtherM.push(testDatum.reacruiterRelationOther)

      }
      else {
        yearfemalearray.push(testDatum.yearOfRegistration);
        exploitfemale.push(testDatum.isSexualExploit);
        meansofControlPAF.push(testDatum.meansOfControlPhysicalAbuse)
        meansofControlPSF.push(testDatum.meansOfControlPsychoactiveSubstances)
        meansofControlPsAF.push(testDatum.meansOfControlPsychologicalAbuse)
        meansofControlRMF.push(testDatum.meansOfControlRestrictsMovement)
        meansofControlSAF.push(testDatum.meansOfControlSexualAbuse)
        meansofControlTEF.push(testDatum.meansOfControlTakesEarnings)
        meansofControlToLF.push(testDatum.meansOfControlThreatOfLawEnforcement)
        meansofControlTF.push(testDatum.meansOfControlThreats)
        meansofControlUCF.push(testDatum.meansOfControlUsesChildren)
        recFamilyF.push(testDatum.recruiterRelationFamily)
        recFriendF.push(testDatum.recruiterRelationFriend)
        recRomancF.push(testDatum.recruiterRelationIntimatePartner)
        recOtherF.push(testDatum.reacruiterRelationOther)
      }
      console.log(exploitfemale)
      // console.log(yearmalearray)
      // console.log(yearfemalearray)
      let Female = {
        x: yearfemalearray,
        y: meansofControlPAF,meansofControlPSF,meansofControlPsAF,meansofControlRMF,meansofControlSAF,
        meansofControlTEF,meansofControlToLF,meansofControlTF,meansofControlUCF,
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




