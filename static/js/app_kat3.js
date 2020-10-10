

function optionChanged() {
  let drop_year = d3.select('#selDataset_year').node().value;
  let drop_gender = d3.select('#selDataset_gender').node().value;
  //  createBarbyGender(drop_year,drop_gender);
  createDonut();
  createBarbySexualExploit();
  console.log(drop_year)
}

createBarbySexualExploit2();
createBarbySexualExploit();
function createBarbySexualExploit() {
  let url = ["https://assaultdb.herokuapp.com/gender"]
  // let url2 = `/api/${year}/${gender}`
  d3.json(url, function (testData) {
    // console.log(testData)
    let y_select = d3.select('#selDataset_year').node().value;
    let g_select = d3.select('#selDataset_gender').node().value;
    let filter = testData.filter(y => y.yearOfRegistration === parseInt(y_select) && y.gender === g_select);
    let bar2 = d3.select('#bar2')
    bar2.html("");
    // let yeartest = yearid.filter(i = i.obj === yearselect)[0];
    // console.log(test)
    let genderM = [];
    let yearfemalearray = [];
    let yearmalearray = [];
    let exploitmale = [];
    let exploitfemale = [];
    let meansofControlPAM = [];
    let meansofControlPAF = [];
    let meansofControlPSM = [];
    let meansofControlPSF = [];
    let meansofControlPsAM = [];
    let meansofControlPsAF = [];
    let meansofControlRMM = [];
    let meansofControlRMF = [];
    let meansofControlSAM = [];
    let meansofControlSAF = [];
    let meansofControlTEM = [];
    let meansofControlTEF = [];
    let meansofControlToLM = [];
    let meansofControlToLF = [];
    let meansofControlTM = [];
    let meansofControlTF = [];
    let meansofControlUCM = [];
    let meansofControlUCF = [];
    let recFamilyM = [];
    let recFamilyF = [];
    let recFriendM = [];
    let recFriendF = [];
    let recRomancM = [];
    let recRomancF = [];
    let recOtherM = [];
    let recOtherF = [];
    let genderF = [];
    let genderALL = [];
    filter.map((testDatum) => {
      // console.log(testDatum)
      if (testDatum.gender === "Male") {
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
        let PAFtrace = {
          x: genderF,
          y: meansofControlPAF,
          name: `# of Physical Abuse ${meansofControlPAF}`,
          type: 'bar',
          hoverinfo: false
        };
        let PAFtrace2 = {
          x: genderM,
          y: meansofControlPAM,
          name: `# of Physical Abuse ${meansofControlPAM}`,
          type: 'bar',
          hoverinfo: false
        };
        let PStrace = {
          x: genderF,
          y: meansofControlPSF,
          name: `# of Pschoactive Substance Usage ${meansofControlPSF}`,
          type: 'bar',
          hoverinfo: false
        };
        let PStrace2 = {
          x: genderM,
          y: meansofControlPSM,
          name: `# of Pschoactive Substance Usage ${meansofControlPSM}`,
          type: 'bar',
          hoverinfo: false
        };
        let PsAtrace = {
          x: genderF,
          y: meansofControlPsAF,
          name: `# of Psychological Abuse ${meansofControlPsAF}`,
          type: 'bar',
          hoverinfo: false
        }
        let PsAtrace2 = {
          x: genderM,
          y: meansofControlPsAM,
          name: `# of Psychological Abuse ${meansofControlPsAM}`,
          type: 'bar',
          hoverinfo: false
        }
        let RMtrace = {
          x: genderF,
          y: meansofControlRMF,
          name: `# of Restriction of Movement ${meansofControlRMF}`,
          type: 'bar',
          hoverinfo: false
        }
        let RMtrace2 = {
          x: genderM,
          y: meansofControlRMM,
          name: `# of Restriction of Movement ${meansofControlRMM}`,
          type: 'bar',
          hoverinfo: false
        }
        let SAtrace = {
          x: genderF,
          y: meansofControlSAF,
          name: `# of Sexual Abuse ${meansofControlSAF}`,
          type: 'bar',
          hoverinfo: false
        }
        let SAtrace2 = {
          x: genderM,
          y: meansofControlSAM,
          name: `# of Sexual Abuse ${meansofControlSAM}`,
          type: 'bar',
          hoverinfo: false
        }
        let TEtrace = {
          x: genderF,
          y: meansofControlTEF,
          name: `# of Taking Earnings ${meansofControlTEF}`,
          type: 'bar',
          hoverinfo: false
        }
        let TEtrace2 = {
          x: genderM,
          y: meansofControlTEM,
          name: `# of Taking Earnings ${meansofControlTEM}`,
          type: 'bar',
          hoverinfo: false
        }
        let ToLtrace = {
          x: genderF,
          y: meansofControlToLF,
          name: `# of Threats of Law Enforcement ${meansofControlToLF}`,
          type: 'bar',
          hoverinfo: false
        }
        let ToLtrace2 = {
          x: genderM,
          y: meansofControlToLM,
          name: `# of Threats of Law Enforcement ${meansofControlToLM}`,
          type: 'bar',
          hoverinfo: false
        }
        let Ttrace = {
          x: genderF,
          y: meansofControlTF,
          name: `# of Threats (General) ${meansofControlTF}`,
          type: 'bar',
          hoverinfo: false,
        }
        let Ttrace2 = {
          x: genderM,
          y: meansofControlTM,
          name: `# of Threats (General) ${meansofControlTM}`,
          type: 'bar',
          hoverinfo: false
        }


        let data = [PAFtrace, PStrace, PsAtrace, RMtrace, SAtrace, TEtrace, ToLtrace, Ttrace,
          PAFtrace2, PStrace2, PsAtrace2, RMtrace2, SAtrace2, TEtrace2, ToLtrace2, Ttrace2]
        let layout = {
          // barmode: 'stack',
          colorway: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
          title: `Types of Control for ${g_select} in ${y_select}`,
          font: {
            family: 'Raleway, sans-serif'
          },
          showlegend: true,
          legend: {
            x: 1,
            y: 0.5
          },
          yaxis: {
            zeroline: false,
            gridwidth: 2
          },
          bargap: 0.2,
          width: 700,
          height: 600
        };
        Plotly.newPlot("bar2", data, layout)
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
        let PAFtrace = {
          x: genderF,
          y: meansofControlPAF,
          name: `# of Physical Abuse ${meansofControlPAF}`,
          type: 'bar',
          hoverinfo: false
        };
        let PAFtrace2 = {
          x: genderM,
          y: meansofControlPAM,
          name: `# of Physical Abuse ${meansofControlPAM}`,
          type: 'bar',
          hoverinfo: false
        };
        let PStrace = {
          x: genderF,
          y: meansofControlPSF,
          name: `# of Pschoactive Substance Usage ${meansofControlPSF}`,
          type: 'bar',
          hoverinfo: false
        };
        let PStrace2 = {
          x: genderM,
          y: meansofControlPSM,
          name: `# of Pschoactive Substance Usage ${meansofControlPSM}`,
          type: 'bar',
          hoverinfo: false
        };
        let PsAtrace = {
          x: genderF,
          y: meansofControlPsAF,
          name: `# of Psychological Abuse ${meansofControlPsAF}`,
          type: 'bar',
          hoverinfo: false
        }
        let PsAtrace2 = {
          x: genderM,
          y: meansofControlPsAM,
          name: `# of Psychological Abuse ${meansofControlPsAM}`,
          type: 'bar',
          hoverinfo: false
        }
        let RMtrace = {
          x: genderF,
          y: meansofControlRMF,
          name: `# of Restriction of Movement ${meansofControlRMF}`,
          type: 'bar',
          hoverinfo: false
        }
        let RMtrace2 = {
          x: genderM,
          y: meansofControlRMM,
          name: `# of Restriction of Movement ${meansofControlRMM}`,
          type: 'bar',
          hoverinfo: false
        }
        let SAtrace = {
          x: genderF,
          y: meansofControlSAF,
          name: `# of Sexual Abuse ${meansofControlSAF}`,
          type: 'bar',
          hoverinfo: false
        }
        let SAtrace2 = {
          x: genderM,
          y: meansofControlSAM,
          name: `# of Sexual Abuse ${meansofControlSAM}`,
          type: 'bar',
          hoverinfo: false
        }
        let TEtrace = {
          x: genderF,
          y: meansofControlTEF,
          name: `# of Taking Earnings ${meansofControlTEF}`,
          type: 'bar',
          hoverinfo: false
        }
        let TEtrace2 = {
          x: genderM,
          y: meansofControlTEM,
          name: `# of Taking Earnings ${meansofControlTEM}`,
          type: 'bar',
          hoverinfo: false
        }
        let ToLtrace = {
          x: genderF,
          y: meansofControlToLF,
          name: `# of Threats of Law Enforcement ${meansofControlToLF}`,
          type: 'bar',
          hoverinfo: false
        }
        let ToLtrace2 = {
          x: genderM,
          y: meansofControlToLM,
          name: `# of Threats of Law Enforcement ${meansofControlToLM}`,
          type: 'bar',
          hoverinfo: false
        }
        let Ttrace = {
          x: genderF,
          y: meansofControlTF,
          name: `# of Threats (General) ${meansofControlTF}`,
          type: 'bar',
          hoverinfo: false,
        }
        let Ttrace2 = {
          x: genderM,
          y: meansofControlTM,
          name: `# of Threats (General) ${meansofControlTM}`,
          type: 'bar',
          hoverinfo: false
        }


        let data = [PAFtrace, PStrace, PsAtrace, RMtrace, SAtrace, TEtrace, ToLtrace, Ttrace,
          PAFtrace2, PStrace2, PsAtrace2, RMtrace2, SAtrace2, TEtrace2, ToLtrace2, Ttrace2]
        let layout = {
          // barmode: 'stack',
          colorway: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
          title: `# of Control-Types for ${g_select} in ${y_select}`,
          font: {
            family: 'Raleway, sans-serif'
          },
          showlegend: true,
          legend: {"orientation": "h"},
          margin: {
            l: 125,
            r: 5,
            b: 30,
            t: 30,
            pad: 0,
          },
          yaxis: {
            zeroline: false,
            gridwidth: 2
          },
          bargap: 0.2,
          width: 600,
          height: 400
        };
        Plotly.newPlot("bar2", data, layout)
      }
    })
  })
}
function createBarbySexualExploit2() {
  let url = ["https://assaultdb.herokuapp.com/gender"]
  // let url2 = `/api/${year}/${gender}`
  d3.json(url, function (testData) {
    // console.log(testData)
    let bar2 = d3.select('#bar2')
    bar2.html("");
    // let yeartest = yearid.filter(i = i.obj === yearselect)[0];
    // console.log(test)
    let genderM = [];
    let yearfemalearray = [];
    let yearmalearray = [];
    let exploitmale = [];
    let exploitfemale = [];
    let genderF = [];

    testData.map((testDatum) => {
      // console.log(testDatum)
      if (testDatum.gender === "Male") {
        genderM.push(testDatum.gender);
        yearmalearray.push(testDatum.yearOfRegistration);
        exploitmale.push(testDatum.isSexualExploit);

      }
      else {
        genderF.push(testDatum.gender);
        yearfemalearray.push(testDatum.yearOfRegistration);
        exploitfemale.push(testDatum.isSexualExploit);
      }
      let traceF = {
        x: yearfemalearray,
        y: exploitfemale,
        name: 'Sexual Exploits against Females',
        mode: 'lines'

      };
      let traceM = {
        x: yearmalearray,
        y: exploitmale,
        name: 'Sexual Exploits against Males',
        mode: 'lines'
      }
      let dataexploit = [traceF, traceM]
      let layout = {
        title: '# of Sexual Exploitation accounts Male & Female',
        colorway: ['#08519c', '#08306b'],
        xaxis: {
          title: "Exploitation 2015 - 2018"
        },
        showlegend: true,
        legend: {
          x: 1,
          y: 0.5
        },
        width: 600,
        height: 300
      };
      Plotly.newPlot("bar", dataexploit, layout)
    })
  })
}