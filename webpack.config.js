const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
        use: ["style-loader", 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]__[hash:base64:5]",
          },
          }
        ],
        include: /\.module\.scss$/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.scss$/
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
    }),
    new CopyWebpackPlugin([
      {from:'src/assets',to:'assets'} 
    ]), 
  ]
};
