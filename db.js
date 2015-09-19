var mongoose 			= require('mongoose');
var config 				= require('./config');

mongoose.connect(config.dbPath);
var db 						= mongoose.connection;

db.on('error', function () {
	console.log('error occurred from db');
});

db.once('open', function () {
	console.log('successfully opened the db');
});

exports.mongoose	= mongoose;