exports.up = function (knex) {
    return knex.schema.createTable('shelter_tb', table => {
        table.increments('id');
        table.string('shelterName');
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
