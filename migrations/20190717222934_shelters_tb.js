exports.up = function (knex) {
    return knex.schema.createTable('shelter_tb', table => {
        table.increments('id');
        table.string('name');
        table.string('email');
        table.string('password')
        table.string('address');
        table.string('phone');
        table.string('city');
        table.string('state');
        table.string('zipCode');

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('shelter_tb');
};
