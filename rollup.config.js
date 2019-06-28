const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  external: ['react'],
  output: {format: 'cjs', file: 'dist/index.js'},
  plugins: [babel()]
};
