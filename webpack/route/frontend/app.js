'use strict';

let moduleName = location.pathname.slice(1);

let route = require('bundle-loader!./route/' + moduleName);

route();
