var inherits = require('util').inherits;

var tokens = require('../tokens');

var CommandParser = require('./core').CommandParser;


var Msg = function(ctx, commandName, commandStr) {
	CommandParser.call(this, ctx, commandName, commandStr);
};
inherits(Msg, CommandParser);

Msg.prototype.commandRegExp = /^\s*(.+)\s*$/;

Msg.prototype.parseMatched = function (match) {
	var arg1 = match[1];

	var nameExpr = null;
	var nameStr = null;
	var modifiers = null;

	if (!arg1)
	{
		throw this.createInvalidCommandSyntaxError();
	}
	nameExpr = arg1;

	return new tokens.Msg(this.ctx, nameExpr, nameStr, modifiers);
};


module.exports = Msg;
