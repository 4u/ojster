"use strict";
var ops = require('ops');
var Template = require('./template');
var defaultOptions = require('./options');
var errors = require('./errors');


var Generator = function (options) {
	this.options = ops.cloneWithDefaults(options, this.getDefaultOptions());

	this.requirements = [];

	this.templates = [];
	this.currentTemplate = null;

	this.buffers = [];
	this.buffer = null;

	this.isStarted = false;
	this.isFinished = false;
};

Generator.prototype.getDefaultOptions = function () {
	return defaultOptions;
};

Generator.prototype.createTemplate = function (token) {
	return new Template(this, token);
};

// lifecycle

Generator.prototype.start = function () {
	this.buffer = this.appendBuffer();
	this.appendIntro();

	this.onStart();
	this.isStarted = true;
};

Generator.prototype.onStart = function () {
};

Generator.prototype.end = function () {
	if (this.currentTemplate != null) {
		this.currentTemplate.end();
	}
	else {
		throw new errors.TemplateTokenNotFound();
	}

	this.onEnd();
	this.isFinished = true;
};

Generator.prototype.onEnd = function () {
};

Generator.prototype.getResult = function () {
	if (!this.isFinished) {
		this.end();
	}
	return this.joinBuffers();
};

// checks

Generator.prototype.ensureTokenWithinTemplate = function (token) {
	if (this.currentTemplate == null) {
		throw new errors.TokenMustBeWithinTemplate(token);
	}
};

Generator.prototype.ensureTokenBeyondTemplate = function (token) {
	if (this.currentTemplate != null) {
		throw new errors.TokenMustBeBeyondTemplate(token);
	}
};

// global tokens

Generator.prototype.onRequireToken = function (token) {
	this.ensureTokenBeyondTemplate(token);

	this.requirements.push(token);
	this.appendRequire(token);
};

Generator.prototype.onCodeToken = function (token) {
	if (this.currentTemplate != null) {
		this.currentTemplate.onCodeToken(token);
	}
	else {
		this.appendCode(token);
	}
};

Generator.prototype.onFragmentToken = function (token) {
	if (this.currentTemplate != null) {
		this.currentTemplate.onFragmentToken(token);
	}
	else if (this.options.nonBlockFragmentsAreCode) {
		this.appendFragmentAsCode(token);
	}
	else if (token.fragment.match(/\S/)) {
		throw new errors.TokenMustBeWithinBlock(token);
	}
};

// template level tokens

Generator.prototype.onTemplateToken = function (token) {
	if (this.currentTemplate != null) {
		// end previous template before start new one
		this.currentTemplate.end();
	}

	var template = this.createTemplate(token);
	template.start();
};

Generator.prototype.onInheritsToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onInheritsToken(token);
};

// function and block tokens

Generator.prototype.onBaseToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onBaseToken(token);
};

// function tokens

Generator.prototype.onFunctionStartToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onFunctionStartToken(token);
};

Generator.prototype.onFunctionEndToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onFunctionEndToken(token);
};

// block tokens

Generator.prototype.onBlockStartToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onBlockStartToken(token);
};

Generator.prototype.onBlockEndToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onBlockEndToken(token);
};

// within block tokens

Generator.prototype.onBlockCallToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onBlockCallToken(token);
};

Generator.prototype.onInsertTemplateToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onInsertTemplateToken(token);
};

Generator.prototype.onExpressionToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onExpressionToken(token);
};

Generator.prototype.onCssToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onCssToken(token);
};

Generator.prototype.onMsgToken = function(token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onMsgToken(token);
};

Generator.prototype.onSpaceToken = function (token) {
	this.ensureTokenWithinTemplate(token);
	this.currentTemplate.onSpaceToken(token);
};

// events

Generator.prototype.onToken = function (token) {
	if (!this.isStarted) {
		this.start();
	}
	token.visitGenerator(this);
};

Generator.prototype.onTemplateStart = function (template) {
	this.templates.push(template);
	this.currentTemplate = template;
};

Generator.prototype.onTemplateEnd = function (template) {
	this.currentTemplate = null;
};

// append for tokens

Generator.prototype.appendRequire = function (token) {
	this.buffer.push(
		'var ', token.alias, ' = require(', token.path, ')'
	);
	if (token.subpath) {
		this.buffer.push(
			'.', token.subpath
		);
	}
	this.buffer.push(';');

	if (this.options.appendLineNumbersFor.require) {
		this.appendLineNumber(token.ctx);
	}
};

Generator.prototype.appendFragmentAsCode = function (token, opt_buffer) {
	var buffer = opt_buffer || this.buffer;
	var code = token.fragment;

	buffer.push(code);
};

Generator.prototype.appendCode = function (token, opt_buffer, opt_blockStyle) {
	var buffer = opt_buffer || this.buffer;
	var code = token.code;

	var isSingleLine = (code.search(/[\r\n]/) == -1);
	if (isSingleLine) {
		code = code.trim();
		if (opt_blockStyle) {
			buffer.push('\n', this.options.indentStr);
		}
	}
	else {
		code = this.removeTrailingSpaces(code);
	}

	buffer.push(code);

	if (opt_blockStyle) {
		if (isSingleLine) {
			if (this.options.appendLineNumbersFor.oneLineCodeFragment) {
				this.appendLineNumber(token.ctx, opt_buffer);
			}
			buffer.push('\n');
		}
		buffer.push('\n');
	}
};

// utility append

Generator.prototype.appendIntro = function () {
	if (this.options.intro) {
		this.buffer.push(this.options.intro);
	}
};

Generator.prototype.appendUseStrict = function () {
	if (this.options.useStrict) {
		this.buffer.push('"use strict";\n');
	}
};

Generator.prototype.appendLineNumber = function (ctx, opt_buffer) {
	if (ctx != null) {
		var buffer = opt_buffer || this.buffer;
		buffer.push(' // @', ctx.lineNumber, ':', ctx.linePos);
	}
};

// string utilities

Generator.prototype.removeTrailingSpaces = function (code) {
	return code.replace(/[\ \t]+$/g, '');
};

// buffers

Generator.prototype.reserveBuffer = function () {
	var buffer = this.appendBuffer();
	this.buffer = this.appendBuffer();
	return buffer;
};

Generator.prototype.appendBuffer = function () {
	var buffer = this.createBuffer();
	this.buffers.push(buffer);
	return buffer;
};

Generator.prototype.createBuffer = function () {
	return [];
};

Generator.prototype.joinBuffers = function () {
	return Array.prototype.concat.apply([], this.buffers).join('');
};

module.exports = Generator;
