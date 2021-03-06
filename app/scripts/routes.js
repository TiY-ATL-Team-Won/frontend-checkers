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
    'logout': 'logout',
    'game/:gid(/)': 'game',
    'new': 'newGame',
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
                                email: app.userCookie.email,
                                id: app.userCookie.id,
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

  logout: function() {
    app.userCookie = "";
    document.cookie = "expires=Thu, 01 Jan 1970 00:00:01 GMT";
    app.main.navigate('welcome', { trigger: true });
  },

  user: function() {
    app.userView = new app.UserView();
  },

  game: function(gid) {
    app.gameView = new app.GameView({ gid: gid });
  },

  newGame: function() {
    $.post(app.rootUrl + "games")
      .done( function(data) { 
        console.log(data);
        app.main.navigate('game/' + data.game.id, { trigger: true} );
      });
  },
  

});

}());
