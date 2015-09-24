
// var config				= require('./config');
var mongoose 			= require('mongoose');
var mongodbUri  	= require('mongodb-uri');

var uri 					= process.env.MONGODB_URL;

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString);
 
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
  console.log('Successfully connected to MongoDB');
});

exports.mongoose = mongoose;