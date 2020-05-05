const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  mode: 'devlopment',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
          options: {
            outputPath: 'sdsds',
          },
        },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    })
  ]
};
