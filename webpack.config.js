const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'assets/js');

module.exports = {
  entry: {
    index: path.resolve(SRC_DIR, 'index.jsx'),
    coursework: path.resolve(SRC_DIR, 'coursework.jsx'),
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        include: SRC_DIR,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
