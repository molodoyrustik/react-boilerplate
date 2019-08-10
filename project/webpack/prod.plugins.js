const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = function() {
    return [
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        { from: './public/', to: './', force: true }
      ], {}),
      new webpack.optimize.ModuleConcatenationPlugin(),
      new ManifestPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/styles.[hash].css', disable: false, allChunks: true
      }),
      new HtmlWebpackPlugin({
        body: true,
        inject: false,
        hash: true,
        template: './utils/index.html',
        filename: 'index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })
    ]
};
