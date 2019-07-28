const passport = require('passport')
const Shelter = require('../../models/shelters')
const LocalStrategy = require('passport-local').Strategy

/**
 * strategy configuration
 */
const strategy = new LocalStrategy(
	function(username, password, done) {
        Shelter.find({ name: username })
        .then(results => {
            if(!results){
                return done(null, false, { message: `User ${username} not available` })
            }
            else if(results[0].password !== password){
                return done(null, false, { message: 'Wrong Password' })
            }
            else{
                return done(null, results[0])
            }
        })
        .catch(err => done(err))
	}
)
/**
 * serializeUser()
 */
passport.serializeUser((user, done) => {
	done(null, { id: user.id })
})
/**
 * deserializeUser()
 * user object attaches to the request as req.user
 */
passport.deserializeUser((id, done) => {
    Shelter.find({ id: id })
    .then( ([user]) => {
        if (!user) {
            done(new Error(`User not found ${id}`))
        }else{
            done(null, user)
        }
    })
})

//  Use Strategies 
passport.use(LocalStrategy)

module.export = passport
