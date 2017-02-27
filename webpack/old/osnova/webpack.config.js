'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
   context: __dirname + '/frontend',
   
   entry: {
      home: './home',
      about: './about',
      //common: './common' //общее пишешь и чанкс добавляет сюда же
      //common: ['./common', '/.welcome'] //указывает что модуль велком полюбасу добавить
   },
   
   output: {
      path: __dirname + '/public',
      filename: "[name].js",
      library: "[name]"
   },

   watch: true,

   watchOptions: {
      aggregateTimeout: 100
   },

   devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

   plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
         NODE_ENV: JSON.stringify(NODE_ENV),
         LANG: JSON.stringify('ru')
      }),
      new webpack.optimize.CommonsChunkPlugin({
         name: "common",
         //minChunks: 2 вынесеться то что повторяеться как минимум в 2 модулях
         //chunks: ['about','home'] вынесеться только то что в эбаут и хоум
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
   },
   
   devServer: {
      contentBase: __dirname + "/public",
      compress: true,
      port: 9000
      //   ../node_modules/.bin/webpack-dev-server
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