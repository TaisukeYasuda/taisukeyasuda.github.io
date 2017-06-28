var webpack = require('webpack'),
    path = require('path'),
    BUILD_DIR = path.resolve(__dirname, 'assets/js'),
    APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: {
    schedule: APP_DIR + '/schedule.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        // process both js and jsx files
        test: /\.jsx?/,
        // look in APP_DIR
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
}
