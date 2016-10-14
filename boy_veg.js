var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


current_band = "";

current_veggie = "";


var space = "<br> <br/>";


for (var i = 0; i < bands.length; i++) {
	current_band += "<p>" + bands[i] + "<br> </br>" + "</p>";
}

console.log("current_band");

var bandElement = document.getElementById("boy-bands").innerHTML = current_band + space;



for (var i = 0; i < vegetables.length; i++) {
	current_veggie += "<p>" + vegetables[i] + "<br> </br>" + "</p>";
}

console.log("current_veggie");

var vegtableElement = document.getElementById("vegetables").innerHTML = current_veggie;