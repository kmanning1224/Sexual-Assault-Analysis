function optionChanged(){
    let drop_year = d3.select('#selDataset_year').node().value[0];
    let drop_gender = d3.select('#selDataset_gender').node().value[0];
   createDonut(drop_year,drop_gender);
  }

function createDonut() {
    // var queryUrl = `https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/gender/${yearSelect}/${genderSelect}`
    var queryUrl = `https://cors-anywhere.herokuapp.com/https://assaultdb.herokuapp.com/gender`

    let y_select = d3.select('#selDataset_year').node().value[0];
    let g_select = d3.select('#selDataset_gender').node().value[0];
    
    d3.json(queryUrl, function (data) {
      data.map((Datum) =>{
        // console.log(data)
        var year = Datum(obj => obj.yearOfRegistration == y_select)[0];
        var gender = Datum(obj => obj.gender == g_select)[0];
        var pie = d3.select('#pie');
        pie.html("");

        console.log(gender)
        var partner = Datum.recruiterRelationIntimatePartner;
        var friend = Datum.recruiterRelationFriend;
        var family = Datum.recruiterRelationFamily;
        var other = Datum.recruiterRelationOther;

        var earnings = Datum.meansOfControlTakesEarnings;
        var threats = Datum.meansOfControlThreats;
        var psyabuse = Datum.meansOfControlPsychologicalAbuse;
        var phyabuse = Datum.meansOfControlPhysicalAbuse;
        var sexabuse = Datum.meansOfControlSexualAbuse;
        var drugs = Datum.meansOfControlPsychoactiveSubstances;
        var move = Datum.meansOfControlRestrictsMovement;
        var children = Datum.meansOfControlUsesChildren;
        var leo = Datum.meansOfControlThreatOfLawEnforcement;

        var labour = Datum.isForcedLabour;
        var sexex = Datum.isSexualExploit;
        var otherex = Datum.isOtherExploit;
        var abduction = Datum.isAbduction;

        var data = [{
            values: [partner, friend, family, other],
            labels: ['Recruited by Partner', 'Recruited by Friend', 'Recruited by Family', 'Recruited by Other'],
            domain: {column: 0},
            name: 'Recruiter Relation to Victim',
            hoverinfo: 'label+percent',
            hole: .6,
            type: 'pie'
          },
          {
            values: [earnings, threats, psyabuse, phyabuse, sexabuse, drugs, move, children, leo],
            labels: ['Controlled by Earnings', 'Controlled by Threats', 'Controlled by Psychological Abuse', 'Controlled by Physical Abuse', 'Controlled by Sexual Abuse', 'Controlled by Psychoactive Substances', 'Controlled by Restrictive Movement', 'Controlled by Use of Children', 'Controlled by Threats of Law Enforcement'],
            textposition: 'inside',
            domain: {column: 1},
            name: 'Means of Control of Victim',
            hoverinfo: 'label+percent',
            hole: .6,
            type: 'pie'
          },{
            values: [labour, sexex, otherex, abduction],
            labels: ['Exploited by Forced Labour', 'Exploited by Sexual Exploitation', 'Exploited by Other Method', 'Exploited by Abduction'],
            // textposition: 'inside',
            domain: {column: 2},
            name: 'Method of Exploitation of Victim',
            hoverinfo: 'label+percent',
            hole: .6,
            type: 'pie'
          }];
          var layout = {
            title: `${gender} Victim Statistics for ${year}`,
            annotations: [
              {
                font: {
                  size: 12
                },
                showarrow: false,
                text: "Recruitment",
                x: 0.07,
                y: 0.5
              },
              {
                font: {
                  size: 12
                },
                showarrow: false,
                text: "Control",
                x: 0.5,
                y: 0.5
              },
              {
                font: {
                  size: 12
                },
                showarrow: false,
                text: "Exploitation",
                x: .93,
                y: 0.5
              }
            ],
            height: 500,
            width: 600,
            showlegend: false,
            grid: {rows: 1, columns: 3}
          };

          Plotly.newPlot('pie', data, layout);
      
        });

     
});

};

createDonut();
optionChanged();