// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually
define(['../../../../lib'], function (ojster) {
"use strict";
 // normally here will be just 'ojster'

var Hobbies = function(opt_data, opt_ctx, opt_writer) {
	ojster.Template.call(this, opt_data, opt_ctx, opt_writer);
};
inherits(Hobbies, ojster.Template);

Hobbies.prototype.renderBlockMain = function() { // @6:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>No hobbies detected.</div>'
	);
}; // @8:1

return Hobbies;

});