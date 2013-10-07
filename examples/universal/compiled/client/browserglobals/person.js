// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually
(function (root, factory) {
	"use strict";
	root.ojster = factory(root.ojster.example.templates.Base, root.ojster.example.templates.Hobbies, root.ojster.example.templates.Tools.SomeTool, root.ojster.example.templates.Tools.SomeOtherTool);
}(this, function (Base, Hobbies, SomeTool, SomeOtherTool) {
"use strict";



/* comment @4:1 */




var Base = ojster.example.templates.Base;
var Hobbies = ojster.example.templates.Hobbies;
var SomeTool = ojster.example.templates.Tools.SomeTool;
var SomeOtherTool = ojster.example.templates.Tools.SomeOtherTool;

var Person = function (opt_data, opt_ctx, opt_writer) {
	Base.call(this, opt_data, opt_ctx, opt_writer);
};
inherits(Person, Base);

Person.prototype.init = function () { // @14:1
	var self = this;
	var d = this.data, vars = this.vars;
	Base.prototype.init.call(this);

	this.baseCssName = 'basecss';
	vars.score = this.calculateScore(d); // vars is right place for template-level variables
};


// here is assumed that template will be compiled with goog.scope enabled
// some of features used will provide non-working code if goog.scope is not enabled
// i.g. function definition outside of block and using aliases

// fully qualified names cannot be used here, because node does not understand them



// usually code is enclosed into such a "tag"
function twistScore(value) {
	return value * 5 / 3;
}


// but beyond blocks code can be inserted just plain
Person.prototype.calculateScore = function(person) {
	return twistScore(person.score);
};

// code could be here too, almost anywhere

Person.prototype.renderBlockTitle = function () { // @41:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'Person #',
		self.escape(d.id) // @41:29
	);
}; // @41:40

Person.prototype.renderBlockScript = function () { // @43:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<script>'
	); // @45:1

	// seems like jslint tries to check code within 'script' tags even if it's part of string constant, so avoid it

	self.writer.write(
		'(function() {\n\t// TODO good for node, but bad for goog\n\tvar settings = ',
		JSON.stringify(this.ctx.pageSettings), // @48:20
		'; // inserting JSON unescaped\n\tojster.example.page.initPage(settings);\n})();</script>'
	);
}; // @52:1

// commented block: commented @54:1

Person.prototype.renderBlockContent = function () { // @58:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<span class="',
		self.baseCssName, // @59:18
		'">base css</span><br />'
	); // @60:5
	// commented block: commented @60:5
	self.writer.write(
		'<span class="',
		self.getCssName('abc'), // @63:18
		'">\'abc\'</span><br /><span class="',
		self.getCssName(d.css, 'abc'), // @64:18
		'">d.css with \'abc\'</span><br /><span class="',
		self.getCssName(self.baseCssName, 'abc'), // @65:18
		'">base with \'abc\'</span><br /><br /><span>A</span><span>B</span>',
		' ',
		'<span>C</span><br />'
	); // @70:5
	self.renderBlockEcho('Hey there!'); // @70:5
	self.writer.write(
		'<div>Hello, '
	); // @71:17
	self.renderBlockFullName(); // @71:17
	self.writer.write(
		'!</div><div>Your score: ',
		self.escape(vars.score), // @72:22
		'</div>'
	); // @72:45

	/* comment @72:45 */

	self.writer.write(
		'<div>Your skills:</div>'
	); // @76:5
	self.renderBlockSkills(); // @76:5

	if (d.events && d.events.length) {

	self.writer.write(
		'<div>Your events:</div>'
	); // @79:9

	d.events.forEach(function(event) {

	self.renderBlockBeforeEvent(); // @80:13
	self.writer.write(
		'<div>',
		self.escape(event.Name), // @81:18
		'</div>'
	); // @82:13
	self.renderBlockAfterEvent(); // @82:13

	});


	}


	// checking whitespaces compaction:

	self.writer.write(
		'<div>-', // @87:5
		' ',
		'-</div>' // @87:19
	); // @89:5
	new Hobbies(d, this.ctx).renderTo(self); // @89:5
	new SomeTool(d).setup(function () { var d = this.data, vars = this.vars;
		this.baseCssName = 'basecss1';
	}).renderTo(self); // @91:5
	new SomeOtherTool({
			parentData: d,
			someMoreData: 5
		}).renderTo(self); // @94:5
}; // @98:1

// commented block: commented @60:5

Person.prototype.renderBlockFullName = function () { // @71:17
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(d.firstName), // @71:40
		' ',
		self.escape(d.lastName) // @71:59
	);
}; // @71:76

Person.prototype.renderBlockBeforeEvent = function () { // @80:13
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.renderBlockEcho = function (msg) { // @100:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(msg) // @101:5
	);
}; // @102:1

Person.prototype.renderBlockSkills = function () { // @104:1
	var self = this;
	var d = this.data, vars = this.vars;

	if (vars.areSkillsRendered) {
		return;
	}

	vars.areSkillsRendered = true;

	if (!d.skills) {
		this.renderBlockNoSkills();
		return;
	}

	for (var i=0, l=d.skills.length; i < l; i++) {
		var skill = d.skills[i];

	self.renderBlockParametrized(i, l, skill); // @120:9
	self.writer.write(
		'<div>',
		self.escape(skill.name), // @123:14
		': ',
		self.escape(skill.value), // @123:33
		'</div>'
	); // @124:1

	}

}; // @127:1

Person.prototype.renderBlockParametrized = function (i, l, skill) { // @120:9
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>',
		self.escape(i + 1), // @121:18
		' of ',
		self.escape(l), // @121:34
		' is &quot;',
		self.escape(skill.name), // @121:52
		'&quot;</div>'
	);
}; // @122:9

Person.prototype.renderBlockNoSkills = function () { // @129:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>You have no skills :(</div>'
	);
}; // @131:1

Person.prototype.renderBlockAfterEvent = function () { // @133:1
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.testFunc = function () { // @135:1
	var self = this;
	var d = this.data, vars = this.vars;

	/* comment @136:5 */
	return 'testValue';
}; // @140:1

// commented func: commentedFunc @142:1

Person.prototype.renderBlockTest1 = function () { // @146:1
	var self = this;
	var d = this.data, vars = this.vars;

	// base call example

	Base.prototype.renderBlockTest1.call(this); // @148:5
}; // @149:1

Person.prototype.renderBlockTest2 = function (a) { // @151:1
	var self = this;
	var d = this.data, vars = this.vars;

	// parametrized base call example

	Base.prototype.renderBlockTest2.call(this, a, 1); // @153:5
}; // @154:1

return Person;

}));
