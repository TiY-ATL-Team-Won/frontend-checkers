(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.lambda, alias2=this.escapeExpression;

  return "\n    <div class=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.type : stack1), depth0))
    + "\" id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.id : stack1), depth0))
    + ">"
    + alias2(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "</div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div>GAME VIEW</div>\n"
    + this.escapeExpression(((helper = (helper = helpers.attributes || (depth0 != null ? depth0.attributes : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"attributes","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.models : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['login'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>\n";
},"useData":true});
templates['register'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password1\" placeholder=\"hunter2\" />\n  <input type=\"password\" name=\"password2\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>";
},"useData":true});
templates['user'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n	<ul>\n		<li>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</li>\n		<li>"
    + alias3(((helper = (helper = helpers.auth_token || (depth0 != null ? depth0.auth_token : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"auth_token","hash":{},"data":data}) : helper)))
    + "</li>\n	</ul>\n\n\n";
},"useData":true});
templates['welcome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n\n  <a href=\"#login\"><div class=\"btn-login\">Login</div></a>\n  <a href=\"#register\"><div class=\"btn-register\">Register</div></a>\n\n</div>\n";
},"useData":true});
})();