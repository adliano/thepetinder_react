exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets_tb').del()
    .then(function () {
      // Inserts seed entries
      return knex('shelter_tb').insert([
        {name:'FirstShelter', email:'1@mail.com', password: '202cb962ac59075b964b07152d234b70', address:'123 Somewhere rd',phone:'5102224444', city:'San Ramon', state:'CA', zipCode:'94333'},
        {name:'SecondShelter', email:'2@mail.com', password: '202cb962ac59075b964b07152d234b70', address:'825 Somewhere rd',phone:'4153334844', city:'San Francisco', state:'CA', zipCode:'94123'},
        {name:'ThirdShelter', email:'3@mail.com', password: '202cb962ac59075b964b07152d234b70', address:'99 Somewhere rd',phone:'5101114447', city:'San Mateo', state:'CA', zipCode:'94333'},
        {name:'FourthShelter', email:'4@mail.com', password: '202cb962ac59075b964b07152d234b70', address:'1 Somewhere rd',phone:'9259994554', city:'Richmond', state:'CA', zipCode:'94333'},
        {name:'FifthShelter', email:'5@mail.com', password: '202cb962ac59075b964b07152d234b70', address:'1230 Somewhere rd',phone:'510222111', city:'Concord', state:'CA', zipCode:'94333'},
      ]);
    })
    .then(function(){
      // Inserts seed entries
      return knex('pets_tb').insert([{
        petName: 'Bred',
        type: 'Dog',
        attitude: 'Crazy',
        isAdopted: true,
        age: 11,
        imgPath: 'https://5.imimg.com/data5/NQ/PJ/MY-37341530/beagle-dog-puppy-250x250.jpg',
        shelter_id: 1
      },
      {
        petName: 'Joseph',
        type: 'Dog',
        attitude: 'Funny',
        isAdopted: true,
        age: 11,
        imgPath: 'https://data.whicdn.com/images/302795711/large.jpg',
        shelter_id: 2
      },
      {
        petName: 'Gaga',
        type: 'Dog',
        attitude: 'Loud',
        age: 11,
        imgPath: 'https://www.k9web.com/wp-content/uploads/2019/03/Pocket-Pitbull-3.jpg',
        shelter_id: 3
      },
      {
        petName: 'Vamp',
        type: 'Cat',
        attitude: 'Loud',
        age: 11,
        imgPath: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg',
        shelter_id: 4
      },
      {
        petName: 'Wayne',
        type: 'Bird',
        attitude: 'Loud',
        age: 11,
        imgPath: 'https://opimedia.azureedge.net/-/media/images/grt/editorial/articles/magazine-articles/2016/07-01/bald-eagles-and-golden-eagles/bald-eagle-square-jpg.jpg',
        shelter_id: 5
      }
      ])
    });
}
