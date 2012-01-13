// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually

goog.provide('ojster.example.templates.Person');

goog.require('ojster.example.templates.Base');
goog.require('ojster.example.templates.Hobbies');

goog.require('ojster.example.templates.Tools.SomeTool');
goog.require('ojster.example.templates.Tools.SomeOtherTool');

goog.scope(function() {

var Base = ojster.example.templates.Base;
var Hobbies = ojster.example.templates.Hobbies;
var SomeTool = ojster.example.templates.Tools.SomeTool;
var SomeOtherTool = ojster.example.templates.Tools.SomeOtherTool;

/**
 * @param {Object=} opt_data
 * @param {Object=} opt_ctx
 * @param {Object=} opt_writer
 * @constructor
 * @extends {Base}
 */
ojster.example.templates.Person = function(opt_data, opt_ctx, opt_writer) {
	goog.base(this, opt_data, opt_ctx, opt_writer);
};
var Person = ojster.example.templates.Person;
goog.inherits(Person, Base);

/* @init {
	self.baseCssName = 'basecss';
*/ //@init }


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

Person.prototype.renderBlockMain = function() { // @34:1
	var self = this;
	var d = this.data, vars = this.vars;

	// TODO bad example, need 'init' function instead
	vars.score = this.calculateScore(d); // vars is right place for template-level variables

	goog.base(this, 'renderBlockMain'); // @39:5
}; // @40:1

// code could be here too, almost anywhere

Person.prototype.renderBlockTitle = function() { // @44:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'Person #',
		self.escape(d.id) // @44:29
	);
}; // @44:40

Person.prototype.renderBlockScript = function() { // @46:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<script>'
	); // @48:1

	// seems like jslint tries to check code within 'script' tags even if it's part of string constant, so avoid it

	self.writer.write(
		'(function() {\n\t// TODO good for node, but bad for goog\n\tvar settings = ',
		JSON.stringify(this.ctx.pageSettings), // @51:20
		'; // inserting JSON unescaped\n\tojster.example.page.initPage(settings);\n})();</script>'
	);
}; // @55:1

Person.prototype.renderBlockContent = function() { // @57:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<span class="',
		self.baseCssName, // @58:18
		'">base css</span><br /><span class="',
		goog.getCssName('abc'), // @59:18
		'">\'abc\'</span><br /><span class="',
		goog.getCssName(d.css, 'abc'), // @60:18
		'">d.css with \'abc\'</span><br /><span class="',
		goog.getCssName(self.baseCssName, 'abc'), // @61:18
		'">base with \'abc\'</span><br /><br /><span>A</span><span>B</span>',
		' ',
		'<span>C</span><br />'
	); // @66:5
	self.renderBlockEcho('Hey there!'); // @66:5
	self.writer.write(
		'<div>Hello, '
	); // @67:17
	self.renderBlockFullName(); // @67:17
	self.writer.write(
		'!</div><div>Your score: ',
		self.escape(vars.score), // @68:22
		'</div><div>Your skills:</div>'
	); // @70:5
	self.renderBlockSkills(); // @70:5

	if (d.events && d.events.length) {

	self.writer.write(
		'<div>Your events:</div>'
	); // @73:9

	d.events.forEach(function(event) {

	self.renderBlockBeforeEvent(); // @74:13
	self.writer.write(
		'<div>',
		self.escape(event.Name), // @75:18
		'</div>'
	); // @76:13
	self.renderBlockAfterEvent(); // @76:13

	});


	}


	// checking whitespaces compaction:

	self.writer.write(
		'<div>-', // @81:5
		' ',
		'-</div>' // @81:19
	); // @83:5
	new Hobbies(d, this.ctx).renderTo(self); // @83:5
	new SomeTool(d).renderTo(self); // @85:5

	/* @insert SomeTool(d) { self.baseCssName = 'basecss1'; } */

	new SomeOtherTool(d).renderTo(self); // @86:5
}; // @87:1

Person.prototype.renderBlockFullName = function() { // @67:17
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(d.firstName), // @67:40
		' ',
		self.escape(d.lastName) // @67:59
	);
}; // @67:76

Person.prototype.renderBlockBeforeEvent = function() { // @74:13
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.renderBlockEcho = function(msg) { // @89:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(msg) // @90:5
	);
}; // @91:1

Person.prototype.renderBlockSkills = function() { // @93:1
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

	self.renderBlockParametrized(i, l, skill); // @109:9
	self.writer.write(
		'<div>',
		self.escape(skill.name), // @112:14
		': ',
		self.escape(skill.value), // @112:33
		'</div>'
	); // @113:1

	}

}; // @116:1

Person.prototype.renderBlockParametrized = function(i, l, skill) { // @109:9
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>',
		self.escape(i + 1), // @110:18
		' of ',
		self.escape(l), // @110:34
		' is &quot;',
		self.escape(skill.name), // @110:52
		'&quot;</div>'
	);
}; // @111:9

Person.prototype.renderBlockNoSkills = function() { // @118:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>You have no skills :(</div>'
	);
}; // @120:1

Person.prototype.renderBlockAfterEvent = function() { // @122:1
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.testFunc = function() { // @124:1
	var self = this;
	var d = this.data, vars = this.vars;

	return 'testValue';
}; // @126:1

Person.testStaticFunc = function() { // @128:1
	var self = this;
	var d = this.data, vars = this.vars;

	return 'testValue';
}; // @130:1

}); // goog.scope
