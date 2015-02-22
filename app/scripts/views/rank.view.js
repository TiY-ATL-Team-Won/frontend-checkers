; (function () {

'use strict';

app.RankView = Backbone.View.extend({
	className: 'rank-container',

	events: {

		'submit': 'leaderboard',
	},

	template: Handlebars.templates.rank,

	initialize: function() {
    	this.render();

    

    	

  	},
  	
	render: function(){

  		var self = this;
  		$.get(app.rootUrl + 'users/leaderboard/').done (function (data) {
  		self.$el.html(self.template(data));
 		
  		});
	},



 

});

}());



//("email", "score", "current games")
 