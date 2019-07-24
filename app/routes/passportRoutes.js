// ********************** 🌏 GLOBALS 🌍 ********************** \\
// Dependencies
const Shelter = require('../models/shelters')

// require Multer
const multer = require('multer')

// Passport used for auth
const LocalStrategy = require('passport-local').Strategy

module.exports = function(app, passport){

  console.log('called from passport routes');
 
  // Register Shelter
  app.post('/api/register', passport.authenticate('local-signup', { failureRedirect: '/' }),

  function(req, res){
    res.redirect('/ShelterHome')
  }

  )// end of post
}

/*
 // Register Shelter
  app.post('/api/register', function (req, res, next) {
    // Save Sheter info on database 
    // and send POST response
    Shelter.create(req.body).then(function (dbExample) {
      res.json(dbExample)
    })
    .catch(err => res.json(err))
  })

    knex('users')
  .where({id: id})
  .then(([user]) => {
    if (!user) { done(new Error('User not found! ' + id))}
    done(null, user)    
  })

*/