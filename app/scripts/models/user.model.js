;(function() {

'use strict';

app.User = Backbone.Model.extend({

  initialize: function() {

  },

   defaults: {
      auth_token: '',
      email: '',
      stats: {
      win:  0,
      lose: 0,
      draw: 0,
    },
    current_games: [],
    
  },

 app.userUrl: 'http://protected-forest-2584.herokuapp.com/';

  });



 



}());

