Admin = new Mongo.Collection(Sarai.collections.admin)

Admin.deny({
	insert: function(){
		return true
	},
	update: function() {
		return true
	},
	remove: function() {
		return true
	}
})

Admin.isAdmin = function (userId) {
	return (userId && Admin.findOne({userId: userId}))
}

Admin.checkAdmin = function(userId) {
	if (!Admin.isAdmin(userId)) throw new Meteor.Error("not-allowed","Not allowed")
}