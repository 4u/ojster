
goog.provide('ojster.example.Base');

goog.require('ojster.Template');
ojster.example.Base = function() {
	ojster.Template.apply(this, arguments);
};
goog.inherits(ojster.example.Base, ojster.Template);

ojster.example.Base.prototype.renderBlockMain = function() { // @3:1
	var self = this;
	var d = this.data, vars = this.vars;
	self.writer.write(
		'<!DOCTYPE HTML><html><head>'
	); // @7:1
	self.renderBlockMeta();
	self.writer.write(
		'<title>'
	); // @8:8
	self.renderBlockTitle();
	self.writer.write(
		'</title>'
	); // @9:1
	self.renderBlockCss();
	self.renderBlockScript();
	self.writer.write(
		'</head><body>'
	); // @12:7
	self.renderBlockContent();
	self.writer.write(
		'</body></html>'
	);
	return this;
}; // @14:1

ojster.example.Base.prototype.renderBlockMeta = function() { // @7:1
	var self = this;
	var d = this.data, vars = this.vars;
	return this;
};

ojster.example.Base.prototype.renderBlockTitle = function() { // @8:8
	var self = this;
	var d = this.data, vars = this.vars;
	return this;
};

ojster.example.Base.prototype.renderBlockCss = function() { // @9:1
	var self = this;
	var d = this.data, vars = this.vars;
	return this;
};

ojster.example.Base.prototype.renderBlockScript = function() { // @10:1
	var self = this;
	var d = this.data, vars = this.vars;
	return this;
};

ojster.example.Base.prototype.renderBlockContent = function() { // @12:7
	var self = this;
	var d = this.data, vars = this.vars;
	return this;
};
