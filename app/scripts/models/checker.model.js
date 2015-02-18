;(function() {

'use strict';

app.Checker = Backbone.Model.extend({
  
  initialize: function() {

  },

  defaults: {
    // 0: empty, 1: red, 2: black, 3: red king, 4: black king
    type: 0,
    x: 0,
    y: 0,
    move: {
      origin_x: 0,
      origin_y: 0,
      moves: [{ x:0, y:0 }],
    },
  },

  move: function(board) {

  },

});

}());
