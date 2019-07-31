import React, { Component } from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import PetNavBar from './components/PetNavBar'
import PetinderLogo from './components/PetinderLogo'
import PetFooter from './components/PetFooter'
import SplashPage from './pages/SplashPage'
import ShelterRegister from './pages/Shelter_Register'
import ShelterHome from './pages/Shelter-Homepage'
import AvaliablePetsPage from './pages/AvaliablePetsPage'
import ShelterLogin from './pages/Shelter_Login'
import AddPet from './pages/AddPet'
import PrivateRoute from './components/PrivateRoute'
import md5 from 'md5'


class App extends Component {
  state = {
    user: null,
  }
  /**
     * loginEventHandler()
     * Event listener used for buttons
     */
    loginEventHandler = (event) => {

      const { email, password } = this.state

      fetch('/login',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email: email, password: md5(password)})
      })
      .then( response => {
        console.log(response)
        return response.json()
      })
      .then(results => {
        console.log(results)
        // TODO: remove the alert
        alert(`Welcome ${results.name} your id is ${results.id}`)
        this.setState({ user: results }, () => console.log(this.state) )
      })
      .catch(err => console.log(err))     
  }

  componentDidMount(){    
    fetch('/auth',{ method: 'GET'})
    .then(response => response.json())
    .then(results => {
      console.log('=============================')
      console.log(results)
      console.log('=============================')

    }).catch(err => console.log(err))
    // fetch('/login',{
    //   method: 'POST',
    //   headers: {'Content-Type':'application/json'},
    //   body: JSON.stringify({"email":"adriano@email.com","password": "81dc9bdb52d04dc20036dbd8313ed055"})
    // })
    // .then( response => {
    //   console.log(response)
    //   return response.json()
    // })
    // .then(results => {
    //   console.log(results)
    //   this.setState({ user: results })
    // })
    // .catch(err => console.log(err))
  }
  // Logout if close window
  componentWillUnmount(){
    // TODO: Logout user here
    // this.state({user: null})
  }
  /**
   * Render
   */
  render () {
    return (
    <>
    <PetNavBar />
    <PetinderLogo />
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={SplashPage} />
            <Route exact path='/ShelterLogin' component={ShelterLogin} />
            <Route exact path='/ShelterRegister' component={ShelterRegister} />
            <Route exact path='/AvaliablePetsPage' component={AvaliablePetsPage} />
            <PrivateRoute path='/AddPet' component={AddPet} gotUser={this.state.user} />
            <PrivateRoute  path='/ShelterHome' component={ShelterHome} gotUser={this.state.user} />
          </Switch>
        </div>
      </BrowserRouter>
      <PetFooter />
      </>
    )
  }
}

export default App
