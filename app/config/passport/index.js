const passport = require('passport')
const Shelter = require('../../models/shelters')
const LocalStrategy = require('passport-local').Strategy
const chalk = require('chalk')



/**
 * serializeUser()
 */
passport.serializeUser((user, done) => {
    console.log('called from serializeUser at app/config/passport/index.js')
    
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
 * strategy configuration
 */
passport.use(new LocalStrategy({
    // Both fields define the name of the properties in the POST body that are sent to the server.
    usernameField: 'name',
  },
    function (username, password, done) {  
      Shelter.find({ name: username })
        .then(results => {
          if (!results) {            
            return done(null, false, { message: `User ${username} not available` })
          } else if (results[0].password !== password) {
            return done(null, false, { message: 'Wrong Password' })
          }
          return done(null, results[0], { message: 'Sucessful login' })
        })
        .catch(err => {
            console.log('error called')

            done(err)
        })
    }
  ))

module.exports = passport


/*
mysql> describe shelter_tb;
+----------+------------------+------+-----+---------+----------------+
| Field    | Type             | Null | Key | Default | Extra          |
+----------+------------------+------+-----+---------+----------------+
| id       | int(10) unsigned | NO   | PRI | NULL    | auto_increment |
| name     | varchar(255)     | NO   | UNI | NULL    |                |
| email    | varchar(255)     | NO   | UNI | NULL    |                |
| password | varchar(255)     | NO   |     | NULL    |                |
| address  | varchar(255)     | NO   |     | NULL    |                |
| phone    | varchar(255)     | NO   |     | NULL    |                |
| city     | varchar(255)     | NO   |     | NULL    |                |
| state    | varchar(255)     | NO   |     | NULL    |                |
| zipCode  | varchar(255)     | YES  |     | NULL    |                |
+----------+------------------+------+-----+---------+----------------+
*/