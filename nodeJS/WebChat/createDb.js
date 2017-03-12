var mongoose = require('lib/mongoose');
mongoose.set('debug', true);
var async = require('async');
var User = require('models/user').User;

//1 - drop
//2 - create new and save 3 users
//3 - close conection 

async.series([
  open,
  dropDatabase,
  requireModels,
  createUsers
], function(err, results) {
  console.log(arguments);
  mongoose.disconnect();
  process.exit(err ? 255 : 0);
});

function open(callback) {
  mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
  var db = mongoose.connection.db;
  db.dropDatabase(callback);
}

function requireModels(callback) {
  require('models/user');

  async.each(Object.keys(mongoose.models), function(modelName, callback) {
    mongoose.models[modelName].ensureIndexes(callback);
  }, callback);
}

function createUsers(callback) {

  var users = [
    {username: 'Вася', password: 'supervasya'},
    {username: 'Петя', password: '123'},
    {username: 'admin', password: 'thetruehero'}
  ];

  async.each(users, function(userData, callback) {
    var user = new mongoose.models.User(userData);
    user.save(callback);
  }, callback);
}


// mongoose.connection.on('open', function(){

// 	var db = mongoose.connection.db;
// 	db.dropDatabase(function(err){
// 		if (err) throw err;
// 		async.parallel(
// 		[
// 			function(callback) {
// 				var vasya = new User({username: 'Вася', password: 'supervasya'});
// 				vasya.save(function(err){
// 					callback(err, vasya);
// 				});
// 			},
// 			function(callback) {
// 				var petya = new User({username: 'Петя', password: '123'});
// 				petya.save(function(err){
// 					callback(err, petya);
// 				});
// 			},
// 			function(callback) {
// 				var admin = new User({username: 'admin', password: 'thetruehero'});
// 				admin.save(function(err){
// 					callback(err, admin);
// 				});
// 			}	
// 		], function(err,results){
// 				console.log(arguments);
// 				mongoose.disconnect();
// 			}
// 		);
// 	});
// });