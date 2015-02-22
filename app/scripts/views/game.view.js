;(function() {

'use strict';

app.GameView = Backbone.View.extend({
  className: 'game-container',

  events: {
    'click span': 'select'
  },

  template: Handlebars.templates.game,

  initialize: function(opts) {
    app.game = app.game || {};
    app.game.board = app.game.board || [];
    app.game.player = app.game.player || 'Player 1';

    this.g = opts.gid;
    $('.display').html(this.el);
    this.render();
  },

  piece: {
    selected: false,
    x: -1,
    y: -1,
    type: -1,
    jump: false,
    jumpList: [],
  },

  select: function(e) {
    e.stopPropagation();
    var sel = $(e.currentTarget);
    var row = sel.data('row');
    var col = sel.data('col');
    var type = sel.data('type');
    var square = sel.data('color');
    var self = this;
    var player = app.game.player;

    // player turn?
    if (app.game.turn !== player) { return; }
    // force selection on black squares only
    if (square === 'white') { return; }
    // must select piece first
    if (!this.piece.selected && type === 0) { return; }

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
      hightLightPossibleJumps();
    } else if (this.piece.selected && sel.hasClass('selected')) {
      // toggling off selected peice should toggle all off
      if (col === self.piece.x && row === self.piece.y) {
        reset();
      // let it move!
      } else {
        // if jump, clear peice off board...
        // move
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
      var py = player === 1 ? 1 : -1;
      var y = py +  self.piece.y;
      var x1 = self.piece.x - 1;
      var x2 = self.piece.x + 1;

      // without jumps there can be a max of two moves
      var move1 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                    'span[data-type="0"]span[data-color="black"]');
      var move2 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                    'span[data-type="0"]span[data-color="black"]');
      move1.addClass('selected');
      move2.addClass('selected');

      // kings can move the other way. 
      if (self.piece.type === 3 || self.piece.type === 4) {
        py = player === 1 ? -1 : 1;
        y = py +  self.piece.y;
        var movek1 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                      'span[data-type="0"]span[data-color="black"]');
        var movek2 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                      'span[data-type="0"]span[data-color="black"]');
        movek1.addClass('selected');
        movek2.addClass('selected');
      }


  }

    function hightLightPossibleJumps() {
      // player 1 at top, moves down rows, so +1
      // player 2 at bot, moves up rows,   so -1
      var py = player === 1 ? 1 : -1;
      var y = py +  self.piece.y;
      var x1 = self.piece.x - 1;
      var x2 = self.piece.x + 1;

      // currently only show one jump out.
      var o = app.game.player === 1 ? 2 : 1;
     // if no move, means blocking peice, so check for avaiable jump
      var block1 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                    'span[data-type="' + o + '"]span[data-color="black"]');
      var block2 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                    'span[data-type="' + o + '"]span[data-color="black"]');
      
       
      o = app.game.player === 1 ? 4 : 3;
      var block3 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                    'span[data-type="' + o + '"]span[data-color="black"]');
      var block4 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                    'span[data-type="' + o + '"]span[data-color="black"]');


      y += py;
      x1 -= 1;
      x2 += 1;
 
      if (block1.length || block3.length) {
        var jmp1 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                     'span[data-type="0"]span[data-color="black"]');
        jmp1.addClass('selected');
      }
      if (block2.length || block4.length) {
        var jmp2 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                     'span[data-type="0"]span[data-color="black"]');
        jmp2.addClass('selected');
      }

      
      // kings can jump backwards, test the other way.
      if (self.piece.type === 3 || self.piece.type === 4) {
        py = player === 1 ? 1 : -1;
        y = py +  self.piece.y;
        x1 = self.piece.x - 1;
        x2 = self.piece.x + 1;

        // currently only show one jump out.
        o = app.game.player === 1 ? 2 : 1;
       // if no move, means blocking peice, so check for avaiable jump
        block1 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                      'span[data-type="' + o + '"]span[data-color="black"]');
        block2 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                      'span[data-type="' + o + '"]span[data-color="black"]');
         
        o = app.game.player === 1 ? 4 : 3;
        block3 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                      'span[data-type="' + o + '"]span[data-color="black"]');
        block4 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                      'span[data-type="' + o + '"]span[data-color="black"]');

        y += py;
        x1 -= 1;
        x2 += 1;
   
        if (block1.length || block3.length) {
          var jmp1 = $('span[data-row="'+ y +'"]span[data-col="'+ x1 +'"]' +
                       'span[data-type="0"]span[data-color="black"]');
          jmp1.addClass('selected');
        }
        if (block2.length || block4.length) {
          var jmp2 = $('span[data-row="'+ y +'"]span[data-col="'+ x2 +'"]' +
                       'span[data-type="0"]span[data-color="black"]');
          jmp2.addClass('selected');
        }
      }




    }

    function movePiece(checker, originX, originY, destX, destY) {
      var move = { x: originX, y: originY,
        move: [[destX, destY]], user_id: app.user.id,
      };

      var endpoint = app.rootUrl + 'games/' + self.g;

      $.ajax({
        url: endpoint,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(move),
      })
      .done( function(data) {
        console.log(data);
        self.render();
      });

    }

    function clearPiece(x, y) {
      app.game.board[y][x] = 0;
    }

  },

  render: function(which) {
    var self = this;
    if (which === 'local') {
      var board = self.transformBoard(); 
      self.$el.html(self.template(board));
      return;
    }

    $.get(app.rootUrl + 'games/' + this.g).done( function(data) {
      app.game.board = data.game.board;
      app.game.turn  = data.game.turn_count;
      var board = self.transformBoard();
      console.log(data);
      if (data.game.users[0].email === app.userCookie.email) {
        app.game.player = 1;
        app.game.opponet = {};
        if (data.game.users.length === 2) {
          app.game.opponet.email = data.game.users[1].email;
          app.game.opponet.id    = data.game.users[1].id;
        }
      } else {
        app.game.player = 2;
        app.game.opponet = {};
        app.game.opponet.email = data.game.users[0].email;
        app.game.opponet.id    = data.game.users[0].id;

      }

      self.$el.html(self.template(board));
      if (app.game.turn !== app.game.player) {
        setTimeout( function() {
          self.render();
        }, 2000);
      }
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
