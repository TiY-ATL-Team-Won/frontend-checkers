;(function() {

'use strict';

app.Checker = Backbone.Model.extend({
  
  url: '',

  initialize: function() {

  },

  defaults: {
    //auth_token: app.user.auth_token,
    // 0: empty, 1: red, 2: black, 3: red king, 4: black king
    type: 0,
    origin_x: 0,
    origin_y: 0,
    moves: [],
  },

  move: function(board) {

  },

});

}());
