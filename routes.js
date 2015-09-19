module.exports 			= function(app) {
	var beer = require('./controllers/beerController');

	app.get('/', function(req, res, next) {
		return res.send('Ahoy! API magic');
	});

	app.post('/createBeer', beer.createBeer);
	app.get('/getBeer', beer.getBeer);
};
