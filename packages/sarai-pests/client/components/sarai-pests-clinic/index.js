Template.Services.events({
	'click #link-4': function(e){
		e.preventDefault();
		$(".homepage").hide();
		$(".instructions").show();
	}
});
