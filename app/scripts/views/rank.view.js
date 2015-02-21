; (function () {

'use strict';

app.RankView = Backbone.View.extend({
	className: 'rank-container',

	events: {
		'submit': 'leaderboard',
    	//unknown right now//
	},

	template: Handlebars.templates.rank,

	initialize: function() {
    	this.render();
    	app.players.list = [];
    	//console.log('this');
  	},
  	
	render: function() {
  		var self = this;
  		$.get(app.rootUrl + 'users/' + 'leaderboard/' + app.user.id).done (function (data) {
  			app.players.list = app.data.list;
	
	});

 },

});

}());



//("email", "score", "current games")
 