/// ///// Dependencies /////////
const Pet = require('../models/pets')
const Shelter = require('../models/shelters')
const passport = require('../config/passport')
const local = require('passport-local')
const multer = require('multer')
const chalk = require('chalk')
const path = require('path')
/// // 🌏 GLOBALS Variables 🌍 /////
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
  destination: 'client/public/uploads',
  // Set File Name
  filename: function (req, file, cb) {
    // HERE is where we can decide the name of the file
    filePath = `thepetinder${Date.now()}${path.extname(file.originalname)}`

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
  // Get all Pets findPetByShelterId
  app.get('/api/findAll', function (req, res) {
    Pet.findAll().then(function (dbExamples) {
      res.json(dbExamples)
    })
  })

  // TODO: need to implement
  app.get('/api/findAll/:shelterId', function (req, res) {
    Pet.findPetByShelterId(req.params.shelterId).then(function (pets) {
      res.json(pets)
    })
  })

  // Get all Shelters
  app.get('/api/shelters', function (req, res) {
    Shelter.findAll().then(function (shelters) {
      res.json(shelters)
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
  /**
   * Add new pet to database
   */
  app.post('/api/addPet', upload.single('imgPath'), function (req, res, next) {
    const { host, ...petData } = req.body
    // Set img URL
    petData.imgPath = `${host}/uploads/${req.file.filename}`
    // Save animal info on database
    Pet.create(petData).then(function (dbExample) {
      // res.json(dbExample)
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
    Shelter.create(req.body)
      .then(function (dbExample) {
        res.json(dbExample)
      })
      .catch(err => {
        console.log(chalk.bgRed(err))
        let errObject = {}
        // Get sqlMessage error to send error back from API
        // We have 2 unique col in MySQL and we will return
        // witch one its the duplicated
        let sqlMsg = err.sqlMessage.split(' ')
        let _error = sqlMsg[sqlMsg.length - 1]
        _error = _error.replace(/\'/g, '')
        // Check for unique name error
        if (_error === 'shelter_tb_name_unique') {
          errObject = { error: `${req.body.name} has Been Taken`, ...err }
        }
        // Check for unique email error
        else if (_error === 'shelter_tb_email_unique') {
          errObject = { error: `${req.body.email} has Been Taken`, ...err }
        }
        // In case of another error
        else {
          errObject = { error: 'Unable to Complete Registration', ...err }
        }
        console.log(chalk.bgRed(_error))
        res.json(errObject)
      })
  })
  /**
   * loging route
   */
  app.post(
    '/login',
    // middleware
    passport.authenticate('local'),
    // callback
    function (req, res) {
      // Remove password from object befor send it back
      const { password, ...userInfo } = req.user
      res.json(userInfo) // .redirect('/')
      // res.redirect('/ShelterHome')
    }
  )
  /**
   * Used for login with Pasport js
   */
  app.get('/auth', function (req, res) {
    // console.log(chalk.bgBlue(JSON.stringify(req.session)))
    if (req.user) {
      const { password, ...userData } = req.user
      res.json(userData)
    } else {
      res.json({ msg: 'no user' })
    }
  })
  /**
   * Used to logout
   */
  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })
}
