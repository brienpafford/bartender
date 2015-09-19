// var mongoose 			= require('mongoose');
// var config 				= require('./config');

// mongoose.connect(config.dbPath);
// var db 						= mongoose.connection;



// exports.mongoose	= mongoose;

var config						= require('./config');
var mongoose 					= require('mongoose');
var mongodbUri  			= require('mongodb-uri');

// var options 					= { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
//                 				replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
var uri 							= config.dbPath;

var mongooseConnectString = mongodbUri.formatMongoose(uri);
mongoose.connect(mongooseConnectString);
 
// Test for connection success 
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function callback () {
    console.log('Successfully connected to MongoDB');
});

exports.mongoose = mongoose;
// mongoose.connect(mongooseUri, options);

// var conn = mongoose.connection;


// conn.on('error', console.error.bind(console, 'connection error:'));  
 
// conn.once('open', function() {
// });

// exports.mongoose	= mongoose;
