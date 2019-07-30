const passport = require('passport')
const Shelter = require('../../models/shelters')
const LocalStrategy = require('passport-local').Strategy
const chalk = require('chalk')

/**
 * serializeUser()
 */
passport.serializeUser((user, done) => {   
    done(null, user.id)
})
/**
 * deserializeUser()
 * user object attaches to the request as req.user
 */
passport.deserializeUser((id, done) => {  
  Shelter.find({ id: id})
  .asCallback(function(err, users){
      done(err,user)
  })
})
/**
 * Local strategy configuration
 * The usernameField (Parameter) define the name of the properties in the 
 * POST body that are sent to the server.
 */
passport.use(new LocalStrategy({usernameField: 'name'},
    function (username, password, done) {  
      Shelter.find({name: username, password: password})
      .asCallback(function(err, users){
        return done(err,users[0])
      })
    }
  ))

module.exports = passport
