exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets_tb').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets_tb').insert([{
          name: 'abc',
          type: 'abd',
          attitude: 'abd',
          isAdopted: true,
          age: 11,
          imgPath: 'dkdkdkd'
        },
        {
          name: 'ddd',
          type: 'abd',
          attitude: 'abd',
          isAdopted: true,
          age: 11,
          imgPath: 'dkdkdkd'
        },
        {
          name: 'ccc',
          type: 'abd',
          attitude: 'abd',
          age: 11,
          imgPath: 'dkdkdkd'
        },
        {
          name: 'ggg',
          type: 'abd',
          attitude: 'abd',
          isAdopted: true,
          age: 11,
          imgPath: 'dkdkdkd'
        },
        {
          name: 'fff',
          type: 'abd',
          attitude: 'abd',
          age: 11,
          imgPath: 'dkdkdkd'
        }
      ])
    })
}