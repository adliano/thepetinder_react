import React, { Component } from 'react'
// Use Application Components
import PetNavbar from '../components/PetNavBar'
import PetFooter from '../components/PetFooter'
import PetinderLogo from '../components/PetinderLogo'

class SplashPage extends Component {
  /**
   * Render
   */
  render () {
    return (
      <>
        <PetNavbar />

        <PetinderLogo />
        
        <h1>Splash Page</h1>

        <PetFooter />
      </>
    )
  }
}

export default SplashPage
