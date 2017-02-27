'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
   context: __dirname + '/frontend',
   
   entry: {
      app: './app'//,
      //about: './about',
      //common: './common' //общее пишешь и чанкс добавляет сюда же
      //common: ['./common', '/.welcome'] //указывает что модуль велком полюбасу добавить
   },
   
   output: {
      path: __dirname + '/public/js',
      publicPath: '/js/',
      filename: "[name].js"//,
      //library: "[name]"
   },

   watch: NODE_ENV == 'development',

   watchOptions: {
      aggregateTimeout: 100,
      ignored: /node_modules/
   },

   //devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

   plugins: [
      //ProvidePlugin подключает библиотеки 
      //new webpack.ProvidePlugin({
      //pluck: 'lodash/collection/pluck',
      //   _: 'lodash'
      //})
      
      //ContextReplacementPlugin подгружает с плагина только ru и en-gb
      //new webpack.ContextReplacementPlugin( /node_modules\/moment\/locale/, /ru|en-gb/)
      
      //NoEmitOnErrorsPlugin если ошибка то не компиляться файлы
      //new webpack.NoEmitOnErrorsPlugin(),
      
      //new webpack.DefinePlugin({
      //   NODE_ENV: JSON.stringify(NODE_ENV),
      //   LANG: JSON.stringify('ru')
      //}),
      
      //CommonsChunkPlugin выносит то что повторяеться в разных модулях
      //new webpack.optimize.CommonsChunkPlugin({
      //   name: "common",
      //   minChunks: 2, //вынесеться то что повторяеться как минимум в 2 модулях
      //   chunks: ['about','home'] //вынесеться только то что в эбаут и хоум
      //})
   ],

   resolve: {
      modules: ["node_modules"],
      extensions: ['.js', ' '] 
   },

   resolveLoader: {
      modules: ['node_modules'],
      moduleExtensions: ['-loader', ' '],
      extensions: ['.js', '*']
   },
   
   module: {
      rules: [
         {
            test: /\.js$/,
            //exclude: /(node_modules)/, 
            include: __dirname + '/frontend',
            use: [{
               loader: "babel-loader",
               options: {
                  presets: ["es2015"]
               }
        }],
      }],
      noParse: /jquery|angular/, //kakie moduli ne parsit
   },
   
   //cdn lodash подключаем а в коде просто реквайрим его если надо
//   externals: {
//      lodash: 'lodash'   
//   },
   
   devServer: {
      contentBase: __dirname + "/public",
      compress: true,
      port: 9000
   } 
   //   ../node_modules/.bin/webpack-dev-server
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