/*global process*/
let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
   devtool: 'source-map',

   output: {
      path: helpers.root('dist'),
      publicPath: '',
      filename: '[name].[chunkhash].js',
      chunkFilename: '[id].[chunkhash].chunk.js'
   },

   module: {
      rules: [
         {
            test: /\.css?$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'autoprefixer-loader']
            }),
         }
      ]
   },

   plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new webpack.LoaderOptionsPlugin({
         minimize: true,
         debug: false
      }),
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify(ENV)
         }
      }),
      new webpack.optimize.UglifyJsPlugin({
         beautify: false,
         mangle: {
            screw_ie8: true,
            keep_fnames: true
         },
         compress: {
            screw_ie8: true
         },
         comments: false
      })
   ]
});
