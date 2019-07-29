import React, { Component } from 'react'
// Import Pages
import SplashPage from './pages/SplashPage'
import ShelterLogin from './pages/Shelter_Login'
// import Shelter from './pages/Shelter'
import ShelterRegister from './pages/Shelter_Register'
import ShelterHome from './pages/Shelter-Homepage'
// import AddPet from './pages/AddPet'
import AvaliablePetsPage from './pages/AvaliablePetsPage'
import md5 from 'md5'

/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  // withRouter
} from 'react-router-dom'

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
        // fakeAuth.isAuthenticated ? (
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
/**
 *
 *
 */
// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{' '}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push('/'))
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// )

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate (cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100) // fake async
//   },
//   signout (cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }
/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
/// //////////////////////////////////////////////////////////////////////////
// TODO: hit the api routes with user and password
// try abcd password 123
class App extends Component {

  state = {
    user: null,
  }

  componentDidMount(){
    fetch('/login',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({"name":"adriano","password": "827ccb0eea8a706c4c34a16891f84e7b"})
    })
    .then( response => {
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
      console.log(response)
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')


      return response
      
    })
    .then(results => {
      console.log('==========================================')
      console.log(results)
      console.log('==========================================')

    })
  }
  // Logout if close window
  componentWillUnmount(){
    this.state({user: null})
  }
  /**
   * 
   * 
   */



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
