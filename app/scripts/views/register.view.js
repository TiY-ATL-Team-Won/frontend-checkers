;(function() {

'use strict';


app.registerView = Backbone.View.extend ({
	classname = 'register-container',

	events: {
		'submit': 'register',
	},

	template: Handlebars.templates.register,

	initialize: function() {
		this.render();
	},

	render: function() {
    $('.display').empty().append(this.el);
    this.$el.html(this.template());
  	},

  	register: function(e) {
  		e.preventDefault;

  		 var email = $('input[name="email"]').val();
    	 var pw    = $('input[name="password"]').val();

    		if (email.indexOf('@') === -1) {
      			$('span').html("email yo"); 
      			return;
    		}

    		if (pw.length < 8) {
      			$('span').html("Password is too short");
      			return;
    		}
    	 var verify = $('input[name="password"]').val();

    	 	if var pw === !var verify {
    	 		$('span').html("Passwords do not match");
    	 		return;
    	 	}



    		   console.log(email, pw);
  },

});

  	

	
}());




