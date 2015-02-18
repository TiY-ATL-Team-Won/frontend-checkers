;(function() {
  
'use strict';

app.mainRouter = Backbone.Router.extend({

  initialize: function() {
    Backbone.history.start();
    setTimeout(function() {
      console.log("asdf");
      console.log(app.user);
      if(app.user === undefined) {
        app.main.navigate('', { trigger: true });
      }}, 100);
  },

  routes: {
    '': 'welcome',
    'login': 'login',
    'register': 'register',
    'game': 'game',
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

  game: function() {
    app.game = new app.gameView();
  },


});

}());
