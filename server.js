var static = require('node-static');
var development = new static.Server('./webpack');

require('http').createServer(function (request, response) {
  if (!/\./.test(request.url)) {
    request.url = '/';
  }
  development.serve(request, response);
}).listen(3000);
