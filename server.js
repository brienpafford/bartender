var restify 			= require('restify');
// var config 				= require('./config');
var server 				= restify.createServer({name:'hopList API'});

server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

var port = process.env.PORT || 3000;

server.listen(port, function() {
	console.log('server listening on port number', port);

})
var routes 				= require('./routes')(server);

