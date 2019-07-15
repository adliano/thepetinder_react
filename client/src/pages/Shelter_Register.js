import React, { Component } from 'react';
// Use Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
        <Card className="text-left">
        <Card.Header>Label</Card.Header>
        <Card.Body>
          <Card.Text>
          <Form>
            <br />
            <Form.Group controlId="formGroupEmail">
              <Form.Control size="lg" type="email" placeholder="Enter email" />
              <Form.Control size="lg" type="password" placeholder="Password" />
              <Form.Control size="lg" type="confirmPassword" placeholder="Confirm Password" />
              </Form.Group>
            </Form>    
              <Row>
              <Col>
              <Form>
                <Form.Control size="lg" type="city" placeholder="City" />
              </Form>
              </Col>
              <Col>
              <Form>
                <Form.Control size="lg" type="state" placeholder="State" />
              </Form>
              </Col>
              <Col>
              <Form>
                <Form.Control size="lg" type="zipCode" placeholder="Zip Code" />
              </Form>
              </Col>
              </Row>
              <br />
              <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control size="lg" type="phoneNumber" placeholder="Phone Number" />              
              </Form.Group>
            </Form>    
            </Card.Text>
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

