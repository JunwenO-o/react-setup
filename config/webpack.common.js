/**
 * common settings for webpack
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  devServer: {
    port: 8020, // setting port
  },

  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: /src/,
      },
    ],
  },
};
