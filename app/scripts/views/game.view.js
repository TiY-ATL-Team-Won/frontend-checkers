;(function() {

'use strict';

app.gameView = Backbone.View.extend({
  className: 'game-container',

  template: Handlebars.templates.game,

  initialize: function() {
   this.render();
  },

  render: function() {
    $('.display').html(this.el);
    this.$el.html(this.template());
  },



});

}());
