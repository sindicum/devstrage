const path = require("path");

module.exports = {
  // outputDir: '../docs',
  outputDir: path.resolve(__dirname, "../docs"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/devstrage/'
    : '/'
}

