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
    app.login = new app.loginView();
    console.log("clicked");
  },


});

}());
