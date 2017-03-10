var http = require('http');
var debug = require('debug')('server'); // нужно установить npm i debug

var server = http.createServer();

server.on('request', require('./request'));

server.listen(3333);

debug("Server is running");