/**
 * riff-file: https://github.com/rochars/riff-file
 * Copyright (c) 2019 Rafael da Silva Rocha. MIT License.
 *
 * Test the findChunk method.
 * 
 */

var assert = assert || require('assert');
var RIFFFile = RIFFFile || require('../loader.js');
const path = "./test/files/";

describe("Create a RIFFFile instance", function() {
    
    let wav = new RIFFFile();

    it("should not be null or false", function() {
        assert.ok(wav);
    });
    it("should have a 'container' property", function() {
        assert.ok(wav.hasOwnProperty('container'));
    });
    it("should have a 'chunkSize' property", function() {
        assert.ok(wav.hasOwnProperty('chunkSize'));
    });
    it("should have a 'format' property", function() {
        assert.ok(wav.hasOwnProperty('format'));
    });
    it("should have a 'signature' property", function() {
        assert.ok(wav.hasOwnProperty('signature'));
    });
});