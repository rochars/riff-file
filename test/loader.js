/**
 * Copyright (c) 2019 Rafael da Silva Rocha.
 * https://github.com/rochars/riff-file
 *
 */

/**
 * @fileoverview riff-file test loader.
 *
 */

/** @type {Object} */
let riffFile;

// UMD
if (process.argv[4] == '--umd') {
	console.log('umd tests');
	riffFile = require('../dist/riff-file.umd.js');
	if (riffFile.toString().slice(0, 5) === "class") {
		throw new Error('RIFFFile in UMD dist should not be a ES6 class.');
	}

// ESM
} else if (process.argv[4] == '--esm') {
	console.log('esm tests');
	require = require("esm")(module);
	global.module = module;
	riffFile = require('../dist/riff-file.js').default;

// CJS
} else if (process.argv[4] == '--cjs') {
	console.log('cjs tests');
	require = require("esm")(module);
	global.module = module;
	riffFile = require('../dist/riff-file.cjs.js');

// Source
} else {
	console.log('Source tests');
	require = require("esm")(module);
	global.module = module;
	riffFile = require('../index.js').default;
}

module.exports = riffFile;
