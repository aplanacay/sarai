Accounts.onLogin(function(){
	if (Meteor.user() && 
		 (Meteor.user().username==="tjmonsi" ||
		  Meteor.user().username==="tjmonsi@gmail.com")) {

		if (!Admin.findOne({userId: Meteor.userId()})) Admin.insert({userId: Meteor.userId()})
	}
})