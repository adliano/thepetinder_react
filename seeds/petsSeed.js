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
        imgPath: 'https://5.imimg.com/data5/NQ/PJ/MY-37341530/beagle-dog-puppy-250x250.jpg'
      },
      {
        name: 'ddd',
        type: 'abd',
        attitude: 'abd',
        isAdopted: true,
        age: 11,
        imgPath: 'https://data.whicdn.com/images/302795711/large.jpg'
      },
      {
        name: 'ccc',
        type: 'abd',
        attitude: 'abd',
        age: 11,
        imgPath: 'https://www.k9web.com/wp-content/uploads/2019/03/Pocket-Pitbull-3.jpg'
      },
      {
        name: 'ggg',
        type: 'abd',
        attitude: 'abd',
        isAdopted: true,
        age: 11,
        imgPath: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg'
      },
      {
        name: 'fff',
        type: 'abd',
        attitude: 'abd',
        age: 11,
        imgPath: 'https://opimedia.azureedge.net/-/media/images/grt/editorial/articles/magazine-articles/2016/07-01/bald-eagles-and-golden-eagles/bald-eagle-square-jpg.jpg'
      }
      ])
    })
}
