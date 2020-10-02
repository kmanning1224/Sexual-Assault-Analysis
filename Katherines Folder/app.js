d3.json("data/assault_us_array.json").then((incomingData) => {
	function filterAssault(assault) {
		return assault.isSexualExploit == 1;
	}

	let filteredassault = incomingData.filter(filterAssault);

	console.log(filteredassault)


	let gender = filteredassault.map(gender => gender.gender);

	let exploit = filteredassault.map(exploit => exploit.isSexualExploit);

	console.log(exploit)


	let trace = {
		x: gender,
		y: exploit,
		type: "bar"
	};

	let data = [trace];

	let layout = {
		title: "testt"
	}

	Plotly.newPlot("bar",data,layout)
})