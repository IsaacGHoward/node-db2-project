const db = require('./cars-model');

exports.checkCarId = (req, res, next) => {
  db.getById(req.params.id)
  .then((response) => {
    if(response.length > 0){
      req.car = response;
      next();
    }
    else
      res.status(404).send({ message: `car with id ${req.params.id} is not found` })
  })
}

exports.checkCarPayload = (req, res, next) => {
  var conditions = ['vin', 'make', 'model', 'mileage'];
  conditions.forEach(condition => {
    if(!req.body.condition)
      res.status(400).send({ message: `${condition} is missing` })
  });
  next();
  /*
  if(!req.body.vin || !req.body.make || !req.body.model || !req.body.mileage)
    res.status(400).send({ message: `<field name> is missing` })
  */
}

exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
