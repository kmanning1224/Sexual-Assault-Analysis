// function init() {
    var queryUrl = "https://assaultdb.herokuapp.com/fulldate";

    d3.json(queryUrl).then(data => {
        // console.log(data)
        var year = data[1].yearOfRegistration;
        var age = data[1].agerange;
        var gender = data[1].gender;
        var status = data[1].majorityStatusAtExploit;
        // console.log(gender)
        var partner = data[1].recruiterRelationIntimatePartner;
        var friend = data[1].recruiterRelationFriend;
        var family = data[1].recruiterRelationFamily;
        var other = data[1].recruiterRelationOther;

        var earnings = data[1].meansOfControlTakesEarnings;
        var threats = data[1].meansOfControlThreats;
        var psyabuse = data[1].meansOfControlPsychologicalAbuse;
        var phyabuse = data[1].meansOfControlPhysicalAbuse;
        var sexabuse = data[1].meansOfControlSexualAbuse;
        var drugs = data[1].meansOfControlPsychoactiveSubstances;
        var move = data[1].meansOfControlRestrictsMovement;
        var children = data[1].meansOfControlUsesChildren;
        var leo = data[1].meansOfControlThreatOfLawEnforcement;

        var labour = data[1].isForcedLabour;
        var sexex = data[1].isSexualExploit;
        var otherex = data[1].isOtherExploit;
        var abduction = data[1].isAbduction;

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
            title: `${age} year old ${gender} ${status} Victim Statistics for ${year}`,
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

     
    
// }

// init()