Template.SaraiPestsLib.helpers({
	pestsRice: function(){
		return PlantProblem.find({'type': 'Pest', 'plant_affected': 'Rice'},{limit: 8});
	},
	pestsCorn: function(){
		return PlantProblem.find({'type': 'Pest', 'plant_affected': 'Corn'},{limit: 8});
	},
	imageName: function(str){
		return str.replace(/\s/g, '');
	},
	equals: function(v1, v2) {
		return (v1 === v2);
	},
	charLimit: function(str){
		return str.substring(0,160) + "...";
	},
	titleCharLimit: function(str){
		if(str.length > 13)
			return str.substring(0,12) + "...";

		return str;
	},
});