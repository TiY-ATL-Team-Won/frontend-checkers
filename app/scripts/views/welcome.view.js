;(function() {

'use strict';

app.welcomeView = Backbone.View.extend({
  className: 'welcome-container',

  template: Handlebars.templates.welcome,

  initialize: function() {
    this.render();
  },
  
  render: function() {
    $('.display').html(this.el);
    this.$el.html(this.template());
  },

});

}());
