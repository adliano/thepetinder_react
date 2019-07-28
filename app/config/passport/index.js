const passport = require('passport')
const Shelter = require('../../models/shelters')
const LocalStrategy = require('passport-local').Strategy

/**
 * strategy configuration
 */
const _strategy = new LocalStrategy(
    {usernameField: 'name'},
	function(name, password, done) {
        
        console.log('called from LocalStrategy at app/config/passport/index.js');
        
        Shelter.find({ name: name })
        .then(results => {
            if(!results){
                return done(null, false, { message: `User ${name} not available` })
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
    console.log('called from serializeUser at app/config/passport/index.js');

	done(null, { id: user.id })
})
/**
 * deserializeUser()
 * user object attaches to the request as req.user
 */
passport.deserializeUser((id, done) => {

    console.log('called from deserializeUser at app/config/passport/index.js');

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
passport.use(_strategy)

module.export = passport
