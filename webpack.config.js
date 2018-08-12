const webpack = require('webpack'),
      path = require('path'),
      SRC_DIR = path.resolve(__dirname, './src')
      BUILD_DIR = path.resolve(__dirname, './assets/js');

module.exports = {
  entry: {
    index: path.resolve(SRC_DIR, 'index.jsx')
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'url-loader?limit=8192'
        ]
      }
    ]
  }
};
