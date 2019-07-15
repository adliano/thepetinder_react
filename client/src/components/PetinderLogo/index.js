import React from 'react'

import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

/**
 * PetNavbar
 * Navbar used for all pages
 */
function PetinderLogo () {
  return (
    <>
      <Container className='container text-center mt-4'>
        <Image
          className='w-50'
          alt='Logo'
          src={process.env.PUBLIC_URL + '/assets/images/ki85j78eT.png'}
          fluid
        />
      </Container>
    </>
  )
}

export default PetinderLogo
