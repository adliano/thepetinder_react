import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import {
  LoginButton,
  LogoutButton,
  AddPetButton,
  HomieButton
} from './components/Buttons'
import { Row } from 'react-bootstrap'
import PetNavBar from './components/PetNavBar'
import PetinderLogo from './components/PetinderLogo'
import PetFooter from './components/PetFooter'
import SplashPage from './pages/SplashPage'
import ShelterRegister from './pages/Shelter_Register'
import AvaliablePetsPage from './pages/AvaliablePetsPage'
import ShelterLogin from './pages/Shelter_Login'
import AddPet from './pages/AddPet'

class App extends Component {
  state = {
    user: {
      id: ''
    }
  }
  /**
   * componentDidMount()
   */
  componentDidMount () {
    fetch('/auth', { method: 'GET' })
      .then(response => response.json())
      .then(results =>
        this.setState({ user: results })
      )
      .catch(err => console.log(err))
  }
  /**
   * onLoginClickHandler
   */
  onLoginClickHandler = data => {
    this.setState({ user: data })
  }
  /**
   * onLogoutClick()
   */
  onLogoutClick = event => {
    fetch('/logout').then(result => {
      this.setState({ user: result })
    })
  }
  /**
   * 
   * Render
   * 
   */
  render () {
    return (
      <>
        <BrowserRouter>
          <PetNavBar
            actionButtons={
              <Row>
                {this.state.user.id ? (
                  <>
                    <LogoutButton onLogoutClick={this.onLogoutClick} />
                    <AddPetButton />
                  </>
                ) : (
                  <>
                    <LoginButton />
                  </>
                )}
                <HomieButton />
              </Row>
            }
          />
          <PetinderLogo />
          <div>
            <Switch>
              <Route exact path='/' component={SplashPage} />
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
              <Route
                exact
                path='/ShelterLogin'
                render={props =>
                  this.state.user.id ? (
                    <Redirect to='/' />
                  ) : (
                    <ShelterLogin saveData={this.onLoginClickHandler} />
                  )
                }
              />
              <Route
                exact
                path='/AddPet'
                render={props =>
                  !this.state.user.id ? (
                    <Redirect to='/ShelterLogin' />
                  ) : (
                    <AddPet />
                  )
                }
              />
            </Switch>
          </div>
        </BrowserRouter>
        <PetFooter />
      </>
    )
  }
}

export default App
