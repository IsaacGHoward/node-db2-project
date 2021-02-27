const db = require('../../data/db-config');

const getAll = () => {
  return db('cars');
}

const getById = (id) => {
  return db('cars')
    .where({id})
}

const create = async car => {
  await db('cars')
    .insert(car)
    .then(ids => {
      return getById(ids[0])
    });
}

module.exports = {
  getAll,
  getById,
  create,
}
