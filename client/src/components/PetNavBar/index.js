import React, { Component} from 'react'

import { Navbar, Button } from 'react-bootstrap'

/**
 * PetNavbar
 * Navbar used for all pages
 */
class PetNavBar extends Component {
  /**
   * onLogoutClick()
   */
  onLogoutClick = (event) => {
    fetch('/logout')
    .then(response => console.log(response))
  }
  /**
   * Render
   */
  render(){
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>
        <a href='/'>
          <img
            alt=''
            src={process.env.PUBLIC_URL + '/assets/images/feather_purr.svg'}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
        </a>
        Petinder
      </Navbar.Brand>
      {/* Logout button */}
      <div className='mr-2 ml-auto'>
        <Button className='mx-1' href='/ShelterLogin'>
          Login
          </Button>
        <Button className='mx-1' onClick={this.onLogoutClick} >
          logout
        </Button>
      </div>
    </Navbar>
  )
}
}

export default PetNavBar
