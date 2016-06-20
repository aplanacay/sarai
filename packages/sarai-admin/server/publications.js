Meteor.publish("get-admin", function(){
	var self = this
	return Admin.find({userId: self.userId})
})