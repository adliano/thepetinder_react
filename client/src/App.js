import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LoginButton, LogoutButton, AddPetButton, HomieButton } from './components/Buttons'
import { Row } from 'react-bootstrap'
import PetNavBar from './components/PetNavBar'
import PetinderLogo from './components/PetinderLogo'
import PetFooter from './components/PetFooter'
import SplashPage from './pages/SplashPage'
import ShelterRegister from './pages/Shelter_Register'
import AvaliablePetsPage from './pages/AvaliablePetsPage'
import ShelterLogin from './pages/Shelter_Login'
import AddPet from './pages/AddPet'
import PrivateRoute from './components/PrivateRoute'

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
        this.setState({ user: results }, () => console.log(this.state))
      )
      .catch(err => console.log(err))
  }
  /**
   * Render
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
                    <LogoutButton />
                    <AddPetButton />
                    {/* <Link to='/AddPet'>
                      <Button>Add Pet</Button>
                    </Link> */}
                  </>
                ) : (
                  <>
                    <LoginButton/>
                  </>
                )}
                <HomieButton/>
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
              <PrivateRoute
                exact
                redirect='/'
                path='/ShelterLogin'
                component={ShelterLogin}
                gotUser={!this.state.user.id}
              />
              <PrivateRoute
                exact
                redirect='/ShelterLogin'
                path='/AddPet'
                component={AddPet}
                gotUser={this.state.user.id}
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
