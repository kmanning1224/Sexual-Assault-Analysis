
// function optionChanged(){
//   let drop_year = d3.select('#selDataset_year').node().value;
//   let drop_gender = d3.select('#selDataset_gender').node().value;
//  createBarbyGender(drop_year,drop_gender);
// console.log(drop_year)
// }


function createBarbyGender(){
  console.log(createBarbyGender)
  let url = ["https://assaultdb.herokuapp.com/gender"]
  // let url2 = `/api/${year}/${gender}`
  d3.json(url,function(testData){
    // console.log(testData)
    let yearselect = d3.select('#selDataset_year').node().value[0];
    let genderselect = d3.select('#selDataset_gender').node().value[0];
    let test = [];
    let filter = test.filter(y => y.yearselect === yearselect);
    
    // let yeartest = yearid.filter(i = i.obj === yearselect)[0];
    // console.log(test)
      let genderM = [];
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
      let genderF = [];
      let genderALL =[];
      testData.map((testDatum) =>{
        // console.log(testDatum)
      if (testDatum.gender === "Male"){
        genderM.push(testDatum.gender);
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
        genderF.push(testDatum.gender);
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
      genderALL.push(testDatum.gender);
      let drop_year = d3.select('#selDataset_year').node().value;
      let drop_gender = d3.select('#selDataset_gender').node().value;
      console.log(drop_gender)
      console.log(drop_year)
      // console.log(yearfemalearray)
      // console.log(exploitfemale)
      // console.log(yearmalearray)
      // console.log(yearfemalearray)
      let PAFtrace = {
        x: drop_gender,
        y: meansofControlPAF,meansofControlPAM,
        name: 'Physical Abuse - Means of Control',
        type: 'bar'
      };
      let PStrace = {
        x: drop_gender,
        y:  meansofControlPSM, meansofControlPSF,
        name: 'Psychoactive Substances - Means of Control',
        type: 'bar'
      };
      let PsAtrace = {
        x: drop_gender,
        y: meansofControlPsAF, meansofControlPsAM,
        name:'Psychological Abuse - Means of Control',
        type: 'bar'
      }
      let RMtrace = {
        x: drop_gender,
        y: meansofControlRMF, meansofControlRMM,
        name : 'Restricts Movement - Means of Control',
        type: 'bar'
      }
      let SAtrace = {
        x: drop_gender,
        y: meansofControlSAF, meansofControlSAM,
        name: 'Sexual Abuse - Means of Control',
        type: 'bar'
      }
      let TEtrace = {
        x: drop_gender,
        y: meansofControlTEF, meansofControlTEM,
        name: 'Takes Earnings - Means of Control',
        type: 'bar'
      }
      let ToLtrace = {
        x: drop_gender,
        y: meansofControlToLF, meansofControlToLM,
        name: 'Threats of Law Enforcement - Means of Control',
        type: 'bar'
      }
      let Ttrace = {
        x: drop_gender,
        y: meansofControlTF, meansofControlTM,
        name:'Threats (General) - Means of Control',
        type: 'bar'
      }
  

      let data = [PAFtrace, PStrace,PsAtrace,RMtrace,SAtrace,TEtrace,ToLtrace,Ttrace]
      let layout = {
        barmode: 'stack',
        colorway : 'YlGnBu',
        title: `Types of Control by ${drop_gender}`,
        showlegend: true,
          legend: {
            x: 1,
            y: 0.5
          },
        bargap: 0.2,
        width: 900,
        height: 600
      };
      Plotly.newPlot("bar", data, layout)
    })
  })
}
function createBarbySexualExploit(){
  let url = ["https://assaultdb.herokuapp.com/gender"]
  // let url2 = `/api/${year}/${gender}`
  d3.json(url,function(testData){
    // console.log(testData)
    let bar2 = d3.select('#bar2')
    bar2.html("");
    // let yeartest = yearid.filter(i = i.obj === yearselect)[0];
    // console.log(test)
      let genderM = [];
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
      let genderF = [];
      let genderALL =[];
      testData.map((testDatum) =>{
        // console.log(testDatum)
      if (testDatum.gender === "Male"){
        genderM.push(testDatum.gender);
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
        genderF.push(testDatum.gender);
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
      // let yearselect = d3.select('#selDataset_year').node().value[0];
      // let test = [];
      // let filter = test.filter(y => y.yearfemalearray === yearselect);
      // console.log(filter)
      let traceF = {
        x:yearfemalearray,
        y:exploitfemale,
        name: 'Sexual Exploits against Females',
        mode: 'markers'

      };
      let traceM = {
        x: yearmalearray,
        y: exploitmale,
        name: 'Sexual Exploits against Males',
        mode: 'markers'
      }
      let dataexploit = [traceF,traceM]
      let layout = {
        title: 'Sexual Exploitation Male & Female',
        xaxis:{
          title: "Exploitation by Year"
        },
        showlegend: true,
          legend: {
            x: 1,
            y: 0.5
          },
        width: 800,
        height: 300
      };
      Plotly.newPlot("bar2",dataexploit, layout)
    })
  })
}


d3.select('#selDataset_year').on("change", createBarbyGender) 

createBarbyGender();
createBarbySexualExploit();
// optionChanged();
// changedSample();