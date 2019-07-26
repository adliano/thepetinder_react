//////// Dependencies /////////
const Pet = require('../models/pets')
const Shelter = require('../models/shelters')
/////////// Multer /////////
const multer = require('multer')
/////////// Chalk /////////
const chalk = require('chalk');
/////////// Path /////////
const path = require('path')
///// 🌏 GLOBALS Variables 🌍 /////
let filePath = ''

/*
 ** Set Multer storage **
The next thing will be to define a storage location for our files.
Multer gives the option of storing files to disk, as shown below.
Here, we set up a directory where all our files will be saved,
and we'll also give the files a new identifier.
*/
let storage = multer.diskStorage({
  // Set Destination
  // Note: You are responsible for creating the directory when providing destination as a function.
  //  When passing a string, multer will make sure that the directory is created for you.
  destination: 'client/public/uploads', // TODO: Need to change this line
  // Set File Name
  filename: function (req, file, cb) {
    // HERE is where we can decide the name of the file
    // We will name as thepetinder + current time im miliseconds + minetype of original file
    // filePath = `thepetinder${Date.now()}.${file.mimetype.split('/')[1]}`
    filePath = `thepetinder${Date.now()}.${path.extname(file.originalname)}`

    cb(null, filePath)

    // console.log(file)
    /* output of file
      { fieldname: 'singleFile',
        originalname: '<File original name>',
        encoding: '7bit',
        mimetype: 'image/jpeg' }
      */
  }
})

// Init Multer upload storage
let upload = multer({ storage: storage })

/**
 * apiRoutes: This routes file returns data to the client/view
 * It differs from the htmlRoutes.js file in that it responds to the client/view requests with data
 * where the htmlRoutes.js responds with a handlebars page
 *
 */
module.exports = function (app) {
  // Get all Pets
  app.get('/api/findAll', function (req, res) {
    Pet.findAll().then(function (dbExamples) {
      res.json(dbExamples)
    })
  })

  // Get all Shelters
  app.get('/api/shelters', function (req, res) {
    Shelter.findAll().then(function (dbExamples) {
      res.json(dbExamples)
    })
  })

  // Change code to find a specific ID
  app.get('/api/:specific', function (req, res) {
    Pet.findAll({
      where: {
        petName: req.params.specific
      }
    }).then(function (results) {
      res.json(results)
    })
  })

  // Create a new example ////////// ******* changed ******** \\\\\\
  app.post('/api/addPet', upload.single('imgPath'), function (req, res, next) {
    // Set img URL
    req.body.imgPath = `http://${req.get('host')}/uploads/${req.file.filename}`

    console.log('='.repeat(80))
    console.log(req.body)
    console.log('='.repeat(80))

    // Save animal info on database
    Pet.create(req.body).then(function (dbExample) {
      res.json(dbExample)
    })
    res.redirect('/addPet')
  })
  // Delete an example by id
  app.delete('/api/delete/:id', function (req, res) {
    Pet.destroy(req.params).then(function (dbExample) {
      res.json(dbExample)
    })
  })
  // PUT route for updating. The updated example will be available in req.body
  app.put('/api/examples/:id', function (req, res) {
    Pet.update(req.params, req.body).then(results => {
      console.log(`
      *****
      Example.update():
      ${results}`)

      res.json(results)
    })
  })

  // Register Shelter
  app.post('/api/register', function (req, res, next) {
    
    // Save Sheter info on database 
    Shelter.create(req.body).then(function (dbExample) {
      res.json(dbExample)
    })
    .catch(err => {
      console.log(chalk.bgRed(err))
      let errObject = {}
      // Get sqlMessage error to send error back from API
      // We have 2 unique col in MySQL and we will return 
      // witch one its the duplicated
      let sqlMsg =  err.sqlMessage.split(' ')
      let _error = sqlMsg[sqlMsg.length - 1]
      _error = _error.replace(/\'/g, '')
      // Check for unique name error
      if(_error === 'shelter_tb_name_unique'){
        errObject = {error: `${req.body.name} has Been Taken`, ...err}
      }
      // Check for unique email error
      else if(_error === 'shelter_tb_email_unique'){
        errObject = {error: `${req.body.email} has Been Taken`, ...err}
      }
      // In case of another error
      else{
        errObject = {error: 'Unable to Complete Registration', ...err}
      }
      console.log(chalk.bgRed(_error))
      res.json(errObject)
    })
  })
}

/*
[Object: null prototype] {
  animalName: '2wsx',
  animalAge: '9876',
  animalType: 'Lion',
  animalAttitude: 'Playful' }
{ fieldname: 'petPicture',
  originalname: '20170526_191602.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'app/public/uploads',
  filename: 'thepetinder1560556105221.jpeg',
  path: 'app/public/uploads/thepetinder1560556105221.jpeg',
  size: 601159 }
*/
