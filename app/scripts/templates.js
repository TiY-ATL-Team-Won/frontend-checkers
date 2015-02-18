(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['login'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>\n";
},"useData":true});
templates['register'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password1\" placeholder=\"hunter2\" />\n  <input type=\"password\" name=\"password2\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>";
},"useData":true});
templates['welcome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n\n  <div class=\"btn-login\">Login</div>\n  <div class=\"btn-register\">Register</div>\n\n</div>\n";
},"useData":true});
})();