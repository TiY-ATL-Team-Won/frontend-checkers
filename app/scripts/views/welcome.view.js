;(function() {

'use strict';

app.welcomeView = Backbone.View.extend({
  className: 'welcome-container',

  events: {
    'click .btn-login'   : 'redirect',
    'click .btn-register': 'redirect',
  },

  template: Handlebars.templates.welcome,

  initialize: function() {
    this.render();
  },
  
  render: function() {
    $('.display').empty().append(this.el);
    this.$el.html(this.template());
  },

  redirect: function(e) {
    if (e.currentTarget.className === 'btn-login') {
      app.login = new app.loginView();
    }

    if (e.currentTarget.className === 'btn-register') {
      console.log("REGISTER");
    }
  },


});

}());
