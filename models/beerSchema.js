// Model for Beer
module.exports = (function beerSchema () {

		var mongoose = require('../db').mongoose;

		var schema = {
			name				: {type: String},
			brewery			: {type: String},
			style				: {type: String},
			abv					: {type: Number},
			ibu					: {type: Number},
			description : {type: String},
			availability: {type: String},
			icon				: {type: String},
			image				: {type: String}
		};

		var collectionName = 'hopList';
		var beerSchema 		 = mongoose.Schema(schema);
		var Beer 					 = mongoose.model(collectionName, beerSchema);

		return Beer;
})();