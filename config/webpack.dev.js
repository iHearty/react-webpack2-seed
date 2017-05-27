let webpack = require('webpack');
let webpackMerge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig = require('./webpack.common.js');
let helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
   devtool: 'source-map',
   entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
   ],

   output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js'
   },

   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               'style-loader',
               {
                  loader: 'css-loader',
                  options: {
                     camelCase: true
                  }
               },
               'autoprefixer-loader'
            ]
         }
      ]
   },

   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
   ],

   devServer: {
      port: 8090,
      historyApiFallback: true,
      stats: 'minimal',
      hot: true,
      contentBase: helpers.root('dist'),
      publicPath: '/'
   }
});
