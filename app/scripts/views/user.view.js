;(function () {


'use strict';

app.userView = Backbone.Views.extend ({
	className: 'user container';

	events: {
		//unknown right now//

	},

	template: Handlebars.templates.user,

	initialize: function() {
    this.render();
  },
  	render: function() {
    $('.display').html(this.el);
    this.$el.html(this.template(app.user));
  }

  	
    


});


}()):

