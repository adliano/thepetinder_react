/* eslint-disable semi, no-unreachable */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('shelter_tb', table =>{
    table.increments('id').primary();
    table.string('name').unique().notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zipCode');
  }).then(function(){
      return knex.schema.createTable('pets_tb', table => {
        table.increments('petId').primary();
        table.string('petName');
        table.string('type');
        table.string('attitude').notNullable();
        table.boolean('isAdopted').defaultTo(false);
        table.integer('age').notNullable();
        table.string('imgPath');
        table.integer('shelter_id').unsigned()
        table.foreign('shelter_id').references('shelter_tb.id');

    })
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('pets_tb', 'shelter_tb');
};
/* eslint-enable semi, no-unreachable */

/*

foreign — table.foreign(columns, [foreignKeyName])[.onDelete(statement).onUpdate(statement).withKeyName(foreignKeyName)]

Adds a foreign key constraint to a table for an existing column using:

table.foreign(column).references(column)

or multiple columns using

table.foreign(columns).references(columns).inTable(table)

A default key name using the columns is used unless foreignKeyName is specified.
You can also chain onDelete() and/or onUpdate() to set the reference option (RESTRICT, CASCADE, SET NULL, NO ACTION) for the operation.
You can also chain withKeyName() to override default key name that is generated from
 table and column names (result is identical to specifying second parameter to function foreign()).
 Note that using foreign() is the same as column.references(column) but it works for existing columns.

knex.schema.table('users', function (table) {
  table.integer('user_id').unsigned()
  table.foreign('user_id').references('Items.user_id_in_items')
})

*/
