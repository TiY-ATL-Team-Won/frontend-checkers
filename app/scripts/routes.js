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
    'user': 'user',
    'game': 'game',
  },

  welcome: function() {
    app.welcomeView = new app.WelcomeView();
  },

  login: function() {
    app.loginView = new app.LoginView();
  },

  register: function() {
    app.registerView = new app.RegisterView();
  },

  user: function() {
    app.userView = new app.UserView();
  },

  game: function() {
    app.gameView = new app.GameView();
  },


});

}());
