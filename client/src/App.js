import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import PetNavBar from './components/PetNavBar'
import LogoutButton from './components/LogoutButton'
import PetinderLogo from './components/PetinderLogo'
import PetFooter from './components/PetFooter'
import SplashPage from './pages/SplashPage'
import ShelterRegister from './pages/Shelter_Register'
// import ShelterHome from './pages/Shelter-Homepage'
import AvaliablePetsPage from './pages/AvaliablePetsPage'
import ShelterLogin from './pages/Shelter_Login'
import AddPet from './pages/AddPet'
import PrivateRoute from './components/PrivateRoute'


// import md5 from 'md5'

class App extends Component {
  state = {
    user: null
  }
  /**
   * componentDidMount()
   */
  componentDidMount () {
    fetch('/auth', { method: 'GET' })
      .then(response => response.json())
      .then(results =>
        this.setState({ user: results }, () => console.log(this.state))
      )
      .catch(err => console.log(err))
  }
  /**
   * componentWillUnmount()
   */
  componentWillUnmount () {
    // Logout if close window
    // TODO: logout here
  }
  /**
   * Render
   */
  render () {
    return (
      <>
        <BrowserRouter>
          <PetNavBar actionButtons={<LogoutButton/>}/>
          <PetinderLogo />
          <div>
            <Switch>
              <Route exact path='/' component={SplashPage} />
              <Route exact path='/ShelterLogin' component={ShelterLogin} />
              <Route
                exact
                path='/ShelterRegister'
                component={ShelterRegister}
              />
              <Route
                exact
                path='/AvaliablePetsPage'
                component={AvaliablePetsPage}
              />
              <PrivateRoute
                path='/AddPet'
                component={AddPet}
                gotUser={this.state.user}
              />
              {/* <PrivateRoute  path='/ShelterHome' component={ShelterHome} gotUser={this.state.user} /> */}
            </Switch>
          </div>
        </BrowserRouter>
        <PetFooter />
      </>
    )
  }
}

export default App
