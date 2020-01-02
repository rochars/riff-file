/*
 * Copyright (c) 2019 Rafael da Silva Rocha.
 */

/**
 * @fileoverview TypeScript declaration tests.
 * @see https://github.com/rochars/riff-file
 */

import { RIFFFile } from '../../index.js';

let wav = new RIFFFile();

//try {
//	wav.setSignature(new Uint8Array([0,0,0,0,0,0,0,0,0,0,0]));
//} catch (e) {
//}

//console.log(wav.findChunk('data') === null);