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
    	app.players = app.players || [];
    	//console.log('this');
  	},
  	
	render: function() {
  		$.get(app.rootUrl + 'users/leaderboard/').done (function (data) {
        

       //var ranking = app.RankView; 
       //console.log(ranking);
	     //_.sortBy(ranking, 'experience');
       //need to revers highest num first
       //$('.display').html(this.el);
      // this.$el.html(this.template());
        
      });

    }, 

          
       
  	
        				



 

});

}());



//("email", "score", "current games")
 