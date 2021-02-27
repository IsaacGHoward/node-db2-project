// DO YOUR MAGIC
exports.up = async function(knex) {
  return knex.schema.createTable('cars', tbl => {
    // creates a primary key called id
    tbl.increments("id");
    tbl.text('vin').unique().notNullable();
    tbl.text('make').notNullable();
    tbl.text('model').notNullable();
    tbl.decimal('mileage').notNullable();
    tbl.text('title');
    tbl.text('transmission');
  });
};

exports.down = async function(knex) {
  // drops the entire table
  return knex.schema.dropTableIfExists('cars');
};