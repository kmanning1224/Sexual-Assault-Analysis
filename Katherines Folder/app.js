
function idlist() {
	//load in json file
d3.json("data/assault_us_array.json").then(id => {
    let year = id.yearOfRegistration.map( i => i.yearOfRegistration === 2015)
    let gender = id.gender
    let age =  id.ageBroad
    let majority = id.majorityStatusAtExploit
    let combined = [year, gender, age, majority]
	let drop_menu = d3.select("#selDataset");
	//Pull ID into dropdown, place property into value.
	combined.forEach(function(names_id) {
		drop_menu.append("option").text(names_id).property("value");
		//start with plots and starting id panel

	})
})
};
idlist()

function OptionChanged(){
d3.json("data/assault_us_array.json").then((incomingData) => {


	console.log(incomingData)

	let gender = incomingData.gender
	let datasource = incomingData.Datasource
	let female =  incomingData.gender
	let male = incomingData.gender
	let earnings = incomingData.meansOfControlTakesEarnings
	let threat = incomingData.meansOfControlThreats
	let psychological = incomingData.meansOfControlPsychologicalAbuse
	let physical = incomingData.meansOfControlPhysicalAbuse
	let sexabuse = incomingData.meansOfControlSexualAbuse
	let psychoactive = incomingData.meansOfControlPsychoactiveSubstances
	let restictmove = incomingData.meansOfControlRestrictsMovement
	let childrenuse = incomingData.meansOfControlUsesChildren
	let lawenforce = incomingData.meansOfControlThreatOfLawEnforcement
	let forcedlabor = incomingData.isForcedLabour
	let sexexploit = incomingData.isSexualExploit
	let otherexploit = incomingData.isOtherExploit
	let abduction = incomingData.isAbduction
	let recruiterint = incomingData.recruiterRelationIntimatePartner
	let recruiterfriend = incomingData.recruiterRelationFriend
	let recruiterfamily = incomingData.recruiterRelationFamily
	let recruiterother = incomingData.recruiterRelationOther

	let combinedgender = [female,male]
	let combindedthreats = [earnings,threat,psychological,physical,sexabuse,psychoactive
	,restictmove,childrenuse,lawenforce,forcedlabor,otherexploit,abduction]
	let recruitment = [recruiterfriend,recruiterint,recruiterfamily,recruiterother]
        
	let trace1 = {
		x: female,
		y: sexabuse,
		
		type: "bar"
	};

	let trace2 = {
		x: male,
		y: combindedthreats,
		text: combindedthreats.map(String),
		type: "bar"
	};


	let data = [trace1];

	let layout = {
		title: "testt"
	}

	Plotly.newPlot("bar",data,layout)
}
)
}
OptionChanged()