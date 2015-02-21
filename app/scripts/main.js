;(function() {

'use strict';

app.rootUrl = 'http://protected-forest-2584.herokuapp.com/';
//app.rootUrl = 'http://10.0.0.147:3000/';
app.main = new app.mainRouter();
Backbone.history.start();

}());
