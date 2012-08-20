// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually

var inherits = require('util').inherits;
var Base = require('./base');
var Hobbies = require('./hobbies');

var SomeTool = require('./tools').SomeTool;
var SomeOtherTool = require('./tools').SomeOtherTool;

var Person = function(opt_data, opt_ctx, opt_writer) {
	Base.call(this, opt_data, opt_ctx, opt_writer);
};
inherits(Person, Base);

Person.prototype.init = function() { // @10:1
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
};


// but beyond blocks code can be inserted just plain
Person.prototype.calculateScore = function(person) {
	return twistScore(person.score);
};

// code could be here too, almost anywhere

Person.prototype.renderBlockTitle = function() { // @37:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'Person #',
		self.escape(d.id) // @37:29
	);
}; // @37:40

Person.prototype.renderBlockScript = function() { // @39:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<script>'
	); // @41:1

	// seems like jslint tries to check code within 'script' tags even if it's part of string constant, so avoid it

	self.writer.write(
		'(function() {\n\t// TODO good for node, but bad for goog\n\tvar settings = ',
		JSON.stringify(this.ctx.pageSettings), // @44:20
		'; // inserting JSON unescaped\n\tojster.example.page.initPage(settings);\n})();</script>'
	);
}; // @48:1

Person.prototype.renderBlockContent = function() { // @50:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<span class="',
		self.baseCssName, // @51:18
		'">base css</span><br /><span class="',
		self.getCssName('abc'), // @52:18
		'">\'abc\'</span><br /><span class="',
		self.getCssName(d.css, 'abc'), // @53:18
		'">d.css with \'abc\'</span><br /><span class="',
		self.getCssName(self.baseCssName, 'abc'), // @54:18
		'">base with \'abc\'</span><br /><br /><span>A</span><span>B</span>',
		' ',
		'<span>C</span><br />'
	); // @59:5
	self.renderBlockEcho('Hey there!'); // @59:5
	self.writer.write(
		'<div>Hello, '
	); // @60:17
	self.renderBlockFullName(); // @60:17
	self.writer.write(
		'!</div><div>Your score: ',
		self.escape(vars.score), // @61:22
		'</div><div>Your skills:</div>'
	); // @63:5
	self.renderBlockSkills(); // @63:5

	if (d.events && d.events.length) {

	self.writer.write(
		'<div>Your events:</div>'
	); // @66:9

	d.events.forEach(function(event) {

	self.renderBlockBeforeEvent(); // @67:13
	self.writer.write(
		'<div>',
		self.escape(event.Name), // @68:18
		'</div>'
	); // @69:13
	self.renderBlockAfterEvent(); // @69:13

	});


	}


	// checking whitespaces compaction:

	self.writer.write(
		'<div>-', // @74:5
		' ',
		'-</div>' // @74:19
	); // @76:5
	new Hobbies(d, this.ctx).renderTo(self); // @76:5
	new SomeTool(d).setup(function() { var d = this.data, vars = this.vars;
		this.baseCssName = 'basecss1';
	}).renderTo(self); // @78:5
	new SomeOtherTool({
			parentData: d,
			someMoreData: 5
		}).renderTo(self); // @81:5
}; // @85:1

Person.prototype.renderBlockFullName = function() { // @60:17
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(d.firstName), // @60:40
		' ',
		self.escape(d.lastName) // @60:59
	);
}; // @60:76

Person.prototype.renderBlockBeforeEvent = function() { // @67:13
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.renderBlockEcho = function(msg) { // @87:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(msg) // @88:5
	);
}; // @89:1

Person.prototype.renderBlockSkills = function() { // @91:1
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

	self.renderBlockParametrized(i, l, skill); // @107:9
	self.writer.write(
		'<div>',
		self.escape(skill.name), // @110:14
		': ',
		self.escape(skill.value), // @110:33
		'</div>'
	); // @111:1

	}

}; // @114:1

Person.prototype.renderBlockParametrized = function(i, l, skill) { // @107:9
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>',
		self.escape(i + 1), // @108:18
		' of ',
		self.escape(l), // @108:34
		' is &quot;',
		self.escape(skill.name), // @108:52
		'&quot;</div>'
	);
}; // @109:9

Person.prototype.renderBlockNoSkills = function() { // @116:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>You have no skills :(</div>'
	);
}; // @118:1

Person.prototype.renderBlockAfterEvent = function() { // @120:1
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.testFunc = function() { // @122:1
	var self = this;
	var d = this.data, vars = this.vars;

	return 'testValue';
}; // @124:1

module.exports = Person;
