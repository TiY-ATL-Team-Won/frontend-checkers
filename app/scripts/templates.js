(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['game'] = template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <div>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, alias4=this.lambda;

  return "        <span data-row=\""
    + alias3(((helper = (helper = helpers.row || (depth0 != null ? depth0.row : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"row","hash":{},"data":data}) : helper)))
    + "\" data-col=\""
    + alias3(((helper = (helper = helpers.col || (depth0 != null ? depth0.col : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"col","hash":{},"data":data}) : helper)))
    + "\" data-type=\""
    + alias3(alias4((depth0 != null ? depth0.type : depth0), depth0))
    + "\" data-color=\""
    + alias3(alias4((depth0 != null ? depth0.color : depth0), depth0))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </span>\n";
},"3":function(depth0,helpers,partials,data) {
    return "            <img src=\"images/"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.type : depth0), depth0))
    + ".png\" />\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<a href=\"#new\"><div class=\"game-btn\">New Game</div></a>\n"
    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['login'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>\n";
},"useData":true});
templates['rank'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n<ul>\n	<li>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</li>\n	<li>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</li>\n	<li>"
    + alias3(((helper = (helper = helpers.auth_token || (depth0 != null ? depth0.auth_token : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"auth_token","hash":{},"data":data}) : helper)))
    + "</li>\n</ul>";
},"useData":true});
templates['register'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"login\">\n\n  <input type=\"text\"     name=\"email\"    placeholder=\"email@domain.com\" />\n  <input type=\"password\" name=\"password1\" placeholder=\"hunter2\" />\n  <input type=\"password\" name=\"password2\" placeholder=\"hunter2\" />\n  <input type=\"submit\" />\n\n  <span></span>\n</form>\n";
},"useData":true});
templates['user'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "\n	<ul>\n		<li>"
    + alias3(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"email","hash":{},"data":data}) : helper)))
    + "</li>\n		<li>"
    + alias3(((helper = (helper = helpers.auth_token || (depth0 != null ? depth0.auth_token : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"auth_token","hash":{},"data":data}) : helper)))
    + "</li>\n	</ul>\n\n\n	<a href=\"#logout\"><div>logout</div></a>";
},"useData":true});
templates['welcome'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div>\n\n  <a href=\"#login\"><div class=\"btn-login\">Login</div></a>\n  <a href=\"#register\"><div class=\"btn-register\">Register</div></a>\n\n</div>\n";
},"useData":true});
})();