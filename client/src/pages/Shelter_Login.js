import React, { Component } from 'react';
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

// Use Application Components
import PetNavBar from '../components/PetNavBar'
import PetinderLogo from '../components/PetinderLogo'
import PetFooter from '../components/PetFooter'


class ShelterRegister extends Component {
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
        <PetNavBar />
        <PetinderLogo />
        <Container className='my-2 p-2 text-center'>
          <Row className="justify-content-lg-center" >
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          </Row>

          <Row className='m-3 p-2'>
            <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}>Login</Button>
            </Col>
            <Col md>
              <Button className='w-25 m-2' variant='primary' onClick={this.onButtonClick}>Register</Button>
            </Col>
          </Row>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default ShelterRegister

