;(function() {
  
'use strict';

app.mainRouter = Backbone.Router.extend({

  initialize: function() {
    Backbone.history.start();
  },

  routes: {
    '': 'welcome',
    'login': 'login',
    'register': 'register',
  },

  welcome: function() {
    app.welcome = new app.welcomeView();
  },

  login: function() {
    app.login = new app.loginView();
  },

  register: function() {
    app.register = new app.registerView();
  },


});

}());
