;(function() {

'use strict';

app.loginView = Backbone.View.extend({
  className: 'loginContaier',

  events: {
    'submit': 'login',
  },

  template: Handlebars.templates.login,

  initialize: function() {
    this.render();
  },
  
  render: function() {
    $('.display').append(this.el);
    this.$el.html(this.template());
  },

  login: function(e) {
    e.preventDefault();
    // verify password has @
    // verify password at least 8 characters
  }

});





}());
