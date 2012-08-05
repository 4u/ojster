var inherits = require('util').inherits;

var tokens = require('../tokens');

var CommandParser = require('./core').CommandParser;


var Msg = function(ctx, commandName, commandStr) {
	CommandParser.call(this, ctx, commandName, commandStr);
};
inherits(Msg, CommandParser);

Msg.prototype.commandRegExp = /^\s*(\S+) ({[\s\S]*})?\s*$/;

Msg.prototype.parseMatched = function (match) {
	var arg1 = match[1];
	var arg2 = match[2];

	var nameExpr = null;
	var nameStr = null;
	var modifiers = null;

	if (!arg1)
	{
		throw this.createInvalidCommandSyntaxError();
	}
	nameExpr = arg1;
	nameStr = arg2;

	return new tokens.Msg(this.ctx, nameExpr, nameStr, modifiers);
};


module.exports = Msg;
