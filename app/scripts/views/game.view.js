;(function() {

'use strict';

app.GameView = Backbone.View.extend({
  className: 'game-container',

  events: {
    'click span': 'select'
  },

  template: Handlebars.templates.game,

  initialize: function() {
    app.game = app.game || {};
    app.game.board = app.game.board || [];
    app.game.player = app.game.player || 'Player 1';

    this.g = 1;
    this.render();
  },

  piece: { 
    selected: false,
    x: -1,
    y: -1,
  },

  select: function(e) {
    e.stopPropagation();
    var sel = $(e.currentTarget);
    var row = sel.data('row');
    var col = sel.data('col');
    var type = sel.data('type');
    var square = sel.data('color');
    var self = this;

    // force selection on black squares only
    if (square === 'white') { return; }

    // must select piece first
    if (!this.piece.selected && type === 0) { return; }
    
    var player = app.game.player;
    // must select your own peice
    if (!(player === type || player === type - 2)) { return; }

    /*
    if (type === 0 && !this.piece.selected) {
      return;
    }


    var checkX = function () {
      return self.piece.x === (col - 1) || 
             self.piece.x === (col + 1);

    };

    var checkY = function () {
      if (player === 1) {
        return self.piece.y === row - 1;
      }

      if (player === 2) {
        return self.piece.y === row + 1;
      }
    };

    if (this.piece.selected && sel.hasClass('selected')) {
      sel.removeClass('selected');
      this.piece.selected = false;
      this.piece.x = -1;
      this.piece.y = -1;
    } else if (!this.piece.selected) {
      sel.addClass('selected');
      this.piece.selected = true;
      this.piece.x = col;
      this.piece.y = row;
    } else if (this.piece.selected && (type === 0)) {
        if (checkX() && checkY()) {
          this.piece.selected = false;
          this.piece.x = -1;
          this.piece.y = -1;
          $('.selected').removeClass('selected');
          console.log("move!");
        }
    }
  */
    
  },

  render: function() {
    var self = this;
    $.get(app.rootUrl + 'games/' + this.g).done( function(data) {
      app.game.board = data.game.board;
      app.game.board = self.transformBoard();
      console.log(data.users.player1);
      app.game.player = data.users.player1.email === app.userCookie.email ?
        1 : 2;

      $('.display').html(self.el);
      self.$el.html(self.template(app.game.board));
    });
  },

  transformBoard: function() {
    var b = [];
    for (var row = 0; row < app.game.board.length; row++) {
      var r = [];
      for (var col = 0; col < app.game.board[row].length; col++) {
        var color = (row + col) % 2 === 0 ? "black" : "white";
        var tmp = { row: row, col: col, color: color, type: app.game.board[row][col] };
        r.push(tmp); 
      }
      b.push(r);
    }

    return b;
  },



});

}());
