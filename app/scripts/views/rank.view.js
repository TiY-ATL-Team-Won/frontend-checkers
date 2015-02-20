; (function () {

'use strict'

app.RankView = Backbone.View.extend({
	className: 'rank-container',

	events: {
		//unknown right now//

	},

	template: Handlebars.templates.rank,

	initialize: function() {
    this.render();
  },
  
render: function() {
  var self = this;
  $.get(app.userUrl).done( function() {
    $('.display').html(self.el);
      self.$el.html(self.template(app.user));
  });
},
  	
    

});


}());




 