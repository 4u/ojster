// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually

goog.provide('ojster.example.templates.Person');

goog.require('ojster.example.templates.Base');
goog.require('ojster.example.templates.Hobbies');

goog.scope(function() {

var Base = ojster.example.templates.Base;
var Hobbies = ojster.example.templates.Hobbies;

/** @constructor */
ojster.example.templates.Person = function() {
	Base.apply(this, arguments);
};
var Person = ojster.example.templates.Person;
goog.inherits(Person, Base);


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

Person.prototype.renderBlockMain = function() { // @27:1
	var self = this;
	var d = this.data, vars = this.vars;

    // TODO bad example, need 'init' function instead
    vars.score = this.calculateScore(d); // vars is right place for template-level variables
    Base.prototype.renderBlockMain.call(this);

}; // @33:1

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
		'(function() {\n    // TODO good for node, but bad for goog\n    var settings = ',
		JSON.stringify(this.ctx.pageSettings), // @44:20
		'; // inserting JSON unescaped\n    ojster.example.page.initPage(settings);\n})();</script>'
	);
}; // @48:1

Person.prototype.renderBlockContent = function() { // @50:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>Hello, '
	); // @51:17
	self.renderBlockFullName();
	self.writer.write(
		'!</div><div>Your score: ',
		self.escape(vars.score), // @52:22
		'</div><div>Your skills, '
	); // @53:23

	this.renderBlockFullName();

	self.writer.write(
		':</div>'
	); // @54:5

	this.renderBlockSkills();


	if (d.events && d.events.length) {

	self.writer.write(
		'<div>Your events:</div>'
	); // @57:9

	d.events.forEach(function(event) {

	self.renderBlockBeforeEvent();
	self.writer.write(
		'<div>',
		self.escape(event.Name), // @59:18
		'</div>'
	); // @60:13

	self.renderBlockAfterEvent(); // 'self' alias of 'this' can be used when needed


	});


	}


	// checking whitespaces compaction:

	self.writer.write(
		'<div>-', // @65:5
		' ',
		'-</div>' // @65:19
	); // @67:5

    // rendering other template in place:
    new Hobbies(this.ctx, d).renderTo(this);


	// possible but less effective:

	self.writer.write(
		new Hobbies(this.ctx, d).render() // @72:5
	);
}; // @73:1

Person.prototype.renderBlockFullName = function() { // @51:17
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		self.escape(d.firstName), // @51:40
		' ',
		self.escape(d.lastName) // @51:59
	);
}; // @51:76

Person.prototype.renderBlockBeforeEvent = function() { // @58:13
	var self = this;
	var d = this.data, vars = this.vars;
};

Person.prototype.renderBlockSkills = function() { // @75:1
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

	self.writer.write(
		'<div>',
		self.escape(skill.name), // @91:14
		': ',
		self.escape(skill.value), // @91:33
		'</div>'
	); // @92:1

    }

}; // @95:1

Person.prototype.renderBlockNoSkills = function() { // @97:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<div>You have no skills :(</div>'
	);
}; // @99:1

Person.prototype.renderBlockAfterEvent = function() { // @101:1
	var self = this;
	var d = this.data, vars = this.vars;
};

}); // goog.scope
