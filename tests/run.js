#!/usr/bin/env node

var yaml = require('js-yaml');
var editor = require('..').edit;
var assert = require('assert');
var fs = require('fs');

fs.readdirSync('resources').forEach(function(file) {
	console.log('running', file);
	var data = fs.readFileSync('yaml-editor/'+file, 'utf8').split('---\n');
	assert(data.length === 2);
	editor(data[0], JSON.stringify(yaml.safeLoad(data[1])), data[1]);
});

