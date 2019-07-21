exports.up = function (knex) {
    return knex.schema.createTable('shelter_tb', table => {
        table.increments('id');
        table.string('name').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('address').notNullable();
        table.string('phone').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('zipCode');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('shelter_tb');
};
