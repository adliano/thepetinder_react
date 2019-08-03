exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets_tb').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelter_tb').insert([
        {name:'FirstShelter', email:'FirstShelter@mail.com', password: 'xxxxxxxxxxx', address:'rainbowSix',phone:'17', city:'ramon', state:'AL', zipCode:'98'},
        {name:'SecondShelter', email:'SecondShelter@mail.com', password: 'xxxxxxxxxxx', address:'rainbow',phone:'17', city:'ramon', state:'AL', zipCode:'98'},
      ]);
    })
    .then(function(){
      // Inserts seed entries
      return knex('pets_tb').insert([{
        petName: 'pet on 2',
        type: 'abd',
        attitude: 'abd',
        isAdopted: true,
        age: 11,
        imgPath: 'https://5.imimg.com/data5/NQ/PJ/MY-37341530/beagle-dog-puppy-250x250.jpg',
        shelter_id: 2
      },
      {
        petName: 'ddd 1',
        type: 'abd',
        attitude: 'abd',
        isAdopted: true,
        age: 11,
        imgPath: 'https://data.whicdn.com/images/302795711/large.jpg',
        shelter_id: 1
      },
      {
        petName: 'ccc',
        type: 'abd',
        attitude: 'abd',
        age: 11,
        imgPath: 'https://www.k9web.com/wp-content/uploads/2019/03/Pocket-Pitbull-3.jpg',
        shelter_id: 1
      },
      {
        petName: 'ggg',
        type: 'abd',
        attitude: 'abd',
        isAdopted: true,
        age: 11,
        imgPath: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
        shelter_id: 1
      },
      {
        petName: 'fff 2',
        type: 'abd',
        attitude: 'abd',
        age: 11,
        imgPath: 'https://opimedia.azureedge.net/-/media/images/grt/editorial/articles/magazine-articles/2016/07-01/bald-eagles-and-golden-eagles/bald-eagle-square-jpg.jpg',
        shelter_id: 2
      }
      ])
    });
}
