/*
 * Copyright (c) 2019 Rafael da Silva Rocha.
 */

/**
 * @fileoverview rollup configuration file.
 * @see https://github.com/rochars/riff-file
 */

import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

// Read externs definitions
const fs = require('fs');
const polyfills = fs.readFileSync('./scripts/polyfills.js', 'utf8');

export default [
  // ES6/cjs bundle
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/riff-file.js',
        format: 'es'
      },
      {
        file: 'dist/riff-file.cjs.js',
        format: 'cjs'
      },
    ],
    plugins: [
      resolve(),
      commonjs()
    ]
  },
  // Main UMD dist
  {
    input: 'index.js',
    output: [
      {
        file: 'dist/riff-file.umd.js',
        name: 'RIFFFile',
        format: 'umd',
        banner: polyfills
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel(),
      terser({mangle: false})
    ]
  },
];
