;(function () {

'use strict';

app.UserView = Backbone.View.extend({
	className: 'user container',

	events: {
		//unknown right now//

	},

	template: Handlebars.templates.user,

	initialize: function() {
    this.render();
  },
  	render: function() {
    $('.display').html(this.el);
    this.$el.html(this.template(app.user.attributes));
  }

  	
  

});


}());

