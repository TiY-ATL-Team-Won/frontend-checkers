(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>GAME VIEW</div>\n";
},"useData":true});
templates['login'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>\n";
},"useData":true});
templates['register'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password1\" placeholder=\"hunter2\" />\n  <input type=\"password\" name=\"password2\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>";
},"useData":true});
templates['user'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "\n	<ul>\n		<li>"
    + this.escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</li>\n		<li>{[auth_token}}</li>\n	</ul>\n\n\n";
},"useData":true});
templates['welcome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n\n  <a href=\"#login\"><div class=\"btn-login\">Login</div></a>\n  <a href=\"#register\"><div class=\"btn-register\">Register</div></a>\n\n</div>\n";
},"useData":true});
})();