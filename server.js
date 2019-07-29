const express = require('express')
// Session used to save user's info on cookie
const session = require('express-session')
const path = require('path')
// Get passport config to this application
const passport = require('./app/config/passport')
// Used thr flash message
const flash = require('connect-flash');
const morgan = require('morgan')

require('dotenv').config()
const PORT = process.env.PORT || 3001
const app = express()

/// /////////////////////////////////////////////
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

/// ////////// Define middleware here ////////////
// NOTE: cookie: `{ secure: false }` used because my server does not
// have any SSL set yet
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Used for Heroku
if (app.get('env') === 'production') {
//   // trust first proxy
//   // Used for HTTPS
  app.set('trust proxy', 1) 
}
// Time are minutes x seconds x 1000 (milliseconds)
const oneHour = (60 * 60 * 1000)
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      maxAge: oneHour,
    }
  })
  )

  // used for passport
  // This will allow the passport to use 
  // the message set on app/config/passport
  app.use(flash());



  
  // Passport
  app.use(passport.initialize())
  app.use(passport.session())
  // Load passport config
  // require('./app/config/passport');
  
// Define API routes here
require('./app/routes/apiRoutes')(app)

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})



/*
use to logout
req.session.destroy(function(err) {
  // cannot access session here
})
*/