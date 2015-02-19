;(function() {

'use strict';

app.mainRouter = Backbone.Router.extend({

  initialize: function() {
  },

  routes: {
    '': 'welcome',
    'login': 'login',
    'register': 'register',
    'user': 'user',
    'game': 'game',
  },


  // check cookie and session before anything else happens.
  execute: function(callback, args) {
    app.userCookie = {};
    var tmp = document.cookie.split(';');

    if(tmp.length !== 1) {
      for (var i = 0; i < tmp.length; i++) {
        var kv = tmp[i].split('=');
        app.userCookie[kv[0].trim()] = kv[1].trim();
      }
    }

    if(Object.keys(app.userCookie).length === 0) {
      if (callback == this.welcome || callback == this.login || callback == this.register) {
        callback.apply(this, args);
      } else {
        this.welcome();
      }
    } else {
      app.user = new app.User({ auth_token: app.userCookie.authentication_token,
                                email: app.userCookie.email
                              });

      $.ajaxSetup({
        headers: { 'auth-token': app.userCookie.authentication_token }
      });

       if (callback == this.welcome || callback == this.login || callback == this.register) {
         app.main.navigate('user', { trigger: true });
      } else {
        callback.apply(this, args);
      }
    }
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
