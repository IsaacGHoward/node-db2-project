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
  // DO YOUR MAGIC
}

exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
