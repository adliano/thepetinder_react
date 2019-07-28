import React, { Component } from 'react'
// Import Pages
import SplashPage from './pages/SplashPage'
import ShelterLogin from './pages/Shelter_Login'
import Shelter from './pages/Shelter'
import ShelterRegister from './pages/Shelter_Register'
// import ShelterHome from './pages/Shelter-Homepage'
// import AddPet from './pages/AddPet'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // withRouter
} from 'react-router-dom'
import AvaliablePetsPage from './pages/AvaliablePetsPage'

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
            <Route exact path='/Shelter' component={ShelterLogin} />
            <Route exact path='/ShelterRegister' component={ShelterRegister} />
            {/* <Route exact path='/AddPet' component={AddPet} /> */}
            <Route
              exact
              path='/AvaliablePetsPage'
              component={AvaliablePetsPage}
            />
            {/* <PrivateRoute exact path='/ShelterHome' component={ShelterHome} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
