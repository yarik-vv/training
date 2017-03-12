var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('lib/log')(module);
var HttpError = require('error').HttpError;

var app = express();

app.engine('ejs', require('ejs-locals')); // layout partial block
app.set('views', __dirname + '/template');
app.set('view engine', 'ejs');

app.use(express.favicon()); // /favicon.ico

if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.bodyParser());  // req.body....

app.use(express.cookieParser()); // req.cookies

app.use(require('middleware/sendHttpError'));

app.use(app.router);
require("routes")(app);

// app.get('/', function(req, res, next) {
//   res.render("index", {

//   });
// });

// var User = require('models/user').User;
//   app.get('/users', function(req, res, next) {
//     User.find({}, function(err, users) {
//       if (err) return next(err);
//       res.json(users);
//     })
//   });

//   app.get('/user/:id', function(req, res, next) {
//     // try {
//     //   var id = new ObjectID(req.params.id);
//     // } catch (e) {
//     //   next(404);
//     //   return;
//     // }

//     User.findById(req.params.id, function(err, user) { // ObjectID
//       if (err) return next(err);
//       if (!user) {
//         return next(new HttpError(404, "usera netu bleat"));
//       }
//       res.json(user);
//     });
//   });


app.use(express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
  if (typeof err == 'number') { // next(404);
    err = new HttpError(err);
  }

  if (err instanceof HttpError) {
    res.sendHttpError(err);
  } else {
    if (app.get('env') == 'development') {
      express.errorHandler()(err, req, res, next);
    } else {
      log.error(err);
      err = new HttpError(500);
      res.sendHttpError(err);
    }
  }
});

http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});