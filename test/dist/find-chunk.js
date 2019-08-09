/**
 * riff-file: https://github.com/rochars/riff-file
 * Copyright (c) 2019 Rafael da Silva Rocha. MIT License.
 *
 * Test the findChunk method.
 * 
 */

const assert = require("assert");
const fs = require("fs");
const RIFFFile = require("../../test/loader.js");
const path = "./test/files/";

describe("findChunk on a 16-bit wav file", function() {
    
    let wBytes = fs.readFileSync(path + "16-bit-8kHz-noBext-mono.wav");
    let wav = new RIFFFile();
    wav.setSignature(wBytes);

    it("should return a object if the chunk exists", function() {
        assert.notEqual(wav.findChunk('data'), null);
    });

    it("should return null if the chunk does not exist", function() {
        assert.equal(wav.findChunk('error'), null);
    });

    it("should return null if the chunk does not exist (LIST)", function() {
        assert.equal(wav.findChunk('LIST'), null);
    });
});

describe("findChunk finding a LIST chunk", function() {
    
    let wBytes = fs.readFileSync(path + "M1F1-int12WE-AFsp-NEW-TAGS.wav");
    let wav = new RIFFFile();
    wav.setSignature(wBytes);

    it("should return a object if the chunk exists'", function() {
        assert.notEqual(wav.findChunk('LIST', true), null);
    });
});