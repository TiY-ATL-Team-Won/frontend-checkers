;(function() {

'use strict';

app.GameView = Backbone.View.extend({
  className: 'game-container',

  events: {

  },

  template: Handlebars.templates.game,

  initialize: function() {
    app.board = app.board || [];
    this.g = 1;
    this.render();
  },

  render: function() {
    var self = this;
    $.get(app.rootUrl + 'games/' + this.g).done( function(data) {
      app.board = data.game.board;
      app.board = self.transformBoard();
      $('.display').html(self.el);
      self.$el.html(self.template(app.board));
    });
  },

  transformBoard: function() {
    var b = [];
    for (var row = 0; row < app.board.length; row++) {
      var r = [];
      for (var col = 0; col < app.board[row].length; col++) {
        var color = (row + col) % 2 === 0 ? "black" : "white";
        var tmp = { row: row, col: col, color: color, type: app.board[row][col] };
        r.push(tmp); 
      }
      b.push(r);
    }

    return b;
  },



});

}());
