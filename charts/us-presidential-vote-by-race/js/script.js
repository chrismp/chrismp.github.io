function drawGraphic(chartDataObj,d,i,isPercentWhiteChart){
	var colorStyleObj;
	if (isPercentWhiteChart) {
		colorStyleObj = {
			White: "#ffdea5",
			Nonwhite: "#c68a21"
		};
	} else {
		colorStyleObj = {
			Democrat: "#2166ac",
			Republican: "#b2182b",
			Other: "#bbb"
		};
	}

	c3.generate({
		data: {
			json: chartDataObj,
			type: "donut",
			colors: colorStyleObj
		},
		legend: {
			show: false
		},
		donut: {
			title: d["Year"],
			label: {
				format: function(value,ratio,id){
					return d3.format('.0%')(value/100);
				}
			}
		},
		size: {
			height: 220,
			width: 220
		},
		bindto: "#chart"+i
	});
}

var pymChild = null;
var dataDir = "vote-by-race";
d3.csv(dataDir+'/'+filename+".csv").then(function(data){
	var row;
	var chartsContainer = document.getElementById("charts");
	data.forEach(function(d,i){
		if (i%4===0) {
			row = document.createElement("div");
			row.className = "row justify-content-center";
		}

		var col = document.createElement("div");
		col.className = "col-xs";

		var chartDiv = document.createElement("div");
		chartDiv.id = "chart"+i;

		col.appendChild(chartDiv);
		row.appendChild(col);
		chartsContainer.appendChild(row);
	});
	data.forEach(function(d,i){
		var chartDataObj = Object.assign({},d);
		delete chartDataObj["Year"];

		var chart = typeof isPercentWhiteChart === "undefined" ? drawGraphic(chartDataObj,d,i,false) : drawGraphic(chartDataObj,d,i,isPercentWhiteChart)
	});

	var sourceP = document.createElement('p');
	sourceP.innerHTML = "<small><i>Source: Exit poll results displayed by The New York Times.</i></small>"

	var sourceRow = document.createElement("div");
	sourceRow.className = "row";
	var sourceCol = document.createElement("div");
	sourceCol.className = "col";
	sourceCol.appendChild(sourceP);
	sourceRow.appendChild(sourceCol);
	chartsContainer.appendChild(sourceRow);

	pymChild = new pym.Child({rendercallback: drawGraphic});
});