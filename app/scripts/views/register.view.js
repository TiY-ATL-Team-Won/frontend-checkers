;(function() {

'use strict';


app.RegisterView = Backbone.View.extend ({
  className: 'register-container',

	events: {
		'submit': 'register',
	},

	template: Handlebars.templates.register,

	initialize: function() {
		this.render();
	},

	render: function() {
    $('.display').html(this.el);
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

        var payload = {
            user: {
            email: email,
        password: pw
      }
    };

    var url = 'http://protected-forest-2584.herokuapp.com/users/';
    $.post(url, payload)
      .done( function(data) {
      // SUCCESS!
      // redirect to gameboard/mainpage.. what have you
      document.cookie = "authentication_token=" + data.user.authentication_token;
      document.cookie = "email=" + data.user.email;
      document.cookie = "path=/";
     // document.cookie = "expires=Fri, 31 Dec 9999 23:59:59 GMT";//
     app.user = new app.User({ auth_token: data.user.authentication_token,
                                email: data.user.email
                              }); 

     
    })
    .fail( function() {
        $('span').html("ERROR!!! " + JSON.stringify(payload));
      });


   }, 
    		   
  

    

});
  	

	
}());




