; (function () {

'use strict';

app.RankView = Backbone.View.extend({
	className: 'rank-container',

	events: {
<<<<<<< HEAD
		'submit': 'leaderboard',
=======
		'submit': 'Leaderboard',
>>>>>>> staging
    	//unknown right now//
	},

	template: Handlebars.templates.rank,

	initialize: function() {
    	this.render();
<<<<<<< HEAD
    	app.players = app.players || [];
    	//console.log('this');
=======
    	
>>>>>>> staging
  	},
  	
	render: function() {
<<<<<<< HEAD
  		$.get(app.rootUrl + 'users/leaderboard/').done (function (data) {
        

       //var ranking = app.RankView; 
       //console.log(ranking);
	     //_.sortBy(ranking, 'experience');
       //need to revers highest num first
       //$('.display').html(this.el);
      // this.$el.html(this.template());
        
      });

    }, 

          
       
  	
        				

=======
  		var self = this;
  		$.get(app.rootUrl + 'users/leaderboard/').done (function (data) {
  		
  		//var ranking =  new app.RankView; 
  		//_.sortby(data, 'experience');
  		self.$el.html(this.template(data));
 		// }
  		});
	},
>>>>>>> staging


 

});

}());



//("email", "score", "current games")
 