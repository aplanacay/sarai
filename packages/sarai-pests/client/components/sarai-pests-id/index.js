Template.SaraiPestsId.helpers({
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
	myCallbacks: function() {
	    return {
				 finished: function(index, fileInfo, context) {
				 	Session.set('data',undefined);
				 	filename = "/upload/"+fileInfo.name;
				 	Session.set("filename",filename);
				 	$('.jqDropZone').html("<img src='"+fileInfo.url+"' width='100%' height='295px'/>");
				 	$.ajax({
						type:"POST",
						url:"http://127.0.0.1:5000/pestImageSearch",
						dataType:"json",
						data: 
							{
								'filename': filename,
							},
						success: function(result){
							Session.set('data',result.data);
							console.log(result.data);		
						},
						error: function(error){
							
						}
					});
				 }
	    }
	  },
	data: function(){
		values=[];
		if(Session.get('data')){
			for(var i = 0;i<Session.get('data').length;i++){
				values.push(PlantProblem.findOne({'type': 'Pest','name':Session.get('data')[i].name}));
			}
		}
		return values;
	},
});