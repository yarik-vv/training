//var log = require('lib/log')(module);


module.exports = function(server) {
var io = require('socket.io')(server, {
    'origins': ['127.0.0.1:*', 'localhost:*']
    //,
    //'logger': log
  });
//io.set('logger', log);
io.on('connection', function(socket){
  console.log('a user connected');
  
    socket.on('message', (text, callback) => {
      socket.broadcast.emit('message', text);
      callback && callback(text);
    });


});
}