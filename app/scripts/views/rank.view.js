; (function () {

'use strict'

app.RankView = Backbone.View.extend({
	className: 'rank-container',

	events: {
		'submit': 'createNewUser',
    //unknown right now//

	},

	template: Handlebars.templates.rank,

	initialize: function() {
    this.render();
    console.log('this');
  },
  
render: function() {
  var self = this;
  $.get(app.rootUrl + 'users/' + app.user.id).done (function (data) {
    
 }


 
    

};


}());ß



//("email", "score", "current games")
 