# riff-file
Copyright (c) 2019 Rafael da Silva Rocha.  
https://github.com/rochars/riff-file

[![NPM version](https://img.shields.io/npm/v/riff-file.svg?style=for-the-badge)](https://www.npmjs.com/package/riff-file) [![Docs](https://img.shields.io/badge/API-docs-blue.svg?style=for-the-badge)](https://rochars.github.io/riff-file/docs) [![Tests](https://img.shields.io/badge/tests-online-blue.svg?style=for-the-badge)](https://rochars.github.io/riff-file/test/browser.html)  
[![Codecov](https://img.shields.io/codecov/c/github/rochars/riff-file.svg?style=flat-square)](https://codecov.io/gh/rochars/riff-file) [![Unix Build](https://img.shields.io/travis/rochars/riff-file.svg?style=flat-square)](https://travis-ci.org/rochars/riff-file) [![Windows Build](https://img.shields.io/appveyor/ci/rochars/riff-file.svg?style=flat-square&logo=appveyor)](https://ci.appveyor.com/project/rochars/riff-file) [![Scrutinizer](https://img.shields.io/scrutinizer/g/rochars/riff-file.svg?style=flat-square&logo=scrutinizer)](https://scrutinizer-ci.com/g/rochars/riff-file/)


Read data from RIFF files.

- **MIT licensed**
- **Use it in the browser**
- **Use it with Node.js**

## Install
```
npm install riff-file
```

## API

### The RIFFFile methods
```javascript
/**
 * Read the signature of the chunks in a RIFF/RIFX file.
 * @param {!Uint8Array} buffer The file bytes.
 */
RIFFFile.fromBuffer = function(buffer) {};

/**
 * Find a chunk by its fourCC_ in a array of RIFF chunks.
 * @param {string} chunkId The chunk fourCC_.
 * @param {boolean} multiple True if there may be multiple chunks
 *    with the same chunkId.
 * @return {Object}
 */
RIFFFile.toBitDepth = function(chunkId, multiple=false) {};
```

### The RIFFFile properties
```javascript
/**
 * The container identifier.
 * @type {string}
 */
RIFFFile.container = '';
/**
 * @type {number}
 */
RIFFFile.chunkSize = 0;
/**
 * The format.
 * Always WAVE.
 * @type {string}
 */
RIFFFile.format = '';
/**
 * A object defining the start and end of all chunks in a wav buffer.
 * @type {!Object<string, *>}
 */
RIFFFile.junk = {
  /** @type {string} */
  chunkId: '',
  /** @type {number} */
  chunkSize: 0,
  /** @type {string} */
  format: '',
  /** @type {!Array<Object>} */
  subChunks: []
};
```

## Contributing to riff-file
**riff-file** welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small and all contributions are valued.

See [CONTRIBUTING.md](https://github.com/rochars/riff-file/blob/master/CONTRIBUTING.md) for details.

### Style guide
**riff-file** code should follow the Google JavaScript Style Guide:  
https://google.github.io/styleguide/jsguide.html

### Code of conduct
This project is bound by a Code of Conduct: The [Contributor Covenant, version 1.4](https://github.com/rochars/riff-file/blob/master/CODE_OF_CONDUCT.md), also available at https://www.contributor-covenant.org/version/1/4/code-of-conduct.html


### LICENSE
Copyright (c) 2019 Rafael da Silva Rocha.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
