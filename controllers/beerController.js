function beerController () {
	var Beer = require('../models/beerSchema');
	

	// POST

	this.createBeer = function (req, res, next) {
	var name				=	req.params.name;
	var brewery			= req.params.brewery;
	var style				= req.params.style;
	var abv					= req.params.abv;
		
		Beer.create({name:name,brewery:brewery,style:style,abv:abv}, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});	
			}
			else {
        return res.send({'result':result,'status':'Beer successfully saved'});
        console.log(result.name + ' ' + 'Saved')
      }
		});
	};

	// GET

  this.getAllBeers = function (req, res, next) {

    Beer.find({}, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err}); 
      }
      else {
        return res.send({'Beer Details':result});
      }
    });
  };

  // GET Specific Beer

  this.getBeerById = function (req, res, next) {

    Beer.findById(req.params._id, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err}); 
      }
      else {
        return res.send({'Beer Details':result});
      }
    });
  };

  this.getBeerByName = function (req, res, next) {

    Beer.find({name: req.params.name}, function(err, result) {
      if (err) {
        console.log(err)
        return res.send({'error':err}); 
      }
      else {
        return res.send({'Beer Details':result});
      }
    });
  };

// DELETE

	this.removeBeer = function (req, res, next) {

		Beer.remove({name: req.params.name}, function (err) {
			if (err) {
				res.send({'error': err});
			}
			else {
				return res.json({ message: 'Beer Deleted!' });
			};
		});
	};


return this;

};

module.exports = new beerController();