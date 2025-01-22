const webpack = require('webpack'),
      path = require('path'),
      SRC_DIR = path.resolve(__dirname, './src')
      BUILD_DIR = path.resolve(__dirname, './assets/js'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  entry: {
    index: [
      path.resolve(SRC_DIR, 'index.jsx'),
      path.resolve(SRC_DIR, 'css/skeleton.css'),
      path.resolve(SRC_DIR, 'css/sticky.css'),
      path.resolve(SRC_DIR, 'css/style.css'),
    ],
    coursework: path.resolve(SRC_DIR, 'coursework.jsx')
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
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/i,
        // use: [ MiniCssExtractPlugin.loader, 'style-loader', 'css-loader' ],
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
        sideEffects: true
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'url-loader?limit=8192'
        ]
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        use: [ 'json-loader?name=[name].[ext]' ]
      }
    ]
  }
};
