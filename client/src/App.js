import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// Import Pages
import SplashPage from './pages/SplashPage'
import ShelterRegister from './pages/Shelter_Register'
import ShelterHome from './pages/Shelter-Homepage'
import AvaliablePetsPage from './pages/AvaliablePetsPage'
// import ShelterLogin from './pages/Shelter_Login'
// import AddPet from './pages/AddPet'
// import Shelter from './pages/Shelter'


/////////////////////////////////////////////////////////////////
// TODO: move this to another file
/**
 * PrivateRoute() used to make routes private
 * @param {json} json object with components
 * @param {objec} user from backend
 */
function PrivateRoute ({ component: Component,  gotUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
          gotUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
/////////////////////////////////////////////////////////////////

class App extends Component {

  state = {
    user: null,
  }

  componentDidMount(){
    console.log(document.cookie)
    
    fetch('/login',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"name":"adriano","password": "827ccb0eea8a706c4c34a16891f84e7b"})
    })
    .then( response => {
      console.log(response)
      return response.json()
    })
    .then(results => {
      console.log(results)
    })
    .catch(err => console.log(err))
  }
  // Logout if close window
  componentWillUnmount(){
    this.state({user: null})
  }
  /**
   * Render
   */
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={SplashPage} />
            {/* <Route exact path='/ShelterLogin' component={ShelterLogin} /> */}
            <Route exact path='/ShelterRegister' component={ShelterRegister} />
            <Route exact path='/AvaliablePetsPage' component={AvaliablePetsPage} />
            <Route exact path='/ShelterHome' component={ShelterHome} />
            {/* <PrivateRoute path='/AddPet' component={AddPet} gotUser={this.state.user} />
            <PrivateRoute  path='/ShelterHome' component={ShelterHome} gotUser={this.state.user} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
