/**
 * riff-file: https://github.com/rochars/riff-file
 * Copyright (c) 2019 Rafael da Silva Rocha. MIT License.
 *
 * Test reading 16-bit RIFF files with a LIST chunk.
 * 
 */

const assert = require("assert");
const fs = require("fs");
const RIFFFile = require("../../test/loader.js");
const path = "./test/files/";

describe("16-bit RIFX reading", function() {
    
    let wBytes = fs.readFileSync(path + "M1F1-int12WE-AFsp-NEW-TAGS.wav");
    let wav = new RIFFFile();
    wav.setSignature(wBytes);

    it("chunkId should be 'RIFF'", function() {
        assert.equal(wav.container, "RIFF");
    });
    it("format should be 'WAVE'", function() {
        assert.equal(wav.format, "WAVE");
    });
    it("chunkSize should be 94272", function() {
        assert.equal(wav.chunkSize, 94272);
    });
});
