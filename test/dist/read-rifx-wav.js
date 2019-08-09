/**
 * riff-file: https://github.com/rochars/riff-file
 * Copyright (c) 2019 Rafael da Silva Rocha. MIT License.
 *
 * Test reading 16-bit RIFX WAVE files.
 * 
 */

const assert = require("assert");
const fs = require("fs");
const RIFFFile = require("../../test/loader.js");
const path = "./test/files/";

describe("16-bit RIFX reading", function() {
    
    let wBytes = fs.readFileSync(path + "RIFX-16bit-mono.wav");
    let wav = new RIFFFile();
    wav.setSignature(wBytes);

    it("chunkId should be 'RIFF'", function() {
        assert.equal(wav.container, "RIFX");
    });
    it("format should be 'WAVE'", function() {
        assert.equal(wav.format, "WAVE");
    });
    it("chunkSize should be 96036", function() {
        assert.equal(wav.chunkSize, 96036);
    });
});
