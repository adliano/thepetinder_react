const express = require('express')
// Session used to save user's info on cookie
const session = require('express-session')
// Used for flash message
// const flash = require('connect-flash')
const morgan = require('morgan')
const app = express()

require('dotenv').config()
const path = require('path')
// Get passport config to this application
const passport = require('./app/config/passport')
const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

/// //////////  middlewares  ////////////
// NOTE: cookie: `{ secure: false }` used
// because my server does not have any SSL set yet
app.use(express.json())
app.use(morgan('dev'))
// used for passport
// This will allow the passport to use
// the message set on app/config/passport
// app.use(flash()) removed
// app.use(session({secret: process.env.SECRET, resave: false, saveUninitialized: false,cookie: { maxAge: 60 * 60 * 1000 }}))
app.use(session({secret: process.env.SECRET, resave: true, saveUninitialized: false}))
// This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).
// This middleware is available in Express v4.16.0 onwards
app.use(express.urlencoded({ extended: true }))
// Passport
app.use(passport.initialize())
app.use(passport.session())

// Used for Heroku
// Trust the reverse proxy when setting secure cookies (via the "X-Forwarded-Proto" header).
if (app.get('env') === 'production') {
  // trust first proxy Used for HTTPS
  app.set('trust proxy', 1)
}

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
