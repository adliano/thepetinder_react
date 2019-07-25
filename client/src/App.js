import React, { Component } from 'react'
Import Pages
import SplashPage from './pages/SplashPage'
import ShelterLogin from './pages/Shelter_Login'
import ShelterRegister from './pages/Shelter_Register'
import AddPet from './pages/AddPet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AvaliablePetsPage from './pages/AvaliablePetsPage';

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  /**
   * Render
   */
  render () {
    return (
<<<<<<< HEAD
    // <>
    //   <AddPet />
    // </>
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/ShelterLogin' component={ShelterLogin} />
          <Route exact path='/ShelterRegister' component={ShelterRegister} />
          <Route exace path='/AddPet' component={AddPet} />
        </Switch>
      </div>
    </Router>
=======
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={SplashPage} />
            <Route exact path='/ShelterLogin' component={ShelterLogin} />
            <Route exact path='/ShelterRegister' component={ShelterRegister} />
            <Route exace path='/AddPet' component={AddPet} />
            <Route exace path='/AvaliablePetsPage' component={AvaliablePetsPage} />
          </Switch>
        </div>
      </Router>
>>>>>>> d21112662562c537afe80ff0e74fb4a681cb35e4
    )
  }
}

export default App
