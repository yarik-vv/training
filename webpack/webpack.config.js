'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
   entry: "./home",
   output: {
      filename: "build.js",
      library: "home"
   },

   watch: true,

   watchOptions: {
      aggregateTimeout: 100
   },

   devtool: "cheap-inline-module-source-map",

   plugins: [
      new webpack.DefinePlugin({
         NODE_ENV: JSON.stringify(NODE_ENV),
         LANG: JSON.stringify('ru')
      })
   ],

   resolve: {
      modules: ["node_modules"],
      extensions: ['.js'] 
   },

   resolveLoader: {
      modules: ['node_modules'],
      moduleExtensions: ['*-loader', '*'],
      extensions: ['.js']
   },
   
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
               loader: "babel-loader",
               options: {
                  presets: ["es2015"]
               }
        }],
      }]
   }
};

if (NODE_ENV == 'production') {
   module.exports.plugins.push(
      new webpack.LoaderOptionsPlugin({
         minimize: true,
         debug: false
      }),
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('production')
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
   );
}