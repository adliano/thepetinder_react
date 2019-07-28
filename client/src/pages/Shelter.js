import React, { Component } from 'react'
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import ShelterLogin from './Shelter_Login'
import ShelterHome from './Shelter-Homepage'


/**
 * Page used for splash, it will have two buttons to
 * route user || shelter to espesific page
 */
class SplashPage extends Component {
  /**
   * onButtonClick()
   * Event listener used for buttons
   */
  onButtonClick = event => {}
  /**
   *
   * Render
   *
   */
  render () {
    return (
      <h1>shelter</h1>
      // <BrowserRouter>
      //   <>
      //     <Switch>
      //       <PrivateRoute exact path='/login' component={ShelterLogin} />
      //     </Switch>
      //   </>
      // </BrowserRouter>
    )
  }
}

export default SplashPage
