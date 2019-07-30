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

class ShelterLogin extends Component {
  /**
     * onButtonClick()
     * Event listener used for buttons
     */
    onButtonClick = (event) => {
      // TODO:
      alert('Need to implement login\n Remove this Alert after you done')     
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
          <Row>
            <Col md>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Control size="lg" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Control size="lg" type="password" placeholder="Password" />
            </Form.Group>
          </Form>
            </Col>
          </Row>
        
          <Row className='m-3 p-2'>
            <Col lg>
              <Button className='w-50 m-2' variant='primary' onClick={this.onButtonClick}>Login</Button>
            </Col>
            <Col lg>
              <Button className='w-50 m-2' variant='primary' href='/ShelterRegister'>Register</Button>
            </Col>
          </Row>
        </Container>
        <PetFooter />
      </>
    )
  }
}

export default ShelterLogin
