
// var config				= require('./config');
var mongoose 			= require('mongoose');
var mongodbUri  	= require('mongodb-uri');

var uri 					= process.env.MONGOLAB_URI || 'mongodb://brienpafford:eYUF2TXXK8@ds041673.mongolab.com:41673/hopornotdb';

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString);
 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
});

exports.mongoose = mongoose;