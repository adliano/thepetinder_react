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
  console.log(chalk.bgYellow(`inside deserializeUser`))
  Shelter.find({ id: id }).then((users, err) => {
    done(err, users[0])
  })
})
/**
 * Local strategy configuration
 * The usernameField (Parameter) define the name of the properties in the
 * POST body that are sent to the server.
 */
passport.use(
  new LocalStrategy({ usernameField: 'email' }, function (username,password,done) {
    //console.log(chalk.bgYellow(`inside LocalStrategy`))
    Shelter.find({ email: username }).then((user, err) => {
      if (err) {
        //console.log(chalk.bgRed(`Error: if (err) ${JSON.stringify(err)}`))
        return done(err)
      }
      if (!user) {
        //console.log(chalk.bgRed(`Error: !user`))
        return done(null, false)
      }
      if (user[0].password !== password) {
        //console.log(chalk.bgRed(`Error: ${user.password} !== ${password}`))
        return done(null, false)
      }
      return done(null, user[0])
    })
  })
)

module.exports = passport
