// Type definitions for riff-file 0.0.1
// Project: https://github.com/rochars/riff-file
// Definitions by: Rafael S. Rocha <https://github.com/rochars>
// Definitions: https://github.com/rochars/riff-file

export default RIFFFile;

declare class RIFFFile {

  /**
   * The container identifier.
   * @type {string}
   */
  container: string;

  /**
   * The size of the main chunk.
   * @type {number}
   */
  chunkSize: number;

  /**
   * The format identifier.
   * @type {string}
   */
  format: string;

  /**
   * A object defining the start and end of all chunks in a wav buffer.
   * @type {!Object<string, *>}
   */
  signature: object;

  /**
   * Read the signature of the chunks in a RIFF/RIFX file.
   * @param {!Uint8Array} bytes The buffer.
   */
  setSignature(bytes: Uint8Array): void;

  /**
   * Change the bit depth of the samples.
   * @param {string} chunkId The chunk fourCC_.
   * @param {boolean} multiple True if there may be multiple chunks
    *    with the same chunkId.
   * @return {Object}
   */
  findChunk(chunkId: string, multiple?: boolean): void;
}
