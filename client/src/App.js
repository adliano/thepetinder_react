import React, { Component } from 'react'
// Import Pages
import SplashPage from './pages/SplashPage'
import ShelterLogin from './pages/Shelter_Login'
import ShelterRegister from './pages/Shelter_Register'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import logo from "./logo.svg";
// import "./App.css";

class App extends Component {
  /**
   * Render
   */
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={SplashPage} />
            <Route exact path='/ShelterLogin' component={ShelterLogin} />
            <Route exact path='/ShelterRegister' component={ShelterRegister} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
