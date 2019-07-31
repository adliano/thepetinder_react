import React from 'react'

import { Navbar, Button, Form } from 'react-bootstrap'

/**
 * PetNavbar
 * Navbar used for all pages
 */
function PetNavBar () {
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
      <Form className='mr-2 ml-auto' action='/logout' method='GET' >
        <Button className='mx-1' href='/ShelterLogin'>Login</Button>
        <Button className='mx-1' type='submit' >
          logout
        </Button>
      </Form>
    </Navbar>
  )
}

export default PetNavBar
