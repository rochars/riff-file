/*
 * Copyright (c) 2020 Rafael da Silva Rocha.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * @fileoverview Externs for riff-file 1.0
 * @see https://github.com/rochars/riff-file
 * @externs
 */

// riffFile module
var riffFile = {};

// RIFFFile class
var RIFFFile = {};

/**
 * The container identifier.
 * 'RIFF', 'RIFX' and 'RF64' are supported.
 * @type {string}
 */
RIFFFile.prototype.container = '';

/**
 * The main chunk size, in bytes.
 * @type {number}
 */
RIFFFile.prototype.chunkSize = 0;

/**
 * The format identifier.
 * @type {string}
 */
RIFFFile.prototype.format = '';

/**
 * An object representing the signature of all chunks in the file.
 * @type {{
  chunkId: string,
  chunkSize: number,
  format: string,
  chunkData: {start: number, end: number},
  subChunks: Array
  }|null}
 */
RIFFFile.prototype.signature = null;

/**
 * @type {number}
 * @protected
 */
RIFFFile.prototype.head = 0;

/**
 * @type {
  {bits: number, be: boolean, signed: boolean, fp: boolean}
 }
 * @protected
 */
RIFFFile.prototype.uInt32 = { bits: 32, be: false, signed: false, fp: false };

/**
 * The list of supported containers.
 * Any format different from RIFX will be treated as RIFF.
 * @type {!Array<string>}
 * @protected
 */
RIFFFile.prototype.supported_containers = ['RIFF', 'RIFX'];

/**
 * Read the signature of the chunks in a RIFF/RIFX file.
 * @param {!Uint8Array} buffer The file bytes.
 * @protected
 */
RIFFFile.prototype.setSignature = function(buffer) {};

/**
  * Find a chunk by its fourCC_ in a array of RIFF chunks.
  * @param {string} chunkId The chunk fourCC_.
  * @param {boolean} multiple True if there may be multiple chunks
  *    with the same chunkId.
  * @return {Object}
  * @protected
  */
RIFFFile.prototype.findChunk = function(chunkId, multiple=false) {};

/**
 * Read bytes as a string from a RIFF chunk.
 * @param {!Uint8Array} bytes The bytes.
 * @param {number} maxSize the max size of the string.
 * @return {string} The string.
 * @protected
 */
RIFFFile.prototype.readString = function(bytes, maxSize) {};

/**
 * Read a number from a chunk.
 * @param {!Uint8Array} bytes The chunk bytes.
 * @return {number} The number.
 * @protected
 */
RIFFFile.prototype.readUInt32 = function(bytes) {};
