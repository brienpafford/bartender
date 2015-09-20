var restify 			= require('restify');
var config 				= require('./config');
var server 				= restify.createServer({name:'hopList API'});

server.use(restify.fullResponse());
server.use(restify.bodyParser());
server.use(restify.queryParser());

server.listen(config.port, function() {
	console.log('server listening on port number', config.port);

})
var routes 				= require('./routes')(server);

