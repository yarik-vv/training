'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function addHash(template, hash) {
  return NODE_ENV == 'production' ?
      template.replace(/\.[^.]+$/, `.[${hash}]$&`) : `${template}?hash=[${hash}]`;
}

module.exports = {
   context: __dirname + '/frontend',

   entry: {
      home:   './home',
      about:  './about',
      common: './common'
   },
   //common: './common' //общее пишешь и чанкс добавляет сюда же
   //common: ['./common', '/.welcome'] //указывает что модуль велком полюбасу добавить
   //},

   output: {
      path: __dirname + '/public/assets',
      publicPath: '/assets/',
      filename: "[name][chunkhash:6].js",
      //chunkFilename: '[id].js',
      library: "[name]"
   },

//   watch: NODE_ENV == 'development',
//
//   watchOptions: {
//      aggregateTimeout: 100,
//      ignored: /node_modules/
//   },

   //devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

   resolve: {
      //modules: ["node_modules"],
      extensions: ['.js', '.css']
   },

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
            // bez extract
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
            // extract plugin
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
//         {
//            //нормальные пути для вложеных файлов с библиотек
//            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
//            include: /(node_modules)/,
//            loader: 'url-loader?name=[1].[ext]&regExp=node_modules/(.*)&limit=10'
//         },
         {
            test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
            exclude: /(node_modules)/,
            loader: 'file-loader?name=[path][name].[hash:6].[ext]'
         }
      ]//,
      
      //noParse: /jquery|angular/ //kakie moduli ne parsit
   },
   
   plugins: [
//      {
//         apply: (compiler) => {
//            rimraf.sync(compiler.options.output.path);
//         }
//      },
//      new ExtractTextPlugin('[name].css'),
      
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

      //бек чтоб понимал что мы собрали и обновил html, если он его генерирует
//      new AssetsPlugin({
//         filename: 'assets.json',
//         path: __dirname + '/public/assets'
//      }),
      
      
      new HtmlWebpackPlugin({
         title: 'home',
         filename: 'home.html',
         chunks: ['common','home']
      }),
      new HtmlWebpackPlugin({
         title: 'about',
         filename: 'about.html',
         chunks: ['common','about']
      }),
      
      new ExtractTextPlugin({
         filename:  '[name][contenthash:6].css',
         allChunks: true
      }),
      
      //CommonsChunkPlugin выносит то что повторяеться в разных модулях
      new webpack.optimize.CommonsChunkPlugin({ 
         name: "common"
      }),
//      new HtmlWebpackPlugin(),
//      new HtmlWebpackPlugin({
//         filename: 'home.html',
//         template: 'frontend/home.html'
//      }),
//      new HtmlWebpackPlugin({
//         filename: 'about.html',
//         template: 'frontend/about.html'
//      })
         //names: ["common",]
      //   minChunks: 2 //вынесеться то что повторяеться как минимум в 2 модулях
      //   chunks: ['about','home'] //вынесеться только то что в эбаут и хоум
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