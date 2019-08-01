import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
/**
 * PetNavbar
 * Navbar used for all pages
 */
class PetNavBar extends Component {
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
          </Navbar.Brand>
          {/* Buttons */}
          <div className='mr-2 ml-auto'>
            {this.props.actionButtons}
          </div>
        </Navbar>
    )
  }
}

export default PetNavBar
