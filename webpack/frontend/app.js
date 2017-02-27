'use strict';

let moduleName = location.pathname.slice(1);

let context = require.context('./route', false, /\.js$/); //false ignoriruet vlozenie papki v route

//let route = require('./route/' + moduleName);

//let route = context('./' + moduleName);

context.keys().forEach(function(path){
   let module = context(path);
   module();
});

//let route;
//
//try {
//   route = context('./' + moduleName);
//} catch (e) {
//  alert("da ne, ne goni bratishka");
//}

route();
