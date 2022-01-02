const postcssNested = require('postcss-nested');
const autoprefix = require('autoprefixer');
const calc = require('postcss-calc');
const mixins = require('postcss-mixins');

module.exports = {
  plugins: [postcssNested(), autoprefix(), calc(), mixins()],
};
