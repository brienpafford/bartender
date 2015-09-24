
var path				= require('path');
var mongoose 			= require('mongoose');
var mongodbUri  	= require(path.join(process.cwd(), 'mongodb-uri'));

var uri 					= process.env.MONGOLAB_URI;

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString);
 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
});

exports.mongoose = mongoose;