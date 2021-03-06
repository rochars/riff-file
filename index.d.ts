// Type definitions for riff-file 1.0
// Project: https://github.com/rochars/riff-file
// Definitions by: Rafael S. Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/riff-file

export = riffFile;

declare module riffFile {

  class RIFFFile {

    /**
     * The container identifier.
     * @type {string}
     */
    container: string;

    /**
     * The main chunk size, in bytes.
     * @type {number}
     */
    chunkSize: number;

    /**
     * The format identifier.
     * @type {string}
     */
    format: string;

    /**
     * An object representing the signature of all chunks in the file.
     * @type {!Object<string, *>}
     */
    signature: object;

    /**
     * Read the signature of the chunks in a RIFF/RIFX file.
     * @param {!Uint8Array} bytes The buffer.
     */
    setSignature(bytes: Uint8Array): void;

    /**
     * Find a chunk by its fourCC_ in a array of RIFF chunks.
     * @param {string} chunkId The chunk fourCC_.
     * @param {boolean} multiple True if there may be multiple chunks
      *    with the same chunkId.
     * @return {Object}
     */
    findChunk(chunkId: string, multiple?: boolean): object;
  }
}