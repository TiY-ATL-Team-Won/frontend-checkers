;(function() {

'use strict';


app.RegisterView = Backbone.View.extend ({
  classname: 'register-container',

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
  		e.preventDefault();

  		 var email = $('input[name="email"]').val();
    	 var pw1    = $('input[name="password1"]').val();
       var pw2    = $('input[name="password2"]').val();

    		if (email.indexOf('@') === -1) {
      			$('span').html("email yo"); 
      			return;
    		}

    		if (pw.length < 8) {
      			$('span').html("Password is too short");
      			return;
    		}

    	 	if (pw1 !== pw2) {
    	 		$('span').html("Passwords do not match");
    	 		return;
    	 	}



    		   console.log(email, pw);
  },

});

  	

	
}());




