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
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader',
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: './recipe.html',
      template: './src/recipe.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
