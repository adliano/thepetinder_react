// config/passport.js
const Shelter = require('../models/shelters')
// load all the things we need
var LocalStrategy = require('passport-local').Strategy

// expose this function to our app using module.exports
module.exports = function (passport) {
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  passport.serializeUser(function (user, done) {
    done(null, user.email)
  })
  // Required for login sessions
  // Passport needs ability to serialize and deserialize users info out of session
  passport.deserializeUser(function (objectSearch, done) {
    Shelter.find(objectSearch)
      .then(result => done(null, result))
      .catch(err => done(err, null))
  })

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    'local-signup',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        Shelter.find(req.body.email)
          .then(result => {
            console.log(result)

            if (result) {
              return done(
                null,
                false
                // req.json({signupMessage: 'That email is already taken.'})
              )
            } else {
              // Save Sheter info on database
              // and send POST response
              Shelter.create(req.body)
                .then(dbExample => {
                  res.json(dbExample)
                  return done(null, dbExample)
                })
                .catch(err => res.json(err))
            }
          })
          .catch(err => done(err))
        /// ////////////////// old code /////////////////////
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        // connection.query(
        //   "select * from users where email = '" + email + "'",
        //   function (err, rows) {
        //     console.log(rows)
        //     console.log('above row object')
        //     if (err) return done(err)
        //     if (rows.length) {
        //       return done(
        //         null,
        //         false,
        //         req.flash('signupMessage', 'That email is already taken.')
        //       )
        //     } else {
        //       // if there is no user with that email
        //       // create the user
        //       var newUserMysql = new Object()

        //       newUserMysql.email = email
        //       newUserMysql.password = password // use the generateHash function in our user model

        //       var insertQuery =
        //         "INSERT INTO users ( email, password ) values ('" +
        //         email +
        //         "','" +
        //         password +
        //         "')"
        //       console.log(insertQuery)
        //       connection.query(insertQuery, function (err, rows) {
        //         newUserMysql.id = rows.insertId

        //         return done(null, newUserMysql)
        //       })
        //     }
        //   }
        // )
      }
    )
  )
  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use(
    'local-login',
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        // callback with email and password from our form
        Shelter.find(req.body)
          .then(results => {
            // TODO: CHECK FOR WRONG PASSWD and no user
            // if (!results) {
            //   return done(
            //     null,
            //     false,
            //     req.flash('loginMessage', 'No user found.')
            //   )
              return done(null, results)
            
          })
          .catch(err => done(err))
        // connection.query(
        //   "SELECT * FROM `users` WHERE `email` = '" + email + "'",
        //   function (err, rows) {
        //     if (err) return done(err)
        //     if (!rows.length) {
        //       return done(
        //         null,
        //         false,
        //         req.flash('loginMessage', 'No user found.')
        //       ) // req.flash is the way to set flashdata using connect-flash
        //     }

        //     // if the user is found but the password is wrong
        //     if (!(rows[0].password == password)) {
        //       return done(
        //         null,
        //         false,
        //         req.flash('loginMessage', 'Oops! Wrong password.')
        //       )
        //     } // create the loginMessage and save it to session as flashdata

        //     // all is well, return successful user
        //     return done(null, rows[0])
        //   }
        // )
      }
    )
  )
}
