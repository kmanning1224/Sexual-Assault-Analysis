// function init() {
    var queryUrl = "https://assaultdb.herokuapp.com/fulldate";

    d3.json(queryUrl).then(data => {
        // console.log(data)
        var year = data[0].yearOfRegistration;
        var age = data[0].agerange;
        var gender = data[0].gender;
        var status = data[0].majorityStatusAtExploit;
        // console.log(gender)
        var partner = data[0].recruiterRelationIntimatePartner;
        var friend = data[0].recruiterRelationFriend;
        var family = data[0].recruiterRelationFamily;
        var other = data[0].recruiterRelationOther;

        var data = [{
            values: [partner, friend, family, other],
            labels: ['Partner', 'Friend', 'Family', 'Other'],
            domain: {column: 0},
            name: 'Recruiter Relation to Victim',
            hoverinfo: 'label+percent+name',
            hole: .4,
            type: 'pie'
          }];
          var layout = {
            title: `Recruiter Relation to ${age} year old Victims for ${year}`,
            annotations: [
              {
                font: {
                  size: 20
                },
                showarrow: false,
                text: `${year}`,
                x: 0.17,
                y: 0.5
              },
            ],
            height: 400,
            width: 600,
            showlegend: false,
            grid: {rows: 1, columns: 2}
          };

          Plotly.newPlot('pie', data, layout);




    
        
        
        });

     
    
// }

// init()