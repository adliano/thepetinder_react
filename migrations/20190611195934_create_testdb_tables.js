/* eslint-disable semi, no-unreachable */
exports.up = function (knex, Promise) {
  knex.schema.withSchema('testdb').hasTable('test_pets_tb')
    .then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('test_pets_tb', table => {
          table.increments('id');
          table.string('petName');
          table.string('type');
          table.string('attitude').notNullable();
          table.boolean('isAdopted').defaultTo(false);
          table.integer('age').notNullable();
          table.string('imgPath');
        })
      }
    })
}

exports.down = function (knex, Promise) {
  return knex.withSchema('testdb').schema
    .dropTable('test_pets_tb')
}
/* eslint-enable semi, no-unreachable */
