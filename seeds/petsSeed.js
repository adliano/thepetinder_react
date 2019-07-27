
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets_tb').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets_tb').insert([
<<<<<<< HEAD
        { petName: 'abc', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'https://5.imimg.com/data5/NQ/PJ/MY-37341530/beagle-dog-puppy-250x250.jpg' },
        { petName: 'ddd', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'https://cdn.shopify.com/s/files/1/2810/0782/products/product-image-857543509_1024x1024.jpg?v=1544023706' },
        { petName: 'ccc', type: 'abd', attitude: 'abd', age: 11, imgPath: 'https://www.k9web.com/wp-content/uploads/2019/03/Pocket-Pitbull-3.jpg' },
        { petName: 'ggg', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg' },
        { petName: 'fff', type: 'abd', attitude: 'abd', age: 11, imgPath: 'https://opimedia.azureedge.net/-/media/images/grt/editorial/articles/magazine-articles/2016/07-01/bald-eagles-and-golden-eagles/bald-eagle-square-jpg.jpg' }
=======
        { name: 'abc', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
        { name: 'ddd', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
        { name: 'ccc', type: 'abd', attitude: 'abd', age: 11, imgPath: 'dkdkdkd' },
        { name: 'ggg', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
        { name: 'fff', type: 'abd', attitude: 'abd', age: 11, imgPath: 'dkdkdkd' }
>>>>>>> cff204f462ec46587a3f871ca6c1c144c98a1584
      ])
    })
}
