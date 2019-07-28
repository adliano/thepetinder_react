const express = require('express')
require('dotenv').config()
const path = require('path')
// Session used to save user's info on cookie
const session = require('express-session')
const passport = require('./app/config/passport');
const PORT = process.env.PORT || 3001
const app = express()
// const routes = require("./routes");

/// ////////// Define middleware here ////////////
// NOTE: cookie: `{ secure: false }` used because my server does not
// have any SSL set yet
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Used for Heroku
if (app.get('env') === 'production') {
  // trust first proxy
  // Used for HTTPS
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
/// /////////////////////////////////////////////
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Add routes, both API and view
// app.use(routes);

// Define API routes here
require('./app/routes/apiRoutes')(app)
// require('./app/routes/htmlRoutes')(app)

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