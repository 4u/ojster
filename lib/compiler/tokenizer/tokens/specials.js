"use strict";
var inherits = require('util').inherits;
var Token = require('./core').Token;

var Css = function (ctx, nameExpr, nameStr, modifiers) {
	this.ctx = ctx;
	this.nameExpr = nameExpr;
	this.nameStr = nameStr;
	this.modifiers = modifiers;
};
inherits(Css, Token);

Css.prototype.visitGenerator = function (generator) {
	generator.onCssToken(this);
};

var Msg = function (ctx, nameExpr, nameStr, modifiers) {
	this.ctx = ctx;
	this.nameExpr = nameExpr;
	this.nameStr = nameStr;
	this.modifiers = modifiers;
};
inherits(Msg, Token);

Msg.prototype.visitGenerator = function (generator) {
	generator.onMsgToken(this);
};


module.exports = {
	Css: Css,
	Msg: Msg
};
