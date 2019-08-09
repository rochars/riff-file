/**
 * riff-file: https://github.com/rochars/riff-file
 * Copyright (c) 2019 Rafael da Silva Rocha. MIT License.
 *
 * Test reading RF64 files. The RF64 identifier is not supported by default
 * 
 */

const assert = require("assert");
const fs = require("fs");
const RIFFFile = require("../../test/loader.js");
const path = "./test/files/";

describe('RF64 reading, no changes to the list of supported containers', function() {
    
    it("Should thorw a error if reading a file that is not RIFF or RIFX", function () {
        assert.throws(function() {
            
            let wBytes = fs.readFileSync(path + "RF64-16bit-8kHz-stereo-reaper.wav");
            let wav = new RIFFFile();
            wav.setSignature(wBytes);

        }, /Not a supported format./);
    });
});

describe("RF64 reading, RF64 added to the list of supported containers", function() {
    
    let wBytes = fs.readFileSync(path + "RF64-16bit-8kHz-stereo-reaper.wav");
    let wav = new RIFFFile();
    wav.supported_containers.push('RF64');
    wav.setSignature(wBytes);

    it("chunkId should be 'RIFF'", function() {
        assert.equal(wav.container, "RF64");
    });
    it("format should be 'WAVE'", function() {
        assert.equal(wav.format, "WAVE");
    });
    it("chunkSize should be 310068", function() {
        assert.equal(wav.chunkSize, 310068);
    });
});
