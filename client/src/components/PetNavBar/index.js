import React, { Component } from 'react'

import { Navbar, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'


/**
 * PetNavbar
 * Navbar used for all pages
 */
class PetNavBar extends Component {
  /**
   * onLogoutClick()
   */
  onLogoutClick = event => {
    fetch('/logout').then(response => console.log(response))
  }
  /**
   * Render
   */
  render () {
    return (
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            <Link className='text-light' to='/'>
              <img
                alt=''
                src={process.env.PUBLIC_URL + '/assets/images/feather_purr.svg'}
                width='30'
                height='30'
                className='d-inline-block align-top'
              />
              Petinder
            </Link>
            {/* {this.props.homeLink} */}
          </Navbar.Brand>
          {/* Buttons */}
          <div className='mr-2 ml-auto'>
            <Button className='mx-1' onClick={this.onLogoutClick}>
              logout
            </Button>
          </div>
        </Navbar>
    )
  }
}

export default PetNavBar
