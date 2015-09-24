module.exports 			= function(server) {
	var beer = require('./controllers/beerController');

	server.get('/', function(req, res, next) {
		return res.send('Bartender - MongoDB | Node API for HopOrNot Mobile app');
	});

	server.post('/createBeer', beer.createBeer);
	server.get('/getAllBeers', beer.getAllBeers);
	server.get('/getBeerById', beer.getBeerById);
	server.get('/getBeerByName', beer.getBeerByName);
	server.put('/removeBeer', beer.removeBeer);
};
