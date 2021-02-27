const router = require('express').Router();
const db = require('./cars-model');
const middleware = require('./cars-middleware');

router.get('/', (req, res) => {
  db.getAll()
  .then((respon) => {
    res.send(respon);
  })
})

router.get('/:id', middleware.checkCarId, (req, res) => {
  res.send(req.car);
})

router.post('/', middleware.checkCarPayload, middleware.checkVinNumberUnique, middleware.checkVinNumberValid, (req,res) => {
  db.create(req.body)
  .then((response) => {
    res.send(response);
  })
})
module.exports = router;