var http = require('http');
var fs = require('fs');

new http.Server(function(req, res) {
  // res instanceof http.ServerResponse < stream.Writable

  if (req.url == '/big.html') {

    var file = new fs.ReadStream('big.html');
    sendFile(file, res);

  }
}).listen(3000);

function sendFile(file, res) {

  file.pipe(res);
  //file.pipe(process.stdout);

  file.on('error', function(err) {
    res.statusCode = 500;
    res.end("Server Error");
    console.error(err);
  });


//v staroi node destroy pri razrive soedineniya
  // file
  //   .on('open',function() {
  //     console.log("open");
  //   })
  //   .on('close', function() {
  //     console.log("close");
  //   });
//curl --limit-rate 1k http://127.0.0.1:3000/big.html  
  // res.on('close', function() {
  //   file.destroy();
  // });

}