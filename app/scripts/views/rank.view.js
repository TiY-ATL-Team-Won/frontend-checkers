; (function () {

'use strict';

app.RankView = Backbone.View.extend({
	className: 'rank-container',

	events: {
		'submit': 'Leaderboard',
    	//unknown right now//
	},

	template: Handlebars.templates.rank,

	initialize: function() {
    	this.render();
    	
  	},
  
	render: function() {
  		var self = this;
  		$.get(app.rootUrl + 'users/leaderboard/').done (function (data) {
  		
  		//var ranking =  new app.RankView; 
  		//_.sortby(data, 'experience');
  		self.$el.html(this.template(data));
 		// }
  		});
	},



});

}());



//("email", "score", "current games")
 