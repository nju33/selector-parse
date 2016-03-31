import babel from 'rollup-plugin-babel';
const banner = `
/*!
 * Copyright 2016, nju33
 * Released under the MIT License
 * https://github.com/totora0155/selector-parse.js
 */
`;

export default {
  banner: banner.trim(),
  entry: 'lib/selector-parse.js',
  format: 'umd',
  dest: 'dist/selector-parse.js',
  moduleName: 'selectorParse',
  plugins: [
    babel()
  ]
};
