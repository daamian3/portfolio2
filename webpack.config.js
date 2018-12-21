const path = require('path');

module.exports = {
  mode: 'production',
  entry: './scripts/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}