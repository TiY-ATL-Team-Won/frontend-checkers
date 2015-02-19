; (function () {

'use strict'

app.RankView = Backbone.View.extend({
	className: 'rank container',

	events: {
		//unknown right now//

	},

	template: Handlebars.templates.rank,

	initialize: function() {
    this.render();
  },
  	render: function() {
    $('.display').html(this.el);
    this.$el.html(this.template(app.user.attributes));
  }

  	
    

});


}());





