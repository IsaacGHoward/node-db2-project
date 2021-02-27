const router = require('express').Router();
const db = require('./cars-model');
const middleware = require('./cars-middleware');

router.get('/', (req, res) => {
  db.getAll()
  .then((respon) => {
    res.send(respon);
  })
})

module.exports = router;