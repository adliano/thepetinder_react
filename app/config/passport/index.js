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
    Shelter.find({ id: id }).then(user => {
        if (!user) {
            done(new Error(`User not found ${id}`))
        } else {
            done(null, user[0])
        }
    })
})
/**
 * Local strategy configuration
 */
passport.use(new LocalStrategy({
    // This field define the name of the properties in the 
    // POST body that are sent to the server.
    usernameField: 'name',
  },
    function (username, password, done) {  
      Shelter.find({ name: username })
        .then(results => {
          if (!results) {            
            return done(null, false)
          } else if (results[0].password !== password) {
            return done(null, false)
          }
          return done(null, results[0])
        })
        .catch(err => {
            done(err)
        })
    }
  ))

module.exports = passport
