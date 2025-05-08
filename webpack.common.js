const path = require('path');

module.exports = {
  entry: {
    app: './js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',     // Injects styles into <head> in dev
          'css-loader',       // Resolves @import and url()
          'postcss-loader',   // Processes Tailwind and other PostCSS plugins
        ],
      },
    ],
  },
};
