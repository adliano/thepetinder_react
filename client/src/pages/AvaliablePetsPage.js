import React, { Component } from 'react'
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// Use Application Components
import PetNavbar from '../components/PetNavBar'
import PetFooter from '../components/PetFooter'
import PetinderLogo from '../components/PetinderLogo'

/**
 * Page used for splash, it will have two buttons to 
 * route user || shelter to espesific page
 */
class AvaliablePetsPage extends Component {
    /**
     * onButtonClick()
     * Event listener used for buttons
     */
    onButtonClick = (event) => {
        
        let _element = event.target
        
        if(_element.textContent === 'User'){
            console.log('send user to user home page')
            //Place logic here later
        }
        else{
            console.log('send Shelter to shelter home page')
            //Place logic here later
        }
    }
  /**
   * 
   * Render
   * 
   */
  render () {
    return (
      <>
        <PetNavbar />
        <PetinderLogo />
        <Container className='my-2 p-2 text-center'>          
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default AvaliablePetsPage
