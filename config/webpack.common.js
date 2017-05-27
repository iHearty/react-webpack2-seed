let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let helpers = require('./helpers');

module.exports = {
   entry: {
      'app': './src/index.jsx'
   },

   resolve: {
      extensions: ['*', '.jsx', '.js', '.scss', '.css', '.html'],
      alias: {
         'antd': helpers.root('node_modules/antd/dist/antd.min.js'),
         'images': helpers.root('src/images/')
      }
   },

   module: {
      rules: [
         {
            test: /\.jsx?$/,
            use: ['babel-loader'],
            include: helpers.root('src')
         },
         {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            use: 'file-loader?name=assets/[name].[hash].[ext]'
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader?name=assets/[name].[ext]']
         }
      ]
   },

   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         name: ['bundle']
      }),

      new webpack.DefinePlugin({
         'LOGIN_URL': JSON.stringify('/login')
      }),

      new HtmlWebpackPlugin({
         template: 'src/index.html',
         favicon: 'src/favicon.ico'
      })
   ]
};
