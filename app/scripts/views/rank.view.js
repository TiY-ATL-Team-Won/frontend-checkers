; (function () {

'use strict'


app.RankView = Backbone.View.extend ({

	events: {
		//unknown at this time//

	}.

template: Handlebars.templates.rank,


initialize: function() {
		this.render();
	},

render: function() {
  $('.display').html(this.el);
   this.$el.html(this.template());
  },


});

}());



