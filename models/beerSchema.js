// Model for Beer
module.exports = (function beerSchema () {

		var mongoose = require('../db').mongoose;

		var schema = {
			name		: {type: String, required: true},
			brewery	: {type: String, required: true},
			style		: {type: String, required: true},
			abv			: {type: Number, required: true}
		};

		var collectionName = 'hopList';
		var beerSchema 		 = mongoose.Schema(schema);
		var Beer 					 = mongoose.model(collectionName, beerSchema);

		return Beer;
})();