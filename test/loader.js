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
	riffFile = require('../dist/riff-file.js').RIFFFile;
	if (riffFile.toString().slice(0, 5) === "class") {
		throw new Error('RIFFFile in UMD dist should not be a ES6 class.');
	}

// Source
} else {
	console.log('Source tests');
	require = require("esm")(module);
	global.module = module;
	riffFile = require('../index.js').RIFFFile;
}

module.exports = riffFile;
