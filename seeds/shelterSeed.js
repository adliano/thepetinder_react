
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shelter_tb').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelter_tb').insert([
        {shelterName:'abc', address:'rainbow',phone:'17', city:'ramon', state:'AL', zipCode:'98'}
      ]);
    });
};
