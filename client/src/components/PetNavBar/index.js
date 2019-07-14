import React from 'react'

import Navbar from 'react-bootstrap/Navbar'

function PetNavBar () {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>
        <img
          alt=''
          src={process.env.PUBLIC_URL + '/assets/images/feather_purr.svg'}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />
        Petinder
      </Navbar.Brand>
    </Navbar>
  )
}

export default PetNavBar
