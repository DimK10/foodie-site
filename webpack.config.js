const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist/build',
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'src'),
    port: 8000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
