import React, { Component } from 'react';
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'

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
        <Container className='my-5 p-5 text-center'>
        <Card className="text-center">
        <Card.Header></Card.Header>
        <Card.Body> 
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control className='my-2' size="lg" type="email" placeholder="Enter email" />
              <Form.Control className='my-2' size="lg" type="password" placeholder="Password" />
              <Form.Control className='my-2' size="lg" type="password" placeholder="Confirm Password" />
              <Form.Row>
              <Col sm>
                <Form.Control className='my-2' size="lg" type="text" placeholder="City" />
              </Col>
              <Col sm>
              <Form.Control className='my-2' size="lg" type="text" placeholder="State" />
              </Col>
              <Col sm>
                <Form.Control className='my-2' size="lg" type="number" placeholder="Zip Code" />
              </Col>
              </Form.Row>
              <Form.Control className='my-2' size="lg" type="number" placeholder="Phone Number" />                
              </Form.Group>
            </Form>    
              {/* CENTER BUTTON */}
              <Button className='w-50 m-2' variant='primary' onClick={this.onButtonClick}>Register</Button>
        </Card.Body>
        </Card>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default ShelterRegister

