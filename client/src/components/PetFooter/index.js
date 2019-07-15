import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

/**
 * PetFooter
 * used in all pages to render the page footer:w
 */
function PetFooter () {
  return (
    <Navbar bg='light' variant='dark' fixed='bottom'>
        <Button
          variant='outline-secondary'
          className='mx-auto'
          href='https://github.com/adliano/thepetinder_react'
          target='_blank'
        >
          <img
            className='d-inline-block'
            alt=''
            src={process.env.PUBLIC_URL + '/assets/images/github.svg'}
            width='30'
            height='30'
          />
        </Button>
    </Navbar>
  )
}

export default PetFooter
