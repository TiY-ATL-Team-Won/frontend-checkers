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
    // TESTING, remove me!
    app.game.board = [ [1,0,1,0,1,0,1,0],
                         [0,1,0,1,0,1,0,1],
                         [1,0,1,0,1,0,1,0],
                         [0,0,0,0,0,0,0,0],
                         [0,0,0,0,0,0,0,0],
                         [0,2,0,2,0,2,0,2],
                         [2,0,2,0,2,0,2,0],
                         [0,2,0,2,0,2,0,2] ];
    this.g = 1;
    this.render();
  },

  piece: { 
    selected: false,
    x: -1,
    y: -1,
    type: -1,
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
    if (!this.piece.selected && (!(player === type || 
                                 player === type - 2))) { return; }
   
    // selected piece should hightlight
    if (!this.piece.selected) {
      sel.addClass('selected');
      this.piece.selected = true;
      this.piece.x = col;
      this.piece.y = row;
      this.piece.type = type;
      // available moves should as well
      highlightPossibleMoves();
    } else if (this.piece.selected && sel.hasClass('selected')) {
      // toggling off selected peice should toggle all off
      if (col === self.piece.x && row === self.piece.y) {
        reset();
      // let it move!
      } else {
        movePiece(self.piece.type, self.piece.x, self.piece.y, col, row); 
        reset();
      }
          
    } 

    function reset () {
      $('.selected').removeClass('selected');
        self.piece.selected = false;
        self.piece.x = -1;
        self.piece.y = -1;
        self.piece.type = -1;
    }

    function highlightPossibleMoves () {
      // player 1 at top, moves down rows, so +1
      // player 2 at bot, moves up rows,   so -1
      var y = player === 1 ? 1 : -1;
      y += self.piece.y;
      var x1 = self.piece.x - 1;
      var x2 = self.piece.x + 1;
      
      // without jumps there can be a max of two moves
      var move1 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' + 
                    'span[data-type="0"]span[data-color="black"]');
      var move2 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                    'span[data-type="0"]span[data-color="black"]');
      move1.addClass('selected');
      move2.addClass('selected');
    }

    function movePiece(checker, originX, originY, destX, destY) {
      // send ajax request
      app.game.board[originY][originX] = 0;
      app.game.board[destY][destX] = checker;
      // render, reset when board returns.
      self.render();
    }
        
  },

  render: function() {
    var self = this;
    $.get(app.rootUrl + 'games/' + this.g).done( function(data) {
      //app.game.board = data.game.board;
     var board = self.transformBoard();

      //app.game.player = data.users.player1.email === app.userCookie.email ?
      //  1 : 2;
      app.game.player = 1;

      $('.display').html(self.el);
      self.$el.html(self.template(board));
    });
  },

  transformBoard: function() {
    var b = [];
    for (var row = 0; row < app.game.board.length; row++) {
      var r = [];
      for (var col = 0; col < app.game.board[row].length; col++) {
        var color = (row + col) % 2 === 0 ? "black" : "white";
        var tmp = { row: row, col: col, color: color, 
                      type: app.game.board[row][col] };

        r.push(tmp); 
      }
      b.push(r);
    }

    return b;
  },



});

}());
