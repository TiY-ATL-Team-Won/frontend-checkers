;(function() {

'use strict';

app.LoginView = Backbone.View.extend({
  className: 'login-container',

  events: {
    'submit': 'login',
  },

  template: Handlebars.templates.login,

    initialize: function() {
      this.render();
    },

  render: function() {
    $('.display').html(this.el);
    this.$el.html(this.template());
  },

  login: function(e) {
    e.preventDefault();
    // verify password has @
    // verify password at least 8 characters
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

    var payload = {
        user: {
          email: email,
          password: pw
        }
    };


    var url = 'http://protected-forest-2584.herokuapp.com/users/sign_in';
    $.post(url, payload)
      .done( function(data) {
      document.cookie = "authentication_token=" + data.user.authentication_token;
      document.cookie = "email=" + data.user.email;
      document.cookie = "path=/";
      //document.cookie = "expires=Fri, 31 Dec 9999 23:59:59 GMT";
      app.user = new app.User({ auth_token: data.user.authentication_token,
                                email: data.user.email
                              });

      app.main.navigate('game', { trigger: true });
    })
  
    .fail( function(data) {
        var err = JSON.parse(data.responseText);
        $('span').html(err.error);
      });

  },

});





}());
