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
class SplashPage extends Component {
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
          <Row>
            <h1 className='p-2'>
              Lorem cillum labore ex irure nostrud reprehenderit est sit
              incididunt aute anim ea voluptate.
            </h1>
          </Row>
          <Row className='p-3'>
            <p>
              Tempor esse aute voluptate consectetur voluptate. Ipsum magna
              reprehenderit ullamco qui laborum ex. Incididunt laborum non
              ullamco ex commodo pariatur. Nisi incididunt ea minim adipisicing
              sunt labore do sint adipisicing dolore dolor cupidatat nulla.
              Excepteur ea officia veniam qui et tempor ipsum Lorem ullamco
              labore duis. Cillum quis aliquip tempor in. Magna eiusmod esse
              minim mollit quis proident sit. Deserunt proident Lorem qui aute
              adipisicing consequat non elit. Mollit eiusmod commodo do magna
              aute Lorem fugiat ut irure Lorem consequat sunt magna ex. Dolore
              esse consectetur commodo voluptate ullamco non veniam minim cillum
              aliqua.
            </p>
          </Row>
          <Row className='m-3 p-2'>
              <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}href='/AvaliablePetsPage'>Avaliable Pets</Button>
              </Col>
              <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}href='/Shelter'>Shelter</Button>
              </Col>
          </Row>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default SplashPage
