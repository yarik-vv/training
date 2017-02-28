'use strict';

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
   context: __dirname + '/frontend',

   entry: {
      main: './main',
      styles: './styles/index.css'
   },

   //about: './about',
   //common: './common' //общее пишешь и чанкс добавляет сюда же
   //common: ['./common', '/.welcome'] //указывает что модуль велком полюбасу добавить
   //},

   output: {
      path: __dirname + '/public',
      //publicPath: '/',
      filename: "[name].js" //,
         //library: "[name]"
   },

//   watch: NODE_ENV == 'development',
//
//   watchOptions: {
//      aggregateTimeout: 100,
//      ignored: /node_modules/
//   },

   //devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

//   resolve: {
//      modules: ["node_modules"],
//      extensions: ['.js', ' ']
//   },
//
//   resolveLoader: {
//      modules: ['node_modules'],
//      moduleExtensions: ['-loader', ' '],
//      extensions: ['.js', ' ']
//   },

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules)/, 
            include: __dirname + '/frontend',
            use: [{
               loader: "babel-loader",
               options: {
                  presets: ["es2015"]
               }
         }],
         }, 
         {
            test:   /\.jade$/,
            loader: "jade-loader"
         },
         {
            test: /\.css$/,
            //include: __dirname + '/frontend',
            use: 
//            [
//               {loader: "style-loader"},
//               {loader: "css-loader"},
//               {
//                  loader: 'postcss-loader',
//                  options: {
//                     plugins: function () {
//                        return [
//                           require('autoprefixer')
//                        ];
//                     }
//                  }
//               },
//               //{loader: 'resolve-url-loader'},
//            ]
               ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                     {loader: "css-loader"},
                     {
                        loader: 'postcss-loader',
                        options: {
                           plugins: function () {
                              return [
                              require('autoprefixer')
                              ];
                           }
                        }
                     }
                  ]
               })
         }, 
//         {
//            test: /\.useable\.css$/,
//            //include: __dirname + '/frontend',
//            use: [
//               {
//                  loader: "style-loader",
//                  options: {
//                     useable: true
//                  },
//               },
//               {loader: "css-loader"}
//            ],
//         },
         {
            //нормальные пути для вложеных файлов с библиотек
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            include: /(node_modules)/,
            loader: 'url-loader?name=[1].[ext]&regExp=node_modules/(.*)&limit=10'
         },
         {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            exclude: /(node_modules)/,
            loader: 'url-loader?name=[path][name].[ext]&limit=10'
         }
      ],
      
      noParse: /jquery|angular/ //kakie moduli ne parsit
   },
   
   plugins: [
      //new ExtractTextPlugin('[name].css', {allChunks: true}),
      //new ExtractTextPlugin("styles.css"),[name]
      new ExtractTextPlugin({
         filename:  '[name].css',
         allChunks: true
      })
      
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