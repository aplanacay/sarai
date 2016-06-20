FlowRouter.route("/pests", {
	action: function() {
		BlazeLayout.render("MainLayout", {main: "SaraiPests"})
	}
})