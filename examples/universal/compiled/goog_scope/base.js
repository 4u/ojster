// Content below is autogenerated by ojster template engine
// usually there is no reason to edit it manually

goog.provide('ojster.example.Base');

// universal templates must provide both aliases and fully qualified names

// @require also needs path to library for node
goog.require('ojster'); // normally path will be just 'ojster'

ojster.example.Base = function() {
	ojster.Template.apply(this, arguments);
};
goog.inherits(ojster.example.Base, ojster.Template);


// aliases can be used only if you are planning to compile with goog.scope enabled
// else there is no way to introduce them without poluting global

// variables defined outside of blocks will become global if goog.scope is not enabled
// the same is true for functions

// on the other hand, fully qualified names also cannot be used,
// because node knows nothing about them

// so, enabling goog.scope can sometimes be the only way to get trully universal template


ojster.example.Base.prototype.renderBlockMain = function() { // @22:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<!DOCTYPE HTML><html><head>'
	); // @26:1
	self.renderBlockMeta();
	self.writer.write(
		'<title>'
	); // @27:8
	self.renderBlockTitle();
	self.writer.write(
		'</title>'
	); // @28:1
	self.renderBlockCss();
	self.renderBlockScript();
	self.writer.write(
		'</head><body>'
	); // @31:7
	self.renderBlockContent();
	self.writer.write(
		'</body></html>'
	);
}; // @33:1

ojster.example.Base.prototype.renderBlockMeta = function() { // @26:1
	var self = this;
	var d = this.data, vars = this.vars;
};

ojster.example.Base.prototype.renderBlockTitle = function() { // @27:8
	var self = this;
	var d = this.data, vars = this.vars;
};

ojster.example.Base.prototype.renderBlockCss = function() { // @28:1
	var self = this;
	var d = this.data, vars = this.vars;
};

ojster.example.Base.prototype.renderBlockScript = function() { // @29:1
	var self = this;
	var d = this.data, vars = this.vars;
};

ojster.example.Base.prototype.renderBlockContent = function() { // @31:7
	var self = this;
	var d = this.data, vars = this.vars;
};

