// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually

var inherits = require('util').inherits;
var Base = require('./base');
var Hobbies = require('./hobbies');

var SomeTool = require('./tools').SomeTool;
var SomeOtherTool = require('./tools').SomeOtherTool;

var Person = function() {
	Base.apply(this, arguments);
};
inherits(Person, Base);


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

Person.prototype.renderBlockMain = function() { // @30:1
	var self = this;
	var d = this.data, vars = this.vars;

	// TODO bad example, need 'init' function instead
	vars.score = this.calculateScore(d); // vars is right place for template-level variables

	Base.prototype.renderBlockMain.call(self); // @35:2
}; // @36:1

// code could be here too, almost anywhere

Person.prototype.renderBlockTitle = function() { // @40:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'Person #',
		self.escape(d.id) // @40:29
	);
}; // @40:40

Person.prototype.renderBlockScript = function() { // @42:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<script>'
	); // @44:1

	// seems like jslint tries to check code within 'script' tags even if it's part of string constant, so avoid it

	self.writer.write(
		'(function() {\n\t// TODO good for node, but bad for goog\n\tvar settings = ',
		JSON.stringify(this.ctx.pageSettings), // @47:17
		'; // inserting JSON unescaped\n\tojster.example.page.initPage(settings);\n})();</script>'
	);
}; // @51:1

Person.prototype.renderBlockContent = function() { // @53:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<span class="',
		self.baseCssName, // @54:15
		'">no args</span><br /><span class="',
		self.getCssName('abc'), // @55:15
		'">abc</span><br /><span class="',
		self.getCssName(d.css, 'abc'), // @56:15
		'">d.css abc</span><br /><span class="',
		self.getCssName(self.baseCssName, 'abc'), // @57:15
		'">+abc</span><br /><br /><span>A</span><span>B</span>',
		' ',
		'<span>C</span><br />'
	); // @62:2
	self.renderBlockEcho('Hey there!'); // @62:2
	self.writer.write(
		'<div>Hello, '
	); // @63:14
	self.renderBlockFullName(); // @63:14
	self.writer.write(
		'!</div><div>Your score: ',
		self.escape(vars.score), // @64:19
		'</div><div>Your skills:</div>'
	); // @66:2
	self.renderBlockSkills(); // @66:2

	if (d.events && d.events.length) {

	self.writer.write(
		'<div>Your events:</div>'
	); // @69:3

	d.events.forEach(function(event) {

	self.renderBlockBeforeEvent(); // @70:4
	self.writer.write(
		'<div>',
		self.escape(event.Name), // @71:9
		'</div>'
	); // @72:4
	self.renderBlockAfterEvent(); // @72:4

	});


	}


	// checking whitespaces compaction:

	self.writer.write(
		'<div>-', // @77:2
		' ',
		'-</div>' // @77:16
	); // @79:2
	new Hobbies(d, this.ctx).renderTo(self); // @79:2
	new SomeTool(d).renderTo(self); // @81:2
	new SomeOtherTool(d).renderTo(self); // @82:2
}; // @83:1

Person.prototype.renderBlockFullName = function() { // @63:14
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(d.firstName), // @63:37
		' ',
		self.escape(d.lastName) // @63:56
	);
}; // @63:73

Person.prototype.renderBlockBeforeEvent = function() { // @70:4
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.renderBlockEcho = function(msg) { // @85:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(msg) // @86:2
	);
}; // @87:1

Person.prototype.renderBlockSkills = function() { // @89:1
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

	self.renderBlockParametrized(i, l, skill); // @105:3
	self.writer.write(
		'<div>',
		self.escape(skill.name), // @108:8
		': ',
		self.escape(skill.value), // @108:27
		'</div>'
	); // @109:1

	}

}; // @112:1

Person.prototype.renderBlockParametrized = function(i, l, skill) { // @105:3
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>',
		self.escape(i), // @106:9
		' of ',
		self.escape(l), // @106:21
		' is &quot;',
		self.escape(skill.name), // @106:39
		'&quot;</div>'
	);
}; // @107:3

Person.prototype.renderBlockNoSkills = function() { // @114:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>You have no skills :(</div>'
	);
}; // @116:1

Person.prototype.renderBlockAfterEvent = function() { // @118:1
	var self = this;
	var d = this.data, vars = this.vars;
};

module.exports = Person;
