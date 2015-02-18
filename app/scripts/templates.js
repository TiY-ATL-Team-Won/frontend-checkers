(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n</form>\n";
},"useData":true});
})();