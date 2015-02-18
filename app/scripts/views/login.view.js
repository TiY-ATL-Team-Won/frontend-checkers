;(function() {

'use strict';

app.loginView = Backbone.View.extend({
  className: 'login-contaier',

  events: {
    'submit': 'login',
  },

  template: Handlebars.templates.login,

  initialize: function() {
    this.render();
  },
  
  render: function() {
    $('.display').empty().append(this.el);
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

    var url = '/users/sign_in/';
    $.post(url, payload).done( function() {

    }).fail( function() {
        $('span').html("ERROR!!! " + JSON.stringify(payload));
      });
    console.log(email, pw);
  },

});





}());
