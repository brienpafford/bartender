function beerController () {
	var Beer = require('../models/beerSchema');
	
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

return this;

};

module.exports = new beerController();