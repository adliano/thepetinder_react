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
      <Form action='/logout' method='GET' className='mr-2 ml-auto'>
        <Button type='submit' >
          logout
        </Button>
      </Form>
    </Navbar>
  )
}

export default PetNavBar
