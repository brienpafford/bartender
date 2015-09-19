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

  this.getBeer = function (req, res, next) {

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

  // Get Specific Beer

  this.searchBeer = function (req, res, next) {

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



// UPDATE

// DELETE

	// this.deleteBeer = function (req, res, next) {
	// 	Beer.find({_id}, function (err, result) {
	// 		if (err) {
	// 			console.log(err);
	// 			console/log('Beer Not Deleted!');
	// 			return res.send({'error': err});
	// 		}
	// 		else {
	// 			return res.send({result.name + 'Deleted'});
	// 		};
	// 	});
	// };


return this;

};

module.exports = new beerController();