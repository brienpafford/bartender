function beerController () {
	var Beer = require('../models/beerSchema');
	

	// POST

	this.createBeer = function (req, res, next) {
	var name				=	req.params.name;
	var brewery			= req.params.brewery;
	var style				= req.params.style;
	var abv					= req.params.abv;
  var ibu         = req.params.ibu;
  var description = req.params.description;
  var availability= req.params.availability;
  var icon        = req.params.icon;
  var image       = req.params.image;
		
		Beer.create({name:name,brewery:brewery,style:style,abv:abv,ibu:ibu,description:description,availability:availability,icon:icon,image:image}, function(err, result) {
			if (err) {
				console.log(err);
				return res.send({'error':err});	
			}
			else {
        return res.send({'Object':result,'message': 'Beer successfully saved'});
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
        return res.send({'Beer_Details':result});
      }
    });
  };

// GET Beer by ID

  this.getBeerById = function (req, res, next) {

    Beer.findById(req.params._id, function(err, result) {
      if (err) {
        console.log(err);
        return res.send({'error':err}); 
      } else if ({name :!req.params._id}) {
        return res.json({ message: 'Beer Not Found!' });
      } else {
        return res.send({'Beer_Details':result});
      }
    });
  };

// GET Beer by Name

  this.getBeerByName = function (req, res, next) {

    Beer.find({name: req.params.name}, function(err, result) {
      if (err) {
        console.log(err)
        return res.send({'error':err}); 
      } else if ({name : !req.params.name}) {
        return res.json({ message: 'Beer Not Found!' });
      } else {
        return res.json({'Beer_Details':result});
      }
    });
  };

// DELETE

	this.removeBeer = function (req, res, next) {

		Beer.remove({_id : req.params._id}, function (err) {
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